import React from "react";
import { Menu, Space } from "antd";
import Navbar from "../../components/Navbar";
import { useNavigate } from "react-router-dom";

const AdminSideBar = () => {
  const navigate = useNavigate();
  const [current, setCurrent] = React.useState("/stat");
  const onClick = async (e) => {
    console.log(e.key);
    setCurrent(e.key);
    navigate(e.key);
  };

  return (
    <div>
      <Menu
        onClick={onClick}
        selectedKeys={[current]}
        className="navlinks-container"
        mode="inline"
        defaultOpenKeys={["/dashboard"]}
        items={[
          {
            label: "Main",
            key: "/main",
            type: "group",
            children: [
              {
                label: "Dashboard ",
                key: "/dashboard",
              },
            ],
          },

          {type:"group",
            label: "List",
            ket: "/list",
            children: [
              {
                label: "Reviews",
                key: "/review",

                children: [
                  {
                    label: "Delete Review",
                    key: "/del-rev",
                  },
                ],
              },
              {
                label: "Products",
                key: "/products",

                children: [
                  {
                    label: "Post Product",
                    key: "/post-pro",
                  },
                  {
                    label: "Update Product",
                    key: "/update-pro",
                  },
                  {
                    label: "Delete Product",
                    key: "/delete-pro",
                  },
                ],
              },
              {
                label: "Feeds",
                key: "/feed-link",

                children: [
                  {
                    label: "Post Feed",
                    key: "/post-feed",
                  },
                  {
                    label: "Update Feed",
                    key: "/update-feed",
                  },
                  {
                    label: "Delete Feed",
                    key: "/delete-feed",
                  },
                ],
              },
              {
                label: "Feeds",
                key: "/feed-link",

                children: [
                  {
                    label: "Post Feed",
                    key: "/post-feed",
                  },
                  {
                    label: "Update Feed",
                    key: "/update-feed",
                  },
                  {
                    label: "Delete Feed",
                    key: "/delete-feed",
                  },
                ],
              },
              {
                label: "Users",
                key: "/user",

                children: [
                  {
                    label: "update User",
                    key: "/post-user",
                  },
                  {
                    label: "Delete User",
                    key: "/delete-user",
                  },
                ],
              },
            ],
          },
        ]}
      ></Menu>
    </div>
  );
};

export default AdminSideBar;
