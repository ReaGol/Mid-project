import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Dishes() {
  const [dishesArr, setDishesArr] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMes, setErrorMes] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get(
          "https://6374aa1608104a9c5f856b46.mockapi.io/potluck"
        );
        setDishesArr(data);
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
    <div className="container">
      <h1>Foods To Bring</h1>

      {errorMes && <h2>{errorMes}</h2>}
      {isLoading && <h1 className='spin'>.</h1>}
      {setDishesArr.length && (
        <div className='dishes_container'>
          {dishesArr.map(
            ({ dish, name, category, id, image, picked }, mapIndex) => (
              <Link to={`/Dishes/${id}`}>
                <div className='dish' key={id}>
                  <span>
                    <h2>{name}</h2>
                    <h2> {category}</h2>
                  </span>
                  <img className='img' src={image} alt={dish} />
                  <span>
                    {dish} - {picked ? "picked" : "available"}
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

export default Dishes;
