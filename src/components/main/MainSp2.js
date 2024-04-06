import React, { useEffect, useState } from "react";
import { MainSp2style } from "../../styles/swiperstyle";

const MainSp2 = () => {
  const [list, setList] = useState([]);
  const getList = () => {
    const jsonUrl = "./api/sp.json";
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
  useEffect(() => {
    getList();
  }, []);
  return (
    <MainSp2style>
      {list.map(item => (
        <div className="item" key={item.id}>
          <div className="item-left">
            <img src={`../../assets/images/${item.imgpath}`} />
          </div>
          <div className="item-right">
            <h3>{item.name}</h3>
            <p>{item.comment}</p>
          </div>
        </div>
      ))}
    </MainSp2style>
  );
};

export default MainSp2;
