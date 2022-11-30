import React from 'react'
import axios from "axios";
import { useState } from "react";

const AddDish = (props) => {
  const [addNewDish, setAddNewDish] = useState("");
  const [dishQuantity, setNumberOfDishes] = useState("");
  const [dishImage, setDishImage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMes, setErrorMes] = useState(null);

  const handleInput = (e) => {
    setAddNewDish(e.target.value);
    setNumberOfDishes(e.target.value)
  };

  const onSubmitHandle = async (e) => {
    console.log(dishImage)
    console.log(addNewDish);
    console.log(dishQuantity);
    e.preventDefault();
    if (addNewDish.trim()) {
      try {
        setIsLoading(true);
        const { data } = await axios.post(
          "https://6374aa1608104a9c5f856b46.mockapi.io/potluck",
          {
            dish: addNewDish,
            image: dishImage,
            quantity: dishQuantity

          }
        );
        
        addNewDish((prev) => [...prev, data]);
        setDishImage("");
        setIsLoading(false);
      } catch (e) {
        setErrorMes(e.message);
      }

    }
   
  };
  return (
    <div className='add-new-dish'>
      <h1>Add Dish</h1>
      {isLoading && <h1 className='spin'></h1>}
      <form onSubmit={onSubmitHandle}>
        <div className='form-control'>
          <label htmlFor='dish-name'>Enter Dish Name</label>
          <input type='text' name='dish' onChange={({ target: { value } }) => setAddNewDish(value)} /> <br />

          <label htmlFor='quantity'>Enter quantity</label>
          <input type='number' name='quantity' onChange={({ target: { value } }) => setNumberOfDishes(value)} /> <br />

          <label htmlFor='image'>Upload Image</label>
          <input type='text' name='image' value={dishImage} onChange={({ target: { value } }) => setDishImage(value)} />
        </div>
        <div className='form-actions'>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default AddDish;
