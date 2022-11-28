import axios from "axios";
import React, { useEffect, useState } from "react";

function Dishes(props) {
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
        console.log(data)
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
    <div className='container'>
      <h1>Foods To Bring</h1>

      {errorMes && <h2>{errorMes}</h2>}
      {isLoading && <h1 className='spin'></h1>}
      {dishesArr.length && (
        <div className='dishes_container'>
          {dishesArr.map(({ dish, name, id, image, picked }, mapIndex) => (
            // <Link to={`/dishes/${id}`}>
            <div className='dish' key={id}>
              <span>
                <h2>
                  <input
                    type='checkbox'
                    onChange={(e) => props.updateEvent(name, e.target.checked)}
                    disabled={!props.isAvailableDish(name)}
                  ></input>
                  {name} {props.isChecked(name) ? 'V' :  'X'}
                </h2>
              </span>
              <img className='img' src={image} alt={dish} />
              <span>
                {dish} - {picked ? "picked" : "available"}
              </span>
            </div>
            // </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dishes;

// dishes.map((dish) => (
//   <Dish
//     checked={takenDishes.includes(dish.id)}
//     disabled={takenDishes.includes(dish.id)}
//   ></Dish>
// ));