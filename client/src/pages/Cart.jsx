import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Add, AddCircle, Brightness1, Remove, RemoveCircle } from '@material-ui/icons'
import { useSelector } from 'react-redux'
import stripeCheckout from "react-stripe-checkout"
import StripeCheckout from 'react-stripe-checkout'
import { userRequest } from "../requestMethods";
import { useNavigate } from 'react-router-dom'
const KEY = "pk_test_51NR0BLSIehqGU5OCxvVcxIthBoEq3FicztvTp5dze0lKEeJxkeQrm0eh0RiFVX490k8nodGY2Cl72pQ0Cxt4vXWH00R9OH6wGR"
const Cart = () => {
    const cart = useSelector(state => state.cart);
    const [stripeToken, setStripeToken] = useState(null);
    const navigate = useNavigate();
    const onToken = (token) => {
        setStripeToken(token);
    }
    console.log(stripeToken);
    useEffect(() => {
        const makeRequest = async () => {
            try {
                const res = await userRequest.post("/checkout/payment", {

                    amount: cart.total,

                });
                navigate("/success", { data: res.data });
                console.log(res.data);
            } catch (err) {
                console.log(err)
            }
        }
        stripeToken && makeRequest();
    }, [stripeToken, cart.total, navigate])
    return (
        <>
            <Navbar />
            <div className='p-5 w-full'>
                <h1 className='text-4xl text-center'>YOUR CART</h1>
                <div className="top flex flex-row pt-12 justify-around items-center">
                    <button className='border-2 text-xs sm:text-xl font-semibold border-black p-1 shadow-xl'>Continue Shopping</button>
                    <span className='underline text-xs sm:text-lg'>Shopping Bag (2)</span>
                    <span className='underline text-xs sm:text-lg'>Wishlist (0)</span>
                    <button className='border-2 text-xs sm:text-xl text-white  bg-black font-semibold border-black p-1 shadow-xl'>Checkout Now</button>
                </div>
                <div className='bottom flex flex-col lg:flex-row'>
                    <div className=" flex px-5 mt-8 flex-col w-full lg:w-2/3">
                        {cart.products && cart.products.map(product => (<>
                            <div className='flex flex-row my-2 justify-self-center '>
                                <img src={product.img} alt="" className='w-[100px] shadow-xl rounded-xl h-[100px] sm:h-[150px] sm:w-[150px] object-cover' />
                                <div className='sm:ml-10 sm:text-xl  ml-5 text-xs w-1/3'>
                                    <p className='sm:mb-1 '><b>Product: </b>{product.title}</p>
                                    <p className='sm:mb-1'><b>ID: </b>{product._id}</p>
                                    <p className=' text-xs sm:mb-1' ><Brightness1 className='text-red-600 p-1 pl-0 sm:p-0' /></p>
                                    <p className='sm:mb-1'><b>Size: </b>{product.size}</p>

                                </div>
                                <div className=' sm:text-xl font-semibold text-center sm:w-1/3 text-xs'>
                                    <p className='p-3 sm:text-2xl whitespace-nowrap' ><Add className='p-1' />{product.quantity}<Remove className='p-1' /></p>
                                    <p className='sm:text-3xl font-normal text-lg'>{product.price * product.quantity} $</p>
                                </div>

                            </div>
                            <hr className='' /></>

                        ))
                        }

                    </div>
                    <div className=' w-full p-5 h-fit mt-8 border-slate-200 border-2 md:w-3/4 mx-auto lg:w-1/4'>
                        <h1 className='text-center text-2xl '>ORDER SUMMARY</h1>
                        <div className='flex row justify-between mb-2 mt-4'>
                            <p className='font-semibold'>Subtotal</p>
                            <p>$ {cart.total}</p>
                        </div>
                        <div className='flex row justify-between my-2'>
                            <p className='font-semibold'>Shipping cost</p>
                            <p>$ 5.90</p>
                        </div>
                        <div className='flex row justify-between my-2'>
                            <p className='font-semibold'>Discount</p>
                            <p>-$ 5.90</p>
                        </div>
                        <div className='flex row justify-between my-2 text-2xl'>
                            <p className='font-semibold'>Total</p>
                            <p>$ {cart.total}</p>
                        </div>
                        <StripeCheckout name="Atlas" billingAddress shippingAddress description={`Total is $${cart.total}`} amount={cart.total * 100} token={onToken} stripeKey={KEY}>

                            <button className='w-full m-auto border-black bg-black text-white p-2'>CHECKOUT</button>
                        </StripeCheckout>
                    </div>
                </div>

            </div>
            <Footer />
        </>
    )
}

export default Cart
