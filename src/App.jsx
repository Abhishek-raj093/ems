import { useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeDashboard from './components/Dashboard/EmployeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'

function App() {

  useEffect(() => {
    // setLocalStorage()
    getLocalStorage()
  })

  return (
    <>
     <Login/>
     {/* <EmployeDashboard/> */}
     {/* <AdminDashboard /> */}
    </>
  )
}

export default App
