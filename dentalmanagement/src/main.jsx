import React from 'react'
import ReactDOM from 'react-dom/client'

import CreateNurseAccount from './Components/CreateNurseAccount'
import CreateDoctorAccount from './Components/CreateDoctorAccount'
import CreateStaffAccount from './Components/CreateStaffAccount'
// import CreateStudentAccount from './Components/CreateStudentAccount.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <CreateStudentAccount /> */}
    <CreateStaffAccount />
    <CreateDoctorAccount />
    <CreateNurseAccount />

  </React.StrictMode>,
)
