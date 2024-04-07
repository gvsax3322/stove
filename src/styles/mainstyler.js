import styled from "@emotion/styled";

export const MainRecommendSt = styled.section`
  width: 100%;
  height: 100%;
  h2 {
    font-size: 2rem;
    font-weight: 700;
    line-height: 30px;
    padding-top: 70px;
    margin-bottom: 20px;
  }
  .bts {
    position: relative;
    width: 100%;
    height: 100%;
    background: #fff;
    border-radius: 10px;
    margin-bottom: 20px;
    overflow: hidden;
    .active {
      color: #fff;
      background-color: #000;
    }
    button {
      width: 25%;
      border: none;
      padding-left: 2rem;
      padding-right: 2rem;
      font-size: 1.5rem;
      line-height: 5.6rem;
      text-align: center;
      color: #333;
      background: transparent;
      cursor: pointer;
    }
  }
  .card {
    position: relative;
    max-height: 100%;
    display: flex;
    gap: 30px;
    .mb {
      position: relative;
      width: 100%;
      height: 100%;
      .card-img {
        position: relative;
        img {
          border-radius: 10px 10px 0 0;
          width: 100%;
          height: 172px;
        }
      }
      .crad-text {
        padding: 20px;
        border-radius: 0 0 10px 10px;
        width: 100%;
        height: 172px;
        background: #fff;
        &:hover {
          box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
        }
        h3 {
          font-size: 1.6rem;
          font-weight: 700;
          line-height: 24px;
        }
        p {
          font-size: 1.2rem;
          font-weight: 400;
          line-height: 18px;
          color: #999;
          margin-bottom: 45px;
          width: 150px;
          max-width: 150px;
          height: 20px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .bts-2 {
          display: flex;
          justify-content: space-between;
          strong {
            padding-top: 20px;
            font-size: 1.6rem;
            font-weight: 700;
          }
          b {
            padding-top: 20px;
            font-size: 1.6rem;
            font-weight: 700;
            color: red;
          }
          button {
            width: 48%;
            border-radius: 5px;
            border: none;
            font-size: 1.4rem;
            font-weight: 400;
            padding: 15px 20px;
            background: #f5f5f5;
            img {
              width: 24px;
              height: 20px;
            }
          }
          .i-bt {
            width: 20%;
            padding: 0;
            img {
              width: 20px;
            }
          }
        }
      }
    }
  }
  @media screen and (max-width: 1440px) {
  }
  @media screen and (max-width: 1024px) {
    .bts {
      position: relative;
      display: flex;
      gap: 20px;
      background: transparent;
      width: 90%;
      margin-bottom: 20px;
      .active {
        color: #fff;
        background-color: #000;
      }
      button {
        border: 1px solid #999 !important;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 20px;
        padding: 20px 5px !important;
        font-size: 1.4rem;
        text-align: center;
        width: 100% !important;
        height: 30px;
        color: #999;
        background: transparent;
        cursor: pointer;
      }
    }
  }
  @media screen and (max-width: 767px) {
    h2 {
      font-size: 2.5rem;
      font-weight: 700;
      line-height: 40px;
      margin-left: 30px !important;
    }
    .card {
      padding: 0 20px;
      justify-content: center;
    }
    h3 {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .bts-2 {
      button {
        display: none !important;
      }
    }
    .card {
      width: 100% !important;
      flex-wrap: wrap;
      .mb {
        width: 45%;
      }
    }
    .bts {
      position: relative;
      display: flex;
      gap: 10px;
      background: transparent;
      width: 100%;
      margin-bottom: 20px;
      .active {
        color: #fff;
        background-color: #000;
      }
      button {
        border: 1px solid #999 !important;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 20px;
        padding: 0 !important;
        font-size: 1rem !important;
        text-align: center;

        height: 30px;
        color: #999;
        background: transparent;
        cursor: pointer;
      }
    }
  }
`;

export const MainReviewst = styled.section`
  position: relative;
  width: 100%;
  height: 100%;
  h2 {
    font-size: 2rem;
    font-weight: 700;
    line-height: 30px;
    padding-top: 70px;
    margin-bottom: 20px;
  }
  .r-bg {
    background: url("../../assets/images/rv/z2.png") no-repeat center;
    width: 100vw;
    margin-left: calc(-50vw + 50%);
    height: 365px;
    .warp {
      max-width: 1300px;
      margin: 0 auto;
      padding-top: 36px;
      display: flex;
      justify-content: space-between;
      .r-left {
        margin-top: 11px;
        .bts {
          padding-top: 48px;
          button {
            width: 122px;
            height: 44px;
            border: none;
            background-color: transparent;
            color: #fff;
            font-size: 14px;
            font-weight: 500;
            line-height: 20px;
            border-radius: 10px;
          }
          .bt-1 {
            background: #fff;
            color: #000;
            margin-right: 5px;
          }
          .bt-2 {
            background: hsla(0, 0%, 100%, 0.2);
          }
        }
      }
      .r-right {
        width: 660px;
        display: flex;
        gap: 20px;
        .r-right-wrap {
          position: relative;
          width: 200px;
          height: 293px;
          background: #fff;
          padding: 30px 20px;
          border-radius: 20px;

          .top {
            height: 80%;
            width: 100%;
            overflow: hidden;
            p {
              height: 80%;
              font-size: 1.5rem;
              line-height: 24px;
              overflow: hidden;
              text-overflow: ellipsis;
            }
          }
          .botton {
            height: 20%;
            display: flex;
            gap: 10px;
            .botton-img {
              img {
                width: 40px;
                border-radius: 20px;
              }
            }
            .botton-text {
              h4 {
                font-size: 1.4rem;
                line-height: 20px;
                font-weight: 400;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
              }
              p {
                font-size: 1.2rem;
                line-height: 18px;
                color: #999;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
              }
            }
          }
        }
      }
    }
  }
  @media screen and (max-width: 1440px) {
    .r-right {
      width: 660px;
      display: flex;
      gap: 10px;
      .r-right-wrap {
        position: relative;
        width: 170px !important;
        height: 293px;
        background: #fff;
        padding: 30px 20px;
        border-radius: 20px;

        .top {
          height: 80%;
          width: 100%;
          overflow: hidden;
          p {
            height: 80%;
            font-size: 1.5rem;
            line-height: 24px;
            overflow: hidden;
            text-overflow: ellipsis;
          }
        }
        .botton {
          height: 20%;
          display: flex;
          gap: 10px;
          .botton-img {
            img {
              width: 40px;
              border-radius: 20px;
            }
          }
          .botton-text {
            overflow: hidden;
            h4 {
              font-size: 1.4rem;
              line-height: 20px;
              font-weight: 400;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
            }
            p {
              font-size: 1.2rem;
              line-height: 18px;
              color: #999;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
            }
          }
        }
      }
    }
  }
  @media screen and (max-width: 1024px) {
    .bts {
      margin-bottom: 20px;
      button {
        width: 100px !important;
        height: 30px !important;
        border: none;
        background-color: transparent;
        color: #fff;
        font-size: 1.3rem !important;
        font-weight: 300 !important;
        line-height: 15px;
        border-radius: 10px;
      }
    }
    .r-bg {
      background-size: cover;
      width: 100%;
      height: 100%;
    }
    .warp {
      flex-direction: column;
      padding: 40px;
      .r-right {
        position: relative;
        width: 100% !important;
        display: flex;
        gap: 10px;
        justify-content: center;
        overflow: hidden;
        a {
          width: 33% !important;
          .r-right-wrap {
            position: relative;
            width: 100% !important;
            height: 250px !important;
            background: #fff;

            .top {
              height: 80%;
              width: 100%;
              overflow: hidden;
              p {
                height: 80%;
                font-size: 1.5rem;
                line-height: 24px;
                overflow: hidden;
                text-overflow: ellipsis;
              }
            }
            .botton {
              height: 20%;
              display: flex;
              gap: 10px;
              .botton-img {
                img {
                  width: 40px;
                  border-radius: 20px;
                }
              }
              .botton-text {
                overflow: hidden;
                h4 {
                  font-size: 1.4rem;
                  line-height: 20px;
                  font-weight: 400;
                  white-space: nowrap;
                  overflow: hidden;
                  text-overflow: ellipsis;
                }
                p {
                  font-size: 1.2rem;
                  line-height: 18px;
                  color: #999;
                  white-space: nowrap;
                  overflow: hidden;
                  text-overflow: ellipsis;
                }
              }
            }
          }
        }
      }
    }
    .botton-text {
      display: flex;
      gap: 10px;
    }
  }
  @media screen and (max-width: 767px) {
    h2 {
      font-size: 2.5rem;
      font-weight: 700;
      line-height: 40px;
      margin-left: 30px !important;
    }
    .swiper-pagination {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      height: 20px;
      font-size: 1.1rem;
      color: #fff;
    }

    .swiper-pagination-bullet {
      width: 6px;
      height: 6px;
      background-color: #fff;
      transition: width 1s, opacity 1s;
      border-radius: 5px;
      opacity: 0.4;
    }
    .swiper-pagination-bullet-active {
      width: 40px;
      opacity: 1;
    }
    .mySwipe {
      position: relative;
      width: 100% !important;
      .r-right {
        a {
          width: 100% !important;
          .r-right-wrap {
            position: relative;
            width: 100% !important;
            height: 250px !important;
            background: #fff;
            .top {
              height: 80%;
              width: 100%;
              overflow: hidden;
              p {
                height: 80%;
                font-size: 1.5rem;
                line-height: 24px;
                overflow: hidden;
                text-overflow: ellipsis;
              }
            }
            .botton {
              height: 20%;
              display: flex;
              gap: 10px;
              .botton-img {
                img {
                  width: 40px;
                  border-radius: 20px;
                }
              }
              .botton-text {
                overflow: hidden;
                h4 {
                  font-size: 1.4rem;
                  line-height: 20px;
                  font-weight: 400;
                  white-space: nowrap;
                  overflow: hidden;
                  text-overflow: ellipsis;
                }
                p {
                  font-size: 1.2rem;
                  line-height: 18px;
                  color: #999;
                  white-space: nowrap;
                  overflow: hidden;
                  text-overflow: ellipsis;
                }
              }
            }
          }
        }
      }
    }
  }
`;
