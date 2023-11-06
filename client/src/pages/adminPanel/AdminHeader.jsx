import React from 'react'
import "../../assets/css/adminheader.css"
import {FaUser,FaSortDown,FaCaretRight} from "react-icons/fa"

const AdminHeader = () => {
  return (
    <nav>
      <div className="logo">REVEEW</div>
      <div className="">
        Admin Panel
      </div>
      <div className="admin-user">
        <span><span><FaUser/></span><span className='ad-name'>Deoladdfgjhklkhhkj</span></span>
        <span><FaSortDown/></span>
      </div>
    </nav>
  );
}

export default AdminHeader
