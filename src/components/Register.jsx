/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../config";
import { userState } from "../store/atoms/user";
import {useSetRecoilState} from 'recoil'

function Register() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const setUser = useSetRecoilState(userState)

  
  const handleSignUp = async()=>{
    const response = await axios.post(`${BASE_URL}/users/signup`, {
      username : email, password
    })
    const data = response.data
    localStorage.setItem("token", data.token);
    setUser({userEmail: email, isLoading: false})
    navigate('/')
  }

  return (
    <>
      
      <section className="m-8 mx-auto max-w-md">
        <div className="mt-20 flex flex-col items-center">
          {/* heading of the login page */}

          <p className="p-2 text-3xl font-extrabold ">Create an account</p>
          <p className="text-sm text-gray-blue">
            Enter your email below to create your account
          </p>
        </div>

        <div className="my-3 flex flex-col  items-center gap-2 py-2">
          {/* sign in buttons */}

          <input onChange={event=>{
            setEmail(event.target.value)
          }}
            className="white_btn w-full px-4 py-2 text-center text-gray-blue"
            placeholder="username@example.com"
          />
          <input onChange={event=>{
            setPassword(event.target.value)
          }}
          type="password"
            className="white_btn w-full px-4 py-2  text-center text-gray-blue"
            placeholder="password"
          />
          <button onClick={handleSignUp} className="black_btn w-full px-4  py-2">Sign Up</button>
          {/* <p className="my-2 text-md text-gray-blue">OR </p> */}
        </div>
        {/* <div className="flex flex-col justify-center bg-slate-100 gap-2">
          
          <button onClick={() => googleLogIn()} className="black_btn w-full px-4  py-2"><GoogleIcon/> continue with Google</button>
          
        </div> */}
        <p className="my-8 text-center text-sm  text-gray-blue">
          By signing up, you agree to our{" "}
          <NavLink href="/" className="underline underline-offset-4">
            Terms of Service
          </NavLink>{" "}
          and{" "}
          <NavLink href="/" className="underline underline-offset-4">
            Privacy Policy
          </NavLink>
        </p>
      </section>
    </>
  );
}

export default Register;
