import React from "react";
import MainSp from "./MainSp";
import { MainStyle } from "../../styles/mainstyle";
import MainSp2 from "./MainSp2";
import MainRecommend from "./MainRecommend";
import MainReview from "./MainReview";

const Main = () => {
  return (
    <MainStyle>
      <MainSp />
      <MainSp2 />
      <MainRecommend />
      <MainReview />
    </MainStyle>
  );
};

export default Main;
