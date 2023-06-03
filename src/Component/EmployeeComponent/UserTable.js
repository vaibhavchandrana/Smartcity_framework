import React from 'react'
import { AiFillEye } from 'react-icons/ai';

const UserTable = (propTypes) => {
    return (
        <div>

            <div className="overflow-x-auto mt-3">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-4 py-3">House Owner name</th>
                            <th scope="col" className="px-4 py-3">House Number</th>
                            <th scope="col" className="px-4 py-3">Society</th>
                            <th scope="col" className="px-4 py-3">City</th>
                            <th scope="col" className="px-4 py-3">
                                <span className="sr-only">Actions</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {propTypes.userList.map((item, index) => {
                            return (
                                <tr key={`item-no-${index}`} className="border-b dark:border-gray-700">
                                    <th scope="row" className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">{item.ownerName}</th>
                                    <td className="px-4 py-3">{item.houseNo}</td>
                                    <td className="px-4 py-3">{item.society ? item.society.societyName : null}</td>
                                    <td className="px-4 py-3">{item.society ? item.society.city : null}</td>
                                    <td className="px-4 py-3 flex items-center justify-end">
                                              <button type="button" onClick="" className="flex items-center justify-center px-4 py-2 text-xl font-medium text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"><AiFillEye></AiFillEye></button>
                                    </td>

                                </tr>
                            )
                        })

                        }

                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default UserTable