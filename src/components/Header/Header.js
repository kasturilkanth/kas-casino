// import Avatar from "@material-ui/core/Avatar";
// import IconButton from "@material-ui/core/IconButton";
// import { useState } from "react";

function Header({ handleLogin }) {
  return (
    <>
      <div className="header">
        <div className="left">
          <img
            className="comp-logo"
            src="https://images.all-free-download.com/images/graphicwebp/casino_logo_design_card_icons_white_elements_decor_6829322.webp"
            alt="comp-pic"
          ></img>
        </div>
        <div className="right">
          <div className="balance"></div>
          <div className="avatar">
            {/* <IconButton>
              <Avatar
                src="/images/example.jpg"
                style={{
                  margin: "10px",
                  width: "60px",
                  height: "60px"
                }}
              />
            </IconButton> */}
          </div>
          <div className="login-btn">
            <button className="login-btn" onClick={handleLogin}>
              LogIn
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Header;
