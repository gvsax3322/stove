import React, { useEffect, useState } from "react";
import { Footerst } from "../../styles/footerstyle";

const Footer = () => {
  const [announcement, setAnnouncement] = useState([
    "3/15(금) SKT 휴대폰 결제 서비스 장애 안내(해결)",
    "3/20(수) STOVE 결제 시스템 작업 안내",
    "스토브 개인정보처리방침 변경 안내 (시행 2024.04.04)",
    "3/25(월) OTP, 지정 PC 설정, 계정도용 신고센터 이용 시 휴대폰 본인인증 불가 현상 안내 (해결)",
    "스토브 개인정보처리방침 변경 안내 (시행 2024.04.04)",
    "5/1(수) 상품권 결제 한도 변경 안내",
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // 5초마다 currentIndex를 증가시켜 다음 공지사항으로 변경합니다.
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % announcement.length);
    }, 5000);

    return () => clearInterval(interval); // 컴포넌트가 언마운트될 때 interval을 클리어합니다.
  }, [announcement.length]);
  return (
    <Footerst>
      <div className="wrap">
        <div className="top">
          <h3>공지사항</h3>
          <span>{announcement[currentIndex]}</span>
        </div>
        <ul>
          <a href="#">
            <li>회사소개</li>
          </a>
          <a href="#">
            <li>이용약관</li>
          </a>
          <a href="#">
            <li className="active">개인정보처리방침</li>
          </a>
          <a href="#">
            <li>청소년보호정책</li>
          </a>
          <a href="#">
            <li>운영정책</li>
          </a>
          <a href="#">
            <li>게임시간선택제</li>
          </a>
          <a href="#">
            <li>고객센터</li>
          </a>
        </ul>
        <div className="footer-botton">
          <p>㈜스마일게이트홀딩스 메가포트지점 대표이사: 성준호</p>
          <p>
            주소: 경기도 성남시 분당구 분당로 55, 3층, 4층, 5층, 7층, 8층
            (서현동, 분당 퍼스트타워)
          </p>
        </div>
        <p>
          사업자 등록번호: 813-85-02492 통신판매업 신고번호:
          제2023-성남분당A-0145호
          <span>
            <a href="#">사업자정보확인</a>
          </span>
        </p>
        <p>
          대표번호 :
          <span style={{ marginRight: 5 }}>
            <a href="#">1670-0399팩스</a>
          </span>
          :
          <span style={{ marginRight: 5 }}>
            <a href="#">02-6020-8213E-mail</a>
          </span>
          :
          <span style={{ marginRight: 5 }}>
            <a href="#">stove@smilegate.com</a>
          </span>
        </p>
        <div className="footer-botton-2">
          <p>© Smilegate. All Rights Reserved.</p>
        </div>
        <div className="footer-img" />
      </div>
    </Footerst>
  );
};

export default Footer;
