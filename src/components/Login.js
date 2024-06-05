import { useRef, useState } from 'react'

import Header from './Header'
import React from 'react'
import { checkValidData } from '../utils/validate.js'

const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState(true)
    const[errorsMsg, setErrorMsg]= useState( )
    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);

    const handleButton = ()=>{
        console.log(email.current.value)
        console.log(password.current.value)
        const msg= checkValidData(email.current.value, password.current.value, name.current.value)
        setErrorMsg(msg);
    }

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm)
    }
    return (
        <div >
            <Header />
            <div className='absolute'>
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/dd4dfce3-1a39-4b1a-8e19-b7242da17e68/86742114-c001-4800-a127-c9c89ca7bbe4/IN-en-20240527-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="background-img"></img>
            </div>


            <form onSubmit={(e)=> e.preventDefault()}
            className='  text-white w-3/12 p-12 h-90 bg-black bg-opacity-70 absolute my-36 mx-auto right-0 left-0'>
                <h1 className='p-2 font-bold text-2xl'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>

                {!isSignInForm && 
                
                <input ref={name} type="text" placeholder='Full Name' 
                    
                    className=' font-semibold w-full p-4 my-4 text-white bg-slate-700 opacity-70 rounded-md border border-slate-200 focus:outline-white hover:border-slate-400' />}

                <input 
                    ref={email}
                    type="email" placeholder='Email Address'
                    className=' font-semibold w-full p-4 my-4 text-white bg-slate-700 opacity-70 rounded-md border border-slate-200 focus:outline-white hover:border-slate-400' />

                <input 
                    ref={password}
                    type="password" placeholder='Password'
                    className='font-semibold w-full p-4 my-4 text-White bg-slate-700 opacity-70 rounded-md border border-slate-200
                focus:outline-white hover:border-slate-400' />
                <p className='text-sm font-semibold text-red-500'>{errorsMsg}</p>

                <button 
                    
                    onClick={handleButton}
                    type="submit"
                    className='w-full p-3 my-4 bg-red-700 font-semibold '>{isSignInForm ? "Sign In" : "Sign Up"}</button>

                <input type="checkbox" className=' '></input>
                <label className='m-2 font-semibold text-[17px]'>Remember me</label>

                <p className='my-4 font-normal text-gray-200 '>{isSignInForm ? "New to netflix?" : "Registered user?"} <span className='cursor-pointer font-bold text-white hover:underline' onClick={toggleSignInForm}>{isSignInForm ? "Sign Up now." : "Sign In now."}</span></p>

                <p className='font-thin text-xs font-gray-200 '>Made in India with ❤</p>
            </form>
        </div>
    )


}

export default Login