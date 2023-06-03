import React from 'react'
import UserProfileDetails from './UserProfileDetails'
import axios from 'axios'
import api from '../api'
import { useNavigate } from 'react-router-dom'
import { useEffect,useState } from 'react'
const UserProfile = () => {
    var navigate=useNavigate()
  const [homeData, sethomeData] = useState([]);
  const [waterData, setwaterData] = useState([]);
  const [electricityData, setElectricity] = useState([]);
  const [houseNo,setHouseNo]=useState('')
  const getHomeValues = async () => {
    await axios.get(`${api}/employee/get/home/${houseNo}`).then((res) => {
      sethomeData(res.data)
      console.log(res.data)
    })
  }
  
  const getWaterValues = async () => {
    await axios.get(`${api}/employee/get/details/water/${houseNo}`).then((res) => {
      // console.log(res.data);
      setwaterData(res.data);
    })
  }

  const getElectricityValues = async () => {
    await axios.get(`${api}/employee/get/details/electricity/${houseNo}`).then((res) => {
      console.log(res.data);
      setElectricity(res.data);
    })
  }
  useEffect(()=>{
    
    var profile=JSON.parse(localStorage.getItem('profile'))
    if(profile && profile.employee==="false")
    {
        setHouseNo(profile.houseNo);
    }
    else
    {
        navigate('/login')
    }
},[])


  useEffect(() => {
    if(houseNo){
    getHomeValues();
    getWaterValues();
    getElectricityValues();
    }
  }, [houseNo])

  return (
    <div className='mt-20 ml-10'>
        <h1 className='text-2xl sm:text-4xl font-bold '>Welcome, {homeData.ownerName}</h1>
       <UserProfileDetails homeData={homeData} waterData={waterData} electricityData={electricityData}/>

      
    </div>
  )
}

export default UserProfile