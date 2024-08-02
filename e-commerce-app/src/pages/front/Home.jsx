import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Home = () => {
  const navigate = useNavigate();
  let products = useSelector((state) => state.product.products);
  let categories = useSelector((state) => state.category.categories);
  let currentUser = useSelector((state) => state.user.currentUser);

  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  useEffect(() => {
    if (!currentUser.name) {
      navigate("/login");
    }
  });
  return (
    <>
      <section className="featured spad mb-auto ">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <h2>Products</h2>
              </div>
              <div className="featured__controls">
                <ul>
                  <li
                    className={`category-item ${
                      selectedCategory === "All" ? "active" : ""
                    }`}
                    onClick={() => handleCategoryClick("All")}
                  >
                    All
                  </li>
                  {categories.length > 0 &&
                    categories.map((category, index) => (
                      <li
                        key={index}
                        className={`category-item ${
                          selectedCategory === category.name ? "active" : ""
                        }`}
                        onClick={() => handleCategoryClick(category.name)}
                      >
                        {category.name}
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="row featured__filter">
            {filteredProducts.length > 0 &&
              filteredProducts.map((product, index) => (
                <div
                  className="col-lg-3 col-md-4 col-sm-6"
                  key={index}
                >
                  <div className="featured__item">
                    <Link to={`/product-details/${product.slug}`}>
                      <div
                        className="featured__item__pic set-bg"
                        style={{ backgroundImage: `url(${product.image})` }}
                      >
                        <ul className="featured__item__pic__hover">
                          <li>
                            <Link to="/cart">
                              <i className="fa fa-shopping-cart"></i>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </Link>
                    <div className="featured__item__text">
                      <h6>
                        <Link to={`/product-details/${product.slug}`}>
                          {product.name}
                        </Link>
                      </h6>
                      <h5>${product.price}</h5>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
