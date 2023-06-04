import React, { useState } from 'react'
import axios from 'axios'
import api from "../api"
import toast, { Toaster } from 'react-hot-toast';
import { ThreeDots } from 'react-loader-spinner';
const ChangePassword = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [show, setShow] = useState(false);


  const changePasswordSubmit = async (e) => {
    e.preventDefault();
    const changePasswordObj = {
      ownerEmail: email,
      oldPassword: password,
      newPassword: newPassword
    }
    setShow(true)
    await axios.post(`${api}/auth/user/change_password`, changePasswordObj).then((res) => {
      if (res.status === 200) {
        toast.success("You have successfully changed the password");
      }else{
        toast.error("Unable to change the password")
      }
    }).catch((err) => {
      toast.error("Unable to change the password")
      console.log(err);
    })
    setShow(false)
  }
  const onEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  }



  const onNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
  }

  return (
    <div> <div>
      {/* Modal toggle */}
      {/* Main modal */}
      <div id="authentication-modal" tabIndex={-1} aria-hidden="true" className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div className="relative w-full max-w-md max-h-full">
          {/* Modal content */}
          <div className="relative bg-[#20354b] rounded-lg shadow dark:bg-gray-700">
            <button type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-hide="authentication-modal">
              <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
              <span className="sr-only">Close modal</span>
            </button>
            <div className="px-6 py-6 lg:px-8">
              <h3 className="mb-4 text-xl font-medium text-white dark:text-white">Change Password</h3>
              <form className="space-y-6" onSubmit={changePasswordSubmit}>
                <div>
                  <label htmlFor="user_email" className="block mb-2 text-sm font-medium text-white dark:text-white">Your email</label>
                  <input type="email" name="email" id="user_email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" onChange={onEmailChange} value={email
                  } required />
                </div>
                <div>
                  <label htmlFor="old_password" className="block mb-2 text-sm font-medium text-white dark:text-white">Old Password</label>
                  <input type="password" name="password" id="old_password" placeholder="Enter Your Old Password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" onChange={onPasswordChange} value={password} required />
                </div>
                <div>
                  <label htmlFor="new_password" className="block mb-2 text-sm font-medium text-white dark:text-white">New Password</label>
                  <input type="password" name="password" id="new_password" placeholder="Enter Your New Password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" onChange={onNewPasswordChange} value={newPassword} required />
                </div>
                {show ?
                  <button className="w-full text-white items-center bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                    <div className='ml-32'>
                      <center><ThreeDots className="ml-20" height="30"
                    width="40"
                    radius="4"
                    color="white"
                  ></ThreeDots></center></div></button> : <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Change Password</button>
                }
              </form>
            </div>
          </div>
        </div>
      </div>
    </div></div>
  )
}

export default ChangePassword