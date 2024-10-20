import React, { createContext, useState, useContext, useEffect } from "react";
import Product_List from "../../Assets/Product_List";
import { Bounce, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TbShoppingCartPlus } from "react-icons/tb";
import { TbShoppingCartX } from "react-icons/tb";
import axios from "axios";

// Create context
const ShopContext = createContext();

// Create provider
export const ShopProvider = ({ children }) => {

  const Port = `https://smart-watch-ecommerce-mern.onrender.com`;


  // const [products , setProducts] = useState([]);
  
  // local storage product json copy
  const products = Product_List;

  const [cart, setCart] = useState([]);
  const [selectedColors, setSelectedColors] = useState({});
  const [quantity, setQuantity] = useState(1);

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userEmail, setUserEmail] = useState('');

  const token = localStorage.getItem("token");
  const storedEmail = localStorage.getItem("email");

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     try {
  //       const response = await axios.get("http://localhost:4100/allproducts");
  //       setProducts(response.data);
  //     } catch (error) {
  //       console.error("Failed to fetch products:", error);
  //     }
  //   };
  //   const UserData = async () => {
  //     if (token && storedEmail) {
  //       setIsAuthenticated(true);
  //       setUserEmail(storedEmail);
  //       try {
  //         // Fetch cart data
  //         const cartResponse = await axios.get("http://localhost:4100/getCartData",
  //           {
  //             headers: {
  //               Authorization: `Bearer ${token}`,
  //             },
  //           }
  //         );
  //         if (cartResponse.data.success) {
  //           console.log(" User cart data fetched successfully");
  //           setCart(cartResponse.data.cartData);
  //         } else {
  //           console.error(
  //             "Failed to fetch cart data:",
  //             cartResponse.data.message
  //           );
  //         }
  //       } catch (error) {
  //         console.error("Failed to fetch data:", error);
  //       }
  //     } else {
  //       setIsAuthenticated(false);
  //       setUserEmail("");
  //     }
  //   };
  //   UserData();
  //   fetchProducts();
  // }, []);

  // ================= products data from db 

  // useEffect(() => {
  //   // // useEffect for fetching all Products from the DataBase
  //   const fetchProducts = async () => {
  //     try {
  //       const response = await axios.get("http://localhost:4100/allproducts");
  //       setProducts(response.data);
  //     } catch (error) {
  //       console.error("Failed to fetch products:", error);
  //     }
  //   };

  //   fetchProducts();
  // }, []);

  useEffect(() => {
    // // useEffect for the User Authentication
    // console.log("Stored Email: ", storedEmail);
    // console.log("Stored Token: ", token);
    if (token && storedEmail) {
      setIsAuthenticated(true);
      setUserEmail(storedEmail);
    } else {
      setIsAuthenticated(false);
      setUserEmail("");
    }
  }, []);

  useEffect(() => {
    const fetchCartData = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(`${Port}/getCartData`, {
          headers: {
            Authorization: `Bearer ${token}`, // Pass the token in the headers
          },
        });
        if (response.data.success) {
          setCart(response.data.cartData);
        } else {
          console.error("Failed to fetch cart data:", response.data.message);
        }
      } catch (error) {
        console.error("Error fetching cart data:", error);
      }
    };
    fetchCartData();
  }, []);

  useEffect(() => {
    //// UseEffect used to set the default selected color for the each product as the first color
    if (products.length > 0) {
      // Initialize selectedColors with the first color for each product
      const initialSelectedColors = {};
      products.forEach((product) => {
        initialSelectedColors[product.id] = product.colors[0];
      });
      setSelectedColors(initialSelectedColors);
    }
  }, [products]);

  const handleColorChange = (productId, color) => {
    setSelectedColors((prevSelectedColors) => ({
      ...prevSelectedColors,
      [productId]: color,
    }));
  };

  // Calculate discount
  const calculateDiscount = (price, oldPrice) => {
    if (!price || !oldPrice || oldPrice <= price) {
      return 0;
    }
    const discount = ((oldPrice - price) / oldPrice) * 100;
    return Math.ceil(discount);
  };

  // Format price to Indian currency
  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 0,
    }).format(price);
  };

const handleAddToCart = async (product, selectedColor, quantity) => {
  if (isAuthenticated) {
    const colorToSet = product.colors.includes(selectedColor)
      ? selectedColor
      : product.colors[0]; // Check if selected color is valid
    const existingItem = cart.find(
      (item) => item.id === product.id && item.selectedColor === colorToSet
    );
    let updatedCart;
    if (existingItem) {
      updatedCart = cart.map((item) =>
        item.id === product.id && item.selectedColor === colorToSet
          ? { ...item, quantity: item.quantity + quantity }
          : item
      );
    } else {
      updatedCart = [
        ...cart,
        {
          ...product,
          selectedColor: colorToSet,
          quantity,
          total: product.price * quantity,
        },
      ];
    }
    setCart(updatedCart);
    // Send the updated cart data to the backend
    try {
      const response = await axios.post(
        `${Port}/addToCart`,
        {
          email: userEmail, // Use the already stored userEmail
          product: {
            name: product.name,
            id: product.id,
            ID: product._Id,
            price: product.price,
            selectedColor: colorToSet,
            image: product.image[0],
            category: product.category,
            quantity,
          },
        },
        {
          headers: {
            Authorization: `Bearer ${token}`, // Use the already stored token
          },
        }
      );
        console.log("Response data : ", response.data);
      // if (response.data.success) {
        setCart(response.data.cartData); // Update cart with backend response
        toast.success(`Added to cart`, {
          position: "bottom-right",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Bounce,
          icon: <TbShoppingCartPlus className="fs-1" />,
        });
    } catch (error) {  
      // Detailed console logging for errors
      console.error("Error adding product to cart:", error);
      if (error.response) {
        // If response error exists
        console.error("Error response data:", error.response.data);
        console.error("Error response status:", error.response.status);
        console.error("Error response headers:", error.response.headers);
      } else if (error.request) {
        // If request was made but no response received
        console.error("Error request data:", error.request);
      } else {
        // If error is related to setting up the request
        console.error("Error message:", error.message);
      }
      toast.error("Error adding product to cart", {
        position: "bottom-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
    }
    // console.log("Added to cart:", {
    //   product,
    //   selectedColor: colorToSet,
    //   quantity,
    // });
  } else {
    console.log("User not authenticated");
    toast.error("User not authenticated", {
      position: "bottom-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
    });
  }
};

  const removeItemFromCart = async (id, selectedColor) => {
    try {
      // Make a POST request to the /removeFromCart API
      const response = await axios.post(
        `${Port}/removeFromCart`,
        {
          productId: id,
          selectedColor: selectedColor,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`, // Add token in headers if required
          },
        }
      );

      // Check if the response is successful
      if (response.status === 200) {
        // Update the cart state after successful removal
        setCart((prevCart) =>
          prevCart.filter(
            (item) => !(item.id === id && item.selectedColor === selectedColor)
          )
        );

        // Show success notification
        toast.error("Removed from cart", {
          position: "bottom-right",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Bounce,
          icon: <TbShoppingCartX className="fs-1" />,
        });
      } else {
        // Handle error if the response is not successful
        console.error(
          "Failed to remove item from cart:",
          response.data.message
        );
        toast.error("Failed to remove item from cart", {
          position: "bottom-right",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
    } catch (error) {
      // Handle any errors that occurred during the request
      console.error("Error removing item from cart:", error);
      toast.error("An error occurred while removing item from cart", {
        position: "bottom-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  const handleBuyNow = async (product, selectedColor, quantity) => {
    console.log("Buy Now :", { product, selectedColor, quantity });
  };

  const handleQuantityChange = (change) => {
    setQuantity((prevQuantity) => {
      const newQuantity = prevQuantity + change;
      return newQuantity > 0 ? newQuantity : 1;
    });
  };

  return (
    <ShopContext.Provider
      value={{
        products,
        cart,
        selectedColors,
        setSelectedColors,
        handleColorChange,
        quantity,
        setQuantity,
        calculateDiscount,
        handleAddToCart,
        removeItemFromCart,
        handleBuyNow,
        handleQuantityChange,
        formatPrice,
        
      }}
    >
      {children}
      <ToastContainer limit={3} newestOnTop />
    </ShopContext.Provider>
  );
};

// Custom hook to use the Shop context
export const useShop = () => {
  return useContext(ShopContext);
};
