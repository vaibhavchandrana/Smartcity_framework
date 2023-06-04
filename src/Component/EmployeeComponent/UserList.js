import React, { useState, useEffect } from 'react'
import axios from "axios";
import api from '../../api';
import { toast, Toaster } from 'react-hot-toast'
import UserTable from './UserTable';
import { ThreeCircles } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';
const UserList = () => {
  const statesOfIndia = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jammu and Kashmir", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"
  ];
  const [state, setState] = useState("");
  const [societynumber, setSocietyNumber] = useState("");
  const [city, setCity] = useState("");
  const [allCity, setAllCity] = useState([]);
  const [allsocieties, setAllScocities] = useState([])
  const [users, setUser] = useState([])
  const [searchString, setsearchString] = useState("")
  const [show, setShow] = useState(false)
  var navigate=useNavigate()
  useEffect(() => {
    async function getAllSociety() {
      setShow(true)
      await axios.get(`${api}/employee/get/societies/all`).then((res) =>
        setAllScocities(res.data)).catch((err) => {
          console.log("error is ", err)
        })
        setShow(false)

    }
    async function getAllUserList() {
      setShow(true)

      await axios.get(`${api}/employee/get/homes/all`).then((res) =>
        setUser(res.data)).catch((err) => {
          console.log("error is ", err)
        })
        setShow(false)

    }
    getAllSociety()
    getAllUserList();
  }, [])

  useEffect(() => {
    async function getAllCities() {  
          setShow(true)

      await axios.get(`${api}/employee/get/cities/${state}`).then((res) =>
        setAllCity(res.data)).catch((err) => {
          console.log("error is ", err)
        })
        setShow(false)

    }
    async function getAllUserUnderState() {
      setShow(true)

      await axios.get(`${api}/employee/get/homes/state/${state}`).then((res) =>
        setUser(res.data)).catch((err) => {
          console.log("error is ", err)
        })
        setShow(false)

    }
    if (state) {
      // getAllUserUnderState()
      getAllCities()
    }
  }, [state])

  useEffect(() => {
    
    async function getAllSocietiesInsideCity() {
      setShow(true)
      await axios.get(`${api}/employee/get/societies/city/${city}`).then((res) =>
        setAllScocities(res.data)).catch((err) => {
          console.log("error is ", err)
        })
        setShow(false)

    }
    async function getAllHomesInsideCity() {
      await axios.get(`${api}/employee/get/homes/city/${city}`).then((res) =>
        setUser(res.data)).catch((err) => {
          console.log("error is ", err)
        })
    }
    if (city) {
      // getAllHomesInsideCity()
      getAllSocietiesInsideCity()
    }
  }, [city])

  useEffect(() => {

    async function getAllUser() {
              setShow(true)

      await axios.get(`${api}/employee/society/houses/${societynumber}`).then((res) =>
        setUser(res.data)).catch((err) => {
          console.log("error is ", err)
        })
        setShow(false)

    }
    if (societynumber) {
      getAllUser()
    }
  }, [societynumber])


  const onSocietyNumberChange = (e) => {
    setSocietyNumber(e.target.value);
  }
  async function getAllUserOnSearch() {
    if (searchString.length > 0) {
      setShow(true)

      await axios.get(`${api}/employee/get/homes/search/${searchString}`).then((res) =>
        setUser(res.data))
        .catch((err) => {
          console.log("error is ", err)
        })
        setShow(false)

    }
    else {
      setShow(true)

      await axios.get(`${api}/employee/get/homes/all`).then((res) =>
        setUser(res.data)).catch((err) => {
          console.log("error is ", err)
        })
        setShow(false)

    }
  }

  const onCityChange = (e) => {
    setCity(e.target.value);
  }
  const onSearchStringChange = (e) => {
    setsearchString(e.target.value);
  }
  const onStateChange = (e) => {
    setState(e.target.value);
  }

  return (
    <div>
      <section className=" mt-20">
        <div className="w-full px-4 mx-auto lg:px-12">
          {/* Start coding here */}
          <div className="relative bg-gray-100 shadow-md dark:bg-gray-800 sm:rounded-lg">
            <div className="flex flex-col items-center justify-between p-4 space-y-3 md:flex-row md:space-y-0 md:space-x-4">
              <div className="w-full md:w-1/3">
                <form className="flex items-center">
                  <label htmlFor="simple-search" className="sr-only">Search</label>
                  <div className="relative w-full md:w-1/2 mr-2">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <input type="text" id="simple-search" className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Search" value={searchString} onChange={onSearchStringChange} required />
                  </div>
                  <button type="button" onClick={getAllUserOnSearch} className="flex items-center justify-center px-4 py-2 text-sm font-medium text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">
                    Search
                  </button>
                </form>
              </div>
              <div className="flex flex-col items-stretch justify-end flex-shrink-0 w-full space-y-2 md:w-auto md:flex-row md:space-y-0 md:items-center md:space-x-3">
                {/* select state  */}
                <select id="state" className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg md:w-1/3 focus:outline-none hover:bg-gray-100 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" onChange={onStateChange} value={state}>
                  <option defaultValue>Select State</option>
                  {statesOfIndia.map((item, index) => {
                    return (
                      <option key={index} value={item}>{item}</option>
                    )
                  })

                  }
                </select>
                <select id="city" className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg md:w-1/3 focus:outline-none hover:bg-gray-100 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" onChange={onCityChange} value={city} >
                  <option defaultValue>Select City</option>
                  {allCity.map((item, index) => {
                    return (
                      <option key={index} value={item}>{item}</option>
                    )
                  })

                  }
                </select>
                <select id="state" className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg md:w-1/3 focus:outline-none hover:bg-gray-100 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" onChange={onSocietyNumberChange} >
                  <option defaultValue>Select Society</option>
                  {allsocieties.map((item, index) => {
                    return (
                      <option key={index} value={item._id}>{item.societyName}</option>
                    )
                  })

                  }
                </select>
              </div>
            </div>
          </div>
          {show ? <div className='w-full mt-10 flex justify-center'><center><ThreeCircles color='black'></ThreeCircles></center></div> : <UserTable userList={users} />}
        </div>
      </section>
    </div>
  )
}

export default UserList