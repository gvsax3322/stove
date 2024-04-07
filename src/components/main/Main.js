import React from "react";
import MainSp from "./MainSp";
import { MainStyle } from "../../styles/mainstyle";
import MainSp2 from "./MainSp2";
import MainRecommend from "./MainRecommend";
import MainReview from "./MainReview";
import MainBottom from "./MainBottom";

const Main = () => {
  return (
    <MainStyle>
      <MainSp />
      <MainSp2 />
      <MainRecommend />
      <MainReview />
      <MainBottom />
    </MainStyle>
  );
};

export default Main;
