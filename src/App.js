import React from 'react'
import Header from "./Component/Header"
// import Home from "./components/Home"
import Login from './Component/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import UserProfile from './Component/UserProfile';
import "./App.css"
import 'flowbite';
import Dashboard from './Component/EmployeeComponent/Dashboard';
import Home from './Component/Home';
import { AddHome } from './Component/EmployeeComponent/AddHome';
import SeeElectricityTransactions from './Component/SeeElectricityTransactions';
import SeeWaterTransactions from './Component/SeeWaterTransactions';
import AddSociety from './Component/EmployeeComponent/AddSociety';
import AddElectricityTransaction from './Component/EmployeeComponent/AddElectricityTransaction';
import AddWaterTransaction from './Component/EmployeeComponent/AddWaterTransaction';
import UserList from './Component/EmployeeComponent/UserList';
import Profile from './Component/EmployeeComponent/Profile';
import UserLogin from './Component/UserLogin';
import { Toaster } from 'react-hot-toast';
import Logout from './Component/Logout';
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Toaster position='top-center'/>

        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/' element={<Home />} />
          <Route path='/user_profile' element={<UserProfile />} />
          <Route path='/addHome' element={<AddHome />} />
          <Route path='/addSociety' element={<AddSociety />} />
          <Route path='/see_water_transaction' element={<SeeWaterTransactions />} />
          <Route path='/see_electricity_transaction' element={<SeeElectricityTransactions />} />
          <Route path='/add_electricity_transaction' element={<AddElectricityTransaction />} />
          <Route path='/add_water_transaction' element={<AddWaterTransaction />} />
          <Route path='/see_electricity_transaction' element={<SeeElectricityTransactions />} />
          <Route path='/user_list' element={<UserList />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/user_login' element={<UserLogin />} />
          <Route path='/logout' element={<Logout />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App