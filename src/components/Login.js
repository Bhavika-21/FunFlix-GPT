import Header from './Header';
import React from 'react'
import { useState } from 'react';

const Login = () => {

    const[isSignForm, setIsSignInForm]= useState(true);
    const toggleSignIn = ()=>{
        setIsSignInForm(!isSignForm)
    }
    return (
        <div>
            <Header />
            <div className='absolute '>
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/8728e059-7686-4d2d-a67a-84872bd71025/e90516bd-6925-4341-a6cf-0b9f3d0c140a/IN-en-20240708-POP_SIGNUP_TWO_WEEKS-perspective_WEB_34324b52-d094-482b-8c2a-708dc64c9065_small.jpg"
                 />


            </div>
            <form className='w-3/12 absolute px-9 bg-black my-36 mx-auto right-0 left-0 text-white h-[500px] bg-opacity-85'>
                <h1 className='text-3xl font-bold  pt-8 pb-4 text-left'>{isSignForm? "Sign In" : "Sign Up"}</h1>

                {!isSignForm && (<input
                    type="text" placeholder='Name' className='p-4 my-3 w-[300px] bg-slate-800 rounded-sm border border-white hover:border-solid bg-opacity-60' />)   }


                <input
                    type="text" placeholder='Email' className='p-4 my-3 w-[300px] bg-slate-800 rounded-sm border border-white hover:border-solid bg-opacity-60' />

                <input
                    type="password" placeholder='Password' className='p-4 my-3 w-[300px] bg-slate-800 rounded-sm border border-white hover:border-solid bg-opacity-60' />

                <button type="submit" className='px-4 py-2 my-4 bg-red-700 w-[300px]  ' >{isSignForm ? "Sign In" : "Sign Up"}</button>
                <input type='checkbox' /><label> Remember me</label>
                <p onClick={toggleSignIn} className='cursor-pointer'>{isSignForm?"New to Netflix? Sign up now" : "Already a user? Sign In now"}</p>

            </form>
        </div>
    )
}

export default Login