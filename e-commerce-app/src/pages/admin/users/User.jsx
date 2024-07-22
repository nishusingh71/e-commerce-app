import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteUserStart,
  getUserStart,
} from "../../../redux/actions/user.actions";
import { Link } from "react-router-dom";

const User = () => {
  const dispatch = useDispatch();
  let users = useSelector((state) => state.user.users);
  const deleteUser = (id) => {
    dispatch(deleteUserStart(id));
  };
  let getUser = useCallback(() => {
    dispatch(getUserStart());
  }, [dispatch]);
  useEffect(() => {
    getUser();
  }, [users.length, getUser]);
  return (
    <div className="card">
      <div className="card-header d-flex justify-content-between ">
        <h5>User</h5>
        <Link to="/admin/user/add" className="primary-btn">
          Add User
        </Link>
      </div>
      <div className="card-body">
        <div className="table-responsive">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Name</th>
                <th>Contact</th>
                <th>Role</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.length > 0 &&
                users.map((user, index) => {
                  return (
                    <tr key={index}>
                      <th>{index + 1}</th>
                      <td>
                        <img src={user.image} alt={user.name} height={50} />
                      </td>
                      <td>{user.name}</td>
                      <td>{user.contact}</td>

                      <td>{user.role}</td>

                      <td>
                        {user.status === "active" ? "Active" : "Inactive"}
                      </td>

                      <td width={200}>
                        <Link
                          to={`/admin/user/edit/${user.id}`}
                          className="btn btn-warning me-2"
                        >
                          Edit
                        </Link>
                        <button
                          className="btn btn-danger"
                          onClick={() => deleteUser(user.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default User;
