import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import {UserContext} from '../App'
function Events() {
  const [eventsArr, setEventsArr] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMes, setErrorMes] = useState(null);
const {user, setUser} = useContext(UserContext);
console.log(user);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get(
          "https://6374aa1608104a9c5f856b46.mockapi.io/events"
        );
        
        setEventsArr(data);
        
        setIsLoading(false);
      } catch (e) {
        setErrorMes(e.message);
        setTimeout(() => {
          setErrorMes(null);
        }, 1500);
      }
    };
    fetchData();
    
  }, []);

  return (
    <div className='container'>
      <h1>Events</h1>

      {errorMes && <h2>{errorMes}</h2>}
      {isLoading && <h1 className='spin'></h1>}
      {console.log(eventsArr)}
      {eventsArr.length && (         
        <div className='events_container'>
          {eventsArr.map(
            ({ eventName, users, id }) => (
              <Link to={`/events/${id}`}>
                <div className='event' key={id}>
                  <span>
                    <h2>{eventName}</h2>
                    <h2>{users.length}</h2>
                  </span>
                  {/* <img className='img' src={image} alt={eventName} /> */}
                  <span>
                    {/* {dish} - {picked ? "picked" : "available"} */}
                  </span>
                </div>
              </Link>
            )
          )}
        </div>
      )}
    </div>
  );
}

export default Events;
