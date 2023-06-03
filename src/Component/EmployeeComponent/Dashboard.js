import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  const [data, setData] = useState({})
  const [society, setAllScocities] = useState([])
  useEffect(() => {
    async function getStatics() {
      await axios.get('https://bright-calf-miniskirt.cyclic.app/employee/get/statics').then((res) => {
        setData(res.data)
      }).catch((err) => {
        console.log(err);
      })
    }
    async function getAllSociety() {
      await axios.get('https://bright-calf-miniskirt.cyclic.app/employee/get/societies/all').then((res) => {
        setAllScocities(res.data)
      }).catch((err) => {
        console.log(err);
      })
    }
    getStatics()
    getAllSociety()
  }, [])
  return (
    <>
      <div class="flex flex-wrap justify-center ">
        <div className="flex flex-wrap justify-center mt-10">
          <div className="p-4 max-w-sm hover:bg-black-200">
            <div className="flex rounded-lg h-full bg-purple-400  p-8 flex-col">
              <div className="flex items-center mb-3">
                <div className="w-16 h-16 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} className="w-10 h-10" viewBox="0 0 24 24">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                  </svg>
                </div>
                <h1 className="text-white text-5xl font-medium">{data.homeCount}</h1>
              </div>
              <div className="flex flex-col justify-between flex-grow">
                <p className="leading-relaxed font-bold text-lg text-white">No Of Home Enrolled.</p>
                <Link to="/addHome"> <span className="mt-3 text-black hover:text-blue-600 inline-flex items-center">Add new home
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span></Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center mt-10">
          <div className="p-4 max-w-sm">
            <div className="flex rounded-lg h-full bg-orange-500 p-8 flex-col">
              <div className="flex items-center mb-3">
                <div className="w-16 h-16 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} className="w-10 h-10" viewBox="0 0 24 24">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                  </svg>
                </div>
                <h1 className="text-white text-5xl font-medium">{data.societyCount}</h1>
              </div>
              <div className="flex flex-col justify-between flex-grow">
                <p className="leading-relaxed font-bold text-lg text-white">No Of Societies Enrolled.</p>
                <Link to="/addSociety"> <span className="mt-3 text-black hover:text-blue-600 inline-flex items-center">Add New Society
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span></Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center mt-10">
          <div className="p-4 max-w-sm">
            <div className="flex rounded-lg h-full bg-yellow-300  p-8 flex-col">
              <div className="flex items-center mb-3">
                <div className="w-16 h-16 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} className="w-10 h-10" viewBox="0 0 24 24">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                  </svg>
                </div>
                <h1 className="text-white text-5xl font-medium">{data.employeeCount}</h1>
              </div>
              <div className="flex flex-col justify-between flex-grow">
                <p className="leading-relaxed font-bold text-lg text-white">No Of Employee Enrolled.</p>
                <Link to="/"> <span className="mt-3 text-black hover:text-blue-600 inline-flex items-center">Add new home
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span></Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center mt-10 ">
          <div className="p-4 max-w-sm">
            <div className="flex rounded-lg h-full bg-teal-400 p-8 flex-col">
              <div className="flex items-center mb-3">
                <div className="w-16 h-16 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} className="w-10 h-10" viewBox="0 0 24 24">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                  </svg>
                </div>
                <h1 className="text-white text-5xl font-medium">{data.blockCount}</h1>
              </div>
              <div className="flex flex-col justify-between flex-grow">
                <p className="leading-relaxed font-bold text-lg text-white">No Of Block Mined.</p>
                <Link to="/addinfo"> <span className="mt-3 text-black hover:text-blue-600 inline-flex items-center">Add new home
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard