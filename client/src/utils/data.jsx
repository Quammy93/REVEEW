
import React from "react";
import { VscRemoteExplorer } from "react-icons/vsc";
import { IoRestaurantOutline } from "react-icons/io5";
import { PiBowlFood, PiDress, PiTelevision } from "react-icons/pi";
import {  SiYourtraveldottv } from "react-icons/si";
import { TiMediaPlay } from "react-icons/ti";
import { FaComputer } from "react-icons/fa6";
import feature1 from "../../public/feature1.jpg";;
import feature3 from "../assets/images/feature3.jpg";
import feature4 from "../assets/images/feature4.jpg";
import feature5 from "../assets/images/feature5.jpg";
import feature6 from "../assets/images/feature6.jpg";




import { FaLaptopHouse } from "react-icons/fa";

import {
  MdConnectWithoutContact,
  MdLeaderboard,
  MdOutlineBusinessCenter,
  MdOutlineMedicalServices,
  MdOutlineCastForEducation,
  MdOutlinePhoneAndroid,
} from "react-icons/md";


const sublinks = [
  {
    page: "Categories",
    links: [
      {
        label: "Resturant & Bar",
        icon: <IoRestaurantOutline/>,
        url: "/Remote Management",
      },
      {
        label: "Shopping & Fashion",
        icon: <PiDress/>,
        url: "/Remote Management",
      },
      {
        label: "Travel and vacation",
        icon: <SiYourtraveldottv/>,
        url: "/Remote Management",
      },
     
      {
        label: "Food",
        icon: < PiBowlFood/>,
        url: "/Remote Management",
      },
      {
        label: "Health & Medical",
        icon: <MdOutlineMedicalServices/>,
        url: "/Remote Management",
      },
      {
        label: "Media & Publicity",
        icon: <TiMediaPlay/>,
        url: "/Remote Management",
      },
  
      {
        label: "Electronic & Tech",
        icon: <PiTelevision />,
        url: "/Remote Management",
      },
      {
        label: "Computing",
        icon: <FaComputer/>,
        url: "/Remote Management",
      },
      {
        label: "Education & Training",
        icon: <MdOutlineCastForEducation/>,
        url: "/Remote Management",
      },
      {
        label: "Mobile & Tablet",
        icon: < MdOutlinePhoneAndroid/>,
        url: "/Remote Management",
      },
      {
        label: "Business Services",
        icon: <IoRestaurantOutline/>,
        url: "/Remote Management",
      },
     
    ],
  },

  {
    page: "Features",
    links: [
      {
        label: "Product Review",
        icon: {feature1},
        url: "/Our Company",
      },
      {
        label: "Service Review",
        icon: {feature3},
        url: "/Our Company",
      },
      {
        label: "Location Review",
        icon: {feature4},
        url: "/Our Company",
      },
      {
        label: "Review Invitation",
        icon: {feature5},
        url: "/Our Company",
      },
    ],
  },
];

export default sublinks;
