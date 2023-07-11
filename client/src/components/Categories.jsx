import React from 'react'
import { categories } from "../data"
import CategoryItem from './CategoryItem'
import c1 from './c1.jpg'
import c2 from './c2.jpg'
import c3 from './c3.jpg'
export default function Categories() {
    return (
        <>
            <div><h1 className='text-center font-extrabold p-5 sm:text-5xl text-3xl text-[#28B4D0] bg-[#f8f8f8] w-full '>Categories</h1></div>
            <div className=' flex sm:flex-row flex-col justify-between bg-[#f8f8f8] p-4 pt-0 text-white'>

                <CategoryItem img1={c3} title="Cool summer T-shirts" cat="" />
                <CategoryItem img1={c2} title="Stylish shoes" />
                <CategoryItem img1={c1} title="Light Jackets" />


            </div>
        </>
    )
}
