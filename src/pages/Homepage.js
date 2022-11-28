import React from 'react'
import { useContext } from 'react';
import { UserContext } from '../App';
import { Link } from 'react-router-dom';
function Homepage() {
  const {user, setUser} = useContext(UserContext);
console.log(user)
 const handleClick = () => {
   setUser(current=>[...current, ])
 }

  return (
    <>
      <div>Join an event:</div>
      <input
        type='text'
        name='user'
        value={user}
        onChange={(e) => setUser(e.target.value)}
      ></input>
      <button disabled={!user}>
        <Link to='/events'>Pick an event</Link>
        {console.log(user)}
      </button>
    </>
  );
}

export default Homepage