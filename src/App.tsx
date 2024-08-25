import "./App.css";
import Header from "./components/Header";
import Home from "./components/homepages/Home";
import Product from "./components/homepages/Product";
import Producttwo from "./components/homepages/Producttwo";
import Footer from "./components/homepages/Footer";
import Chose from "./components/homepages/Chose";

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Registration } from './components/Registration';
import { Login } from './components/Login';

function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      {/* Authentication Routes */}
      <Route path="/register" element={<Registration />} />
      <Route path="/login" element={<Login />} />
      
      {/* Redirect the root path to /home */}
      <Route path="/" element={<Navigate to="/home" />} />

      {/* Main Route */}
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
