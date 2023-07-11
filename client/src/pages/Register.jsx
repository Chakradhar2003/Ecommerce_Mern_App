import React, { useState } from 'react'
import photo from '../components/bg2.jpg'
import { publicRequest } from '../requestMethods';
import { login } from '../redux/apiCalls';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
const Register = () => {
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [c, setc] = useState("false");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const register = async () => {

        if (password === confirmPassword) setc(true);
        if (c) {
            let user = {
                "username": username,
                "email": email,
                "password": password
            }
            await publicRequest.post("/auth/register", user);
            navigate("/");
            login(dispatch, { username, password });

        }
        else {
            setc(false);
            return;
        }
    }
    return (
        <div className="bg-gradient-to-r from-blue-500 to-pink-500 h-screen w-screen relative">
            <div className='flex justify-center items-center flex-col top-0 bottom-0 my-20 border-2 mx-32 left-0 right-0 absolute rounded-lg shadow-xl shadow-gray-700'>
                <h1 className='text-4xl mb-8 text-white font-semibold mt-2 '>Create an Account</h1>
                <div className='flex flex-col  '>
                    <input type="text" placeholder='name' className='bg-transparent p-1 border-2 rounded-lg mb-2 ' required onChange={e => setName(e.target.value)} />
                    <input type="text" placeholder='username' className='bg-transparent p-1 border-2 rounded-lg mb-2' required onChange={e => setUsername(e.target.value)} />
                    <input type="email" placeholder='email' className='bg-transparent p-1 border-2 rounded-lg mb-2' required onChange={e => setEmail(e.target.value)} />
                    <input type="password" placeholder='password' className='bg-transparent p-1 border-2 rounded-lg mb-2' required onChange={e => setPassword(e.target.value)} />
                    <input type="password" placeholder='confirm password' className='bg-transparent p-1 border-2 rounded-lg mb-2' required onChange={e => setConfirmPassword(e.target.value)} />
                    <p className='text-white font-semibold'>
                        By creating an account, I consent to the processing of my personal data in accoradance with the <b>Privacy Policy</b>
                    </p>

                    <button className='mx-auto border-2 w-1/4 my-5 p-2 rounded-lg text-white text-xl font-bold shadow-xl shadow-gray-700 ' onClick={register}>Create</button>
                </div>
            </div>
        </div>
    )
}

export default Register
