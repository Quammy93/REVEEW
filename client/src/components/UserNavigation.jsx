import React from "react";
import axios from "axios";
const url = "http://localhost:5000/api";
//const url = "/api";
import { useNavigate } from "react-router-dom";

const UserNavigation = () => {
  const navigate = useNavigate();

  const LogMeOut = async () => {
    await axios
      .get(`${url}/logout`)
      .then((response) => {
        //  if (response.status === 200) {
        //navigate("/");
        window.location.reload();
        localStorage.removeItem("loggedIn");
        localStorage.removeItem("loggedUser");
        //   }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <section className="user-nav">
      <ul className="user-navlist">
        <li href="/write-review" className="a-user">
          My Reviews
        </li>

        <li href="/write-review" className="a-user">
          My Account
        </li>

        <li href="/write-review" className="a-user" onClick={LogMeOut}>
          Log out
        </li>
      </ul>
    </section>
  );
};

export default UserNavigation;
