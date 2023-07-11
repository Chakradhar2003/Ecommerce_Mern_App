import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import { Add, Brightness1, Remove } from '@material-ui/icons'
import { useLocation } from 'react-router-dom'
import { publicRequest } from '../requestMethods'
import { addProduct } from "../redux/cartRedux";
import { useDispatch } from 'react-redux'
const Product = () => {
    const location = useLocation();
    const id = location.pathname.split("/")[2];
    const [product, setProduct] = useState({});
    const [color, setColor] = useState([]);
    const [size, setSize] = useState("");
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();
    useEffect(() => {
        const getProduct = async () => {
            try {
                const res = await publicRequest.get("/products/find/" + id);
                setProduct(res.data);
            } catch (err) {
                console.log(err);
            }
        }
        getProduct();
    }, [id])

    const reduce = () => {

        if (quantity === 1) return;
        else setQuantity((quantity) => quantity - 1);
    }
    const increase = () => {
        if (product.inStock)
            setQuantity((quantity) => quantity + 1);

    }
    const handleClick = () => {

        dispatch(addProduct({ ...product, quantity, color, size }))
    }
    return (
        <>
            <Navbar />
            <div className='flex pt-5 -mb-28 w-full sm:flex-row flex-col pb-40'>
                <div className='flex-1 h-1/2'>
                    <img src={product.img} alt="" className='h-[250px] sm:h-[500px] w-full object-cover mx-auto px-5 ' />
                </div>
                <div className='flex-1 px-5 py-2 h-fit'>
                    <h1 className='text-3xl font-bold pb-1'>{product.title}</h1>
                    <span className='block w-full text-lg pb-1'>{product.desc}</span>
                    <h2 className='text-3xl font-sans font-light'>$ {product.price}</h2>
                    <div className='pt-2 text-lg flex justify-between pr-10'>
                        <span>Color{product.color && product.color.map((c) => (
                            <Brightness1 style={{ color: c.toLowerCase() }} onClick={() => setColor(c)} />
                        ))
                        }</span>
                        <div>
                            <p className='inline '>Size</p>
                            <select name="" id="" className=' outline-none border-2 border-black light p-1 ml-3 text-sm rounded-lg' onChange={(e) => setSize(e.target.value)}>
                                {product.size && product.size.map((s) => (
                                    <option value="" >{s}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className='pt-10 text-lg flex justify-between pr-10'>
                        <span ><Remove onClick={reduce} className='cursor-pointer' /><p className='inline p-2 m-2 border-2 border-teal-500 rounded-xl'>{quantity}</p ><Add onClick={increase} className='cursor-pointer' /></span>
                        <button className='border-2 px-2 border-teal-500 py-1 hover:bg-gray-300 cursor-pointer font-bold' onClick={() => handleClick()}>Add to cart</button>
                    </div>
                </div>
            </div>
            <Newsletter />
            <Footer />
        </>
    )
}

export default Product
