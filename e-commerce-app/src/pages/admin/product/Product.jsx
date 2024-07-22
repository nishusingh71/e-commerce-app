import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  deleteProductStart,
  getProductStart,
} from "../../../redux/actions/product.actions";
const Product = () => {
  const dispatch = useDispatch();
  let products = useSelector((state) => state.product.products);
  const deleteProduct = (id) => {
    dispatch(deleteProductStart(id));
  };
  let getProduct = useCallback(() => {
    dispatch(getProductStart());
  }, [dispatch]);
  useEffect(() => {
    getProduct();
  }, [products.length, getProduct]);
  return (
    <div className="card">
      <div className="card-header d-flex justify-content-between ">
        <h5>Product</h5>
        <Link to="/admin/product/add" className="primary-btn">
          Add Product
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
                <th>Type</th>
                <th>Category</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Weight</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {products.length > 0 &&
                products.map((product, index) => {
                  return (
                    <tr key={index}>
                      <th>{index + 1}</th>
                      <td>
                        <img
                          src={product.image}
                          alt={product.name}
                          height={50}
                        />
                      </td>
                      <td>{product.name}</td>
                      <td>{product.type}</td>
                      <td>{product.category}</td>
                      <td>${product.price}</td>
                      <td>{product.quantity}</td>
                      <td>{product.weight}</td>

                      <td>
                        {product.status === "active" ? "Active" : "Inactive"}
                      </td>

                      <td width={200}>
                        <Link
                          to={`/admin/product/edit/${product.id}`}
                          className="btn btn-warning me-2"
                        >
                          Edit
                        </Link>
                        <button
                          className="btn btn-danger"
                          onClick={() => deleteProduct(product.id)}
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

export default Product;
