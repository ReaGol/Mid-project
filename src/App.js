import React, { createContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import About from "./pages/About";
import AddDish from "./pages/AddDish";
import Dish from "./pages/Dish";
import Dishes from "./pages/Dishes";
import Event from "./pages/Event";
import Events from "./pages/Events";
import AddEvent from "./pages/AddEvent";
import Homepage from "./pages/Homepage";
import Summary from "./pages/Summary";
export const UserContext = createContext({
  user: "Coco", setUser: () => { },
  eventData: {}, setEventData: () => { }
});

function App() {
  const [user, setUser] = useState("Jesse Hall");  
  const [eventData, setEventData] = useState({});  
  return (
    <>
      <UserContext.Provider value={{ user, setUser, eventData, setEventData }}>
          <Header />
          <Routes>
            <Route path='/' exact></Route>
            <Route path='/homepage' element={<Homepage></Homepage>}></Route>
            <Route path='/about' element={<About></About>}></Route>
            <Route path='/dishes' element={<Dishes />} exact></Route>
            <Route path='/dishes/:dishId' element={<Dish />}></Route>
            <Route path='/dishes/add' element={<AddDish />}></Route>
            <Route path='/events' element={<Events />}></Route>
            <Route path='/events/add' element={<AddEvent />}></Route>
            <Route path='/events/:eventId' element={<Event />}></Route>
            <Route path='/summary' element={<Summary />}></Route>
          </Routes>
      </UserContext.Provider>
    </>
  );
}

export default App;
