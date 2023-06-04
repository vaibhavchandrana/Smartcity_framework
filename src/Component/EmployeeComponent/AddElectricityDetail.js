import React, { useState } from 'react'
import axios from "axios";
import api from '../../api';
import { toast, Toaster } from 'react-hot-toast'

const AddElectricityDetail = () => {
    const [meterno, setmeterno] = useState("");
    const [meterpower, setmeterpower] = useState("");
    const [holdername, setholdername] = useState("");
    const [corporation, setCorporation] = useState("");
    const [phonenumber, setPhoneNumber] = useState("");
    const [houseno, setHouseNo] = useState("");
    const [phonenumbererror, setPhoneNumberError] = useState(null);
    const [ownererror, setOwnerError] = useState(null);


    const phonenumberRegex = /^\d{10}$/;

    const nameRegex = /^[a-zA-Z' ']{05,25}$/;
    const validation = () => {

        let bool = true;
        if (!nameRegex.test(holdername)) {
            setOwnerError("* Only alphabets are allowed!!!");
            bool = false;
        }
        else {
            setOwnerError(null);
        }

        if (!phonenumberRegex.test(phonenumber)) {
            setPhoneNumberError("Contacts should be of length 10 digits!!!")
            bool = false;
        }
        else {
            setPhoneNumberError(null);
        }
        return bool;
    }



    const submitHandler = (e) => {
        e.preventDefault();
        if (!validation()) {
            toast.error("Please Enter correct details");
            return false;
        }
        else {
            console.log("Submitted");
        }

        var electricityDetailsObj = {
            meterNumber: meterno,
            meterPower: meterpower,
            accountHolderName: holdername,
            accountHolderPhoneNumber: phonenumber,
            powerCorporationName: corporation,
            houseNo: "AB001",
        };

        axios.post(`${api}/employee/add/details/electricity`, electricityDetailsObj).then((res) => {
            toast.success("Detials Added")
          }).catch((err) => {
            toast.error("Unable to add details")
          })

    }


    const onMeterNoChange = (e) => {
        setmeterno(e.target.value);
        // console.log(e.target.value);
    }

    const onMeterPowerChange = (e) => {
        setmeterpower(e.target.value);
        // console.log(e.target.value);
    }

    const onHolderNameChange = (e) => {
        setholdername(e.target.value);
        // console.log(e.target.value);
    }

    const onPhoneNumberChange = (e) => {
        setPhoneNumber(e.target.value);
        // console.log(e.target.value);
    }

    const onCorporationChange = (e) => {
        setCorporation(e.target.value);
        // console.log(e.target.value);
    }

    const onHouseNoChange = (e) => {
        setHouseNo(e.target.value);
    }


    return (
        <section className="bg-white dark:bg-gray-900">
            <Toaster position='top-right' />
            <div className="py-2 px-4 mx-auto max-w-4xl lg:py-16">
                <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Add Electricity Account Details</h2>
                <form onSubmit={submitHandler}>
                    < div className="grid gap-4 sm:grid-cols-2 sm:gap-6">

                        <div className="w-full">
                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Account Owner Name</label>
                            <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Account Onwer Name ( As per Munciple Data )" value={holdername} required onChange={onHolderNameChange} />
                            <h3 className='text-red-600 text-lg italic'>{ownererror}</h3>
                        </div>
                        <div className="w-full">
                            <label htmlFor="houseNumber" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Account Number</label>
                            <input type="text" name="houseNumber" id="houseNumber" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Enter Meter Number" value={meterno} required onChange={onMeterNoChange} />
                        </div>
                        <div className="w-full">
                            <label htmlFor="houseNumber" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Account Holder Phone Number</label>
                            <input type="text" name="phoneNumber" id="phoneNumber" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Enter Registered Phone Number" value={phonenumber} required onChange={onPhoneNumberChange} />
                            <h3 className='text-red-600 text-lg italic'>{phonenumbererror}</h3>
                        </div>
                        <div className="w-full">
                            <label htmlFor="meterPower" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Meter Power (KW) </label>
                            <input type="number" min={1} name="meterPower" id="meterPower" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Meter Power in KW" value={meterpower} required onChange={onMeterPowerChange} />
                        </div>
                        <div>
                            <label htmlFor="society" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select Co-orporation Name</label>
                            <select id="society" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" onChange={onCorporationChange} value={corporation}>
                                <option selected>Select Method</option>
                                <option value="NTPC Limited">NTPC Limited</option>
                                <option value="Power Grid Corporation of India Limited">Power Grid Corporation of India Limited</option>
                                <option value="Tata Power Company Limited">Tata Power Company Limited</option>
                                <option value="Reliance Power Limited">Reliance Power Limited</option>
                                <option value="Adani Power Limited">Adani Power Limited</option>
                                <option value="NTPC Vidyut Vyapar Nigam Limited">NTPC Vidyut Vyapar Nigam Limited</option>
                                <option value="NTPC Electric Supply Company Limited">NTPC Electric Supply Company Limited</option>
                                <option value="NTPC Renewable Energy Limited">NTPC Renewable Energy Limited</option>
                            </select>
                        </div>
                    </div>
                    <button type="submit" className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800" onClick={submitHandler}>
                        Add Electricity Details
                    </button>
                </form>
            </div>
        </section>
    )
}

export default AddElectricityDetail