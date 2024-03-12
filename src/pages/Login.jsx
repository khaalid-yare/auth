import { isLoggedIn } from "@/utility/auth";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
// import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: { username: "", password: "" } });

  useEffect(() => {
    if (isLoggedIn()) {
      navigate("/dashboard");
    }
  }, [navigate]);

  const onSubmit = (formData) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const loggedInUser = users.find(
      (user) =>
        user.username === formData.username &&
        user.password === formData.password
    );
    if (loggedInUser) {
      localStorage.setItem("isLoggedIn", true);
      localStorage.setItem("username", formData.username);
      setTimeout(() => {
        navigate("/dashboard");
      }, 1000);
    }
  };

  return (
    <div className="flex justify-center">
      <div className="w-[420px] drop-shadow-2xl bg-white rounded-md py-5 mt-20">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col px-5">
          <input
            type="text"
            {...register("username", { required: "Username is required" })}
            placeholder="Username"
            className="border text-sm outline-[#1877F2] py-2 pl-3 mb-2"
          />
          <small className="text-red-500">{errors.username?.message}</small>
          <input
            type="password"
            {...register("password", {
              required: "Password is required",
              minLength: { value: 8, message: "Minimum length is 8" },
            })}
            placeholder="Password"
            className="border text-sm outline-[#1877F2] py-2 pl-3 mb-3"
          />
          <small className="text-red-500">{errors.password?.message}</small>

          <button
            type="submit"
            className="bg-[#1877F2] border-none hover:bg-[hsl(214,89%,57%)] rounded-md py-2 text-white font-bold mb-3"
          >
            Log in
          </button>
          <button
            type="button"
            className="bg-[#41c726] mx-auto rounded-md text-sm hover:bg-[#50bc3a] text-white font-semibold h-10 w-[40%] font-semibold"
            onClick={() => navigate("/register")}
          >
            Create new account
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
