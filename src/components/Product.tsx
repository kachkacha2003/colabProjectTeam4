import {useEffect, useState } from "react"
import axios from "axios"



export default function Product() {
    useEffect(() => {
        async function getData() {
          try {
            const response = await axios.get("https://ann1.pythonanywhere.com/swagger/#/");
            setProduct(response.data);
          } catch (error) {
            console.error("Error fetching product data:", error);
          }
        }
        getData();
      }, []);
    
    const [product,setProduct]=useState<object>([])
    console.log(product)
  return (
    <div className="product">
        
    </div>
  )
}
