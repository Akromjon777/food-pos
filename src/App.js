// import Header from "./components/Header/Header";
import "./App.css";
import React from "react";
import Saidbar from "./components/Saidbar/Saidbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Dashboard from "./pages/Dashboard/Dashboard";
import Settings from "./pages/Settings/Settings";
import HotDishes from "./Layout/HotDishes";
import Pattern from "./pages/pattern/Pattern";
import ColdDishes from "./Layout/ColdDishes";
import SoupDishes from "./Layout/SoupDishes";
import GrillDishes from "./Layout/GrillDishes";
import Appertizer from "./Layout/Appertizer";
import Dessert from "./Layout/Desert";

const App = () => {
  return (
    <div className="flex flex-row">
      {/* <Header /> */}
      <Saidbar />
      <Routes>
        <Route path="/home" element={<Home />}>
          <Route index element={<HotDishes />}></Route>
          <Route path="cold" element={<ColdDishes />}></Route>
          <Route path="soup" element={<SoupDishes />}></Route>
          <Route path="grill" element={<GrillDishes />}></Route>
          <Route path="apppetizer" element={<Appertizer />}></Route>
          <Route path="dessert" element={<Dessert />}></Route>
        </Route>
        <Route path="/diagram" element={<Dashboard />} />
        <Route path="/pattern" element={<Pattern />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/notifactions" element={<Settings />} />
      </Routes>
    </div>
  );
};

export default App;
