import React from 'react'
import './schedulesBox.scss';
import { Link } from 'react-router-dom';
export const SchedulesBox = () => {
  const dummySchedule = [
    { event: 'Meeting with suppliers from Kuta Bali', time: '14:00-15:00', place: 'at sunset Road, Kuta, Bali' },
    { event: 'Check operations at Giga factory 1', time: '18:00-20:00', place: 'at Central Jakarta' },
  ];

  return (
    <div className="schedule">
      <div className="line">
          <h2>Today's Schedule</h2>
          <Link to='/schedules'>
            <span>See All &gt;</span>
          </Link>
        
      </div>
      
      
      <ul className="schedule-list">
        {dummySchedule.map((item, index) => (
          <li key={index}>
            <span className='event'>{item.event}</span>
            <span>{item.time}</span>
            <span>{item.place}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

