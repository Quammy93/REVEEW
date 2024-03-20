import React from "react";
import Navbar2 from "../../components/Navbar2";
import  "../../assets/css/thereviewee.css";
const TheReviewee = () => {
  return (
    <div>
      <Navbar2 />
      <div className="reviewee-container">
        <h2>Find a business to review</h2>
        <h4>
          Review anything from your favorite patio spot to your local flower
          shop.
        </h4>
        <form action="" className="reviewee-form">
          <div className="therevieweeinput">
            <aside>
              {" "}
              <input
                type="text"
                className="find-reviewee-inpt1"
                aria-autocomplete={false}
                autoComplete={false}
              />
            </aside>
            <input type="text" className="find-reviewee-inpt2" />
            <buton>Search</buton>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TheReviewee;
