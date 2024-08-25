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
  const [counter, setCounter] = useState(0);

  const addCard = () => {
    setCounter(counter + 1);
  };

  return (
    <BrowserRouter>
      <Header counter={counter} />
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Home />
              <Product addCard={addCard} />
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
