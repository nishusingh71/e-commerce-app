import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="footer spad mt-4">
        <div className="footer__copyright d-flex justify-content-center">
          <div className="footer__copyright__text">
            <p>
              Copyright &copy;
              <script>document.write(new Date().getFullYear());</script> All
              rights reserved |Project Made
              <i className="fa fa-heart" aria-hidden="true"></i> by Nishu Singh
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
 