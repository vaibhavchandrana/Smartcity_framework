import React, { useState, useEffect } from 'react'
import axios from "axios";
import api from '../../api';
import { toast, Toaster } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const AddElectricityTransaction = () => {
    var navigate = useNavigate()

    const [houseno, setHouseNo] = useState("");
    const [BillNumber, setBillNumber] = useState("");
    const [paymentmethod, setPaymentMethod] = useState("");
    const [amount, setAmount] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [state, setState] = useState("");
    const [societynumber, setSocietyNumber] = useState("");
    const [city, setCity] = useState("");
    const [allCity, setAllCity] = useState([]);
    const [pincode, setPincode] = useState("");
    const [street, setStreet] = useState("");
    const [allsocieties, setAllScocities] = useState([])
    const [user, setUser] = useState([])
    var profile=JSON.parse(localStorage.getItem('profile'))
   
    useEffect(()=>{
      if(profile){
        if(profile.employee===true)
        {
          setState(1);
        }
        else{
          navigate('/login')
      }
    }
      else{
      navigate('/login')
    }
    },[])
  

    useEffect(() => {
        async function getAllSociety() {
            await axios.get(`${api}/employee/get/societies/all`).then((res) =>
                setAllScocities(res.data)).catch((err) => {
                    console.log("error is ", err)
                })
        }
        getAllSociety()
    }, [])
    useEffect(() => {
        async function getAllCities() {
            await axios.get(`http://localhost:8080/employee/get/cities/${state}`).then((res) =>
                setAllCity(res.data)).catch((err) => {
                    console.log("error is ", err)
                })
        }
        if (state) {

            getAllCities()
        }
    }, [state])
    useEffect(() => {
        async function getAllSocietiesInsideCity() {
            await axios.get(`http://localhost:8080/employee/get/societies/city/${city}`).then((res) =>
                setAllScocities(res.data)).catch((err) => {
                    console.log("error is ", err)
                })
        }
        if (city) {

            getAllSocietiesInsideCity()
        }
    }, [state])
    useEffect(() => {

        async function getAllUser() {
            await axios.get(`${api}/employee/society/houses/${societynumber}`).then((res) =>
                setUser(res.data)).catch((err) => {
                    console.log("error is ", err)
                })
        }
        if (societynumber) {
            getAllUser()
        }
    }, [societynumber])


    const onSocietyNumberChange = (e) => {
        setSocietyNumber(e.target.value);
    }

    const onCityChange = (e) => {
        setCity(e.target.value);
    }

    const onPinChange = (e) => {
        setPincode(e.target.value);
    }

    const onStreetChange = (e) => {
        setStreet(e.target.value);
    }

    const onStateChange = (e) => {
        setState(e.target.value);
    }

    const onHouseNoChange = (e) => {
        setHouseNo(e.target.value)
    }

    const onBillNumberChange = (e) => {
        setBillNumber(e.target.value);
    }

    const onPaymentMethodChange = (e) => {
        setPaymentMethod(e.target.value);
    }

    const onAmountChange = (e) => {
        setAmount(e.target.value);
    }

    const onDateChange = (e) => {
        setDate(e.target.value);
    }

    const onTimeChange = (e) => {
        setTime(e.target.value);
    }


    const submitHandler = async (e) => {
        e.preventDefault();
        let transactionObj = {
            houseNo: houseno,
            BillNumber: BillNumber,
            paymentMethod: paymentmethod,
            amount: amount,
            date: date,
            time: time
        }

        await axios.post(`${api}/employee/add/transaction/electricity`, transactionObj).then((res) => {
            toast.success("Detials Added")
          }).catch((err) => {
            toast.error("Unable to add details")
          })

    }

    return (
        <div className='mt-20'>
            <section className="bg-white dark:bg-gray-900">
                <div className="py-2 px-4 mx-auto max-w-4xl lg:py-16">
                    <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Add Electricity Transaction</h2>
                    <form onSubmit={submitHandler}>
                        < div className="grid gap-4 sm:grid-cols-2 sm:gap-6">

                            {/* select state */}
                            <div>
                                <label htmlFor="state" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select State</label>
                                <select id="state" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" onChange={onStateChange} value={state}>
                                    <option selected>Select State</option>
                                    <option value="Andhra Pradesh">Andhra Pradesh</option>
                                    <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                                    <option value="Assam">Assam</option>
                                    <option value="Bihar">Bihar</option>
                                    <option value="Chhattisgarh">Chhattisgarh</option>
                                    <option value="Goa">Goa</option>
                                    <option value="Gujarat">Gujarat</option>
                                    <option value="Haryana">Haryana</option>
                                    <option value="Himachal Pradesh">Himachal Pradesh</option>
                                    <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                                    <option value="Jharkhand">Jharkhand</option>
                                    <option value="Karnataka">Karnataka</option>
                                    <option value="Kerala">Kerala</option>
                                    <option value="Madhya Pradesh">Madhya Pradesh</option>
                                    <option value="Maharashtra">Maharashtra</option>
                                    <option value="Manipur">Manipur</option>
                                    <option value="Meghalaya">Meghalaya</option>
                                    <option value="Mizoram">Mizoram</option>
                                    <option value="Nagaland">Nagaland</option>
                                    <option value="Odisha">Odisha</option>
                                    <option value="Punjab">Punjab</option>
                                    <option value="Rajasthan">Rajasthan</option>
                                    <option value="Sikkim">Sikkim</option>
                                    <option value="Tamil Nadu">Tamil Nadu</option>
                                    <option value="Telangana">Telangana</option>
                                    <option value="Tripura">Tripura</option>
                                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                                    <option value="Uttarakhand">Uttarakhand</option>
                                    <option value="West Bengal">West Bengal</option>

                                </select>
                            </div>
                            {/* select city  */}
                            <div>
                                <label htmlFor="city" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select city</label>
                                <select id="city" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" onChange={onCityChange} value={city}>
                                    <option selected>Select City</option>
                                    {allCity.map((item,index)=>{
                                        return (
                                        <option value={item}>{item}</option>
                                        )
                                    })}

                                </select>
                            </div>
                            <div>
                                <label htmlFor="state" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select Society</label>
                                <select id="state" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" onChange={onSocietyNumberChange} value={societynumber}>
                                    <option selected>Select Society</option>
                                    {allsocieties.map((item, index) => (
                                        <option key={index} value={item._id}>{item.societyName}</option>
                                    ))}

                                </select>
                            </div>
                            <div>
                                <label htmlFor="home" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select Home</label>
                                <select id="home" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" onChange={onHouseNoChange} value={houseno}>
                                    <option selected>Select Home</option>
                                    {user.map((item, index) => (
                                        <option key={index} value={item.houseNo}>{item.ownerName}</option>
                                    ))}

                                </select>
                            </div>
                            <div className="w-full">
                                <label htmlFor="BillNumber" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Bill Number</label>
                                <input type="text" name="BillNumber" id="BillNumber" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Enter Bill Number" value={BillNumber} required onChange={onBillNumberChange} />
                            </div>

                            <div className="w-full">
                                <label htmlFor="Amount" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Amount( in Rs)</label>
                                <input type="text" name="Amount" id="Amount" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Enter Amount in Rupees" value={amount} required onChange={onAmountChange} />
                            </div>
                            <div>
                                <label htmlFor="payMethod" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select Payment Method</label>
                                <select id="payMethod" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" onChange={onPaymentMethodChange} value={paymentmethod}>
                                    <option selected>Select Payment Method</option>
                                    <option value="Paytm ">Paytm</option>
                                    <option value="UPI">UPI</option>
                                    <option value="Cash">CASH</option>
                                    <option value="Online Wallet">Online Wallet</option>
                                </select>
                            </div>
                            <div className="w-full">
                                <label htmlFor="DOP" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Date Of Payment</label>
                                <input type="date" name="DOP" id="DOP" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Enter Date of Payment" value={date} required onChange={onDateChange} />
                            </div>
                            <div className="w-full">
                                <label htmlFor="TOP" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Time Of Payment</label>
                                <input type="time" name="TOP" id="TOP" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Enter Amount in Rupees" value={time} required onChange={onTimeChange} />
                            </div>
                        </div>
                        <button type="submit" className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800" onClick={submitHandler}>
                            Add Transaction
                        </button>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default AddElectricityTransaction