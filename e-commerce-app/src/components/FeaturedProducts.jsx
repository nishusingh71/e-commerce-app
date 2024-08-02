import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getProductStart } from "../redux/actions/product.actions";

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
          <div className="row g-4">
            {products.length > 0 &&
              products.map((product, index) => (
                <div className="col-md-6 col-lg-4 col-xl-3" key={index}>
                  <div className="rounded position-relative fruite-item h-100 d-flex flex-column">
                    <div className="fruite-img">
                      <Link to={`/product-details/${product.slug}`}>
                        <img
                          src={product.image}
                          className="img-fluid w-100 rounded-top"
                          alt={product.name}
                        />
                      </Link>
                    </div>
                    <div
                      className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                      style={{
                        top: "10px",
                        left: "10px",
                      }}
                    >
                      {product.category}
                    </div>
                    <div className="p-4 border border-secondary border-top-0 rounded-bottom flex-grow-1 d-flex flex-column justify-content-between">
                      <div>
                        <h4>{product.name}</h4>
                        <p>
                          {product.shortDescription.length > 100
                            ? product.shortDescription.slice(0, 100) + "..."
                            : product.shortDescription}
                        </p>
                      </div>
                      <div className="d-flex justify-content-between align-items-end mt-3">
                        <p className="text-dark fs-5 fw-bold mb-0">
                          {product.price}$
                        </p>
                        <Link
                          to="/cart"
                          className="btn border border-secondary rounded-pill px-3 text-primary"
                        >
                          <i className="fa fa-shopping-bag me-2 text-primary"></i>{" "}
                          Add to cart
                        </Link>
                      </div>
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
