
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
        icon: <IoRestaurantOutline />,
        url: "/products/resturant&bar?category= resturant&bar",
      },
      {
        label: "Fashion",
        icon: <PiDress />,
        url: "/products/Fashion?category=Fashion",
      },
      {
        label: "Travel and vacation",
        icon: <SiYourtraveldottv />,
        url: "/products/Travel&vacation?category= travel&vacation",
      },

      {
        label: "Food",
        icon: <PiBowlFood />,
        url: "/products/food?category=food",
      },
      {
        label: "Health & Medical",
        icon: <MdOutlineMedicalServices />,
        url: "/products/health&medical?category=health&medical",
      },
      {
        label: "Media & Publicity",
        icon: <TiMediaPlay />,
        url: "/products/Medial&publicity?category= Media&publicity",
      },

      {
        label: "Electronic & Tech",
        icon: <PiTelevision />,
        url: "/products/Electronics&tech?category= Electronics",
      },
      {
        label: "Computing",
        icon: <FaComputer />,
        url: "/products/Computing?category= Computing",
      },
      {
        label: "Education & Training",
        icon: <MdOutlineCastForEducation />,
        url: "/products/Education&training?category= Education&training",
      },
      {
        label: "Phone & Tablet",
        icon: <MdOutlinePhoneAndroid />,
        url: "/products/ Phone and tablet?category= Phone and tablet",
      },
      {
        label: "Business Services",
        icon: <IoRestaurantOutline />,
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
        url: "/Our Company",
      },
      {
        label: "Service Review",
        icon: { feature3 },
        url: "/Our Company",
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
