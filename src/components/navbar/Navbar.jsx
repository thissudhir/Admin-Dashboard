import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './navbar.scss'

export const Navbar = () => {
  const location = useLocation();
  const pathname = location.pathname;

  let pageTitle = '';

  if (pathname === '/') {
    pageTitle = 'Dashboard';
  } else if (pathname === '/users') {
    pageTitle = 'Users';
  } else if (pathname === '/transactions') {
    pageTitle = 'Transactions';
  }else if (pathname === '/schedules') {
    pageTitle = 'Schedules';
  } else if (pathname === '/settings') {
    pageTitle = 'Settings';
  }  // Add more cases for other pages
  return (
    <div className='navbar'>
      <div className="logo">
        {/* <img src="" alt="" /> */}
        <h1>{pageTitle}</h1>
      </div>
      <div className="icons">
        <img src="/search.svg" alt="search icon" />
        <div className=" notification">
          <img src="/bell.svg" alt="" />
          {/* <span>1</span> */}
        </div>
        <div className="user">
          <img src="https://images.pexels.com/photos/11038549/pexels-photo-11038549.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="user image" />
        </div>
      </div>
    </div>
  )
}
