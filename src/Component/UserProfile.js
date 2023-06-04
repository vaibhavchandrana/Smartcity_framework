import React from 'react'
import UserProfileDetails from './UserProfileDetails'
import axios from 'axios'
import api from '../api'
import { useNavigate } from 'react-router-dom'
import { useEffect,useState } from 'react'
import { ThreeCircles } from 'react-loader-spinner';
import { toast } from 'react-hot-toast'

const UserProfile = () => {
  var navigate=useNavigate()
  const [homeData, sethomeData] = useState([]);
  const [waterData, setwaterData] = useState([]);
  const [electricityData, setElectricity] = useState([]);
  const [houseNo,setHouseNo]=useState('')
  const [show, setShow] = useState(true
    )
  const getHomeValues = async () => {
    setShow(true)

    await axios.get(`${api}/employee/get/home/${houseNo}`).then((res) => {
      sethomeData(res.data)
    }).catch(()=>
    {
      toast.error("Something Went Wrong");
    })
    setShow(false)

  }
  
  const getWaterValues = async () => {
    setShow(true)

    await axios.get(`${api}/employee/get/details/water/${houseNo}`).then((res) => {
      // console.log(res.data);
      setwaterData(res.data);
    }).catch(()=>
    {
      toast.error("Something Went Wrong");
    })
    setShow(false)

  }

  const getElectricityValues = async () => {
    setShow(true)

    await axios.get(`${api}/employee/get/details/electricity/${houseNo}`).then((res) => {
      setElectricity(res.data);
    }).catch(()=>
    {
      toast.error("Something Went Wrong");
    })
    setShow(false)

  }
  useEffect(()=>{
    
    var profile=JSON.parse(localStorage.getItem('profile'))
    if(profile )
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
       {show ? 
        <div className='w-full mt-10 flex justify-center'>
          <center>
            <ThreeCircles color='black'></ThreeCircles>
            </center>
            </div>
        : <><h1 className='text-2xl sm:text-4xl font-bold '>Welcome, {homeData.ownerName}</h1>
       <UserProfileDetails homeData={homeData} waterData={waterData} electricityData={electricityData}/>
       </>}
      
    </div>
  )
}

export default UserProfile