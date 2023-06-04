import axios from 'axios';
import React, { useState } from 'react'
import api from '../../api';
import { toast,Toaster } from 'react-hot-toast'

const AddWaterDetails = () => {
  const [billNumber, setBillNumber] = useState("");
  const [waterSource, setwaterSource] = useState("");
  const [billOwnerName, setbillOwnerName] = useState("");
  const [sewageDisposalMethod, setsewageDisposalMethod] = useState("");
  const [ownererror, setOwnerError] = useState(null);

  const nameRegex = /^[a-zA-Z' ']{05,25}$/;
  const validation = () => {
    let bool = true;
    if (!nameRegex.test(billOwnerName)) {
      setOwnerError("* Only alphabets are allowed!!!");
      bool = false;
    }
    else {
      setOwnerError(null);
    }
    return bool;
  }


  const submitHandler = (e) => {
    e.preventDefault();
    if (!validation()) {
        toast.error("Please Enter correct details");
      return false;
    }
    let waterDetailsObj = {
      billNumber: billNumber,
      waterSource: waterSource,
      billOwnerName: billOwnerName,
      houseNo: "AB001",
    }

    axios.post(`${api}/employee/add/details/water`, waterDetailsObj).then((res) => {
      toast.success("Detials Added")
    }).catch((err) => {
      toast.error("Unable to add details")
    })
  }




  const onBillNumberChange = (e) => {
    setBillNumber(e.target.value);
  }

  
  const onWaterSourceChange = (e) => {
    setwaterSource(e.target.value);
  }


  const onBillOwnerName = (e) => {
    setbillOwnerName(e.target.value);
  }

  const onSewageDisposalMethodChange = (e) => {
    setsewageDisposalMethod(e.target.value);
  }



  return (
    <section className="bg-white dark:bg-gray-900">
    <div className="py-2 px-4 mx-auto max-w-4xl lg:py-16">
      <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Add Water Account Details</h2>
      <form onSubmit={submitHandler}>
        < div className="grid gap-4 sm:grid-cols-2 sm:gap-6">

          <div className="w-full">
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Account Owner Name</label>
            <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Account Onwer Name ( As per Munciple Data )" value={billOwnerName} required onChange={onBillOwnerName} />
          <h3 className='text-red-600 text-lg italic'>{ownererror}</h3>
          </div>
          <div className="w-full">
            <label htmlFor="houseNumber" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Account Number</label>
            <input type="text" name="houseNumber" id="houseNumber" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Enter Account Number" required onChange={onBillNumberChange} value={billNumber}/>
          </div>
          <div>
            <label htmlFor="society" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Sewage Disposal Method</label>
            <select id="society" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" onChange={onSewageDisposalMethodChange} value={sewageDisposalMethod}>
              <option selected>Select Method</option>
              <option value="Drainage">Drainage</option>
              <option value="Ground Disposal">Ground Disposal</option>
              <option value="Seaver Line">Seaver Line</option>
            </select>
          </div>
          <div>
            <label htmlFor="Onwer_Type" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Water Source</label>
            <select id="water_source" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" onChange={onWaterSourceChange} value={waterSource}>
              <option selected>Select Source</option>
              <option value="Ground Water">Ground Water</option>
              <option value="Nagar Nigam/ Palika">Nagar Nigam</option>
              <option value="Self Service">Self Service</option>
            </select>
          </div>
        </div>
        <button type="submit" className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800" onClick={submitHandler}>
          Add Water Details
        </button>
      </form>
    </div>
  </section>
  )
}

export default AddWaterDetails