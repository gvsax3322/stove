import React, { useEffect, useState } from "react";
import { MainSp2style } from "../../styles/swiperstyle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-creative";

const MainSp2 = () => {
  const [list, setList] = useState([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    const jsonUrl = "./api/sp.json";
    fetch(jsonUrl)
      .then(res => res.json())
      .then(data => {
        setList(data);
      })
      .catch(err => {
        console.log(err);
      });

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <MainSp2style>
      {windowWidth <= 1024 ? (
        <Swiper
          slidesPerView={2}
          loop={true}
          grabCursor={true}
          spaceBetween={30}
          className="mySwipe5"
        >
          {list.map(item => (
            <SwiperSlide key={item.id}>
              <div className="item">
                <div className="item-left">
                  <img
                    src={`../../assets/images/${item.imgpath}`}
                    alt={item.name}
                  />
                </div>
                <div className="item-right">
                  <h3>{item.name}</h3>
                  <p>{item.comment}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        list.map(item => (
          <div className="item" key={item.id}>
            <div className="item-left">
              <img
                src={`../../assets/images/${item.imgpath}`}
                alt={item.name}
              />
            </div>
            <div className="item-right">
              <h3>{item.name}</h3>
              <p>{item.comment}</p>
            </div>
          </div>
        ))
      )}
    </MainSp2style>
  );
};

export default MainSp2;
