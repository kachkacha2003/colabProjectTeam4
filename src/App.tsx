import "./App.css";
import Header from "./components/Header";
import Home from "./components/Homepages/Home";
import Product from "./components/Homepages/Product";
import Producttwo from "./components/Homepages/Producttwo";
import Chose from "./components/Homepages/Chose";

function App() {
  return (
    <div>
      <Header></Header>
      <Home></Home>
      <Product></Product>
      <Producttwo></Producttwo>
      <Chose></Chose>
    </div>
  );
}

export default App;
