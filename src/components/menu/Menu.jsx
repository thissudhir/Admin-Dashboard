import React from 'react'
import { Link } from 'react-router-dom'
import './menu.scss'
export const Menu = () => {
  return (
    <div className='menu'>
      <div className="heading">
        <h1>Board.</h1>

      </div>
      <div className="item">
        <Link className='listItem'>
          <img src="pie-chart.svg" alt="" />
          <span className='listItemTitle'>Dashboard</span>
        </Link>
        <Link className='listItem' to="/transactions">
          <img src="/tags.svg" alt="" />
          <span className='listItemTitle'>Transactions</span>
        </Link>
        <Link className='listItem' to="/schedules">
          <img src="/calendar.svg" alt="" />
          <span className='listItemTitle'>Schedules</span>
        </Link>
        <Link className='listItem' to="/users">
          <img src="/user.svg" alt="" />
          <span className='listItemTitle'>Users</span>
        </Link>
        <Link className='listItem'>
          <img src="/settings.svg" alt="" />
          <span className='listItemTitle'>Settings</span>
        </Link>
      </div>
    </div>
  )
}
