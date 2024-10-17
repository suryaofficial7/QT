import { useFormik } from "formik";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SignUpValidatorSchema } from "../ValidationSchema/SignUpValidator";
// import {Loadersmall} from '../Components/Compo/Loadersmall';
import axios from "axios";
import Loadersmall from "../Components/Compo/Loadersmall";
import icon from "../assets/Imgs/icon.jpeg"
import {useSelector} from "react-redux"
import { useDispatch } from "react-redux";
import { setUser } from "../Redux/slice/userSlice";

const RegisterPage = () => {
  const navigate = useNavigate();


  // const userData = useSelector((state)=> state.userInfo.users)
  // console.log("----------------------------")
  // console.log(userData)
  // console.log("----------------------------")

  // const dispatch = useDispatch()



  // !STATES

  const [loader, setLoader] = useState(null);
  const [message, setMessage] = useState(null);

  // GOTO NAVIGATIOn
  const gotoSignIn = () => {
    navigate("/login");
  };

  const signUpValues = {
    fullName: "",
    email: "",
    contact: "",
    password: "",
  };

  const {
    errors,
    handleChange,
    handleSubmit,
    handleBlur,
    touched,
    resetForm,
    values,
  } = useFormik({
    initialValues: signUpValues,
    validationSchema: SignUpValidatorSchema,
    onSubmit: (values) => {
      console.log(values);

      setLoader("loading...")

      axios({
        method: "post",
        url: "http://localhost:1234/api/v1/user/register",
        data: values,
      })
        .then((data) => {
          console.log(data);
          resetForm();
          setLoader(null)
          setMessage("User Account Cretaed Succesfully")



        })
        .catch((err) => {
          setLoader(null)
          setMessage("Internal server Error")

          console.log(err);
        });
    },
  });

  return (
    <>
      <div className="fade w-[80%]  md:flex  mt-[2%] max-w-[1280px] m-auto">
        <div
          id="leftDiv"
          className={`w-[100%] h-auto mb-4 md:h-[500px]  md:w-[50%] flex-1 items-center  justify-center`}
        >

          <center><img src={icon} width={100} className="rounded-full mb-4" alt="" /></center>
          <p className="text-2xl font-semibold">Join Us Now</p>
          <p className="text-gray-600">Over 10k users with us</p>
          {/* !LOGIN FORM  */}

          <form
            onSubmit={handleSubmit}
            className="block w-[100%] md:w-[80%] m-auto"
          >
            {/* Full Name */}
            <div className="text-left mt-3">
              <p className="text-gray-600">Full Name</p>
              <input
                className="bg-transparent theme-border-green border focus:outline-2 outline-none  rounded-lg p-2 w-[100%]"
                type="text"
                name="fullName"
                id="fullName"
                autoComplete="off"
                placeholder="firstname lastname"
                value={values.fullName}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.fullName && touched.fullName ? (
                <p className="text-red-700 text-xs pt-1">{errors.fullName}</p>
              ) : null}
            </div>
            {/* Contact */}
            <div className="text-left mt-3">
              <p className="text-gray-600">Contact No</p>
              <input
                className="bg-transparent theme-border-green border focus:outline-2 outline-none  rounded-lg p-2 w-[100%]"
                type="text"
                name="contact"
                id="contact"
                autoComplete="off"
                placeholder="975273..."
                value={values.contact}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.contact && touched.contact ? (
                <p className="text-red-700 text-xs pt-1">{errors.contact}</p>
              ) : null}
            </div>
            {/* EMIAL */}
            <div className="text-left mt-3">
              <p className="text-gray-600">Email ID</p>
              <input
                className="bg-transparent theme-border-green border focus:outline-2 outline-none  rounded-lg p-2 w-[100%]"
                type="text"
                name="email"
                id="email"
                autoComplete="off"
                value={values.email}
                placeholder="example@gmail.com"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.email && touched.email ? (
                <p className="text-red-700 text-xs pt-1">{errors.email}</p>
              ) : null}
            </div>
            {/* ? PASSWORD */}
            <div className="text-left mt-3">
              <p className="text-gray-600">Password</p>
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


{message?<p className="mt-3 -mb-3 theme-text-green text-sm">{message}</p>:null}
            {/* BUTTON LOGIN= */}

            {loader==null ? (
              <button
                className="w-[100%] mt-5 theme-bg-green p-2 px-4 rounded-md"
                type="submit">
                Sign Up
              </button>
            ) : (
             <center className="w-[100%] mt-2 flex justify-center p-2 px-4 rounded-md"> <Loadersmall/></center>
              // <p>kj</p>
            )}

            <div className="mt-2 mx-1">
              <div className="text-xs md:text-sm flex justify-between ">
                {/* Already have Account Redirect */}
                <p>
                  <span className="text-gray-500">Already Registered? </span>
                  <span
                    onClick={gotoSignIn}
                    className="cursor-pointer theme-text-green hover:underline font-semibold"
                  >
                    SignIn
                  </span>
                </p>

                {/* FORGOT PWD REDIRECT  */}
                <p>
                  <Link to={"/termsandconditions"} className="text-red-400 cursor-pointer hover:underline">Terms & conditions </Link>
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
            <p className="text-lg  md:text-2xl pt-1">
              🚀 Your journey to financial freedom starts here.
            </p>

            <img
              src="https://static.vecteezy.com/system/resources/previews/010/925/404/non_2x/registration-page-name-and-password-field-fill-in-form-menu-bar-corporate-website-create-account-user-information-flat-design-modern-illustration-vector.jpg"
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

export default RegisterPage;
