import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "../../layouts/Sidebar";
import Breadcrumb from "../../components/Breadcrum";
import { useSelector } from "react-redux";

const Auth = () => {
  const navigate = useNavigate();

  let currentUser = useSelector((state) => state.user.currentUser);

  useEffect(() => {
    if (!currentUser.name) {
      navigate("/login");
    }
  });
  return (
    <>
      <Breadcrumb />

      <div className="container mt-4">
        <div className="row">
          <div className="col-sm-3">
            <Sidebar />
          </div>
          <div className="col-sm-9">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default Auth;
