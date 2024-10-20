const port = 4100;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");
const fs = require("fs");
const bcrypt = require("bcrypt");
require("dotenv").config();

// Importing Product Model

const Product = require("./models/Product");
const jwt  = require("jsonwebtoken");

// Middleware for parsing JSON and handling CORS

app.use(cors()); 
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// schema models 

const UserSchema = require("./models/UserSchema");

// Key

const secretKey = process.env.JWT_SECRET;
const  DB_UserName = process.env.DB_UserName;
const DB_Password = process.env.DB_Password;

//======================================================================== Connect to MongoDB

mongoose.connect(`mongodb+srv://${DB_UserName}:${DB_Password}@cluster0.9rpuwmq.mongodb.net/smart-watch`)
.then(() => console.log("Connected to MongoDB"))
.catch((err) => console.log('Database connection failed...'));

//========================================================================= Base API 

app.get("/",(req,res) => {
    res.send(" Hello, Express App is Running");
});


// Ensure the upload directory exists

const uploadDir = path.join(__dirname, "upload", "images");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Image Storage Engine Configuration with Multer

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir); // Save images in the 'upload/images' directory
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.originalname.split(".")[0] +
        "_" +
        uniqueSuffix +
        path.extname(file.originalname)
    );
  },
});

// Initialize Multer with the storage configuration

const upload = multer({ storage });

// Serve uploaded images as static files

app.use("/images", express.static(uploadDir));

// ===================================================================== Combined Endpoint for uploading images and adding a new product in the ADMIN Pannel

app.post("/addproduct", upload.array("images", 10), async (req, res) => {
  try {

    // Map uploaded file paths to full image URLs
    const imageUrls = req.files.map((file) => {
      return `http://localhost:${port}/images/${file.filename}`;
    });

    // Parse JSON strings for colors and tags
    const colors = JSON.parse(req.body.colors);
    const tags = JSON.parse(req.body.tags);

    // Determine the next product ID
    let products = await Product.find({});
    let id = products.length > 0 ? products.slice(-1)[0].id + 1 : 1;

    // Create and save the new product
    const product = new Product({
      id: id,
      name: req.body.name,
      image: imageUrls,  // Use the full image URLs obtained from the uploaded files
      description: req.body.description,
      price: req.body.price,
      old_price: req.body.old_price,
      bestSeller: req.body.bestSeller,
      colors: colors,  // Array of colors
      inStock: req.body.inStock,
      category: req.body.category,
      tags: tags,  // Array of tags
    });

    console.log('Product : ', product);
    await product.save();
    console.log('Product Added Successfully.');

    // Respond with success
    res.json({
      success: true,
      message: "Product added successfully",
      product: {
        name: req.body.name,
        image: imageUrls,
      },
    });
  } catch (error) {
    console.error("Error adding product:", error);
    res.status(500).json({
      success: false,
      message: "Failed to add product",
      error: error.message,
    });
  }
});

// =====================================================================  Endpoint for deleting a product by ID in the ADMIN Pannel

app.post("/removeproduct", async (req, res) => {
  try {

    await Product.findOneAndDelete({ id: req.body.id });
    console.log("Product Removed");
    res.json({ success: true });

  } catch (error) {

    console.error("Error removing product:", error);
    res.status(500).json({
      success: false,
      message: "Failed to remove product",
      error: error.message,
    });
  }
});

// =====================================================================  Endpoint for fetching all products from the database

app.get("/allproducts", async (req, res) => {
  try {

    let products = await Product.find({});
    
    console.log(`All Products Fetched: ${products.length}`);

    res.status(200).json(products);

} catch (error) {

    console.error("Error fetching products:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch products",
      error: error.message,
    });
  }
});

// =====================================================================  Endpoint for registering the user 

app.post("/signup", async (req, res) => {
  try {
    let check = await UserSchema.findOne({ email: req.body.email });
    if (check) {
      return res.status(400).json({
        success: false,
        errors: "Existing user found with the same email ID",
      });
    }
    // Hash the password before storing it
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);
    
    // Create a new user with the hashed password
    const User = new UserSchema({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword, // Store the hashed password
      cartData: [],
    });
    await User.save();
    console.log("User saved successfully");
    const data = {
      user: {
        Id: User._id,
      },
    };
    const token = jwt.sign(data, secretKey);
    res.json({
      success: true,
      token,
    });
  } catch (error) {
    res.status(500).json({ success: false, errors: "Error saving user" });
  }
});

app.post("/login", async (req, res) => {
  try {
    const user = await UserSchema.findOne({ email: req.body.email });
    if (user) {
      const passCompare = await bcrypt.compare(
        req.body.password,
        user.password
      );
      if (passCompare) {
        const data = {
          user: {
            Id: user._id,
          },
        };
        const token = jwt.sign(data, secretKey);
        res.json({ success: true, token });
        console.log("User logged in successfully: ", data);
      } else {
        res.status(400).json({ success: false, errors: "Wrong password" });
      }
    } else {
      res.status(400).json({ success: false, errors: "Wrong Email ID" });
    }
  } catch (error) {
    res.status(500).json({ success: false, errors: "Error logging in" });
  }
});

// =====================================================================  Endpoint for adding products to the cart 

const fetchUser = async (req, res, next) => {
  const token = req.headers["authorization"]?.split(" ")[1]; // Extract token from Authorization header
  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }
  // console.log("Token:", token);
  try {
    const decoded = jwt.verify(token, secretKey);
    // console.log("Decoded token:", decoded); 
    const user = await UserSchema.findById(decoded.user.Id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    req.user = user;
    next();
  } catch (error) {
    console.error("Error verifying token:", {
      message: error.message,
      stack: error.stack,
      token,
    });
    res.status(401).json({ message: "Invalid token" });
  }
};

app.post("/addToCart", fetchUser, async (req, res) => {
    console.log("Received request at /addToCart");
    // console.log("Request body:", req.body);
  
    const { product } = req.body;
  // Check if product data exists
  if ( !product || !product.id || !product.name || !product.selectedColor || !product.quantity ) {
    return res.status(400).json({ message: "Invalid product data" });
  }
  try {
    let user = req.user; // User is already attached by the fetchUser middleware
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    // console.log("User:", user);
    console.log("Checking if the product already exists in the cart...");
    // Check if product is already in the cart
    const existingProductIndex = user.cartData.findIndex(
      (item) =>
        item.id.toString() === product.id.toString() && item.selectedColor === product.selectedColor
    );
    if (existingProductIndex > -1) {
      // Update quantity of existing product in the cart
      // console.log("Product found in the cart. Updating quantity...");
      user.cartData[existingProductIndex].quantity += product.quantity;
      // Mark the cartData array as modified
      user.markModified("cartData");
    } else {
      // Add new product to the cart
      // console.log("Product not found in the  cart. Adding new product...");
      user.cartData.push(product);
    }
    // Save the updated user document
    // console.log("Updated cartData before saving:", user.cartData);
    await user.save();
    // console.log("User document saved successfully");
    res.status(200).json({ message: "Product added to cart", cartData: user.cartData });
  } catch (error) {
    console.error("Error adding product to cart:", error);
    res.status(500).json({ message: "Error adding product to cart", error });
  }
});

app.post("/removeFromCart", fetchUser, async (req, res) => {
  console.log("Received request at /removeFromCart");
  // console.log("Request body:", req.body);
  const { productId, selectedColor } = req.body;
  // Check if productId and selectedColor are provided
  if (!productId || !selectedColor) {
    return res.status(400).json({ message: "Invalid product data" });
  }
  try {
    let user = req.user;
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    // console.log("User found:", user);
    // Find the index of the product in the cartData array
    const productIndex = user.cartData.findIndex(
      (item) =>
        item.id.toString() === productId.toString() &&
        item.selectedColor === selectedColor
    );
    if (productIndex > -1) {
      // Remove the product from the cartData array
      user.cartData.splice(productIndex, 1);
      // Mark the cartData array as modified
      user.markModified("cartData");
      // Save the updated user document
      await user.save();
      console.log("Product removed from cart successfully");
      res
        .status(200)
        .json({
          message: "Product removed from cart",
          cartData: user.cartData,
        });
    } else {
      console.log("Product not found in cart");
      res.status(404).json({ message: "Product not found in cart" });
    }
  } catch (error) {
    console.error("Error removing product from cart:", error);
    res
      .status(500)
      .json({ message: "Error removing product from cart", error });
  }
});

app.get("/getCartData", fetchUser, async (req, res) => {
  try {
    let user = req.user; 
    if (user) {
      return res.status(200).json({ success: true, cartData: user.cartData });
    }
    return res.status(404).json({ message: "User not found" });
  } catch (error) {
    console.error("Error fetching cart data:", error);
    res.status(500).json({ success: false, message: "Error fetching cart data", error });
  }
});




// =====================================================================  Start the server

app.listen(port, (err) => {
    if (!err) {
    console.log(`Server running on port ${port}`);
  } else {
    console.error("Error starting server:", err);
  }
});
