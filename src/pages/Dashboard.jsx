import { logoutUser } from "@/utility/auth";
import { LogOut } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const username = localStorage.getItem("username");
  return (
    <>
      <div className="flex justify-around mt-5">
        <h1>Welcome, {username}</h1>
        <button
          className="px-3 py-2 bg-blue-600 text-white rounded-md"
          onClick={() => {
            logoutUser();
            navigate("/");
          }}
        >
          Log out
        </button>
      </div>
    </>
  );
};

export default Dashboard;
