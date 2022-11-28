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
import Homepage from "./pages/Homepage";
export const UserContext = createContext({ user: "Coco", setUser: () => {} });
export const AppContext = createContext({
  data: [{
    eventName: "picnic",
    users: [
      {
        name: "miri",
        stuff: ["beer", "chips"],
      },
    ],
    eventDate: 221223,
    id: "1",
  }],
  setData: () => {},
});

function App() {
  const [user, setUser] = useState("Jesse Hall");
  const [data, setData] = useState([])
  return (
    <>
      <UserContext.Provider value={{ user, setUser }}>
        <AppContext.Provider value={data}>
          <Header />
          <Routes>
            <Route path='/' exact></Route>
            <Route path='/homepage' element={<Homepage></Homepage>}></Route>
            <Route path='/about' element={<About></About>}></Route>
            <Route path='/dishes' element={<Dishes />} exact></Route>
            <Route path='/dishes/:dishId' element={<Dish />}></Route>
            <Route path='/dishes/add' element={<AddDish />}></Route>
            <Route path='/events' element={<Events />}></Route>
            <Route path='/events/:eventId' element={<Event />}></Route>
          </Routes>
        </AppContext.Provider>
      </UserContext.Provider>
    </>
  );
}

export default App;
