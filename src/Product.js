import { useEffect, useState } from "react";
import CardProduct from "./CardProduct";

const Product = ()=>{
    const url = 'https://fakestoreapi.com/products'
    const [products, setProducts] = useState([]);

    const getDataProducts = async()=>{ 

        const response = await fetch(url);
        const dataProduct =await response.json();
        setProducts(dataProduct);
        
    }

    useEffect(()=>{
        getDataProducts();
    })

    return(
        <div>
        <h1>testing</h1>
        {products.map ((produk)=> <CardProduct />)}
        
        </div>
    );
}

export default Product;