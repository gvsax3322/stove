import React, { useEffect, useState } from "react";
import { MainReviewst } from "../../styles/mainstyler";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-creative";
import { Pagination } from "swiper/modules";

const MainReview = () => {
  const [list, setList] = useState([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };
  const getList = _num => {
    const jsonUrl = `./api/rv.json`;
    fetch(jsonUrl)
      .then(res => {
        return res.json();
      })
      .then(data => {
        setList(data);
        console.log(data);
      })
      .catch(err => {
        console.log(err);
      });
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  };

  useEffect(() => {
    getList();
  }, []);
  return (
    <MainReviewst>
      <h2>게임 리뷰</h2>
      <div className="r-bg">
        <div className="warp">
          <div className="r-left">
            <div>
              <img src="../../assets/images/rv/z1.png" />
            </div>
            <div className="bts">
              <button className="bt-1">자세히보기</button>
              <button className="bt-2">커뮤니티</button>
            </div>
          </div>
          {windowWidth <= 767 ? (
            <Swiper
              loop={true}
              grabCursor={true}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              className="mySwipe"
              modules={[Pagination]}
            >
              {list.map(item => (
                <SwiperSlide key={item.id}>
                  <div className="r-right">
                    <a href={item.link}>
                      <div className="r-right-wrap">
                        <div className="top">
                          <p>{item.comment}</p>
                        </div>
                        <div className="botton">
                          <div className="botton-img">
                            <img src={`../../assets/images/${item.imgpath}`} />
                          </div>
                          <div className="botton-text">
                            <h4>{item.name}</h4>
                            {item.paly && <p>{item.paly}</p>}
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <div className="r-right">
              {list.map(item => (
                <a href={item.link} key={item.id}>
                  <div className="r-right-wrap">
                    <div className="top">
                      <p>{item.comment}</p>
                    </div>
                    <div className="botton">
                      <div className="botton-img">
                        <img src={`../../assets/images/${item.imgpath}`} />
                      </div>
                      <div className="botton-text">
                        <h4>{item.name}</h4>
                        {item.paly && <p>{item.paly}</p>}
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </MainReviewst>
  );
};

export default MainReview;
