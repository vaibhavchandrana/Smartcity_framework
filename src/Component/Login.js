import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import api from "../api"
import toast, { Toaster } from 'react-hot-toast';
import logo from "../Images/logo.png"
import { ThreeDots } from 'react-loader-spinner';
const Login = () => {
  const [empid, setEmpId] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false)

  var navigate = useNavigate()



  const onEmpIdChange = (e) => {
    setEmpId(e.target.value);
  }
  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  }


  const submitHandler = async (e) => {
    e.preventDefault();

    let empLoginObj = {
      empId: empid,
      password: password,
    }
    setShow(true);
    await axios.post(`${api}/auth/login/`, empLoginObj).then((res) => {
      if (res.status === 200) {
        toast.success("Login successfully")
        localStorage.setItem("profile", JSON.stringify(res.data));
        navigate('/')
      }
      else {
        toast.error("Unable to login !, Please enter right credentials")
        console.log("Somthing went wrong")
      }
    }).catch((err) => {
      toast.error("Unable to login !, Please enter right credentials")
      console.log(err);
    })
    setShow(false);


  }


  return (
    <>
      <section className="pt-40 bg-gray-50 dark:bg-gray-900 md:pt-0  md:mt-5">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <Link to="/" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
            <img className="w-14 h-14 mr-2" src={logo} alt="logo" />
            Welcome to Smart City App Employee Portal
          </Link>
          <div className="w-full bg-white border-[#20354b] rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl text-black font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign in to your account
              </h1>
              <form className="space-y-4 md:space-y-6" action="#" onSubmit={submitHandler}>
                <div>
                  <label htmlFor="empId" className="block mb-2 text-sm font-medium text-gray-900 text-black dark:text-white">Your Employee Id</label>
                  <input type="text" name="empId" id="empId" value={empid} onChange={onEmpIdChange} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Your Employee Id" required />
                </div>
                <div>
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 text-black dark:text-white">Password</label>
                  <input type="password" name="password" id="password" value={password}
                    onChange={onPasswordChange} placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                {show ?
                  <button className="w-full text-white items-center bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                  <div className='ml-32'>
                    <center><ThreeDots className="ml-20" height="30"
                  width="40"
                  radius="4"
                  color="white"
                ></ThreeDots></center></div></button>: <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>}
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Login as a User ? <Link to="/user_login" className="font-medium text-primary-600 hover:underline dark:text-primary-500">User Login</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Login