import React from 'react'
import AdminHeader from './AdminHeader'
import AdminPageContent from './AdminPageContent'
import AdminSideBar from './AdminSideBar'

const Admin = () => {
  return (
    <div>
      <AdminHeader />
      <section className='admin-container'>
        <AdminSideBar />
        <AdminPageContent />
      </section>
    </div>
  );
}

export default Admin
