import {useEffect, useState } from "react"
import axios from "axios"



export default function Product() {
    useEffect(()=>{
        async function getData(): Promise<void>{
                const response=await axios.get("https://ann1.pythonanywhere.com/swagger/#/")
         }
         
    })
    const [product,setProduct]=useState<object>([])
  return (
    <div className="product">
    </div>
  )
}
