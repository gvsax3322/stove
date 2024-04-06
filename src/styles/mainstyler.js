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
