import React from "react";
import "antd/dist/antd";
const url = "/api";
import { Button, Checkbox, Form, Input } from "antd";
import "../assets/css/login.css";
import axios from "axios";
import { MdEmail, MdOutlineEmail } from "react-icons/md";
import { FaUser, FaLock, FaHotel } from "react-icons/fa";
import { LockOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
//import { userLogin } from "../utils/axios";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { useGlobalContext } from "../utils/context";

const Login = () => {
  const [loading, setLoading] = React.useState(false);
  const navigate = useNavigate();

  const userLogin = async (credentials) => {
    return await axios.post(`${url}/login`, credentials).catch((error) => {
      console.log(error.response.data.msg);
      console.log(error.response.data.msg);
      setLoading(false);
      //setErrorMessage(error.response.data.msg);
      toast.error(error.response.data.msg);
    });
  };

  const onFinish = (e) => {
    console.log(e);
    setLoading(true);

    userLogin(e)
      .then((response) => {
        if (response.status === 200) {
          setLoading(false);
          console.log(response);
          toast.success("Login successfully");
          const user = response.data.user;
          const token = response.data.token;
          localStorage.setItem("token", token);
          localStorage.setItem("user", user);
        }
      })
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        // console.log(error.response);
        //  console.log(error.response.data.msg);
        // console.log(error.response.status);
        // console.log(error.response.headers);
        //  console.log(error.request);
        //  console.log(error.message);
      });
  };
  return (
    <div className="login-wrapper">
      <section className="login-container">
        <h2 className="login-heading">REVEEW</h2>
        <p className="login-sub-heading"> Login to your account</p>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your Username!",
              },
            ]}
          >
            <Input
              prefix={
                <MdEmail
                  className="site-form-item-icon login-input"
                  color="grey"
                />
              }
              placeholder="Email"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your Password!",
              },
            ]}
          >
            <Input
              prefix={
                <FaLock
                  className="site-form-item-icon login-input"
                  color="grey"
                />
              }
              type="password"
              placeholder="Password"
            />
          </Form.Item>

          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>
              <span style={{ color: "red" }}>Remember me</span>
            </Checkbox>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-btn">
              Log in
            </Button>
            <p style={{ color: "red" }}>
              Not yet registered? <Link to="/register">Register</Link>
            </p>
          </Form.Item>
        </Form>
      </section>
    </div>
  );
};

export default Login;
