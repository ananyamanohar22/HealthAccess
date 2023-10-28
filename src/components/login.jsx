/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import {BASE_URL} from "../config";
import {useSetRecoilState} from 'recoil';
import { userState } from "../store/atoms/user";


function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const setUser = useSetRecoilState(userState)



  const handleLogIn = async () => {
    const response = await axios.post(`${BASE_URL}/users/login`, {
      username: email,
      password,
    }, {
      headers: {
          "Content-type": "application/json"
      }
  })

    const data = await response.data
    console.log(data.message)
    localStorage.setItem("token", data.token)
    setUser({userEmail:email, isLoading: false})
    navigate('/')
  };

  return (
    <>
      <section className="m-8 mx-auto max-w-md">
        <div className="mt-20 flex flex-col items-center">
          {/* heading of the login page */}

          <p className="p-2 text-3xl font-extrabold ">Welcome Back</p>
          <p className="text-sm text-gray-blue">
            Enter your email below to log in to your account
          </p>
        </div>

        <div className="my-3 flex flex-col  items-center gap-2 py-2">
          {/* sign in buttons */}

          <input
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            className="white_btn w-full px-4 py-2 text-center text-gray-blue"
            placeholder="username@example.com"
          />
          <input
            type="password"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            className="white_btn w-full px-4 py-2  text-center text-gray-blue"
            placeholder="password"
          />
          <button
            onClick={() => handleLogIn()}
            className="black_btn w-full px-4  py-2"
          >
            Log In
          </button>
        </div>
       
        <p className="my-8 text-center text-sm  text-gray-blue">
          Don&apos;t have an account?{" "}
          <NavLink to="/register" className="underline underline-offset-4">
            Sign Up
          </NavLink>
        </p>
      </section>
    </>
  );
}

export default Login;
