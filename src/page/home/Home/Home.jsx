import React from 'react'
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import workingImg from '../../../img/working.svg';
import FeaturedServicesCom from '../FeaturedCom/FeaturedServicesCom';
import Banner from '../../../component/share/Header/Banner';

function Home() {
  return (
    <div>
      <Banner></Banner>
      <FeaturedServicesCom />
    </div>
  )
}

export default Home;
