import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="copy-right_text">
          <div className="container">
            <div className="bordered_1px"></div>
            <div className="row">
              <div className="col-xl-12 justify-content-center align-content-center">
                <p className="copy_right text-center">
                  <p>
                    Copyright &copy; {new Date().getFullYear()} All rights
                    reserved.
                  </p>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
