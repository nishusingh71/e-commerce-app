import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Breadcrumb = () => {
  let route = "/";
  const [segments, setSegments] = useState([""]);
  const location = useLocation();

  useEffect(() => {
    setSegments(location.pathname.split("/"));
  }, [location.pathname]);

  return (
    <section
      className="breadcrumb-section"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/img/breadcrumb.jpg)`,
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <div className="breadcrumb__text text-capitalize">
              <h2>
                {segments.length === 4
                  ? `${segments[segments.length - 1]} ${
                      segments[segments.length - 2]
                    }`
                  : segments[segments.length - 1]}
              </h2>
              <div className="breadcrumb__option">
                {/* <Link to="/">Home</Link> */}
                {segments.length > 0 &&
                  segments.map((segment, index) => {
                    segment = segment.replace("-", " ");
                    if (route) {
                      route = route + "/" + segment;
                    }
                    if (segment === "") {
                      return (
                        <React.Fragment key={index}>
                          <Link to="/">Home</Link>
                        </React.Fragment>
                      );
                    }
                    if (segment === "admin") {
                      return (
                        <React.Fragment key={index}>
                          <Link to="/admin/dashboard">Admin</Link>
                        </React.Fragment>
                      );
                    }
                    if (segment === index) {
                      return (
                        <React.Fragment key={index}>
                          <Link to="/">{segment}</Link>
                        </React.Fragment>
                      );
                    }
                    if (segment === "edit") {
                      return undefined;
                    }
                    return (
                      <React.Fragment key={index}>
                        <Link to={route.replace("///", "/")}>{segment}</Link>
                      </React.Fragment>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Breadcrumb;
