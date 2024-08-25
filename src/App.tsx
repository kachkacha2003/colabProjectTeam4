import "./App.css";
import Header from "./components/Header";
import Home from "./components/homepages/Home";
import Product from "./components/homepages/Product";
import Producttwo from "./components/homepages/Producttwo";
import Footer from "./components/homepages/Footer";
import Chose from "./components/homepages/Chose";
import AboutProduct from "./components/aboutProduct"; // Updated to start with an uppercase letter

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Registration } from './components/Registration';
import { Login } from './components/Login';

function App() {
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
