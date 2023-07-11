import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Products from '../components/Products'
import Footer from '../components/Footer'
import Newsletter from '../components/Newsletter'
import { useLocation } from 'react-router-dom'
const ProductList = () => {
    const location = useLocation();
    const cat = location.pathname.split("/")[2];
    const [filter, setFilters] = useState({});
    const [sort, setSort] = useState("newest");
    const handleFilters = (e) => {
        const value = e.target.value;
        setFilters({
            ...filter,
            [e.target.name]: value
        })
    }
    return (
        <>
            <Navbar />
            <div className='bg-black text-white px-7 py-2'>
                <h1 className='font-extrabold sm:text-5xl text-3xl pb-2'>{cat}</h1>
                <div className='flex justify-between px-3'>
                    <div className=''>
                        <h1 className='text-xl font-semibold pb-2'>Filter Products</h1>
                        <select name="color" id="" className='bg-black outline-none border-2 border-white p-1 mr-2 rounded-lg' onChange={handleFilters}>
                            <option value="" >Color</option>
                            <option value="White" >White</option>
                            <option value="Black" >Black</option>
                            <option value="Red" >Red</option>
                            <option value="Green" >Green</option>
                        </select>
                        <select name="size" id="" className='bg-black outline-none border-2 border-white p-1 rounded-lg' onChange={handleFilters}>
                            <option value="" >Size</option>
                            <option value="XS" >XS</option>
                            <option value="S" >S</option>
                            <option value="M" >M</option>
                            <option value="L" >L</option>
                            <option value="XL" >XL</option>
                            <option value="XXL" >XXL</option>
                        </select>
                    </div>
                    <div><h1 className='text-xl font-semibold pb-2'>Sort Products</h1>
                        <select name="" id="" className='bg-black outline-none border-2 border-white p-1 rounded-lg' onChange={e => setSort(e.target.value)}>
                            <option value="latest" >Latest</option>
                            <option value="inc" >Increasing price</option>
                            <option value="desc" >Decreasing Price</option>
                        </select>
                    </div>
                </div>
            </div>
            <Products cat={cat} filter={filter} sort={sort} />
            <Newsletter />
            <Footer />
        </>
    )
}

export default ProductList
