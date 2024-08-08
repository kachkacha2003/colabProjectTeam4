import "./App.css";
import Header from "./components/Header";
import Home from "./components/homepages/Home";
import Product from "./components/homepages/Product";
import Producttwo from "./components/homepages/Producttwo";
import Chose from "./components/homepages/Chose";
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
