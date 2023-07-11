import React from 'react'
import { Link } from 'react-router-dom'

export default function CategoryItem({ title, img1, cat }) {
    return (

        <div className='container text-center relative lg:p-3 rounded-sm sm:p-3 pb-10 '>
            <img src={img1} alt="khjghgc" className='rounded-sm object-cover h-[200px] w-full shadow-[10px_-10px_10px_-10px_rgba(0,0,0,0.3)]' />
            <div className='absolute  sm:top-1/2 left-0 right-0 m-auto top-[50px] '>
                <h1 className='lg:text-3xl font-bold sm:text-xl text-2xl'>{title}</h1>
                <Link to={`/products/${cat}`}>
                    <button className='border-2 border-black rounded-lg cursor-pointer bg-black lg:p-2 mt-2 lg:text-2xl sm:xl text-2xl p-2'>EXPLORE</button>
                </Link >
            </div>


        </div>
    )
}
