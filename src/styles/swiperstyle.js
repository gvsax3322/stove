import styled from "@emotion/styled";

export const Swiperwrap = styled.section`
  position: relative;
  display: flex;
  justify-content: space-between;
  height: 400px;
  .sp-left {
    width: 40%;
    .mySwipe4 {
      width: 100%;
      height: 100%;
      .bts {
      }
    }

    h2 {
      padding-top: 65px;
      font-size: 4.2rem;
      font-weight: 700;
      line-height: 56px;
    }
    h3 {
      padding-top: 8px;
      font-size: 1.6rem;
      font-weight: 400;
      line-height: 26px;
      margin-bottom: 28px;
    }
    button {
      font-size: 14px;
      font-weight: 700;
      line-height: 20px;
      height: 44px;
      padding: 10px 20px;
      border-radius: 10px;
      border: none;
      cursor: pointer;
      a {
        color: #fff;
      }
    }
    .bts {
      position: absolute;
      bottom: 10px;
      z-index: 5;
      left: 0;
      display: flex;
      gap: 30px;
      button {
        padding: 0;
        padding-top: 30px;
      }
    }
  }
  .sp-right {
    position: relative;
    width: 60%;
    .mySwipe1 {
      position: absolute;
      width: 500px;
      height: 300px;
      border-radius: 20px;
      top: 10%;
      left: 0;
      right: 55%;
      bottom: 0;
      opacity: 0.5;
    }
    .mySwiper2 {
      position: relative;
      z-index: 5;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border-radius: 20px;
      width: 700px;
      height: 400px;
      opacity: 1;
      .pagination {
        position: absolute;
        bottom: 10px;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        gap: 10px;
        z-index: 5;
        button {
          width: 6px;
          height: 6px !important;
          background-color: hsla(0, 0%, 100%, 0.3) !important;
          border-radius: 3px;
          cursor: pointer;
          border: none;
        }
        .active {
          transition: width 0.15s ease-in-out, opacity 0.15s ease-in-out;
          width: 48px !important;
          border-radius: 5px;
          height: 6px;
          background: #fff !important;
        }
      }
    }
    .mySwiper3 {
      position: absolute;
      width: 500px;
      height: 300px;
      border-radius: 20px;
      top: 10%;
      left: 35%;
      right: 0;
      bottom: 0;
      opacity: 0.5;
    }
    .swiper-slide {
      width: 100%;
      height: 100%;
    }

    .sp-img {
      width: 100%;
      height: 100%;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
`;
