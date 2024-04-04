import React from "react";
import { MenuHeader } from "../../styles/headerstyle";

const HeaderList = ({ item }) => {
  const event = item.event;
  const icon = item.icon;
  return (
    <MenuHeader color={item.color}>
      <a href={item.link}>
        <img src={`../../assets/images/${item.imgpath}`} />
        <h3>{item.comment}</h3>
        {event && <button>이벤트</button>}
        {icon && (
          <img
            src="../../assets/images/menu/m11.svg"
            style={{ marginLeft: 85 }}
          />
        )}
      </a>
    </MenuHeader>
  );
};

export default HeaderList;
