import styled from "@emotion/styled";

export const HeaderWrap = styled.header`
  position: fixed;
  background: #fff;
  left: 0;
  top: 0;
  width: 100%;
  height: 62px;
  z-index: 999;

  .wrap {
    max-width: 1300px;
    margin: 0 auto;
    height: 100%;
    display: flex;
    justify-content: space-between;
    .logo {
      margin-right: 40px;
    }
    .left {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;

      .left-item {
        display: flex;
        gap: 20px;
        font-size: 1.8rem;
        font-weight: 700;
        line-height: 20px;
      }
    }
    .ul-right {
      display: flex;
      gap: 15px;
      align-items: center;
      li {
        a {
          display: flex;
          align-items: center;
          .svg1:hover {
            background: url("../../assets/images/header/h5.svg") no-repeat
              center;
          }
          .svg2:hover {
            background: url("../../assets/images/header/h6.svg") no-repeat
              center;
          }
          .svg3:hover {
            background: url("../../assets/images/header/h7.svg") no-repeat
              center;
          }

          span {
            font-size: 1.3rem;
            font-weight: 700;
            padding-left: 5px;
          }
        }
      }
    }
  }
  @media screen and (max-width: 1440px) {
    padding: 0 40px;
  }
  @media screen and (max-width: 1024px) {
    height: 96px;
    .logo {
      margin: 20px 0;
    }
    .left {
      flex-direction: column;
      align-items: start !important;
    }

    .ul-right {
      display: flex;
      gap: 15px;
      align-items: start !important;
      padding-top: 15px;
      li {
        a {
          span {
            display: none;
          }
        }
      }
    }
  }
`;

export const HeaderModerWrap = styled.nav`
  position: relative;
  .wrap {
    position: absolute;
    display: flex;
    width: 570px;
    height: 570px;
    overflow-y: scroll;
    right: 10px;
    top: 30px;
    background: #fff;
    padding: 24px;
    border-radius: 25px;
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.3);
    .wrap-left {
      position: relative;
      width: 50%;
      .stove {
        background: url("../../assets/images/menu/m77.svg") no-repeat center;
        width: 70px;
        height: 13px;
        padding-left: 5px;
        margin-bottom: 15px;
        margin-top: 5px;
      }
      .ul-left {
        padding-right: 16px;
      }
      .language {
        display: flex;
        justify-content: space-between;
        padding: 5px;
        margin-bottom: 10px;
        .language-left {
          display: flex;
          align-items: center;
          width: 40%;
          cursor: pointer;
          img {
            width: 20px;
          }
          h3 {
            font-size: 1.3rem;
            font-weight: 700;
            padding-left: 5px;
          }
        }
        .language-right {
          display: flex;
          align-items: center;
          cursor: pointer;
          .img-toggle {
            background: url("../../assets/images/menu/m13.svg") no-repeat center;
            transform: ${props => (props.toggle ? "none" : "scaleY(-1)")};
            width: 20px;
            height: 20px;
          }
        }
      }
    }
    .wrap-right {
      position: relative;
      width: 50%;
      p {
        font-size: 1.2rem;
        margin-bottom: 20px;
      }
      .item {
        display: flex;
        flex-direction: column;
        gap: 25px;
        .item-wrap {
          display: flex;
          gap: 15px;
          .wrap-right-img {
            position: relative;
            a {
              position: relative;
              img {
                width: 52px;
                border-radius: 5px;
              }
            }
            a::before {
              content: "";
              position: absolute;
              height: 100%;
              width: 100%;
              background-image: url(../../assets/images/menu/m15.svg);
              background-repeat: no-repeat;
              background-position: center;
              left: 60%;
              top: -40%;
            }
          }
          .wrap-right-text {
            h3 {
              font-size: 1.3rem;
              font-weight: 700;
              margin-bottom: 5px;
              padding-left: 10px;
            }
            p {
              font-size: 1.1rem;
              margin-bottom: 5px;
              padding-left: 10px;
            }
            button {
              background: #eee;
              border: none;
              padding: 0 13px;
              height: 23px;
              border-radius: 11px;
              margin-right: 5px;
              cursor: pointer;
              font-size: 1.2rem;
              font-weight: 500;
            }
          }
        }
      }
    }
    .toggle {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      padding-bottom: 20px;
      li {
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 45%;
        height: 32px;
        font-size: 12px;
        font-weight: 500;
        line-height: 18px;
        padding-left: 12px;
        padding-right: 12px;
        background: #eee;
        border-radius: 16px;
        &:hover {
          background: #dbdada;
        }
      }
      .active {
        background: #000;
        color: #fff;
      }
    }
  }

  @media screen and (max-width: 1024px) {
    background-color: rgba(0, 0, 0, 0.5);
    .mb-bg {
      position: fixed;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background-color: rgba(0, 0, 0, 0.5);
    }
    .wrap {
      position: fixed;
      height: auto;
      width: auto;
      left: 0;
      right: 0;
      bottom: 0;
      top: 80px;
      flex-direction: column;
    }
    .wrap-left {
      width: 100% !important;
      .toggle {
        padding-bottom: 20px;
        li {
          cursor: pointer;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 48%;
          height: 32px;
          font-size: 12px;
          font-weight: 500;
          line-height: 18px;
          padding-left: 12px;
          padding-right: 12px;
          background: #eee;
          border-radius: 16px;
          &:hover {
            background: #dbdada;
          }
        }
        .active {
          background: #000;
          color: #fff;
        }
      }
    }
    .wrap-right {
      width: 100% !important;
    }
  }
`;

export const MenuHeader = styled.li`
  position: relative;
  a {
    padding: 10px;
    padding-left: 5px;
    display: flex;
    gap: 15px;
    align-items: center;
    font-size: 1.2rem;
    width: 100%;
  }
  a::before {
    content: "";
    position: absolute;
    width: 5px;
    height: 5px;
    background-color: ${props => props.color || "white"};
    border-radius: 50%;
    left: 10%;
    top: 30%;
    transform: translateY(-50%);
  }
  button {
    background: eee;
    width: 50px;
    height: 25px;
    border-radius: 10px;
    border: none;
    cursor: pointer;
  }

  &:hover {
    background: #eee;
    border-radius: 5px;
  }
  @media screen and (max-width: 1024px) {
    a {
      padding: 10px;
      padding-left: 25px;
      display: flex;
      gap: 15px;
      align-items: center;
      font-size: 1.5rem;
      width: 100%;
    }
    button {
      background: eee;
      font-size: 1.2rem;
      width: 50px;
      height: 25px;
      border-radius: 15px;
      border: none;
      cursor: pointer;
    }
  }
`;
