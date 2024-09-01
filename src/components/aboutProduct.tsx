import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

// export default function Product() {
//     useEffect(() => {
//         async function getData() {
//           try {
//             const response = await axios.get("https://ann1.pythonanywhere.com/swagger/#/");
//             setProduct(response.data);
//           } catch (error) {
//             console.error("Error fetching product data:", error);
//           }
//         }
//         getData();
//       }, []);
    
//     const [product,setProduct]=useState<object>([])
//     console.log(product)
//   return (
//     <div className="product">
        
//     </div>
//   )
// }



interface Product {
  id: string;
  image: string;
  name: string;
  price: string;
  title: string;
}

const AboutProduct: React.FC = () => {
  const[sizes,setSizes]=useState([]);

  const handleSizeClick = (size: string) => {
    if (selectedSize === size) {
      setSelectedSize(null); 
    } else {
      setSelectedSize(size); 
    }
  };

  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const[color, setColor]=useState([]);
console.log(color)
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `https://ann1.pythonanywhere.com/products/products/${id}/`
        );
        setProduct(response.data); 
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    const fetchColors = async () => {
      try {
        const response = await axios.get(
          `https://ann1.pythonanywhere.com/products/features/${id}`
        );
        setColor(response.data);
      } catch (error) {
        console.error("Error fetching sizes:", error);
      }
    };


    const fetchSizes = async () => {
      try {
        const response = await axios.get(
          `https://ann1.pythonanywhere.com/products/features/${id}`
        );
        setSizes(response.data);
      } catch (error) {
        console.error("Error fetching sizes:", error);
      }
    };

    if (id) {
      fetchProduct();
      fetchSizes();
      fetchColors();
    }
  
  })
  ;

  if (!product) {
    return (
      <div className="flex items-center justify-center min-h-screen  bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="relative">
            <div className="w-[110px] h-[100px] border-4 border-t-4 border-white rounded-full animate-spin"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-white text-xl font-bold animate-bounce">Loading...</div>
            </div>
          </div>
          <div className="text-white text-lg font-medium">Please wait while we get things ready!</div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-[100vh] lg:flex-row items-center justify-between max-w-7xl mx-auto p-6">
      <div className="w-full lg:w-1/2 flex ">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-auto max-w-md rounded-lg shadow-lg object-cover"
        />
      </div>
      <div className="w-full lg:w-1/2 lg:pl-12 mt-6 lg:mt-0">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
        <p className="text-lg text-gray-700 mb-4">{product.title}</p>
        <p className="text-xl text-gray-900 font-semibold mb-6">${product.price}</p>

        {sizes.length > 0 && (
  <div className="mb-6">
    <h3 className="text-lg font-semibold text-gray-800 mb-2">Size</h3>
    <div className="flex space-x-4">
      {sizes.map((size) => (
        <button
          key={size}
          onClick={() => handleSizeClick(size)}
          className={`px-4 py-2 border rounded-lg ${
            selectedSize === size ? "bg-gray-400 text-white" : "hover:bg-gray-200"
          } focus:outline-none focus:ring-2 focus:ring-gray-400`}
        >
          {size}
        </button>
      ))}
    </div>
  </div>
)}
        <div className="colors-div  mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Color</h3>
          <div className="flex space-x-4">
            <button className="w-10 h-10 rounded-full bg-gray-500 border-2 border-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400"></button>
          </div>
        </div>

        <div className="mb-6 flex items-center">
          <h3 className="text-lg font-semibold text-gray-800 mr-4">Quantity</h3>
          <div className="flex items-center border rounded-lg">
            <button className="px-3 py-1 text-gray-700 hover:bg-gray-200">-</button>
            <input
              type="text"
              value="1"
              className="w-12 text-center text-gray-900 focus:outline-none"
              readOnly
            />
            <button className="px-3 py-1 text-gray-700 hover:bg-gray-200">+</button>
          </div>
        </div>

        <button className="w-full py-3 bg-black text-white rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default AboutProduct;

