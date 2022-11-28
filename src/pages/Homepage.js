import React from 'react'
import { useContext } from 'react';
import { UserContext } from '../App';
import { Link } from 'react-router-dom';
function Homepage() {
  const {user, setUser} = useContext(UserContext);
console.log(user)
//   const isDisabled = () => {
// return !user.length
//   }

  return (
    <>
      <div>Homepage</div>
      <input type="text" name="user" value={user} onChange={e => setUser(e.target.value)}></input>
      <button disabled={!user}>
        <Link to='/events'>Events</Link>
      </button>
    </>
  );
}

export default Homepage