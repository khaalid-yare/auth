import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { register as registerUser  } from "../APP/features/SliceForm";
import { useForm } from "react-hook-form";

const Register = () => {
  const {
    register,
    handleSubmit,
    getValues,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      email: "",
      password: "",
      ConfirmPassword: "",
    },
  });

  const navigate = useNavigate();
  console.log(errors);

  const onSubmit = (data) => {
    const existingUser = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = existingUser.some(
      (user) =>
        user.username === data.username && user.password === data.password
    );
    console.log(existingUser);
    // console.log(user);
    console.log(userExists);

    if (!userExists) {
      existingUser.push({ username: data.username, password: data.password });
      localStorage.setItem("users", JSON.stringify(existingUser));
      alert("Your registration completed successfully!");
      navigate("/");
    } else {
      alert("User Already Exists. Please Login");
      navigate("/");
    }
  };

  return (
    <>
      <div className="flex justify-center ">
        <div className="w-[420px] drop-shadow-2xl bg-white rounded-md py-5 mt-20">
          <form
            action=""
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col px-5"
          >
            <input
              {...register("username", { required: "username is required" })}
              type="text"
              placeholder="UserName"
              className="border text-sm outline-[#1877F2] py-2 pl-3 mb-2"
            />
            <small className="text-red-500">{errors.username?.message}</small>
            <input
              type="email"
              {...register("email", {
                required: "email is required",
              })}
              placeholder="Email"
              className="border text-sm outline-[#1877F2] py-2 pl-3 mb-3"
            />
            <small className="text-red-500">{errors.email?.message}</small>
            <input
              {...register("password", {
                required: "password is required",
                minLength: {
                  value: "8",
                  message: "password must be at least 8 characters",
                },
              })}
              type="password"
              placeholder="Password"
              className="border text-sm outline-[#1877F2] py-2 pl-3 mb-2"
            />
            <small className="text-red-500">{errors.password?.message}</small>
            <input
              {...register("ConfirmPassword", {
                required: "Confirm password is required",
                validate: (value) =>
                  value === getValues("password") ||
                  "The passwords do not match",
              })}
              type="password"
              placeholder="ConfirmPassword"
              className="border text-sm outline-[#1877F2] py-2 pl-3 mb-3"
            />
            <small className="text-red-500">
              {errors.ConfirmPassword?.message}
            </small>
            <button className="bg-[#1877F2] bornone hover:bg-[hsl(214,89%,57%)] rounded-md py-2 text-white font-bold mb-3">
              Sign Up
            </button>
            <small className="text-center text-[#1877F2] pb-5">
              Secret Question ?
            </small>
            <div className="border-t-2 w-96 pb-5"></div>
            <button
              className="bg-[#41c726] mx-auto rounded-md text-sm hover:bg-[#50bc3a] text-white font-semibold h-10 w-[40%] font-semibold"
              onClick={() => navigate("/")}
            >
              Go Back to Sign In
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
