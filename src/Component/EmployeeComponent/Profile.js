import React, { useEffect, useState } from 'react'
import api from "../../api"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Profile = () => {
    const [empDetail, setEmpDetail] = useState("");
    const [employee,setEmployee]=useState('')
    var navigate=useNavigate()
    useEffect(()=>{
    
        var profile=JSON.parse(localStorage.getItem('profile'))
        if(profile.empId)
        {
            setEmployee(profile.empId);
        }
        else
        {
            navigate('/login')
        }
    },[])
    useEffect(() => {
        if(employee)
        {
            axios.get(`${api}/employee/get/employee/${employee}`).then((res) => {
                console.log(res.data);
                setEmpDetail(res.data);
            }).catch((err) => {
                console.log(err);
            })
        }
        
    }, [employee])


  return (
    <div>
        
      {/* component */}
      <div className="flex items-center h-screen w-full justify-center">
        <div className="w-full ml-40 mr-40 md:w-1/2">
          <div className="bg-[#20354b] shadow-xl rounded-lg py-3">
            <div className="photo-wrapper p-2">
              <img className="w-40 h-40 rounded-full mx-auto" src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg" alt="John Doe" />
            </div>
            <div className="p-2">
              <h3 className="text-center text-xl text-white font-medium leading-8">{empDetail.name}</h3>
              <div className="text-center text-white text-xs font-semibold">
                <p>{empDetail.department}</p>
              </div>
              <center><table className="md:ml-20 my-3">
                <tbody>
                <tr>
                    <td className="px-2 py-2 text-white text-lg font-bold">Employee Id :</td>
                    <td className="px-2 py-2 text-white text-lg font-semibold">{empDetail.empId}</td>
                  </tr>
                  <tr>
                    <td className="px-2 py-2 text-white text-lg font-bold">Pan Card Number :</td>
                    <td className="px-2 py-2 text-white text-lg font-semibold">{empDetail.phone}</td>
                  </tr>
                  <tr>
                    <td className="px-2 py-2 text-white text-lg font-bold">Phone :</td>
                    <td className="px-2 py-2 text-white text-lg font-semibold">{empDetail.phone}</td>
                  </tr>
                  <tr>
                    <td className="px-2 py-2 text-white text-lg font-bold">Email :</td>
                    <td className="px-2 py-2 text-white text-lg font-semibold">{empDetail.email}</td>
                  </tr>
                  <tr>
                    <td className="px-2 py-2 text-white text-lg font-bold">Address :</td>
                    <td className="px-2 py-2 text-white text-lg font-semibold">Chatakpur-3, Dhangadhi Kailali</td>
                  </tr>
                </tbody></table></center>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Profile