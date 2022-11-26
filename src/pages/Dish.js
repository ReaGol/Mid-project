import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Dish(props) {
  const params = useParams();
  const [dishData, setDishData] = useState([]);
  const [inputVal, setInputVal] = useState("");
  const [inputImg, setInputImg] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMes, setErrorMes] = useState(null);

  useEffect(() => {
    console.log(params);
    const fetchDishData = async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get(
          `https://6374aa1608104a9c5f856b46.mockapi.io/potluck/${params.DishId}`
        );
        setDishData(data);
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
    fetchDishData();
  }, [params]);

  const handleUpdateDish = async (picked, name, image) => {
    try {
      setIsLoading(true);
      const { data } = await axios.put(
        `https://6374aa1608104a9c5f856b46.mockapi.io/potluck/${params.DishId}`,
        {
          name,
          image,
          picked,
        }
      );
      setDishData(data);
    } catch (e) {
      setErrorMes(e.message);
      setTimeout(() => {
        setErrorMes(null);
      }, 5000);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteDish = async (id) => {
    try {
      const { data } = await axios.delete(
        `https://6374aa1608104a9c5f856b46.mockapi.io/potluck/${params.DishId}`
      );
      console.log(data);
      setDishData((prevState) =>
        prevState.filter((Dish) => {
          return Dish.id !== data.id;
        })
      );
    } catch (e) {
      setErrorMes(e.message);
      setTimeout(() => {
        setErrorMes(null);
      }, 1500);
    }
  };

  return (
    <div className='wrapper'>
     
      <div className='App'>
        {errorMes && <h2>{errorMes}</h2>}
        <input
          value={inputVal}
          placeholder='Dish'
          onChange={({ target: { value } }) => setInputVal(value)}
        />
        <input
          value={inputImg}
          placeholder='photo'
          onChange={({ target: { value } }) => setInputImg(value)}
        />
        {isLoading && <h1 className='spin'>.</h1>}

        <div className='Dishs_container'>
          <div className='Dish' key={dishData.id}>
            <h3
              onClick={() => {
                handleUpdateDish(!dishData.picked, inputVal, inputImg);
              }}
            >
              Edit
            </h3>
            <span>
              <h2>{dishData.name}</h2>
              <h2> {dishData.price}</h2>
            </span>
            <img className='img' src={dishData.photo} alt={dishData.name} />
            <span>
              <button
                className='btn-delete'
                onClick={() => {
                  handleDeleteDish(dishData.id);
                }}
              >
                Delete
              </button>
              {dishData.name} - {dishData.picked ? "picked" : "available"}
            </span>
          </div>
        </div>
      </div>
      );
    </div>
  );
}

export default Dish;
