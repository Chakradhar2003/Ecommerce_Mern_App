import { Facebook, Instagram, MailOutline, Phone, Room, Twitter, WhatsApp } from '@material-ui/icons'
import React from 'react'

const Footer = () => {
    return (
        <div className='flex w-full flex-col sm:flex-row '>
            <div className='flex flex-col p-5 flex-1 justify-center  ' >
                <h1 className='sm:text-2xl text-xl font-bold sm:pb-3 '>ATLAS</h1>
                <span className='sm:text-lg text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, incidunt facilis dolor obcaecati optio vel? Accusantium eaque distinctio nihil, vitae asperiores eius debitis magnam cupiditate aspernatur commodi ipsam ducimus possimus.</span>
                <div className="icons flex justify-start sm:pt-5 pt-1">
                    <div className='text-[rgb(66,103,178)] sm:pr-3 pr-1'>
                        <Facebook />
                    </div>
                    <div className='text-pink-500 sm:pr-3 pr-1'>
                        <Instagram />
                    </div><div className='text-[#1DA1F2] sm:pr-3 pr-1'>
                        <Twitter />
                    </div><div className='text-[#25D366]'>
                        <WhatsApp />
                    </div>
                </div>
            </div>
            <div className='flex-1 p-5 hidden sm:block'>
                <h1 className='text-2xl font-semibold'>Useful Links</h1>
                <ul className='flex text-sm font-semibold flex-wrap p-3'>
                    <li className='w-1/2 p-1'>Home</li>
                    <li className='w-1/2 p-1'>Man Fashion</li>
                    <li className='w-1/2 p-1'>Women Fashion</li>
                    <li className='w-1/2 p-1'>Cart</li>
                    <li className='w-1/2 p-1'>Accesories</li>
                    <li className='w-1/2 p-1'>Order Tracking</li>
                    <li className='w-1/2 p-1'>My Account</li>
                    <li className='w-1/2 p-1'>Terms</li>
                </ul>
            </div>
            <div className='flex-1 flex flex-col p-5 sm:bg-white bg-gray-100'>
                <h1 className='text-xl font-semibold sm:pb-3 mb-1'>Contact</h1>
                <span className='sm:p-2 font-bold sm:text-lg text-xs mb-1'><Room className='mr-4  sm:text-red-600' />MIG 170, James street, New York</span>
                <span className='sm:p-2 font-bold sm:text-lg text-xs mb-1'><Phone className='mr-4 sm:text-green-600' />+91 831 xxxxx 35</span>
                <span className='sm:p-2 font-bold sm:text-lg text-xs mb-1'><MailOutline className='mr-4 sm:text-blue-600' />contact@atlas.in</span>
                <img src="https://i.ibb.co/Qfvn4z6/payment.png" className='w-2/3 sm:p-3 sm:pl-2' alt="" />
            </div>
        </div>
    )
}

export default Footer
