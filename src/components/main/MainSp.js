import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-creative";
import {
  Autoplay,
  EffectCreative,
  Navigation,
  Pagination,
} from "swiper/modules";
import { Swiperwrap } from "../../styles/swiperstyle";

const MainSp = () => {
  const [activePage, setActivePage] = useState(0);
  const [play, setPlay] = useState(true);
  const swiper1Ref = useRef(null);
  const swiper2Ref = useRef(null);
  const swiper3Ref = useRef(null);
  const swiper4Ref = useRef(null);

  const changePage = increment => {
    let nextPage = activePage + increment;
    if (nextPage < 0) {
      nextPage = 3;
    } else if (nextPage > 3) {
      nextPage = 0;
    }
    setActivePage(nextPage);

    if (swiper1Ref.current && swiper1Ref.current.swiper) {
      swiper1Ref.current.swiper.slideTo(nextPage);
    }
    if (swiper2Ref.current && swiper2Ref.current.swiper) {
      swiper2Ref.current.swiper.slideTo(nextPage);
    }
    if (swiper3Ref.current && swiper3Ref.current.swiper) {
      swiper3Ref.current.swiper.slideTo(nextPage);
    }
    if (swiper4Ref.current && swiper4Ref.current.swiper) {
      swiper4Ref.current.swiper.slideTo(nextPage);
    }
  };

  const stopAutoplay = () => {
    setPlay(false);
    if (swiper1Ref.current && swiper1Ref.current.swiper) {
      swiper1Ref.current.swiper.autoplay.stop();
    }
    if (swiper2Ref.current && swiper2Ref.current.swiper) {
      swiper2Ref.current.swiper.autoplay.stop();
    }
    if (swiper3Ref.current && swiper3Ref.current.swiper) {
      swiper3Ref.current.swiper.autoplay.stop();
    }
    if (swiper4Ref.current && swiper4Ref.current.swiper) {
      swiper4Ref.current.swiper.autoplay.stop();
    }
  };

  const autoplay = () => {
    setPlay(true);
    if (swiper1Ref.current && swiper1Ref.current.swiper) {
      swiper1Ref.current.swiper.autoplay.start();
    }
    if (swiper2Ref.current && swiper2Ref.current.swiper) {
      swiper2Ref.current.swiper.autoplay.start();
    }
    if (swiper3Ref.current && swiper3Ref.current.swiper) {
      swiper3Ref.current.swiper.autoplay.start();
    }
    if (swiper4Ref.current && swiper4Ref.current.swiper) {
      swiper4Ref.current.swiper.autoplay.start();
    }
  };

  const handleSlideChange = swiper => {
    console.log(swiper.activeIndex);
    if (swiper.activeIndex === 3) {
      setTimeout(() => {
        swiper.slideTo(0);
      }, 4000);
    }
    setActivePage(swiper.activeIndex);
  };

  return (
    <Swiperwrap>
      <div className="sp-left">
        <Swiper
          ref={swiper4Ref}
          speed={1000}
          loop={true}
          grabCursor={true}
          pagination={{
            type: "bullets",
            clickable: true,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          effect={"fade"}
          creativeEffect={{
            prev: {
              shadow: true,
              translate: ["-20%", 0, -1],
            },
            next: {
              translate: ["100%", 0, 0],
            },
          }}
          allowTouchMove={false}
          onSlideChange={handleSlideChange}
          modules={[EffectCreative, Navigation, Autoplay, Pagination]}
          className="mySwipe4"
        >
          <SwiperSlide>
            <h2 style={{ color: "#99311c" }}>스토브 4월 핫위크</h2>
            <h3>
              이런 거짓말 같은 혜택?! <br />
              쿠폰에~ 경품에~ 100원 게임까지!
            </h3>
            <button style={{ background: "#99311c" }}>
              <a href="#">핫위크 바로가기 &gt;</a>
            </button>
          </SwiperSlide>
          <SwiperSlide>
            <h2 style={{ color: "#4e1c60" }}>스토브 오디션 정식 론칭</h2>
            <h3>
              대한민국 No.1 리듬게임 <br />
              감춰진 댄스 본능을 다시 한번!
            </h3>
            <button style={{ background: "#4e1c60" }}>
              <a href="#">춤추러 가요~ &gt;</a>
            </button>
          </SwiperSlide>
          <SwiperSlide>
            <h2 style={{ color: "#99311c" }}>
              스토브는 한글이야 <br />
              러브 앤 워 시리즈 2
            </h2>
            <h3>
              여전사들과 함께 하는 전략 RPG
              <br />
              한글화 출시 기념 할인!
            </h3>
            <button style={{ background: "#99311c" }}>
              <a href="#">한글화 바로 가기 &gt;</a>
            </button>
          </SwiperSlide>
          <SwiperSlide>
            <h2 style={{ color: "#4e1c60" }}>
              두근두근 야심작 #15 시스터즈 커리큘럼
            </h2>
            <h3>
              흙수저 대학생의 상위 1% 자매 과외기
              <br />
              ~15%할인 & 최대 3가지 선물 증정!
            </h3>
            <button style={{ background: "#4e1c60" }}>
              <a href="#">자세히 보기 &gt;</a>
            </button>
          </SwiperSlide>
          <div className="bts">
            <button onClick={() => changePage(-1)}>
              <img src="../../assets/images/sp/s7.svg" />
            </button>
            <button onClick={() => changePage(1)}>
              <img src="../../assets/images/sp/s8.svg" />
            </button>
            {play && (
              <button onClick={stopAutoplay}>
                <img src="../../assets/images/sp/s10.svg" />
              </button>
            )}
            {!play && (
              <button onClick={autoplay}>
                <img src="../../assets/images/sp/s9.svg" />
              </button>
            )}
          </div>
        </Swiper>
      </div>
      <div className="sp-right">
        <Swiper
          ref={swiper1Ref}
          speed={1000}
          loop={true}
          grabCursor={true}
          pagination={{
            type: "bullets",
            clickable: true,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          effect={"creative"}
          creativeEffect={{
            prev: {
              shadow: true,
              translate: ["-20%", 0, -1],
            },
            next: {
              translate: ["100%", 0, 0],
            },
          }}
          allowTouchMove={false}
          modules={[EffectCreative, Navigation, Autoplay, Pagination]}
          className="mySwipe1"
        >
          <SwiperSlide>
            <div className="sp-img">
              <img src="../../assets/images/sp/s4.png" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="sp-img">
              <img src="../../assets/images/sp/s1.jpeg" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="sp-img">
              <img src="../../assets/images/sp/s2.jpeg" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="sp-img">
              <img src="../../assets/images/sp/s3.jpeg" />
            </div>
          </SwiperSlide>
        </Swiper>
        <Swiper
          ref={swiper2Ref}
          speed={1000}
          loop={true}
          grabCursor={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            waitForTransition: true,
          }}
          effect={"creative"}
          creativeEffect={{
            prev: {
              shadow: true,
              translate: ["-20%", 0, -1],
            },
            next: {
              translate: ["100%", 0, 0],
            },
          }}
          allowTouchMove={false}
          modules={[EffectCreative, Navigation, Autoplay]}
          onSlideChange={handleSlideChange}
          className="mySwiper2"
        >
          <SwiperSlide>
            <div className="sp-img">
              <img src="../../assets/images/sp/s1.jpeg" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="sp-img">
              <img src="../../assets/images/sp/s2.jpeg" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="sp-img">
              <img src="../../assets/images/sp/s3.jpeg" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="sp-img">
              <img src="../../assets/images/sp/s4.png" />
            </div>
          </SwiperSlide>
          <div className="pagination">
            <button
              className={activePage === 0 ? "active" : ""}
              onClick={() => changePage(0)}
            ></button>
            <button
              className={activePage === 1 ? "active" : ""}
              onClick={() => changePage(1)}
            ></button>
            <button
              className={activePage === 2 ? "active" : ""}
              onClick={() => changePage(2)}
            ></button>
            <button
              className={activePage === 3 ? "active" : ""}
              onClick={() => changePage(3)}
            ></button>
          </div>
        </Swiper>
        <Swiper
          ref={swiper3Ref}
          speed={1000}
          loop={true}
          grabCursor={true}
          pagination={{
            type: "bullets",
            clickable: true,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          effect={"creative"}
          creativeEffect={{
            prev: {
              shadow: true,
              translate: ["-20%", 0, -1],
            },
            next: {
              translate: ["100%", 0, 0],
            },
          }}
          allowTouchMove={false}
          modules={[EffectCreative, Navigation, Autoplay, Pagination]}
          className="mySwiper3"
        >
          <SwiperSlide>
            <div className="sp-img">
              <img src="../../assets/images/sp/s2.jpeg" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="sp-img">
              <img src="../../assets/images/sp/s3.jpeg" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="sp-img">
              <img src="../../assets/images/sp/s4.png" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="sp-img">
              <img src="../../assets/images/sp/s1.jpeg" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </Swiperwrap>
  );
};

export default MainSp;
