import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../App";
import Dishes from "./Dishes";
import Summary from "./Summary";
import { Link } from "react-router-dom";

function Event(props) {
  const params = useParams();
  // const [eventData, setEventData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [errorMes, setErrorMes] = useState(null);
  const { user, eventData, setEventData} = useContext(UserContext);

  useEffect(() => {
    console.log(params);
    const fetchEventData = async () => {
      try {
        setIsLoading(true);
        const res = await axios.get(
          `https://6374aa1608104a9c5f856b46.mockapi.io/events/${params.eventId}`
        );
        console.log(res.data);
        setEventData(res.data);
      } catch (e) {
        setErrorMes(e.message);
        setTimeout(() => {
          setErrorMes(null);
        }, 5000);
        // goto error page
      } finally {
        setIsLoading(false);
      }
    };
    fetchEventData();
  }, [setEventData]);

  // function to update event
  const updateEventDish = async (dish, checked) => {
     try {
      setIsLoading(true);
const users = [...eventData.users]
      const currentUser = users.find(u => u.name === user)
      if (!currentUser) {
        users.push({name:user, stuff:[dish]})       
      }
      else {
        if (checked) {
          currentUser.stuff.push(dish)
        }else {
          currentUser.stuff = currentUser.stuff.filter(d => d !== dish)
        }
      } console.log(users);


      const { data } = await axios.put(
        `https://6374aa1608104a9c5f856b46.mockapi.io/events/${params.eventId}`,
        {
       ...eventData,
       users
        }
      );
       setEventData(data)
    } catch (e) {
      setErrorMes(e.message);
      setTimeout(() => {
        setErrorMes(null);
      }, 5000);
    } finally {
      setIsLoading(false);
    }

   
  }

  const isChecked = (dish) =>eventData?.users?.flatMap(u => u.stuff).includes(dish)
const isAvailableDish = (dish) =>!eventData?.users?.filter(u => u.name !== user).flatMap((u) => u.stuff).includes(dish);
  
  return (
    <div className='wrapper'>
      <div className='App'>
        {errorMes && <h2>{errorMes}</h2>}

        {/* <input
          value={inputVal}
          placeholder='Event'
          onChange={({ target: { value } }) => setInputVal(value)}
        /> */}

        {isLoading && <div className='spin'></div>}

        <div className='events_container'>
          <div className='Event' key={eventData.id}>
            <h1>{eventData.eventName}</h1>
            <h3>
              On Date:
              {new Date(eventData.eventDate).toLocaleDateString().slice(0, 10)}
            </h3>
            <h4>Foods To Bring</h4>
            <Link className='link_button' to='/summary'>
              To summary
            </Link>

            {/* {eventData.users
                ? eventData.users.map((user) => <h2>{user.name}</h2>)
                : null} */}
            <Dishes
              isAvailableDish={isAvailableDish}
              isChecked={isChecked}
              updateEvent={updateEventDish}
            />
          </div>
        </div>
      </div>
      );
    </div>
  );
}

export default Event;

// dishes.map((dish) => (
//   <Dish
//     checked={takenDishes.includes(dish.id)}
//     disabled={takenDishes.includes(dish.id)}
//   ></Dish>
// ));
