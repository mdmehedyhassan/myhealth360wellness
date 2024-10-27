import React from 'react'
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Banner from './Banner';

function Header() {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
    </div>
  )
}

export default Header;
