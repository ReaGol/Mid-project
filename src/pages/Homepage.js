import React from 'react'
import { useContext } from 'react';
import { UserContext } from '../App';
import { Link } from 'react-router-dom';
function Homepage() {
  const {user, setUser} = useContext(UserContext);
console.log(user)
//  const handleClick = () => {
//    setUser(current=>[...current, ])
//  }

  return (
    <>
      <div className='main'>
        <div className='input-text'>Join an event:</div>
        <div className='input-content'>
          <input
            className='input-user'
            type='text'
            name='user'
            value={user}
            onChange={(e) => setUser(e.target.value)}
          ></input>
          <button disabled={!user}>
            <Link to='/events'>Pick an event</Link>
            {console.log(user)}
          </button>
        </div>
        <div className='bg-image'>
          <img
            src='https://images.unsplash.com/photo-1513420901937-0b9c3ddb6b49?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80'
            alt=''
          />
        </div>
      </div>
    </>
  );
}

export default Homepage