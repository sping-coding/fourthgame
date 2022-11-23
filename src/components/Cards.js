import { useState } from "react";
import Card from "./Card";
import "./Cards.css";
import { useNavigate } from "react-router-dom";

function Cards() {
  const navigate = useNavigate();

  const [items, setItems] = useState(
    [
      { id: 1, img: "/img/1.png", stat: "" },
      { id: 1, img: "/img/1.png", stat: "" },
      { id: 2, img: "/img/2.png", stat: "" },
      { id: 2, img: "/img/2.png", stat: "" },
      { id: 3, img: "/img/3.png", stat: "" },
      { id: 3, img: "/img/3.png", stat: "" },
      { id: 4, img: "/img/4.png", stat: "" },
      { id: 4, img: "/img/4.png", stat: "" },
      { id: 5, img: "/img/5.png", stat: "" },
      { id: 5, img: "/img/5.png", stat: "" },
      { id: 6, img: "/img/6.png", stat: "" },
      { id: 6, img: "/img/6.png", stat: "" },
      { id: 7, img: "/img/7.png", stat: "" },
      { id: 7, img: "/img/7.png", stat: "" },
      { id: 8, img: "/img/8.png", stat: "" },
      { id: 8, img: "/img/8.png", stat: "" },
    ].sort(() => Math.random() - 0.5)
  );

  const [prev, setPrev] = useState(-1);

  const [clickCount, setClickCount] = useState(0);

  const [total, setTotal] = useState(0);

  function check(current) {
    if (items[current].id == items[prev].id) {
      items[current].stat = "correct";
      items[prev].stat = "correct";
      setItems([...items]);
      setPrev(-1);
      setTotal(total + 1);
    } else {
      items[current].stat = "wrong";
      items[prev].stat = "wrong";
      setItems([...items]);
      setTimeout(() => {
        items[current].stat = "";
        items[prev].stat = "";
        setItems([...items]);
        setPrev(-1);
      }, 1000);
    }
  }

  function handleClick(id) {
    if (prev === -1) {
      items[id].stat = "active";
      setItems([...items]);
      setPrev(id);
    } else {
      check(id);
    }
    setClickCount(clickCount + 1);
    console.log(total);
  }

  function nextPage() {
    if (total === 8) {
      alert("다음페이지로 가주세요", navigate("/test"));
    } else {
      alert("성공해주세요");
    }
  }
  return (
    <div className="bbody">
      <div className="mainContainer">
        <h3 className="gameTitle">시도횟수 : {clickCount}</h3>
        <div className="container">
          {items.map((item, index) => (
            <Card
              key={index}
              item={item}
              id={index}
              handleClick={handleClick}
            />
          ))}
        </div>
        <button onClick={nextPage}>Next</button>
      </div>
    </div>
  );
}

export default Cards;
