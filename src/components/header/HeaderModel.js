import React, { useEffect, useState } from "react";
import { HeaderModerWrap } from "../../styles/headerstyle";
import HeaderList from "./HeaderList";

const HeaderModel = () => {
  const [list, setList] = useState([]);
  const [list2, setList2] = useState([]);
  const [list3, setList3] = useState([]);
  const [toggle, setToggle] = useState(false);

  const getList = () => {
    const jsonUrl = "./api/menu.json";
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

  const getList2 = () => {
    const jsonUrl = "./api/menu2.json";
    fetch(jsonUrl)
      .then(res => {
        return res.json();
      })
      .then(data => {
        setList2(data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const getList3 = () => {
    const jsonUrl = "./api/menu3.json";
    fetch(jsonUrl)
      .then(res => {
        return res.json();
      })
      .then(data => {
        setList3(data);
        console.log(data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    getList();
    getList2();
    getList3();
  }, []);
  const handleClickModal = e => {
    e.stopPropagation();
  };

  const headleClikToggle = () => {
    setToggle(!toggle);
  };

  return (
    <HeaderModerWrap onClick={handleClickModal} toggle={toggle}>
      <div className="mb-bg">
        <div className="wrap">
          <div className="wrap-left">
            <div className="stove"></div>
            <ul className="ul-left">
              {list.map(item => (
                <div key={item.id}>
                  <HeaderList item={item} />
                </div>
              ))}
            </ul>
            <div>
              <p style={{ padding: "15px 5px", fontSize: "1.2rem" }}>서비스</p>
              <ul className="ul-left">
                {list2.map(item => (
                  <div key={item.id}>
                    <HeaderList item={item} />
                  </div>
                ))}
              </ul>
            </div>
            <div>
              <p style={{ padding: "15px 5px", fontSize: "1.2rem" }}>설정</p>
              <div className="language">
                <div className="language-left">
                  <img src="../../assets/images/menu/m12.svg" />
                  <h3>언어 설정</h3>
                </div>
                <div className="language-right" onClick={headleClikToggle}>
                  <p>한국어</p>
                  <div className="img-toggle"></div>
                </div>
              </div>
              {toggle && (
                <ul className="toggle">
                  <li className="active">한국어</li>
                  <li>Deutsch</li>
                  <li>English (US)</li>
                  <li>Español (LA)</li>
                  <li>Français</li>
                  <li>Português (BR)</li>
                  <li>中文 (简体)</li>
                  <li>中文 (繁體)</li>
                  <li>日本語</li>
                  <li>ภาษาไทย</li>
                  <li>Italiano</li>
                </ul>
              )}
            </div>
          </div>

          <div className="wrap-right">
            <p>스토브게임</p>
            <div className="item">
              {list3.map(item => (
                <div key={item.id} className="item-wrap" icon={item.icon}>
                  <div className="wrap-right-img">
                    <a href={item.link}>
                      <img src={`../../assets/images/${item.imgpath}`} />
                    </a>
                  </div>
                  <div className="wrap-right-text">
                    <h3>{item.name}</h3>
                    <p>{item.comment}</p>
                    <button>공식홈</button>
                    {item.bt2 && <button>커뮤니티</button>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </HeaderModerWrap>
  );
};

export default HeaderModel;
