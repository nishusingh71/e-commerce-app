import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Sidebar.module.css";
import { useDispatch } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../firebaseconfig";
import { logoutUserStart } from "../redux/actions/user.actions";
const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = async () => {
    try {
      await signOut(auth);

      dispatch(logoutUserStart());

      setTimeout(() => {
        navigate("/login");
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ul className="list-group">
      <li className="list-group-item primary-btn">Sidebar</li>
      <li className="list-group-item ">
        <Link to="/admin/dashboard" className={styles.link}>
          Dashboard
        </Link>
      </li>
      <li className="list-group-item ">
        <Link to="/admin/order" className={styles.link}>
          Order
        </Link>
      </li>
      <li className="list-group-item ">
        <Link to="/admin/product" className={styles.link}>
          Product
        </Link>
      </li>
      <li className="list-group-item ">
        <Link to="/admin/category" className={styles.link}>
          Category
        </Link>
      </li>
      <li className="list-group-item ">
        <Link to="/admin/user" className={styles.link}>
          User
        </Link>
      </li>
      <li className="list-group-item ">
        <Link to="#" className={styles.link} onClick={logout}>
          Logout
        </Link>
      </li>
    </ul>
  );
};

export default Sidebar;
