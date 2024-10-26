import React from 'react'
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

function Header() {
  return (
    <div>
      <Navbar></Navbar>
      <ul className='flex gap-10 mb-10'>
        <li><Link to="/"> Home </Link></li>
        <li><Link to="/about"> About </Link></li>
        <li><Link to="/service"> Our Services </Link></li>
        <li><Link to="/package"> Packages </Link></li>
        <li><Link to="/contact"> Contact </Link></li>
        <li><Link to="/services/iv-infusion-bar"> IV Infusion Bar Page </Link></li>
      </ul>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore ipsum, nesciunt exercitationem doloremque quaerat quod magni saepe facere nam molestias beatae. Laborum accusantium perspiciatis atque quis deleniti ipsam? Vero, eos. </p>
    </div>
  )
}

export default Header;
