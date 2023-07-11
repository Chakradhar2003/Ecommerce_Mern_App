import { Send } from '@material-ui/icons'
import React from 'react'
import i from './new.jpg'

const Newsletter = () => {
    return (
        <div className='relative w-full '>
            <img src={i} alt="" className='w-full' />
            <div className='absolute  left-0 right-0 text-center flex flex-col justify-center top-0 bottom-0 items-center'>
                <h1 className='text-center font-extrabold lg:text-6xl sm:text-2xl lg:pb-8 text-lg text-teal-700'>NEWSLETTER</h1>
                <span className='lg:text-3xl text-sm '>Get timely updates from your favourite products.</span>
                <div className='lg:m-12 lg:w-1/4 lg:border-2 border-rose-500 rounded-sm text-left flex border-[1px] sm:text-lg text-sm my-[2px] sm:m-8'>
                    <input className=" lg:p-3 ml-[4px] lg:flex-[6] outline-none   text-rose-500" type="email" placeholder='Your e-mail' />
                    <button className='flex-1 bg-rose-500 '><Send /></button>
                </div>
            </div>
        </div>
    )
}

export default Newsletter
