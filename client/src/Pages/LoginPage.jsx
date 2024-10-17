import { useFormik } from "formik";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SignInValidatorSchema } from "../ValidationSchema/SignInValidator";
import Loadersmall from "../Components/Compo/Loadersmall";
import axios from "axios";
import Cookies from "universal-cookie";
import icon from "../assets/Imgs/icon.jpeg"


const LoginPage = () => {
  const navigate = useNavigate();

  // ! use States
  const [loading, setLoading] = useState(null);
  const [message, setMessage] = useState(null);

  // Naviagte
  const gotoSignUp = () => {
    navigate("/register");
  };

  const cookie = new Cookies();

  // SignIN Initial Values

  const SignInInitialValues = {
    email: "",
    password: "",
  };

  const {
    errors,
    touched,
    handleBlur,
    handleReset,
    handleChange,
    handleSubmit,
    resetForm,
    values,
  } = useFormik({
    initialValues: SignInInitialValues,
    validationSchema: SignInValidatorSchema,
    onSubmit: (values) => {
      // console.log(values);
      setLoading(true);
      axios({
        method: "Post",
        url: "http://localhost:1234/api/v1/user/login",
        data: values,
      })
        .then((data) => {
          resetForm();

          console.log(data);
          if (data.data.verified == true) {
            
            // ! Navigating to Dashboard
            navigate("/dashboard");

            // ! Seeting user ID cookies
            cookie.set("QTid", data.data.data._id, { path: "/" });
            // ! seting localstorage
            console.log(data.data.token);
            localStorage.setItem("jwtToken",JSON.stringify(data.data.token));

            setLoading(null);
          } else {
            setMessage("Invalid Username or Password");
            setLoading(null);
          }
        })
        .catch((err) => {
          console.log(err);
          setLoading(null);
          setMessage(err.message);
        });
    },
  });

  return (
    <>
      <div className="w-[80%] fade md:flex  mt-[7%] max-w-[1280px] m-auto">
        <div
          id="leftDiv"
          className="w-[100%] h-auto mb-4 md:h-[500px]  md:w-[50%] flex-1 items-center  justify-center"
        >
          <p className="hidden md:block">
            <br />
          </p>

<center><img src={icon} width={100} className="rounded-full mb-4" alt="" /></center>
          <p className="text-2xl font-semibold">Join Us Now</p>
          <p className="text-gray-600">Over 10k users with us</p>
          {/* !LOGIN FORM  */}
          <form
            onSubmit={handleSubmit}
            className="block w-[100%] md:w-[80%] m-auto"
          >
            {/* EMIAL */}
            <div className="text-left mt-3">
              <p className="text-gray-600 pl-1">Email ID</p>
              <input
                className="bg-transparent theme-border-green border focus:outline-2 outline-none  rounded-lg p-2 w-[100%]"
                type="text"
                name="email"
                id="email"
                autoComplete="off"
                placeholder="example@gmail.com"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.email && touched.email ? (
                <p className="text-red-700 text-xs pt-1">{errors.email}</p>
              ) : null}
            </div>
            {/* ? PASSWORD */}
            <div className="text-left mt-3 ">
              <p className="text-gray-600 pl-1">Password</p>
              <input
                className="bg-transparent theme-border-green border focus:outline-2 outline-none  rounded-lg p-2 w-[100%]"
                type="password"
                name="password"
                id="password"
                autoComplete="off"
                placeholder="********"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.password && touched.password ? (
                <p className="text-red-700 text-xs pt-1">{errors.password}</p>
              ) : null}
            </div>

            {message ? (
              <p className="text-red-800 -mb-3 mt-2 text-sm">{message}</p>
            ) : null}
            {/* BUTTON LOGIN  */}
            {loading == null ? (
              <button
                className="w-[100%] mt-5 theme-bg-green p-2 px-4 rounded-md"
                type="submit"
              >
                Sign In
              </button>
            ) : (
              <p
                className="w-[100%] mt-2 flex justify-center  p-2 px-4 rounded-md"
                type="submit"
              >
                <Loadersmall />{" "}
              </p>
            )}

            <div className="mt-2 mx-1">
              <div className="text-xs md:text-sm flex justify-between ">
                {/* Already have Account Redirect */}
                <p>
                  <span className="text-gray-500">Don't Have Account? </span>
                  <span
                    onClick={gotoSignUp}
                    className="theme-text-green hover:underline font-semibold cursor-pointer"
                  >
                    SignUp
                  </span>
                </p>

                {/* FORGOT PWD REDIRECT  */}
                <p>
                  <Link to={"/forgotPwd"} className="text-red-400 cursor-pointer hover:underline">Forgot password? </Link>
                </p>
              </div>
            </div>
          </form>
        </div>

        {/* RIGHT DIV ADDVERTIZEMENT */}
        <div
          id="RightDiv"
          className="md:w-[50%] h-[250px] md:h-[500] rounded-2xl w-[100%] theme-bg-green md:rounded-l-2xl md:rounded-r-none"
        >
          <p className="hidden md:block">
            <br />
            <br />
            <br />
          </p>

          <div className="w-[80%] m-auto">
            <p className="text-lg  md:text-2xl pt-2">
              🧠 Smart spending begins <br /> with smart tracking 📉.
            </p>

            <img
              src="https://img.freepik.com/free-vector/illustration-data-analysis-graph_53876-18132.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1725235200&semt=ais_hybrid"
              className="rounded-lg mt-4 text-center justify-center m-auto"
              width={350}
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
