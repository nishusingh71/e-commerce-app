import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FeaturedProducts from "../../components/FeaturedProducts";
import { useSelector } from "react-redux";

const Home = () => {
  const navigate = useNavigate();

  let currentUser = useSelector((state) => state.user.currentUser);

  useEffect(() => {
    if (!currentUser.name) {
      navigate("/login");
    }
  });
  return (
    <>
      <FeaturedProducts />
    </>
  );
};

export default Home;
