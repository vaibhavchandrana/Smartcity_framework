import React, { useEffect, useState } from 'react'
import axios from 'axios'
import api from "../../api"
import { toast,Toaster } from 'react-hot-toast'
import emailjs from '@emailjs/browser';
import { ThreeCircles } from 'react-loader-spinner';
const AddHomeDetail = (propTypes) => {
  const [houseno, setHouseNo] = useState("");
  const [ownername, setOwnername] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [noOfMember, setnoOfMember] = useState("");
  const [noOfRooms, setnoOfRooms] = useState("");
  const [areaOfHouse, setAreaOfHouse] = useState("");
  const [noOfRoomsOnRent, setnoOfRoomsOnRent] = useState("");
  const [noOfVehicles, setnoOfVehicles] = useState("");
  const [ownerType, setOwnerType] = useState("");
  const [society, setSociety] = useState("");
  const [allsocieties, setAllScocities] = useState([])

  const [contacterror, setContactError] = useState(null);
  const [ownererror, setOwnerError] = useState(null);
  const[emailError,setEmailError]=useState("")
  const [confirmEmail,setConfirmEmail]=useState("")
  const [loading,setLoading]=useState(false)
  const nameRegex = /^[a-zA-Z' ']{05,25}$/;
  const contactRegex = /^\d{10}$/;
  const validation = () => {
    let bool = true;
    if (!nameRegex.test(ownername)) {
      setOwnerError("* Only alphabets are allowed!!!");
      bool = false;
    }
    else {
      setOwnerError(null);
    }
    if (!contactRegex.test(contact)) {
      setContactError("* Contacts should be of length 10 digits!!!");
      bool = false;
    }
    else {
      setContactError(null);
    }
    if(email!==confirmEmail)
    {
      setEmailError("* email shoould be same");
      bool=false;
    }
    else{
      setEmailError(null)
    }
    return bool;
  }


  const sendEmail = async (password) => {
    const templateParams = {
      to_email: email,
      from_name: 'Smartcity Application',
      to_name: ownername,
      password: password,
      message: 'This is a mendatory step otherwise you will loose your account',
    };

        await emailjs.send(process.env.REACT_APP_YOUR_SERVICE_ID, process.env.REACT_APP_YOUR_TEMPLATE_ID, templateParams, process.env.REACT_APP_YOUR_USER_ID)
          .then((result) => {
            // toast.success('Email is sent to user');
          }, (error) => {
            // toast.error('Oops... ' + JSON.stringify(error));
          });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!validation()) {
        toast.error("Please Enter correct details");
      return false;
    }

    let homeDetailsObj = {
      houseNo: houseno,
      ownerName: ownername,
      ownerPhone: contact,
      numOfHouseMembers: noOfMember,
      ownerEmail: email,
      numOfRooms: noOfRooms,
      numOfRoomsOnRent: noOfRoomsOnRent,
      areaOfHouse: areaOfHouse,
      ownerType: ownerType,
      society: society,
      numOfVehicles: noOfVehicles
    }
    var password = ""
    setLoading(true)
    await axios.post(`${api}/employee/add/home`, homeDetailsObj).then((res) => {
      password = res.data.password
      sendEmail(password);
        toast.success("User is added successfully")
    }).catch((err) => {
        toast.error("Something went wrong")
      console.log(err);
    })
    setLoading(false)

  }
  useEffect(() => {
    async function getAllSociety() {
      await axios.get(`${api}/employee/get/societies/all`).then((res) =>
        setAllScocities(res.data)).catch((err) => {
          console.log("error is ", err)
        })
    }
    getAllSociety()
  }, [])





  const onHouseNoChange = (e) => {
    setHouseNo(e.target.value);
  }

  const onOwnernameChange = (e) => {
    setOwnername(e.target.value);
  }

  const onEmailChange = (e) => {
    setEmail(e.target.value);
  }
  const onConfirmEmailChange = (e) => {
    setConfirmEmail(e.target.value);
  }

  const onContactChange = (e) => {
    setContact(e.target.value);
  }

  const onnoOfMemberName = (e) => {
    setnoOfMember(e.target.value);
  }

  const onnoOfRoomsChange = (e) => {
    setnoOfRooms(e.target.value);
  }

  const onAreaOfHouseChange = (e) => {
    setAreaOfHouse(e.target.value);
  }

  const onNoOfRoomsOnRentChange = (e) => {
    setnoOfRoomsOnRent(e.target.value);
  }

  const onNoOfVehiclesChange = (e) => {
    setnoOfVehicles(e.target.value);
  }

  const onOwnerTypeChange = (e) => {
    setOwnerType(e.target.value);
  }

  const onSocetyChange = (e) => {
    setSociety(e.target.value);
  }

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-2 px-4 mx-auto max-w-4xl lg:py-16">
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Add a new Home</h2>
       
        <form onSubmit={submitHandler}>
          < div className="grid gap-4 sm:grid-cols-2 sm:gap-6">

            <div className="w-full">
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Owner Name</label>
              <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Onwer Name ( As per Adhar Card )" value={ownername} required onChange={onOwnernameChange} />
            <h3 className='text-red-600 text-lg italic'>{ownererror}</h3>
            </div>
            <div className="w-full">
              <label htmlFor="houseNumber" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">House Number</label>
              <input type="text" name="houseNumber" id="houseNumber" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" value={houseno} placeholder="Ex H105" required onChange={onHouseNoChange}/>
            </div>
            
            <div className="w-full">
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Owner Email</label>
              <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="vaibhav@gmail.com" value={email} required onChange={onEmailChange} />
              <h3 className='text-red-600 text-lg italic'>{emailError}</h3>

            </div>
            <div className="w-full">
              <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Owner Phone Number</label>
              <input type="text" name="phone" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Must be of 10 digit" value={contact} required onChange={onContactChange}/>
              <h3 className='text-red-600 text-lg italic'>{contacterror}</h3>

            </div>
            <div className="w-full">
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm Email</label>
              <input type="confirmEmail" name="confirmEmail" id="confirmEmail" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="vaibhav@gmail.com" value={confirmEmail} required onChange={onConfirmEmailChange}/>
              <h3 className='text-red-600 text-lg italic'>{emailError}</h3>

            </div>
            <div className="w-full">
              <label htmlFor="vehicle" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">No Of Vehicle</label>
              <input type="number" min={0} name="vehicle" id="vehicle" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Must be of 10 digit" required value={noOfVehicles} onChange={onNoOfVehiclesChange} />
            </div>
            <div className="w-full">
              <label htmlFor="member" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">No of House  Member</label>
              <input type="number" min={1} name="member" id="member" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Number of member in house" value={noOfMember}
              required onChange={onnoOfMemberName}/>
            </div>
            <div className="w-full">
              <label htmlFor="noOfRoom" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Number Of Rooms</label>
              <input type="number" min={1} name="noOfRoom" id="noOfRoom" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Number of Rooms" value={noOfRooms} required onChange={onnoOfRoomsChange}/>
            </div>
            <div className="w-full">
              <label htmlFor="noRent" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">No of Rooms On Rent</label>
              <input type="number" min={1} name="noRent" id="noRent" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder=" Number of Rooms on Rent" required onChange={onNoOfRoomsOnRentChange} value={noOfRoomsOnRent} />
            </div>
            <div className="w-full">
              <label htmlFor="area" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Area Of house (in Sq. Ft.)</label>
              <input type="number" min={1} name="area" id="area" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Area of house in Square Feet" required onChange={onAreaOfHouseChange} value={areaOfHouse}/>
            </div>
            <div>
              <label htmlFor="society" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Society</label>
              <select id="society" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" onChange={onSocetyChange}>
                <option selected>Select category</option>
                {allsocieties.map((item,index) => {
                  return (
                    <option key={index} value={item._id}>{item.societyName}</option>
                  )
                })
                }
              </select>
            </div>
            <div>
              <label htmlFor="Onwer_Type" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Current Status</label>
              <select id="Onwer_Type" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" onChange={onOwnerTypeChange}>
                <option selected>Select category</option>
                <option value="On Rent">On Rent</option>
                <option value="Self Occupied">Self Occupied</option>
                <option value="Vacant">Vacant</option>
              </select>
            </div>

          </div>
          <button type="submit" className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800" onClick={submitHandler}>
            Add Home
          </button>
        </form>
      </div>
    </section>
  )
}
export default AddHomeDetail