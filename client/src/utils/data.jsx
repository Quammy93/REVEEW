import React from "react";
import { VscRemoteExplorer } from "react-icons/vsc";
import { IoRestaurantOutline } from "react-icons/io5";
import { PiBowlFood, PiDress, PiTelevision } from "react-icons/pi";
import { SiYourtraveldottv } from "react-icons/si";
import { TiMediaPlay } from "react-icons/ti";
import { FaComputer } from "react-icons/fa6";
import feature1 from "../../public/feature1.jpg";
import feature3 from "../assets/images/feature3.jpg";
import feature4 from "../assets/images/feature4.jpg";
import feature5 from "../assets/images/feature5.jpg";
import feature6 from "../assets/images/feature6.jpg";

import fashion from '../assets/images/iconImages/fashion.png'
import appliances from "../assets/images/iconImages/appliances.png";
import computing from "../assets/images/iconImages/computing.png";
import electronic from "../assets/images/iconImages/electronic.png";
import medical from "../assets/images/iconImages/medical.png";
import phone from "../assets/images/iconImages/phone.png";
import restaurant from "../assets/images/iconImages/restaurant.png";
import travel from "../assets/images/iconImages/travel.png";
import service from "../assets/images/iconImages/service.png";





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
        label: "Resturant",
        icon: restaurant,
        icon1: <IoRestaurantOutline />,
        url: "/products/resturant&bar?category= resturant&bar",
      },
      {
        label: "Fashion",
        icon: fashion,
        icon1: <PiDress />,
        url: "/products/Fashion?category=Fashion",
      },
      {
        label: "Travel and vacation",
        icon: travel,
        icon1: <SiYourtraveldottv />,
        url: "/products/Travel&vacation?category= travel&vacation",
      },

      {
        label: "Health & Medical",
        icon: medical,
        icon1: <MdOutlineMedicalServices />,
        url: "/products/health&medical?category=health&medical",
      },

      {
        label: "Electronic & Tech",
        icon: electronic,
        icon1: <PiTelevision />,
        url: "/products/Electronics&tech?category= Electronics",
      },
      {
        label: "Computing",
        icon: computing,
        icon1: <FaComputer />,
        url: "/products/Computing?category= Computing",
      },

      {
        label: "Phone & Tablet",
        icon: phone,
        icon1: <MdOutlinePhoneAndroid />,
        url: "/products/ Phone and tablet?category= Phone and tablet",
      },
      {
        label: "Services",
        icon: service,
        icon1: <IoRestaurantOutline />,
        url: "/products/business&services?category=business&services",
      },
    ],
  },

  {
    page: "Features",
    links: [
      {
        label: "Product Review",
        icon: { feature1 },
        url: "/products/All Products?category=All Products",
      },
      {
        label: "Service Review",
        icon: { feature3 },
        url: "/search-review",
      },
      {
        label: "Location Review",
        icon: { feature4 },
        url: "/Our Company",
      },
      {
        label: "Review Invitation",
        icon: { feature5 },
        url: "/Our Company",
      },
    ],
  },
];




export default sublinks;
