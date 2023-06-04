import React, { useState,useEffect } from 'react'
import axios from "axios";
import api from '../../api';
import { toast, Toaster } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const AddSociety = () => {
    var navigate = useNavigate()

    const [societyno, setSocietyno] = useState("");
    const [societyname, setSocietyName] = useState("");
    const [city, setCity] = useState("");
    const [pincode, setPincode] = useState("");
    const [street, setStreet] = useState("");
    const [state, setState] = useState("");
    const[show,setShow]=useState(false)

    const onSocietyNoChange = (e) => {
        setSocietyno(e.target.value);
        console.log(e.target.value);
    }

    const onSocietyNameChange = (e) => {
        setSocietyName(e.target.value);
        console.log(e.target.value);
    }

    const onCityChange = (e) => {
        setCity(e.target.value);
        console.log(e.target.value);
    }

    const onPinChange = (e) => {
        setPincode(e.target.value);
        console.log(e.target.value);
    }

    const onStreetChange = (e) => {
        setStreet(e.target.value);
        console.log(e.target.value);
    }

    const onStateChange = (e) => {
        setState(e.target.value);
        console.log(e.target.value);
    }
   
  const submitHandler = (e) => {

    e.preventDefault();
    let societyObj = {
      societyNumber: societyno,
      societyName: societyname,
      city: city,
      pincode: pincode,
      street: street,
      state: state,
    }
   setShow(true)
    axios.post(`${api}/employee/add/society`, societyObj).then((res) => {
      toast.success('Society Added');
    }).catch((err) => {
      toast.error('Oops... ' + JSON.stringify(err));
    })
    setShow(false)
  }
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
  
    return (
        <div className='mt-10'>
            <section className="bg-white dark:bg-gray-900">
                <div className="py-2 px-4 mx-auto max-w-4xl lg:py-16">
                    <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Add New Society</h2>
                    <form onSubmit={submitHandler}>
                        < div className="grid gap-4 sm:grid-cols-2 sm:gap-6">

                            <div className="w-full">
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Society  Name</label>
                                <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Society Name" value={societyname} required onChange={onSocietyNameChange} />
                            </div>
                            <div className="w-full">
                                <label htmlFor="societyNumber" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Society Number</label>
                                <input type="text" name="societyNumber" id="societyNumber" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Enter Society Number" required onChange={onSocietyNoChange} value={societyno} />
                            </div>
                            <div className="w-full">
                                <label htmlFor="Street" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Street</label>
                                <input type="text" name="Street" id="Street" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Street Name" value={street} required onChange={onStreetChange} />
                            </div>
                            <div className="w-full">
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> City</label>
                                <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Enter City" value={city} required onChange={onCityChange} />
                            </div>
                            <div className="w-full">
                                <label htmlFor="pincode" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Pin Code</label>
                                <input type="text" name="pincode" id="pincode" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Enter Pincode" value={pincode} required onChange={onPinChange} />
                            </div>
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
                        </div>
                        <button type="submit" className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800" onClick={submitHandler}>
                            Add Society
                        </button>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default AddSociety