import { useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Homepages/Home";
import Product from "./components/Homepages/Product";
import Producttwo from "./components/Homepages/Producttwo";
import Footer from "./components/Homepages/Footer";
import Chose from "./components/Homepages/Chose";
import { Registration } from "./components/Registration";
import { Login } from "./components/Login";

interface CartItem {
  productId: number;
  productName: string;
  productPrice: number;
  productImage: string;
  quantity: number;
}

function App() {
  const [cart, setCart] = useState<CartItem[]>([]);

  const handleAddToCart = (
    productId: number,
    productName: string,
    productPrice: number,
    productImage: string
  ) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find(
        (item) => item.productId === productId
      );
      if (existingProduct) {
        return prevCart.map((item) =>
          item.productId === productId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [
          ...prevCart,
          { productId, productName, productPrice, productImage, quantity: 1 },
        ];
      }
    });
  };

  const handleRemoveFromCart = (productId: number) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find(
        (item) => item.productId === productId
      );
      if (existingProduct && existingProduct.quantity > 1) {
        return prevCart.map((item) =>
          item.productId === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      } else {
        return prevCart.filter((item) => item.productId !== productId);
      }
    });
  };

  return (
    <BrowserRouter>
      <Header cart={cart} />
      <Routes>
        <Route path="/register" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Navigate to="/home" />} />
        <Route
          path="/home"
          element={
            <div>
              <Home />
              <Product />
              <Producttwo
                handleAddToCart={handleAddToCart}
                handleRemoveFromCart={handleRemoveFromCart}
              />
              <Chose />
              <Footer />
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
