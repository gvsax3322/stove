import React from "react";
import MainSp from "./MainSp";
import { MainStyle } from "../../styles/mainstyle";
import MainSp2 from "./MainSp2";
import MainRecommend from "./MainRecommend";

const Main = () => {
  return (
    <MainStyle>
      <MainSp />
      <MainSp2 />
      <MainRecommend />
    </MainStyle>
  );
};

export default Main;
