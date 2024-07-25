import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Categories from "../../components/Categories";
import FeaturedProducts from "../../components/FeaturedProducts";
import LatestProductSection from "../../components/LatestProductSection";
import { useSelector } from "react-redux";

const Home = () => {
  const navigate = useNavigate();

  let currentUser = useSelector((state) => state.user.currentUser);

  useEffect(() => {
    if(!currentUser.name) {
      navigate("/login")
    }
  })
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-3"></div>
            <div className="col-lg-9">
              <div
                className="hero__item"
                style={{
                  backgroundImage: `url(${process.env.PUBLIC_URL}/img/hero/banner.jpg)`,
                }}
              >
                <div className="hero__text">
                  <span>FRUIT FRESH</span>
                  <h2>
                    Vegetable <br />
                    100% Organic
                  </h2>
                  <p>Free Pickup and Delivery Available</p>
                  <Link to="#" className="primary-btn">
                    SHOP NOW
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="categories">
        <div className="container">
          <div className="row">
            <div className="categories__slider owl-carousel">
              <div className="col-lg-3">
                <div
                  className="categories__item"
                  data-setbg="img/categories/cat-1.jpg"
                >
                  <h5>
                    <Link to="#">Fresh Fruit</Link>
                  </h5>
                </div>
              </div>
              <div className="col-lg-3">
                <div
                  className="categories__item set-bg"
                  data-setbg="img/categories/cat-2.jpg"
                >
                  <h5>
                    <Link to="#">Dried Fruit</Link>
                  </h5>
                </div>
              </div>
              <div className="col-lg-3">
                <div
                  className="categories__item set-bg"
                  data-setbg="img/categories/cat-3.jpg"
                >
                  <h5>
                    <Link to="#">Vegetables</Link>
                  </h5>
                </div>
              </div>
              <div className="col-lg-3">
                <div
                  className="categories__item set-bg"
                  data-setbg="img/categories/cat-4.jpg"
                >
                  <h5>
                    <Link to="#">drink fruits</Link>
                  </h5>
                </div>
              </div>
              <div className="col-lg-3">
                <div
                  className="categories__item set-bg"
                  data-setbg="img/categories/cat-5.jpg"
                >
                  <h5>
                    <Link to="#">drink fruits</Link>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <Categories />

      {/* <section className="featured spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <h2>Featured Product</h2>
              </div>
              <div className="featured__controls">
                <ul>
                  <li className="active" data-filter="*">
                    All
                  </li>
                  <li data-filter=".oranges">Oranges</li>
                  <li data-filter=".fresh-meat">Fresh Meat</li>
                  <li data-filter=".vegetables">Vegetables</li>
                  <li data-filter=".fastfood">Fastfood</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row featured__filter">
            <div className="col-lg-3 col-md-4 col-sm-6 mix oranges fresh-meat">
              <div className="featured__item">
                <div
                  className="featured__item__pic set-bg"
                  data-setbg="img/featured/feature-1.jpg"
                >
                  <ul className="featured__item__pic__hover">
                    <li>
                      <Link to="#">
                        <i className="fa fa-heart"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fa fa-retweet"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fa fa-shopping-cart"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="featured__item__text">
                  <h6>
                    <Link to="#">Crab Pool Security</Link>
                  </h6>
                  <h5>$30.00</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 mix vegetables fastfood">
              <div className="featured__item">
                <div
                  className="featured__item__pic set-bg"
                  data-setbg="img/featured/feature-2.jpg"
                >
                  <ul className="featured__item__pic__hover">
                    <li>
                      <Link to="#">
                        <i className="fa fa-heart"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fa fa-retweet"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fa fa-shopping-cart"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="featured__item__text">
                  <h6>
                    <Link to="#">Crab Pool Security</Link>
                  </h6>
                  <h5>$30.00</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 mix vegetables fresh-meat">
              <div className="featured__item">
                <div
                  className="featured__item__pic set-bg"
                  data-setbg="img/featured/feature-3.jpg"
                >
                  <ul className="featured__item__pic__hover">
                    <li>
                      <Link to="#">
                        <i className="fa fa-heart"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fa fa-retweet"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fa fa-shopping-cart"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="featured__item__text">
                  <h6>
                    <Link to="#">Crab Pool Security</Link>
                  </h6>
                  <h5>$30.00</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 mix fastfood oranges">
              <div className="featured__item">
                <div
                  className="featured__item__pic set-bg"
                  data-setbg="img/featured/feature-4.jpg"
                >
                  <ul className="featured__item__pic__hover">
                    <li>
                      <Link to="#">
                        <i className="fa fa-heart"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fa fa-retweet"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fa fa-shopping-cart"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="featured__item__text">
                  <h6>
                    <Link to="#">Crab Pool Security</Link>
                  </h6>
                  <h5>$30.00</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 mix fresh-meat vegetables">
              <div className="featured__item">
                <div
                  className="featured__item__pic set-bg"
                  data-setbg="img/featured/feature-5.jpg"
                >
                  <ul className="featured__item__pic__hover">
                    <li>
                      <Link to="#">
                        <i className="fa fa-heart"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fa fa-retweet"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fa fa-shopping-cart"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="featured__item__text">
                  <h6>
                    <Link to="#">Crab Pool Security</Link>
                  </h6>
                  <h5>$30.00</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 mix oranges fastfood">
              <div className="featured__item">
                <div
                  className="featured__item__pic set-bg"
                  data-setbg="img/featured/feature-6.jpg"
                >
                  <ul className="featured__item__pic__hover">
                    <li>
                      <Link to="#">
                        <i className="fa fa-heart"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fa fa-retweet"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fa fa-shopping-cart"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="featured__item__text">
                  <h6>
                    <Link to="#">Crab Pool Security</Link>
                  </h6>
                  <h5>$30.00</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 mix fresh-meat vegetables">
              <div className="featured__item">
                <div
                  className="featured__item__pic set-bg"
                  data-setbg="img/featured/feature-7.jpg"
                >
                  <ul className="featured__item__pic__hover">
                    <li>
                      <Link to="#">
                        <i className="fa fa-heart"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fa fa-retweet"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fa fa-shopping-cart"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="featured__item__text">
                  <h6>
                    <Link to="#">Crab Pool Security</Link>
                  </h6>
                  <h5>$30.00</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 mix fastfood vegetables">
              <div className="featured__item">
                <div
                  className="featured__item__pic set-bg"
                  data-setbg="img/featured/feature-8.jpg"
                >
                  <ul className="featured__item__pic__hover">
                    <li>
                      <Link to="#">
                        <i className="fa fa-heart"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fa fa-retweet"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fa fa-shopping-cart"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="featured__item__text">
                  <h6>
                    <Link to="#">Crab Pool Security</Link>
                  </h6>
                  <h5>$30.00</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <FeaturedProducts />

      <div className="banner">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="banner__pic">
                <img src="img/banner/banner-1.jpg" alt="" />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="banner__pic">
                <img src="img/banner/banner-2.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <section className="latest-product spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="latest-product__text">
                <h4>Latest Products</h4>
                <div className="latest-product__slider owl-carousel">
                  <div className="latest-prdouct__slider__item">
                    <Link to="#" className="latest-product__item">
                      <div className="latest-product__item__pic">
                        <img src="img/latest-product/lp-1.jpg" alt="" />
                      </div>
                      <div className="latest-product__item__text">
                        <h6>Crab Pool Security</h6>
                        <span>$30.00</span>
                      </div>
                    </Link>
                    <Link to="#" className="latest-product__item">
                      <div className="latest-product__item__pic">
                        <img src="img/latest-product/lp-2.jpg" alt="" />
                      </div>
                      <div className="latest-product__item__text">
                        <h6>Crab Pool Security</h6>
                        <span>$30.00</span>
                      </div>
                    </Link>
                    <Link to="#" className="latest-product__item">
                      <div className="latest-product__item__pic">
                        <img src="img/latest-product/lp-3.jpg" alt="" />
                      </div>
                      <div className="latest-product__item__text">
                        <h6>Crab Pool Security</h6>
                        <span>$30.00</span>
                      </div>
                    </Link>
                  </div>
                  <div className="latest-prdouct__slider__item">
                    <Link to="#" className="latest-product__item">
                      <div className="latest-product__item__pic">
                        <img src="img/latest-product/lp-1.jpg" alt="" />
                      </div>
                      <div className="latest-product__item__text">
                        <h6>Crab Pool Security</h6>
                        <span>$30.00</span>
                      </div>
                    </Link>
                    <Link to="#" className="latest-product__item">
                      <div className="latest-product__item__pic">
                        <img src="img/latest-product/lp-2.jpg" alt="" />
                      </div>
                      <div className="latest-product__item__text">
                        <h6>Crab Pool Security</h6>
                        <span>$30.00</span>
                      </div>
                    </Link>
                    <Link to="#" className="latest-product__item">
                      <div className="latest-product__item__pic">
                        <img src="img/latest-product/lp-3.jpg" alt="" />
                      </div>
                      <div className="latest-product__item__text">
                        <h6>Crab Pool Security</h6>
                        <span>$30.00</span>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="latest-product__text">
                <h4>Top Rated Products</h4>
                <div className="latest-product__slider owl-carousel">
                  <div className="latest-prdouct__slider__item">
                    <Link to="#" className="latest-product__item">
                      <div className="latest-product__item__pic">
                        <img src="img/latest-product/lp-1.jpg" alt="" />
                      </div>
                      <div className="latest-product__item__text">
                        <h6>Crab Pool Security</h6>
                        <span>$30.00</span>
                      </div>
                    </Link>
                    <Link to="#" className="latest-product__item">
                      <div className="latest-product__item__pic">
                        <img src="img/latest-product/lp-2.jpg" alt="" />
                      </div>
                      <div className="latest-product__item__text">
                        <h6>Crab Pool Security</h6>
                        <span>$30.00</span>
                      </div>
                    </Link>
                    <Link to="#" className="latest-product__item">
                      <div className="latest-product__item__pic">
                        <img src="img/latest-product/lp-3.jpg" alt="" />
                      </div>
                      <div className="latest-product__item__text">
                        <h6>Crab Pool Security</h6>
                        <span>$30.00</span>
                      </div>
                    </Link>
                  </div>
                  <div className="latest-prdouct__slider__item">
                    <Link to="#" className="latest-product__item">
                      <div className="latest-product__item__pic">
                        <img src="img/latest-product/lp-1.jpg" alt="" />
                      </div>
                      <div className="latest-product__item__text">
                        <h6>Crab Pool Security</h6>
                        <span>$30.00</span>
                      </div>
                    </Link>
                    <Link to="#" className="latest-product__item">
                      <div className="latest-product__item__pic">
                        <img src="img/latest-product/lp-2.jpg" alt="" />
                      </div>
                      <div className="latest-product__item__text">
                        <h6>Crab Pool Security</h6>
                        <span>$30.00</span>
                      </div>
                    </Link>
                    <Link to="#" className="latest-product__item">
                      <div className="latest-product__item__pic">
                        <img src="img/latest-product/lp-3.jpg" alt="" />
                      </div>
                      <div className="latest-product__item__text">
                        <h6>Crab Pool Security</h6>
                        <span>$30.00</span>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="latest-product__text">
                <h4>Review Products</h4>
                <div className="latest-product__slider owl-carousel">
                  <div className="latest-prdouct__slider__item">
                    <Link to="#" className="latest-product__item">
                      <div className="latest-product__item__pic">
                        <img src="img/latest-product/lp-1.jpg" alt="" />
                      </div>
                      <div className="latest-product__item__text">
                        <h6>Crab Pool Security</h6>
                        <span>$30.00</span>
                      </div>
                    </Link>
                    <Link to="#" className="latest-product__item">
                      <div className="latest-product__item__pic">
                        <img src="img/latest-product/lp-2.jpg" alt="" />
                      </div>
                      <div className="latest-product__item__text">
                        <h6>Crab Pool Security</h6>
                        <span>$30.00</span>
                      </div>
                    </Link>
                    <Link to="#" className="latest-product__item">
                      <div className="latest-product__item__pic">
                        <img src="img/latest-product/lp-3.jpg" alt="" />
                      </div>
                      <div className="latest-product__item__text">
                        <h6>Crab Pool Security</h6>
                        <span>$30.00</span>
                      </div>
                    </Link>
                  </div>
                  <div className="latest-prdouct__slider__item">
                    <Link to="#" className="latest-product__item">
                      <div className="latest-product__item__pic">
                        <img src="img/latest-product/lp-1.jpg" alt="" />
                      </div>
                      <div className="latest-product__item__text">
                        <h6>Crab Pool Security</h6>
                        <span>$30.00</span>
                      </div>
                    </Link>
                    <Link to="#" className="latest-product__item">
                      <div className="latest-product__item__pic">
                        <img src="img/latest-product/lp-2.jpg" alt="" />
                      </div>
                      <div className="latest-product__item__text">
                        <h6>Crab Pool Security</h6>
                        <span>$30.00</span>
                      </div>
                    </Link>
                    <Link to="#" className="latest-product__item">
                      <div className="latest-product__item__pic">
                        <img src="img/latest-product/lp-3.jpg" alt="" />
                      </div>
                      <div className="latest-product__item__text">
                        <h6>Crab Pool Security</h6>
                        <span>$30.00</span>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <LatestProductSection />
      {/* <!-- Latest Product Section End -->

    <!-- Blog Section Begin --> */}
      <section className="from-blog spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title from-blog__title">
                <h2>From The Blog</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-6">
              <div className="blog__item">
                <div className="blog__item__pic">
                  <img src="img/blog/blog-1.jpg" alt="" />
                </div>
                <div className="blog__item__text">
                  <ul>
                    <li>
                      <i className="fa fa-calendar-o"></i> May 4,2019
                    </li>
                    <li>
                      <i className="fa fa-comment-o"></i> 5
                    </li>
                  </ul>
                  <h5>
                    <Link to="#">Cooking tips make cooking simple</Link>
                  </h5>
                  <p>
                    Sed quia non numquam modi tempora indunt ut labore et dolore
                    magnam aliquam quaerat{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6">
              <div className="blog__item">
                <div className="blog__item__pic">
                  <img src="img/blog/blog-2.jpg" alt="" />
                </div>
                <div className="blog__item__text">
                  <ul>
                    <li>
                      <i className="fa fa-calendar-o"></i> May 4,2019
                    </li>
                    <li>
                      <i className="fa fa-comment-o"></i> 5
                    </li>
                  </ul>
                  <h5>
                    <Link to="#">6 ways to prepare breakfast for 30</Link>
                  </h5>
                  <p>
                    Sed quia non numquam modi tempora indunt ut labore et dolore
                    magnam aliquam quaerat{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6">
              <div className="blog__item">
                <div className="blog__item__pic">
                  <img src="img/blog/blog-3.jpg" alt="" />
                </div>
                <div className="blog__item__text">
                  <ul>
                    <li>
                      <i className="fa fa-calendar-o"></i> May 4,2019
                    </li>
                    <li>
                      <i className="fa fa-comment-o"></i> 5
                    </li>
                  </ul>
                  <h5>
                    <Link to="#">Visit the clean farm in the US</Link>
                  </h5>
                  <p>
                    Sed quia non numquam modi tempora indunt ut labore et dolore
                    magnam aliquam quaerat{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Blog Section End -->

    <!-- Footer Section Begin --> */}
    </>
  );
};

export default Home;
