import React, { useEffect, useState } from "react";
import { MainRecommendSt } from "../../styles/mainstyler";

const MainRecommend = () => {
  const [cardHovered, setCardHovered] = useState({});
  const [list, setList] = useState([]);
  const [activeIndex, setActiveIndex] = useState("1");
  const [activeNum, serActiveNum] = useState("1");

  const handleClikLi = _num => {
    getList(_num);
    setActiveIndex(_num);
  };

  const handleMouseEnter = id => {
    setCardHovered(prevState => ({
      ...prevState,
      [id]: true,
    }));
  };

  const handleMouseLeave = id => {
    setCardHovered(prevState => ({
      ...prevState,
      [id]: false,
    }));
  };

  const getList = _num => {
    const jsonUrl = `./api/card${_num}.json`;
    fetch(jsonUrl)
      .then(res => {
        return res.json();
      })
      .then(data => {
        setList(data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    getList(1);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      serActiveNum(prevNum => {
        const nextNum = parseInt(prevNum) + 1;
        if (nextNum > 4) {
          return "1";
        } else {
          return nextNum.toString();
        }
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    handleClikLi(activeNum);
  }, [activeNum]);

  return (
    <MainRecommendSt>
      <h2>STOVE 추천게임</h2>
      <div className="bts">
        <button
          onClick={() => handleClikLi("1")}
          className={activeIndex === "1" ? "active" : ""}
        >
          스토브게임
        </button>
        <button
          onClick={() => handleClikLi("2")}
          className={activeIndex === "2" ? "active" : ""}
        >
          스토어 무료 게임
        </button>
        <button
          onClick={() => handleClikLi("3")}
          className={activeIndex === "3" ? "active" : ""}
        >
          스토어 판매량 추천
        </button>
        <button
          onClick={() => handleClikLi("4")}
          className={activeIndex === "4" ? "active" : ""}
        >
          스토어 플레이타임 추천
        </button>
      </div>
      <div className="card">
        {list.map(item => (
          <a href="#" key={item.id} className="mb">
            <div
              className="card-img"
              onMouseEnter={() => handleMouseEnter(item.id)}
              onMouseLeave={() => handleMouseLeave(item.id)}
            >
              <img
                src={
                  cardHovered[item.id]
                    ? `../../assets/images/${item.imgpath2}`
                    : `../../assets/images/${item.imgpath}`
                }
                alt={item.name}
              />
            </div>
            <div className="crad-text">
              <h3>{item.name}</h3>
              <p>{item.tag}</p>
              <div className="bts-2">
                {item.free && <b>{item.free}</b>}
                {item.price && <strong>{item.price}</strong>}
                {item.bt1 && <button>{item.bt1}</button>}
                {item.bt2 && <button>{item.bt2}</button>}
                {item.bti && (
                  <button className="i-bt">
                    <img
                      src={`../../assets/images/${item.bti}`}
                      alt={item.name}
                    />
                  </button>
                )}
                {item.bti2 && (
                  <button className="i-bt">
                    <img
                      src={`../../assets/images/${item.bti2}`}
                      alt={item.name}
                    />
                  </button>
                )}
              </div>
            </div>
          </a>
        ))}
      </div>
    </MainRecommendSt>
  );
};

export default MainRecommend;
