import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import api from "../api"
import toast from 'react-hot-toast';
import logo from "../Images/logo.png"
import ChangePassword from './ChangePassword';
import { ThreeDots } from 'react-loader-spinner';

const UserLogin = () => {
  var navigate = useNavigate()

  const [show, setShow] = useState(false)
  const [email, setEmail] = useState("");
  const onEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const [password, setPassword] = useState("");
  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  }




  const submitHandler = async (e) => {
    e.preventDefault();

    const userLoginObj = {
      ownerEmail: email,
      password: password,
    }
    setShow(true);
    await axios.post(`${api}/auth/user/login`, userLoginObj).then((res) => {
      if (res.status === 200) {
        toast.success("You have successfully loged in");
        localStorage.setItem("profile", JSON.stringify(res.data));
        navigate('/')
      }
      else{
        toast.error("Unable to login !, Please enter right credentials")

      }

    }).catch((err) => {
      toast.error("Unable to login !, Please enter right credentials")
      console.log(err);
    })
    setShow(false);



  }



  return (
    <>
      <section className="bg-gray-50 dark:bg-gray-900 pt-40 md:pt-0 md:mt-5">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
            <img className="w-14 h-14 mr-2" src={logo} alt="logo" />
            Smart City App
          </a>

          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign in to your account
              </h1>
              <form className="space-y-4 md:space-y-6" action="#" onSubmit={submitHandler}>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                  <input type="email" name="" id="email" value={email} onChange={onEmailChange} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required />
                </div>
                <div>
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                  <input type="password" name="password" id="password" value={password}
                    onChange={onPasswordChange} placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                <div className="flex items-center justify-end">
                  <button type='button' data-modal-target="authentication-modal" data-modal-toggle="authentication-modal" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Change password</button>
                </div>
                {show?<button className="w-full text-white items-center bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                    <div className='ml-32'>
                      <center><ThreeDots className="ml-20" height="30"
                    width="40"
                    radius="4"
                    color="white"
                  ></ThreeDots></center></div></button> :
                  <button type="submit" className="w-full text-white -center bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"> Sign in</button>}
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Login as an Employee ? <Link to="/login" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Employee Login</Link>
                </p>
              </form>
              <ChangePassword></ChangePassword>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default UserLogin