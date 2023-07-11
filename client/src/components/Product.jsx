import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom'

const Product = ({ item }) => {
    return (
        <div className='flex-1 m-1  min-w-[150px] h-[250px] flex items-center justify-center bg-gray-200 rounded-lg relative  '>
            <div>
                <img src={item.img} className=' h-[200px]' alt="" />
                <div className='flex absolute justify-center  w-full h-full bottom-0  left-0 bg-slate-500 opacity-0 hover:opacity-50 duration-300 rounded-lg'>
                    <div className='mx-4 absolute bottom-1/2 right-2/3 bg-white rounded-full p-2 hover:bg-gray-200 hover:scale-110 duration-150 hover:ease-in'>
                        <ShoppingCartOutlined />
                    </div>
                    <div className='mx-4  absolute bottom-1/2  bg-white rounded-full p-2 hover:bg-gray-200 hover:scale-110 duration-150 hover:ease-in'>
                        <Link to={`/product/${item._id}`}>

                            <SearchOutlined />
                        </Link>
                    </div>
                    <div className='mx-4  absolute bottom-1/2 left-2/3 bg-white rounded-full p-2 hover:bg-gray-200 hover:scale-110 duration-150 hover:ease-in'>
                        <FavoriteBorderOutlined />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product
