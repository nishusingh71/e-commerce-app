import React from "react";
import { Link } from "react-router-dom";
import styles from "./Sidebar.module.css";
const Sidebar = () => {
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
    </ul>
  );
};

export default Sidebar;
