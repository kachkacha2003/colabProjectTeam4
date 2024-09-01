/* eslint-disable @typescript-eslint/no-unused-vars */
import Header from "./components/Header";
import Home from "./components/homepages/Home";
import Product from "./components/homepages/Product";
import Producttwo from "./components/homepages/Producttwo";
import Footer from "./components/homepages/Footer";
import Chose from "./components/homepages/Chose";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useState } from "react";
import { Registration } from "./components/Registration";
import { Login } from "./components/Login";
import AboutProduct from "./components/aboutProduct";

interface ProducttwoProps {
  addCard: () => void;
}

function App() {
  const [counter, setCounter] = useState(0);

  const addCard = () => {
    setCounter(counter + 1);
  };

  return (
    <BrowserRouter>
      <Header counter={counter} />
      <Routes>

        <Route path="/register" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/aboutProduct/:id" element={<AboutProduct />} />
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={
          <div>
            <Home />
            <Product />
            <Producttwo addCard={function (): void {
              throw new Error("Function not implemented.");
            } } />
            <Chose />
            <Footer />
          </div>
        } />

        <Route
          path="/"
          element={
            <div>
              <Home />
              <Product addCard={ addCard} />
              <Producttwo addCard={addCard} /> <Chose />
              <Footer />
            </div>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
