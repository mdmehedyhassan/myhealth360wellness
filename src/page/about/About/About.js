import React from 'react';
import workingImg from '../../../img/working.svg';

function About() {
  return (
    <div>
      <h1>This is About page</h1>
      <div className='class-for-svg-img' >
      <img src={workingImg} alt=''/>
    </div>
    </div>
  )
}

export default About
