import React from 'react'
import './Hero.css';
import dark_arrow from '../../assets/white-arrow.png';

const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>Ensuring better education for a better tomorrow</h1>
        <p>Welcome to a world of limitless learning and discovery, where knowledge meets opportunity, and dreams are transformed into reality</p>
        <button className='more'>More about us<img src={dark_arrow}/></button>
      </div>
    </div>
  )
}

export default Hero
