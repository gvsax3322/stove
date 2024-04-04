import React, { useState } from "react";
import { HeaderWrap } from "../../styles/headerstyle";
import HeaderModel from "./HeaderModel";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const hanedleClikOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HeaderWrap>
      <div className="wrap">
        <div className="left">
          <div className="logo">
            <a href="#">
              <img src="../../assets/images/header/h1.svg" />
            </a>
          </div>
          <div className="left-item">
            <a href="#">스토브게임</a>
            <a href="#">스토어</a>
          </div>
        </div>

        <ul className="ul-right">
          <li onClick={hanedleClikOpen}>
            {isOpen && <HeaderModel onClick />}
            <a href="#">
              <img className="svg1" src="../../assets/images/header/h2.svg" />
            </a>
          </li>
          <li>
            <a href="#">
              <img className="svg2" src="../../assets/images/header/h3.svg" />
            </a>
          </li>
          <li>
            <a href="#">
              <img className="svg3" src="../../assets/images/header/h4.svg" />
              <span>로그인</span>
            </a>
          </li>
        </ul>
      </div>
    </HeaderWrap>
  );
};

export default Header;
