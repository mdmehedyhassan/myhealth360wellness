import React from 'react'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <ul className='flex gap-10 mb-10'>
        <li><Link to="/"> Home </Link></li>
        <li><Link to="/about"> About </Link></li>
        <li><Link to="/service"> Our Services </Link></li>
        <li><Link to="/package"> Packages </Link></li>
        <li><Link to="/contact"> Contact </Link></li>
        <li><Link to="/services/iv-infusion-bar"> IV Infusion Bar Page </Link></li>
      </ul>
    </div>
  )
}

export default Header;
