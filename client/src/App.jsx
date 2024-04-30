
import Home from "./pages/Home";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ProductDisplay from "./pages/products/ProductDisplay";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SingleProduct from "./pages/products/SingleProduct";
import PostReview from "./pages/PostReview";
import UserFeature from "./components/UserFeature";
import Admin from "./pages/adminPanel/Admin";
import Stat from "./pages/adminPanel/adminPages/Stat";
import { ToastContainer } from "react-toastify";
import Sidebar from "./components/Sidebar";
import TheReviewee from "./pages/products/TheReviewee";
import DisplayRevieweeResult from "./pages/products/DisplayRevieweeResult";
import SingleBusines from "./pages/products/SingleBusines";
import WriteBusinessReview from "./pages/products/WriteBusinessReview";

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './redux/rootReducer'; 

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


function App() {
  return (
     <Provider store={store}>
      <ToastContainer position="top-center" />
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Home}></Route>
          <Route path="/login" Component={Login}></Route>
          <Route path="/register" Component={Register}></Route>
          <Route
            path="/products/:selectedCategory"
            Component={ProductDisplay}
          ></Route>
          <Route path="/business/:companyID" Component={SingleBusines}></Route>

          <Route path="/write-review" Component={TheReviewee}></Route>
          <Route
            path="/search-review"
            Component={DisplayRevieweeResult}
          ></Route>

          <Route
            path="/products/:selectedCategory/:product/:id"
            Component={SingleProduct}
          ></Route>
          <Route path="/products/feedback/:id" Component={PostReview}></Route>
          <Route
            path="/business/feedback/:id"
            Component={WriteBusinessReview}
          ></Route>

          <Route path="/admin" Component={Admin}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
