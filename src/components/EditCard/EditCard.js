import React from "react";
import "./EditCard.css";
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
        <button className="border-solid border-2 border-sky-500 rounded-md p-5 my-4 w-full">Edit</button>
      </div>
    </li>
  );
};

export default Card;
