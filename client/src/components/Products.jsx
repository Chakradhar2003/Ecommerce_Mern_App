import React, { useEffect, useState } from 'react'
import { popularProducts } from '../data'
import Product from './Product'
import axios from "axios"
const Products = ({ cat, filter, sort }) => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await axios.get(cat ? `http://localhost:5000/api/products?category=${cat}` : "http://localhost:5000/api/products");
                setProducts(res.data);
            } catch (err) {
                console.log(err);
            }

        }
        getProducts();
    }, [cat])
    useEffect(() => {
        cat && setFilteredProducts(
            products.filter(item =>
                Object.entries(filter).every(([key, value]) =>
                    item[key].includes(value)
                )
            )
        )
    }, [products, cat, filter])
    useEffect(() => {
        if (sort === "latest") {
            setFilteredProducts(prev => [...prev].sort((a, b) => a.createdAt - b.createdAt));
        }
        else if (sort === "inc") {
            setFilteredProducts(prev => [...prev].sort((a, b) => a.price - b.price));
        }
        else if (sort === "desc") {
            setFilteredProducts(prev => [...prev].sort((a, b) => b.price - a.price));
        }
    }, [sort])
    return (
        <div className='flex p-5 flex-wrap justify-center bg-[#f8f8f8]  '>
            {cat ? filteredProducts.map(item => {
                return (
                    <Product item={item} key={item.id} />
                )
            }) : products.slice(0, 8).map((item) => <Product item={item} key={item.id} />)}
        </div>
    )
}

export default Products
