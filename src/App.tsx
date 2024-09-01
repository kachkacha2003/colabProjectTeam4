import{ useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/homepages/Home";
import Product from "./components/homepages/Product";
import Producttwo from "./components/homepages/Producttwo";
import Footer from "./components/homepages/Footer";
import Chose from "./components/homepages/Chose";
import { Registration } from "./components/Registration";
import { Login } from "./components/Login";
import AboutProduct from "./components/aboutProduct";

interface CartItem {
  productId: number;
  productName: string;
  productPrice: number;
  productImage: string;
  quantity: number;
}


function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [counter, setCounter] = useState(0);

  const handleAddToCart = (
    productId: number,
    productName: string,
    productPrice: number,
    productImage: string
  ) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.productId === productId);
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
      const existingProduct = prevCart.find((item) => item.productId === productId);
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

  const addCard = () => {
    setCounter(counter + 1);
  };

  return (
    <BrowserRouter>
      <Header cart={cart} counter={counter} />
      <Routes>
        <Route path="/register" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/aboutProduct/:id" element={<AboutProduct />} />
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
        <Route path="/" element={<Navigate to="/home" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
