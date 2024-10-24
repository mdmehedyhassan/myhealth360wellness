import React from 'react'
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import workingImg from '../../../img/working.svg';

function Home() {
  return (
    <div>
      <h1>This is Home page <FontAwesomeIcon icon={faUser}/> </h1>
      <div className='class-for-svg-img' >
      <img src={workingImg} alt=''/>
    </div>
    </div>
  )
}

export default Home;
