import React from "react";
import "./Home.css"
import { NavLink, Outlet } from "react-router-dom";
const Home = () => {
  return (
    <div className="content mx-11 my-11 block">
      <div className="wrapper flex flex-row justify-between">
        <NavLink
          to="/home"
          className={({ isActive }) => (isActive ? "activee linkSaid" : "linkSaid")}
        >
          Hot Dishes
        </NavLink>
        <NavLink
          to="cold"
          className={({ isActive }) => (isActive ? "activee linkSaid" : "linkSaid")}
        >
          Cold Dishes
        </NavLink>
        <NavLink
          to="soup"
          className={({ isActive }) => (isActive ? "activee linkSaid" : "linkSaid")}
        >
          Soup
        </NavLink>
        <NavLink
          to="grill"
          className={({ isActive }) => (isActive ? "activee linkSaid" : "linkSaid")}
        >
          Grill
        </NavLink>
        <NavLink
          to="apppetizer"
          className={({ isActive }) => (isActive ? "activee linkSaid" : "linkSaid")}
        >
          Appetizer
        </NavLink>
        <NavLink
          to="dessert"
          className={({ isActive }) => (isActive ? "activee linkSaid" : "linkSaid")}
        >
          Dessert
        </NavLink>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
