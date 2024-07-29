import React, { useEffect } from "react";
import Breadcrumb from "../../components/Breadcrum";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProductStart } from "../../redux/actions/product.actions";

const ProductDetails = () => {
  let products = useSelector((state) => state.product.products);
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    if (!products.find((product) => product.id === id)) {
      dispatch(getProductStart(id));
    }
  }, [id, products, dispatch]);

  const product = products.find((product) => product.id === id);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Breadcrumb />
      <section className="product-details spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="product__details__pic">
                <div className="product__details__pic__item">
                  <img
                    className="product__details__pic__item--large"
                    src={product.image}
                    alt={product.name}
                    height={500}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="product__details__text">
                <h3>{product.name}</h3>
                <div className="product__details__price">{product.price}$</div>
                <p>{product.shortDescription}</p>
                <div className="product__details__quantity">
                  <div className="quantity">
                    <div className="pro-qty">
                      <input type="text" value="1" />
                    </div>
                  </div>
                </div>
                <Link to="/cart" className="primary-btn">
                  ADD TO CART
                </Link>
                <Link to="#" className="heart-icon">
                  <span className="icon_heart_alt"></span>
                </Link>
                <ul>
                  <li>
                    <b>Color</b> <span>{product.color}</span>
                  </li>
                  <li>
                    <b>Category</b> <span>{product.category}</span>
                  </li>
                  <li>
                    <b>Weight</b> <span>{product.weight}</span>
                  </li>
                  <li>
                    <b>Status</b>
                    <span>{product.status}</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="product__details__tab">
                <ul className="nav nav-tabs" role="tablist">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      data-toggle="tab"
                      href="#tabs-1"
                      role="tab"
                      aria-selected="true"
                    >
                      Description
                    </a>
                  </li>
                </ul>
                <div className="tab-content">
                  <div className="tab-pane active" id="tabs-1" role="tabpanel">
                    <div className="product__details__tab__desc">
                      <h6>Products Infomation</h6>
                      <p>{product.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
