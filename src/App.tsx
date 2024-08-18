import "./App.css";
import Header from "./components/Header";
import Home from "./components/Homepages/Home";
import Product from "./components/Homepages/Product";
import Producttwo from "./components/Homepages/Producttwo";
import Footer from "./components/Homepages/Footer";
import Chose from "./components/Homepages/Chose";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Home />
              <Product />
              <Producttwo />
              <Chose />
              <Footer></Footer>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
