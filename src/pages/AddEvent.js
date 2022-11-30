import React from "react";
import axios from "axios";
import { useState } from "react";

const AddEvent = (props) => {
  const [addNewEvent, setAddNewEvent] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMes, setErrorMes] = useState(null);
  

  const handleInput = (e) => {
    setAddNewEvent(e.target.value);
  };

  const onSubmitHandle = async (e) => {
    console.log(addNewEvent);
    e.preventDefault();
    if (addNewEvent.trim()) {
      try {
        setIsLoading(true);
        const { data } = await axios.post(
          "https://6374aa1608104a9c5f856b46.mockapi.io/events",
          {
            eventName: addNewEvent,
          }
        );

        addNewEvent((prev) => [...prev, data]);
        setIsLoading(false);
      } catch (e) {
        setErrorMes(e.message);
      }
    }
  };
  return (
    <div className='add-new-event'>
      <h1>Add New Event</h1>
      {isLoading && <h1 className='spin'></h1>}
      <form onSubmit={onSubmitHandle}>
        <div className='form-control'>
          <label htmlFor='event-name'>Enter Event Name</label>
          <input
            type='text'
            name='event'
            onChange={({ target: { value } }) => setAddNewEvent(value)}
          />{" "}
        </div>
        <div className='form-actions'>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default AddEvent;
