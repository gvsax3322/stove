import styled from "@emotion/styled";

export const Footerst = styled.footer`
  margin-top: 200px;
  background: #1f1f1f;
  color: #fff;
  height: 100%;
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  padding: 0 40px;
  .wrap {
    max-width: 1300px;
    margin: 0 auto;
    .top {
      display: flex;
      gap: 20px;
      padding-top: 30px;
      padding-bottom: 16px;
      border-bottom: 1px solid hsla(0, 0%, 100%, 0.1);
      overflow: hidden;
      h3 {
        font-size: 1.5rem;
        font-weight: 700;
        line-height: 2.4rem;
      }
      span {
        font-size: 1.5rem;
        font-weight: 400;
        line-height: 2.4rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
    ul {
      display: flex;
      padding: 20px 0;
      border-bottom: 1px solid hsla(0, 0%, 100%, 0.1);
      width: 100%;
      gap: 30px;
      a {
        li {
          font-size: 1.5rem;
          font-weight: 400;
          line-height: 2.4rem;
          color: hsla(0, 0%, 100%, 0.5);
        }
        .active {
          color: #fff;
        }
      }
    }
    p {
      font-size: 1.3rem;
      font-weight: 400;
      line-height: 2.2rem;
      color: hsla(0, 0%, 100%, 0.5);
      span {
        margin-left: 5px;
        border-bottom: 1px solid hsla(0, 0%, 100%, 0.5);

        a {
          color: hsla(0, 0%, 100%, 0.5);
        }
      }
    }
    .footer-botton {
      display: flex;
      padding-top: 20px;
      gap: 10px;
    }
    .footer-botton-2 {
      padding: 30px 0;
    }
    .footer-img {
      background: url("../../assets/images/f1.png") no-repeat center;
      background-size: cover;
      width: 150px;
      height: 44px;
      padding-bottom: 30px;
    }
  }
  @media screen and (max-width: 845px) {
    .footer-botton {
      gap: 0px !important;
      flex-direction: column;
    }
  }
  @media screen and (max-width: 767px) {
    margin-top: 150px;
    padding: 0px 20px;
    padding-bottom: 30px;
    ul {
      flex-wrap: wrap;
      width: 100%;
      gap: 15px !important;
      a {
        li {
          font-size: 1.5rem;
          font-weight: 400;
          line-height: 2.4rem;
          color: hsla(0, 0%, 100%, 0.5);
        }
        .active {
          color: #fff;
        }
      }
    }
    p {
      display: none;
    }
    .footer-botton-2 {
      padding: 0 !important;
      margin-bottom: 30px;
      p {
        display: inline-block;
      }
    }
    .footer-img {
      margin-bottom: 0 !important;
    }
  }
`;
