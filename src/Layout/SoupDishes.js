import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/Card/Card";
const SoupDishes = () => {
  const [dishes, setDishes] = useState([]);
  useEffect(() => {
    axios
      .get("https://food-service-layer-app.herokuapp.com/food/3")
      .then((res) => setDishes(res.data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <>
      <div>
        {dishes.length && (
          <ul className="flex flex-wrap justify-between">
            {dishes.map((e) => (
              <Card key={e.id} item={e} />
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default SoupDishes;
