import React from 'react'
import AdminFeed from './adminPages/AdminFeed';
import AdminProduct from './adminPages/AdminProduct';
import AdminReview from './adminPages/AdminReview';
import Stat from './adminPages/Stat';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const AdminRoutes = () => {
  return (
    <div>
        <BrowserRouter>
      <Routes>
       <Route path="/stat" Component={Stat}></Route>
        <Route path="/admin-product" Component={AdminProduct}></Route>
        <Route path="/admin-review" Component={AdminReview}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default AdminRoutes
