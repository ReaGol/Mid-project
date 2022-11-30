import React from 'react'
import aboutPhoto from "../assets/aboutPhoto.png"

function About() {
  return (
    <div className='main-about'>
      <h1>Organizing a meeting? A Picnic?</h1>
      <div className='text-container'>
        <h2>Here you can manage who brings what!</h2>
        <div>
          <img src={aboutPhoto} alt='about' />
        </div>
      </div>
    </div>
  );
}

export default About