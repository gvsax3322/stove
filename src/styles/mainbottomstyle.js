import styled from "@emotion/styled";

export const MainBottomst = styled.section`
  padding-top: 100px;
  .top {
    width: 100%;
    display: flex;
    gap: 30px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
    margin-bottom: 20px;
    .active {
      border-bottom: 1px solid #1f1f1f;
    }
    li {
      font-size: 1.6rem;
      line-height: 4.8rem;
      color: #1f1f1f;
      cursor: pointer;
    }
  }
  .item-2 {
    display: none;
  }
  .item {
    position: relative;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    height: 100%;
    gap: 17px;
    a {
      position: relative;
      width: 100%;
      width: 24%;
      &::before {
        content: "게임 자세히 보기";
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 30px;
        border-radius: 0 0 10px 10px;
        background: #1f1f1f;
        opacity: 0;
        transition: opacity 0.3s ease;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.4rem;
        color: #999;
      }

      &:hover::before {
        opacity: 1;
      }
      li {
        width: 100%;
        height: 140px;
        overflow: hidden;
        background-size: cover;
        background-position: right 0;
        background-repeat: no-repeat;
        border-radius: 20px;
        padding: 20px;
        h3 {
          font-size: 1.8rem;
          font-weight: 700;
          line-height: 26px;
          letter-spacing: -0.03em;

          max-width: 160px;
          color: #fff;
        }
        .item-1 {
          display: flex;
          align-items: center;
          gap: 5px;
          span {
            color: #fff;
            min-width: 36px;
            height: 20px;
            padding: 0 3px 0 3px;
            border-radius: 4px;
            background: #fc4420;
            font-size: 12px;
            font-weight: 700;
            line-height: 18px;
            margin-top: 2px;
          }
          h4 {
            color: #fff;
            font-size: 1.6rem;
            font-weight: 700;
            line-height: 26px;
          }
          strong {
            color: #fc4420;
            font-size: 1.4rem;
            padding-top: 10px;
          }
          p {
            font-size: 1.2rem;
            line-height: 1.8rem;
            color: hsla(0, 0%, 100%, 0.8);
          }
        }
      }
    }
  }
  .item-end {
    position: relative;
    display: flex;
    gap: 30px;
    width: 100%;
    padding-top: 70px;
    .img-1 {
      position: relative;
      width: 49%;
      a {
        position: relative;
        width: 100%;

        img {
          border-radius: 15px;
          width: 100%;
          height: 125px;
        }
      }
    }
    .img-2 {
      position: relative;
      width: 49%;
      a {
        position: relative;
        width: 100%;
        img {
          border-radius: 15px;
          width: 100%;
          height: 125px;
        }
      }
    }
  }
  @media screen and (max-width: 1440px) {
    padding: 0px 40px;
    .item {
      position: relative;
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      height: 100%;
      gap: 15px;
      a {
        width: 100%;
        width: 32%;
        li {
          width: 100%;
          height: 140px;
          overflow: hidden;
          background-size: cover;
          background-position: right 0;
          background-repeat: no-repeat;
          border-radius: 20px;
          padding: 20px;
          h3 {
            font-size: 1.8rem;
            font-weight: 700;
            line-height: 26px;
            letter-spacing: -0.03em;
            max-width: 160px;
            color: #fff;
          }
          .item-1 {
            display: flex;
            align-items: center;
            gap: 5px;
            span {
              color: #fff;
              min-width: 36px;
              height: 20px;
              padding: 0 3px 0 3px;
              border-radius: 4px;
              background: #fc4420;
              font-size: 12px;
              font-weight: 700;
              line-height: 18px;
              margin-top: 2px;
            }
            h4 {
              color: #fff;
              font-size: 1.6rem;
              font-weight: 700;
              line-height: 26px;
            }
            strong {
              color: #fc4420;
              font-size: 1.4rem;
              padding-top: 10px;
            }
          }
        }
      }
    }
  }
  @media screen and (max-width: 1024px) {
    .item {
      display: none;
    }
    .item-2 {
      position: relative;
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      height: 100%;
      gap: 15px;
      a {
        position: relative;
        width: 23%;
        li {
          width: 21.2vw;
          height: 20vw;
          overflow: hidden;
          background-size: cover;
          background-position: right 0;
          background-repeat: no-repeat;
          border-radius: 20px;
          padding: 20px;
          h3 {
            font-size: 1.5rem;
            font-weight: 500;
            line-height: 20px;
            max-width: 160px;
            color: #fff;
          }
          .item-3 {
            position: absolute;
            background: #fff;
            width: 21.2vw;
            height: 50%;
            left: 0;
            bottom: 0;
            border-radius: 0 0 10px 10px;
            padding: 10px;
            h3 {
              font-size: 1.5rem;
              font-weight: 500;
              line-height: 20px;
              max-width: 160px;
              color: #000;
            }
            .item-3-text {
              display: flex;
              align-items: center;

              gap: 10px;
              span {
                color: #fff;
                min-width: 36px;
                padding: 0 3px 0 3px;
                border-radius: 4px;
                background: #fc4420;
                font-size: 12px;
                font-weight: 700;
                line-height: 18px;
                margin-top: 2px;
              }
              h4 {
                color: #000;
                font-size: 1.6rem;
                font-weight: 700;
                line-height: 26px;
              }
              strong {
                color: #fc4420;
                font-size: 1.4rem;
                padding-top: 10px;
              }
            }
          }
        }
      }
    }
  }
  @media screen and (max-width: 767px) {
    padding: 0 20px !important;
    .item-2 {
      position: relative;
      width: 100%;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      height: 100%;
      gap: 15px;
      a {
        position: relative;
        width: 45%;
        li {
          width: 43vw;
          height: 30vw;
          overflow: hidden;
          background-size: cover;
          background-position: right 0;
          background-repeat: no-repeat;
          border-radius: 20px;
          padding: 20px;
          h3 {
            font-size: 1.5rem;
            font-weight: 500;
            line-height: 20px;
            max-width: 160px;
            color: #fff;
          }
          .item-3 {
            position: absolute;
            background: #fff;
            width: 43vw;
            height: 50%;
            left: 0;
            bottom: 0;
            border-radius: 0 0 10px 10px;
            padding: 10px;
            h3 {
              font-size: 1.5rem;
              font-weight: 500;
              line-height: 20px;
              max-width: 160px;
              color: #000;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
            }
            .item-3-text {
              display: flex;
              align-items: center;
              gap: 10px;
              span {
                color: #fff;
                min-width: 36px;
                height: 20px;
                padding: 0 3px 0 3px;
                border-radius: 4px;
                background: #fc4420;
                font-size: 12px;
                font-weight: 700;
                line-height: 18px;
                margin-top: 2px;
              }
              h4 {
                color: #000;
                font-size: 1.6rem;
                font-weight: 700;
                line-height: 26px;
              }
              strong {
                color: #fc4420;
                font-size: 1.4rem;
                padding-top: 10px;
              }
            }
          }
        }
      }
    }
    .item-end {
      flex-direction: column;
      gap: 10px;
      div {
        width: 100% !important;
      }
    }
  }
`;
