import React from "react";
import axios from "axios";
const url = "http://localhost:5000/api";
//const url = "/api";

const LogMeOut = async () => {
  await axios
    .get(`${url}/users/logout`)
    .then((response) => {
      if (response.status === 200) {
        navigate("/");
        localStorage.removeItem("loggedIn");
        localStorage.removeItem("loggedUser");
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

const UserNavigation = () => {
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
