import axios from "axios";
import React, { createContext, useContext, useState, } from "react";

export const AdminContext = createContext();

export const AdminProvider = ({ children }) => {
  
  const Port = `https://smart-watch-ecommerce-mern.onrender.com`;

  // Format price to Indian currency
  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 0,
    }).format(price);
  };

  // ------------------------------------------------------------------------------------------

  const productCategory = [
    {
      id: 1,
      name: "Smart Watch",
      value: "smart-watches",
    },
    {
      id: 2,
      name: "Wireless",
      value: "wireless",
    },
    {
      id: 3,
      name: "Accessories",
      value: "accessories",
    },
    {
      id: 4,
      name: "Sound Bars",
      value: "sound-bars",
    },
  ];

  //  ------------------------------------------------------------------------------------------

  const productTags = [
    "mens",
    "womens",
    "casual",
    "sports",
    "premium",
    "smart-watch",
    "wireless",
    "audio",
    "charge",
    "charge-pin",
    "strap",
    "sound-bars",
  ];

  //   ------------------------------------------------------------------------------------------

    const [allProducts,setAllProducts] = useState([]);

    const removeProduct = async (id) => {
      try {
        await axios.post(`${Port}/removeproduct`,{
          id: id
        });
        await fetchProducts();
      } catch (error) {
        console.error( "Error in Removing the Product " ,error);
      }
    };
        
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${Port}/allproducts`);
        setAllProducts(response.data);
      } catch (error) {
        console.error("Error in fetching product details :" ,error);
      }
    };

    // -------------------------------------------------------------------------------------------


  return (
    <AdminContext.Provider
      value={{
        productCategory,
        productTags,
        formatPrice,
        fetchProducts,
        removeProduct,
        allProducts,
        Port,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};

 export const useAdminContext = () => {
   return useContext(AdminContext);
 };

