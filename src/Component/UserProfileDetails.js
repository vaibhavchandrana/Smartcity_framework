import React from 'react'
import { Link } from 'react-router-dom'
const UserProfileDetails = (propTypes) => {
    return (
        <div className='mb-10'>
            <div className="w-90 sm:w-90 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-10 mr-5">
                <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 rounded-t-lg bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:bg-gray-800" id="defaultTab" data-tabs-toggle="#defaultTabContent" role="tablist">
                    <li className="mr-2">
                        <button id="about-tab" data-tabs-target="#about" type="button" role="tab" aria-controls="about" aria-selected="true" className="inline-block text-md sm:text-xl p-4 text-blue-600 rounded-tl-lg hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-blue-500">Owner Details</button>
                    </li>
                    <li className="mr-2">
                        <button id="services-tab" data-tabs-target="#services" type="button" role="tab" aria-controls="services" aria-selected="false" className=" text-md sm:text-xl inline-block p-4 hover:text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-gray-300">Home Details</button>
                    </li>
                    <li className="mr-2">
                        <button id="statistics-tab" data-tabs-target="#statistics" type="button" role="tab" aria-controls="statistics" aria-selected="false" className="inline-block text-md sm:text-xl p-4 hover:text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-gray-300">Address Details</button>
                    </li>
                </ul>
                <div id="defaultTabContent">
                    <div className=" p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800" id="about" role="tabpanel" aria-labelledby="about-tab">
                        <div className='w-full sm:flex sm:justify-between'>
                            <div className='w-full'>
                                <span className='text-lg font-bold'>Name:</span>
                                <span className='ml-2'>{propTypes.homeData.ownerName}</span>
                            </div>
                            <div className='w-full'>
                                <span className='text-lg font-bold'>Email:</span>
                                <span className='ml-2'>{propTypes.homeData.ownerEmail}</span>
                            </div>
                        </div>
                        <div className='w-full sm:flex sm:justify-between'>
                            <div className='w-full'>
                                <span className='text-lg font-bold'>House No:</span>
                                <span className='ml-2'>{propTypes.homeData.houseNo}</span>
                            </div>
                            <div className='w-full'>
                                <span className='text-lg font-bold'>Mobile No:</span>
                                <span className='ml-2'>{propTypes.homeData.ownerPhone}</span>
                            </div>
                        </div>
                        <div className='w-full sm:flex sm:justify-between'>
                            <div className='w-full'>
                                <span className='text-lg font-bold'>Society:</span>
                                <span className='ml-2'>{propTypes.homeData.society?propTypes.homeData.society.societyName:null}</span>
                            </div>
                            <div className='w-full'>
                                <span className='text-lg font-bold'>Pin Code:</span>
                                <span className='ml-2'>{propTypes.homeData.society?propTypes.homeData.society.pincode:null}</span>
                            </div>
                        </div>
                    </div>

                    <div className="hidden p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800" id="services" role="tabpanel" aria-labelledby="services-tab">
                        {/* List */}
                        <ul role="list" className="space-y-4 text-gray-500 dark:text-gray-400">
                        <li className="flex space-x-2">
                                {/* Icon */}
                                <svg className="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                                <span className="leading-tight">No of Members : {propTypes.homeData.numOfHouseMembers}</span>
                            </li>
                            <li className="flex space-x-2">
                                {/* Icon */}
                                <svg className="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                                <span className="leading-tight">Area Of House : {propTypes.homeData.areaOfHouse} Sqr. Ft </span>
                            </li>
                            <li className="flex space-x-2">
                                {/* Icon */}
                                <svg className="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                                <span className="leading-tight">No Of Room : {propTypes.homeData.numOfRooms}</span>
                            </li>
                            <li className="flex space-x-2">
                                {/* Icon */}
                                <svg className="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                                <span className="leading-tight">Rooms On Rent : {propTypes.homeData.numOfRoomsOnRent}</span>
                            </li>
                            <li className="flex space-x-2">
                                {/* Icon */}
                                <svg className="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                                <span className="leading-tight">No of vehicles : {propTypes.homeData.numOfVehicles}</span>
                            </li>

                        </ul>
                    </div>
                    <div className="hidden p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800" id="statistics" role="tabpanel" aria-labelledby="statistics-tab">
                    <div className='w-full sm:flex sm:justify-between'>
                            <div className='w-full mb-4 sm:mb-0'>
                                <span className='text-lg font-bold'>House No:</span>
                                <span className='ml-2'>{propTypes.homeData.houseNo}</span>
                            </div>
                            <div className='w-full'>
                                <span className='text-lg font-bold'>Society:</span>
                                <span className='ml-2'>{propTypes.homeData.society?propTypes.homeData.society.societyName:null}</span>
                            </div>
                        </div>
                        <div className='w-full sm:flex sm:justify-between'>
                            <div className='w-full mb-4 sm:mb-0'>
                                <span className='text-lg font-bold'>Street:</span>
                                <span className='ml-2'>{propTypes.homeData.society?propTypes.homeData.society.street:null}</span>
                            </div>
                            <div className='w-full'>
                                <span className='text-lg font-bold'>Pincode:</span>
                                <span className='ml-2'>{propTypes.homeData.society?propTypes.homeData.society.pincode:null}</span>
                            </div>
                        </div>
                        <div className='w-full sm:flex sm:justify-between'>
                            <div className='w-full mb-4 sm:mb-0'>
                                <span className='text-lg font-bold'>City:</span>
                                <span className='ml-2'>{propTypes.homeData.society?propTypes.homeData.society.city:null}</span>
                            </div>
                            <div className='w-full'>
                                <span className='text-lg font-bold'>State:</span>
                                <span className='ml-2'>{propTypes.homeData.society?propTypes.homeData.society.state:null}</span>
                            </div>
                    </div>
                    </div>
                </div>
            </div>
            {/* Electricty Details */}
            <div className='w-full md:flex'>
            <div className=" w-90 sm:w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-10 mr-5">
                <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 rounded-t-lg bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:bg-gray-800" id="defaultTab" data-tabs-toggle="#defaultTabContent" role="tablist">
                    <li className="mr-2">
                        <button id="about-tab" data-tabs-target="#about" type="button" role="tab" aria-controls="about" aria-selected="true" className="inline-block text-xl p-4 text-blue-600 rounded-tl-lg hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-blue-500">Electricity Details</button>
                    </li>
                </ul>
                <div id="defaultTabContent">
                    <div className="p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800" id="about" role="tabpanel" aria-labelledby="about-tab">
                        <div className='w-full '>
                            <div className='w-full '>
                                <span className='text-lg font-bold'>Meter owner Name:</span>
                                <span className='ml-2'>{propTypes.electricityData.accountHolderName}</span>
                            </div>
                            <div className='w-full '>
                                <span className='text-lg font-bold'>Meter Power:</span>
                                <span className='ml-2'>{propTypes.electricityData.meterPower} KW</span>
                            </div>
                        </div>
                        <div className='w-full '>
                            <div className='w-full '>
                                <span className='text-lg font-bold'>Meter No:</span>
                                <span className='ml-2'>{propTypes.electricityData.meterNumber}</span>
                            </div>
                            <div className='w-full '>
                                <span className='text-lg font-bold'>Holder Mobile No:</span>
                                <span className='ml-2'>{propTypes.electricityData.accountHolderPhoneNumber}</span>
                            </div>
                        </div>
                        <div className='w-full'>
                            <div className='w-full '>
                                <span className='text-lg font-bold'>Power Corporation:</span>
                                <span className='ml-2'>{propTypes.electricityData.powerCorporationName}</span>
                            </div>
                        </div>
                       <Link to="/see_electricity_transaction"> <button type="button" className="mt-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">See Electricity Transactions</button>
                       </Link>
                    </div>
            </div>
            </div>
            {/* Water Departments */}
            <div className="w-90 sm:w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-10 mr-5">
                <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 rounded-t-lg bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:bg-gray-800" id="defaultTab" data-tabs-toggle="#defaultTabContent" role="tablist">
                    <li className="mr-2">
                        <button id="about-tab" data-tabs-target="#about" type="button" role="tab" aria-controls="about" aria-selected="true" className="inline-block text-xl p-4 text-blue-600 rounded-tl-lg hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-blue-500">Water Details</button>
                    </li>
                </ul>
                <div id="defaultTabContent">
                    <div className=" p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800" id="about" role="tabpanel" aria-labelledby="about-tab">
                        <div className='w-full '>
                            <div className='w-full '>
                                <span className='text-lg font-bold'>Account Owner Name:</span>
                                <span className='ml-2'>{propTypes.waterData.billOwnerName}</span>
                            </div>
                            <div className='w-full '>
                                <span className='text-lg font-bold'>Usage Amount :</span>
                                <span className='ml-2'>{propTypes.waterData.watersageAmount} Liter</span>
                            </div>
                        </div>
                        <div className='w-full '>
                            <div className='w-full '>
                                <span className='text-lg font-bold'>Water account No:</span>
                                <span className='ml-2'>{propTypes.waterData.billNumber}</span>
                            </div>
                            <div className='w-full '>
                                <span className='text-lg font-bold'>Holder Mobile No:</span>
                                <span className='ml-2'>{propTypes.waterData.billOwnerName}</span>
                            </div>
                        </div>
                        <div className='w-full '>
                            <div className='w-full '>
                                <span className='text-lg font-bold'>Source:</span>
                                <span className='ml-2'>{propTypes.waterData.waterSource}</span>
                            </div>
                        </div>
                        <Link to="/see_water_transaction"> <button type="button" className="mt-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">See water Transactions</button>
                       </Link>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default UserProfileDetails