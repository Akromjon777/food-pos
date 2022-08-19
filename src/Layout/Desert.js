import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/Card/Card";
const Dessert = () => {
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    axios
      .get("https://food-service-layer-app.herokuapp.com/food/6")
      .then((res) => setDishes(res.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      {dishes.length && (
        <ul className="flex flex-wrap">
          {dishes.map((e) => (
            <Card key={e.id} item={e} />
          ))}
        </ul>
      )}
    </>
  );
};

export default Dessert;
