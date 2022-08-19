import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../components/Card/Card";

const GrillDishes = () => {
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    axios
      .get("https://food-service-layer-app.herokuapp.com/food/4")
      .then((res) => setDishes(res.data))
      .then((error) => console.log(error));
  }, []);

  return (
    <>
      {dishes.length && (
        <ul className="flex flex-wrap justify-between">
          {dishes.map((e) => (
            <Card key={e.id} item={e} />
          ))}
        </ul>
      )}
    </>
  );
};

export default GrillDishes;
