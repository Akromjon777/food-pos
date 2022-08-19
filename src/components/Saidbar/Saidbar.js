import React from "react";
import "./saidbar.css"
import { NavLink } from "react-router-dom";
import {
  Home,
  Head,
  Pattern,
  Diagram,
  Email,
  Notifactions,
  Settings,
  Exit,
} from "../../assets/icons/Icons";
const Saidbar = () => {
  return (
    <>
      <ul className="saidbar__list">
        <li className="saidbar__item">
          <NavLink
            to="/Header"
            className={({ isActive }) => (isActive ? "active link" : "link")}
          >
            <div className="saidbar__wrapper">
              <div className="saidbar__box">
                <Head />  
              </div>
            </div>
          </NavLink>
        </li>
        <li className="saidbar__item">
          <NavLink
            to="/home"
            className={({ isActive }) => (isActive ? "active link" : "link")}
          >
            <div className="saidbar__wrapper">
              <div className="saidbar__box">
                <Home />
              </div>
            </div>
          </NavLink>
        </li>
        <li className="saidbar__item">
          <NavLink
            to="/pattern"
            className={({ isActive }) => (isActive ? "active link" : "link")}
          >
            <div className="saidbar__wrapper">
              <div className="saidbar__box">
                <Pattern />
              </div>
            </div>
          </NavLink>
        </li>
        <li className="saidbar__item">
          <NavLink
            to="/diagram"
            className={({ isActive }) => (isActive ? "active link" : "link")}
          >
            <div className="saidbar__wrapper">
              <div className="saidbar__box">
                <Diagram />
              </div>
            </div>
          </NavLink>
        </li>
        <li className="saidbar__item">
          <NavLink
            to="/email"
            className={({ isActive }) => (isActive ? "active link" : "link")}
          >
            <div className="saidbar__wrapper">
              <div className="saidbar__box">
                <Email />
              </div>
            </div>
          </NavLink>
        </li>
        <li className="saidbar__item">
          <NavLink
            to="/notifactions"
            className={({ isActive }) => (isActive ? "active link" : "link")}
          >
            <div className="saidbar__wrapper">
              <div className="saidbar__box">
                <Notifactions />
              </div>
            </div>
          </NavLink>
        </li>
        <li className="saidbar__item">
          <NavLink
            to="/settings"
            className={({ isActive }) => (isActive ? "active link" : "link")}
          >
            <div className="saidbar__wrapper">
              <div className="saidbar__box">
                <Settings />
              </div>
            </div>
          </NavLink>
        </li>
        <li className="saidbar__item">
          <NavLink
            to="/exit"
            className={({ isActive }) => (isActive ? "active link" : "link")}
          >
            <div className="saidbar__wrapper">
              <div className="saidbar__box">
                <Exit />
              </div>
            </div>
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default Saidbar;
