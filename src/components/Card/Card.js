import React from "react";
import "./Card.css";
const Card = ({ item }) => {
  return (
    <li className="item flex justify-between flex-wrap border-2 border-sky-500">
      {/* <img
        src={"https://food-service-layer-app.herokuapp.com/" + item.image}
        alt={item.name}
      /> */}
      <div className="p-5">
        <h3>{item.name}</h3>
        <p>$ {item.price}</p>
        <p>{item.bowls} Bowls avaible</p>
      </div>
    </li>
  );
};

export default Card;
