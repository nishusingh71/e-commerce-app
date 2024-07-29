import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getProductStart } from "../redux/actions/product.actions";
import styles from "../pages/front/LoginForm.module.css";

const FeaturedProducts = () => {
  let products = useSelector((state) => state.product.products);
  const dispatch = useDispatch();
  const getProduct = useCallback(() => {
    dispatch(getProductStart());
  }, [dispatch]);

  useEffect(() => {
    if (products.length !== 0) {
      getProduct();
    }
  }, [products.length, getProduct]);
  return (
    <section className="featured spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title">
              <h2>Products</h2>
            </div>
          </div>
        </div>
        <div className="featured__filter">
          <div className="row">
            {products.length > 0 &&
              products.map((product, index) => (
                <div className="col-4  mt-4" key={index}>
                  <div className="card" style={{ marginLeft: "10px" }}>
                    <Link to={`/product-details/${product.id}`}>
                      <img
                        src={product.image}
                        className="card-img-top"
                        alt="..."
                        height={300}
                      />
                    </Link>
                    <div className="card-body">
                      <h5 className="card-title">{product.name}</h5>
                      <p className="card-text">price: {product.price}$</p>
                    </div>
                    <div className="card-footer">
                      <small className="text-body text-center">
                        <Link to="/cart" className={styles.link}>
                          Add To Cart
                        </Link>
                      </small>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
