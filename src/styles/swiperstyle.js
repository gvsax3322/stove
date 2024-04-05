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
  @media screen and (max-width: 1440px) {
    .mySwipe1 {
      width: 448px !important;
      height: 280px !important;
      right: 25% !important;
    }
    .mySwiper2 {
      width: 540px !important;
      height: 400px !important;
    }
    .mySwiper3 {
      width: 448px !important;
      height: 280px !important;
      left: 25% !important;
    }
    .mySwipe4 {
      padding-left: 30px;
      .bts {
        padding-left: 30px;
      }
    }
    .sp-left {
      h2 {
        padding-top: 65px;
        font-size: 3.2rem;
        font-weight: 700;
        line-height: 46px;
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
    }
  }

  @media screen and (max-width: 1024px) {
    position: relative;
    align-items: center;
    flex-direction: column-reverse;
    width: 1024px;
    .sp-right {
      width: 1024px !important;
    }
    .mySwipe1 {
      width: 404px !important;
      height: 238px !important;
      right: 70% !important;
      top: 15% !important;
      border-radius: 0 !important;
    }
    .mySwiper2 {
      width: 576px !important;
      height: 340px !important;

      right: 50% !important;
    }
    .mySwiper3 {
      width: 404px !important;
      height: 238px !important;
      left: 70% !important;
      top: 15% !important;
      border-radius: 0 !important;
    }
    .mySwipe4 {
      position: absolute;
      z-index: 10;
      top: 75% !important;
      left: 26% !important;
      height: 170px !important;
      width: 500px !important;
      padding: 0 !important;
      background: #fff;
      h2 {
        padding-top: 20px;
        font-size: 2rem;
        font-weight: 700;
        line-height: 30px;
        margin-left: 30px;
      }
      h3 {
        padding-top: 8px;
        font-size: 1.3rem;
        font-weight: 400;
        line-height: 22px;
        margin-bottom: 28px;
        margin-left: 30px;
      }
      button {
        position: absolute;
        top: 70%;
        left: 72%;
        font-size: 1.3rem;
        font-weight: 400;
        line-height: 22px;
        height: 32px;
        padding: 5px 10px;
        border-radius: 10px;
        border: none;
        /* margin-left: 330px; */
        cursor: pointer;
        a {
          color: #fff;
        }
      }
      .bts {
        padding-left: 30px;
      }
    }
    .bts {
      display: none !important;
    }
    .pagination {
      top: 80% !important;
    }
  }
  @media screen and (max-width: 767px) {
    position: relative;
    align-items: center;
    width: 100% !important;
    padding-top: 0;

    .sp-right {
      width: 100% !important;
      overflow: hidden !important;
    }
    .mySwipe1 {
      max-width: 240px !important;
      height: 150px !important;
      right: 100% !important;
      top: 15% !important;
      border-radius: 0 !important;
    }
    .mySwiper2 {
      max-width: 336px !important;
      height: 210px !important;
      right: 10% !important;
    }
    .mySwiper3 {
      max-width: 240px !important;
      height: 150px !important;
      left: 70% !important;
      top: 15% !important;
      border-radius: 0 !important;
    }
    .mySwipe4 {
      position: absolute;
      z-index: 10;
      top: 40% !important;
      left: 0 !important;
      right: 0 !important;
      height: 210px !important;
      width: 300px !important;

      background: #fff;
      h2 {
        padding-top: 20px;
        font-size: 2rem;
        font-weight: 700;
        line-height: 30px;
        margin-left: 30px;
      }
      h3 {
        padding-top: 8px;
        font-size: 1.3rem;
        font-weight: 400;
        line-height: 22px;
        margin-bottom: 28px;
        margin-left: 30px;
      }
      button {
        position: absolute;
        top: 70%;
        left: 10%;
        font-size: 1.3rem;
        font-weight: 400;
        line-height: 22px;
        height: 32px;
        padding: 5px 10px;
        border-radius: 10px;
        border: none;
        /* margin-left: 330px; */
        cursor: pointer;
        a {
          color: #fff;
        }
      }
    }
    .bts {
      display: none !important;
    }
    .pagination {
      top: 80% !important;
    }
  }
`;
