import axios from "axios";
import React, { useEffect, useState } from "react";
import EditCard from "../../components/EditCard/EditCard";

const Settings = () => {
  const [modal, setModal] = useState(false);

  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    const formData = new FormData();
    const { name, price, bowls, category_id, food_img } = evt.target.elements;

    formData.append("name", name.value);
    formData.append("price", price.value);
    formData.append("bowls", bowls.value);
    formData.append("category_id", category_id.value);
    formData.append("food_img", food_img.files[0]);

    axios
      .post("https://food-service-layer-app.herokuapp.com/food", formData)
      .then((res) => console.log(res.data))
      .catch((error) => console.log(error));
  };

  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    axios
      .get("https://food-service-layer-app.herokuapp.com/food/5")
      .then((res) => setDishes(res.data))
      .then((error) => console.log(error));
  }, []);

  return (
    <>
      {/* <button
        onClick={() => setModal(true)}
        className="btn btn-danger w-25 m-5"
      >
        Add post
      </button> */}
      <div className="w1/2 mx-auto flex flex-col">
        
          <form onSubmit={handleFormSubmit}>
            <input
              className="w-56 mt-28 mb-3 placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm text-red-800 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
              placeholder="Name.."
              type="text"
              name="name"
              required
            />
            <input
              className="w-56 mb-3 placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 text-red-800 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
              placeholder="Price.."
              type="text"
              name="price"
              required
            />
            <input
              className="w-56 mb-3 placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 text-red-800 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
              placeholder="Bowls.."
              type="number"
              required
              name="bowls"
            />
            <input
              className="w-56 mb-3 placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 text-red-800 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
              placeholder="Category.."
              type="number"
              required
              name="category_id"
            />
            <input placeholder="Image" type="file" required name="food_img" />
            <button
              type="submit"
              className="border-solid border-2 border-sky-500 p-5 mt-3"
            >
              Send
            </button>
          </form>

        {dishes.length && (
          <ul className="flex flex-wrap">
            {dishes.map((e) => (
              <EditCard key={e.id} item={e} />
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default Settings;
