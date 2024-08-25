import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

interface Product {
  id: string;
  image: string;
  name: string;
  price: string;
  title: string;
}

const AboutProduct: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Get the product ID from the URL
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `https://ann1.pythonanywhere.com/products/products/${id}/`
        );
        setProduct(response.data); // Set the product data
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    if (id) {
      fetchProduct();
    }
  }, [id]);

  if (!product) {
    return <div>Loading...</div>; // Show a loading state while fetching
  }

  return (
    <div className="aboutProduct">
      <img src={product.image} alt={product.title} className="product-image" />
      <h2>{product.name}</h2>
      <p>{product.title}</p>
      <p>{product.price} $</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default AboutProduct;
