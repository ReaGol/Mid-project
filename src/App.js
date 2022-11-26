import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import AddDish from "./pages/AddDish";
import Homepage from "./pages/Homepage";
import Dish from "./pages/Dish";
import Dishes from "./pages/Dishes";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' exact> </Route>
        <Route path='/homepage' element={<Homepage></Homepage>}></Route>
        <Route path='/dishes' element={<Dishes />} exact></Route>
        <Route path='/dishes/:dishId' element={<Dish />}></Route>
        <Route path='/dishes/add' element={<AddDish />}></Route>
      </Routes>
    </>
  );
}

export default App;
