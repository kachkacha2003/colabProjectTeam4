import "./App.css";
import Header from "./components/Header";
import Home from "./components/Homepages/Home";
import Product from "./components/Homepages/Product";
import Producttwo from "./components/Homepages/Producttwo";
import Footer from "./components/Homepages/Footer";
import Chose from "./components/Homepages/Chose";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";

function App() {
  const { Counter, setcount } = useState;
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/register" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/aboutProduct/:id" element={<AboutProduct />} />
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={
          <div>
            <Home />
            <Product />
            <Producttwo />
            <Chose />
            <Footer />
          </div>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
