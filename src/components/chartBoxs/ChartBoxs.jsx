import React from 'react'
import './chartboxs.scss'


export const ChartBoxs = (props) => {
  return (
    <div className='chartBox'>
        <div className="icon">
                <img src={props.icon} alt="" />
            </div>
        <div className="boxInfo">
            
            <div className="title">
                <span>{props.title}</span>
                <h1>{props.number}</h1>
            </div>
        </div>
    </div>
  )
}
