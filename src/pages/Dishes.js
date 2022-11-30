import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AddDish from "./AddDish";
import { FaSquare, FaCheckSquare } from "react-icons/fa";
function Dishes(props) {
  const [dishesArr, setDishesArr] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMes, setErrorMes] = useState(null);
  // --------------------------------
  // const [checkedDish,setCheckedDish]=useState(false);
  // --------------------------------
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
    <div className='container'>
      {errorMes && <h2>{errorMes}</h2>}
      {isLoading && <div className='spin'></div>}
      <span>
        <Link className="link_button" to='/dishes/add'>Add New Dish</Link>
        {/* {dish} - {picked ? "picked" : "available"} */}
      </span>
      {dishesArr.length && (
        <div className='dishes_container'>
          {dishesArr.map(({ dish, name, id, image }, mapIndex) => (
            // <Link to={`/dishes/${id}`}>
            <div className='dish' key={id}>
              <span>
                {/* <h2>
                  <input
                    type='checkbox'
                    onChange={(e) => props.updateEvent(name, e.target.checked)}
                    disabled={!props.isAvailableDish(name)}
                  ></input>
                  {name}
                  {props.isChecked(name) ? (
                    <FaCheckSquare style={{ color: "green" }} />
                  ) : (
                    <FaSquare style={{ color: "crimson" }} />
                  )}
                </h2> */}
                {/*  */}
                <h2 className="checkbox-container" onClick={(e) => props.updateEvent(name, e.target.checked)}>
                  <input
                    // className={checkedDish ? "checkboxV" : "checkboxX"}
                    // checked={checkedDish}
                    type='checkbox'
                    onChange={(e) => {
                      props.updateEvent(name, e.target.checked);
                      // setCheckedDish((prev) => !prev);
                      console.log(e.target);
                    }}
                    disabled={!props.isAvailableDish(name)}
                  ></input>
                  &nbsp;&nbsp;
                  {name}
                  {/* {props.isChecked(name) ? "V" : "X"} */}
                </h2>
                {/*  */}
              </span>
              <img className='img' src={image} alt={dish} />
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