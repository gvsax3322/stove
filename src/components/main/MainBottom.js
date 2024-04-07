import React, { useState } from "react";
import { MainBottomst } from "../../styles/mainbottomstyle";

const MainBottom = () => {
  const [list, setList] = useState([]);
  const [activeIndex, setActiveIndex] = useState("1");

  const handleClikLi = _num => {
    getList(_num);
    setActiveIndex(_num);
  };
  const getList = _num => {
    const jsonUrl = `./api/item${_num}.json`;
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
  };

  useState(() => {
    getList(1);
  }, []);
  return (
    <MainBottomst>
      <ul className="top">
        <li
          onClick={() => handleClikLi("1")}
          className={activeIndex === "1" ? "active" : ""}
        >
          스토어
        </li>
        <li
          onClick={() => handleClikLi("2")}
          className={activeIndex === "2" ? "active" : ""}
        >
          PC 게임
        </li>
        <li
          onClick={() => handleClikLi("3")}
          className={activeIndex === "3" ? "active" : ""}
        >
          모바일 게임
        </li>
      </ul>
      <ul className="item">
        {list.map(item => (
          <a href={item.link} key={item.id}>
            <li
              style={{
                backgroundImage: `url(../../assets/images/${item.imgpath})`,
              }}
            >
              <h3>{item.name}</h3>
              <div className="item-1">
                {item.tag && <p>{item.tag}</p>}
                {item.free && <strong>{item.free}</strong>}
                {item.discount && <span>{item.discount}</span>}
                <h4>{item.price}</h4>
              </div>
            </li>
          </a>
        ))}
      </ul>
      <ul className="item-2">
        {list.map(item => (
          <a href={item.link} key={item.id}>
            <li
              style={{
                backgroundImage: `url(../../assets/images/${item.imgpath})`,
              }}
            >
              <div className={item.id === 12 ? null : "item-3"}>
                <h3>{item.name}</h3>
                <div className="item-3-text">
                  {item.tag && <p>{item.tag}</p>}
                  {item.free && <strong>{item.free}</strong>}
                  {item.discount && <span>{item.discount}</span>}
                  <h4>{item.price}</h4>
                </div>
              </div>
            </li>
          </a>
        ))}
      </ul>
      <div className="item-end">
        <div className="img-1">
          <a href="#">
            <img src="../../assets/images/b/z1.png" />
          </a>
        </div>
        <div className="img-2">
          <a href="#">
            <img src="../../assets/images/b/z2.png" />
          </a>
        </div>
      </div>
    </MainBottomst>
  );
};

export default MainBottom;
