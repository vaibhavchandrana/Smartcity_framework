import React, { useEffect, useState } from 'react'
import axios from 'axios'
import api from '../api'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import { Link } from 'react-router-dom'
const SeeWaterTransactions = () => {
    const [transactionData, setTransactionData] = useState([]);
    const [houseNo, setHouseNo] = useState('')
    var navigate = useNavigate()
    useEffect(() => {

        var profile = JSON.parse(localStorage.getItem('profile'))
        if(profile)
        {
        if (profile.houseNo) {
            setHouseNo(profile.houseNo);
        }
        else {
            navigate('/user_login')
        }
    }
    else{
        navigate('/user_login')
    }
    }, [])
    useEffect(() => {
        if (houseNo) {
            axios.get(`${api}/employee/get/transactions/water/all/${houseNo}`).then((res) => {
                // alert(res);
                console.log(res.data);
                setTransactionData(res.data);
            }).catch((err) => {
                toast.error("Unable to load Transactions. Please try again");
            })
        }
    }, [houseNo])
    return (
        <div className='mt-20'>
            <section className=" bg-gray-50 dark:bg-gray-900 p-3 sm:p-5">
            <h2 className='mx-auto max-w-screen-xl px-4 lg:px-12 text-2xl mb-4 font-bold'>Here is your Water transaction Details</h2>
                <div className="mx-auto max-w-screen-xl px-4 lg:px-12">
                    {/* Start coding here */}
                    <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
                        <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
                            <div className="w-50 ml-auto md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
                               <Link to='/add_water_transaction'><button type="button" className=" flex items-center justify-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">
                                    <svg className="h-3.5 w-3.5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                        <path clipRule="evenodd" fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" />
                                    </svg>
                                    Add Transaction
                                </button>
                                </Link>
                            </div>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-400 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" className="px-4 py-3"><center>Transaction Id</center></th>
                                        <th scope="col" className="px-4 py-3">Time</th>
                                        <th scope="col" className="px-4 py-3">Date</th>
                                        <th scope="col" className="px-4 py-3">Amount</th>
                                        <th scope="col" className="px-4 py-3">Method</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {transactionData.map((item, index) => {
                                        return(
                                        <tr key={index} className="border-b dark:border-gray-700">
                                            <td scope="row" className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white "><center>{item.transactionId}</center></td>
                                            <td className="px-4 py-3 ">{item.time}</td>
                                            <td className="px-4 py-3">{item.date}</td>
                                            <td className="px-4 py-3">Rs. {item.amount}</td>
                                            <td className="px-4 py-3">{item.paymentMethod}</td>
                                        </tr>)
                                    }
                                    )}

                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default SeeWaterTransactions