import React, { useState } from 'react'
import { login } from '../redux/apiCalls';
import { useDispatch, useSelector } from 'react-redux';

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const { isFetching, error } = useSelector(state => state.user);
    const handleClick = (e) => {
        e.preventDefault();
        login(dispatch, { username, password });

    }
    console.log(error)
    return (

        <div className="bg-gradient-to-r from-blue-500 to-pink-500 h-screen w-screen relative">
            <div className='flex justify-center items-center flex-col top-0 bottom-0 my-20 border-2 mx-32 left-0 right-0 absolute rounded-lg shadow-xl shadow-gray-700'>
                <h1 className='text-4xl mb-8 text-white font-semibold mt-2 '>Sign In</h1>
                <div className='flex flex-col  '>


                    <input type="text" placeholder='username' className='bg-transparent p-1 border-2 rounded-lg mb-2' onChange={e => setUsername(e.target.value)} />

                    <input type="password" placeholder='password' className='bg-transparent p-1 border-2 rounded-lg mb-2' onChange={e => setPassword(e.target.value)} />

                    <button className='mx-auto border-2 w-1/2 my-5 p-2 rounded-lg text-white text-xl font-bold shadow-xl shadow-gray-700 cursor-pointer hover:scale-10 disabled:bg-green-500 disabled:cursor-not-allowed' onClick={handleClick} disabled={isFetching}>Login</button>
                    {error && <p className='text-red-600'>Something went wrong</p>}
                    <a>Do not remember the password?</a>
                    <a>Create a new account</a>
                </div>
            </div>
        </div>

    )
}

export default Login
