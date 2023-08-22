import React from 'react'
import './home.scss'
import { ChartBoxs } from '../../components/chartBoxs/ChartBoxs'
import { BoxLike, BoxRevenue, BoxTransaction, BoxUser } from '../../data'
import { PieChartBox } from '../../components/pieChartBox/PieChartBox'
import { LineChartBox } from '../../components/lineChartBox/LineChartBox'
import { SchedulesBox } from '../../components/schedulesBox/SchedulesBox'
export const Home = () => {
  return (
    <div className='home'>
      <div className="box box1">
        <ChartBoxs {...BoxRevenue}/>
      </div>
      <div className="box box2">
      <ChartBoxs {...BoxTransaction}/>
      </div>
      <div className="box box3">
      <ChartBoxs {...BoxLike}/>
      </div>
      <div className="box box4">
      <ChartBoxs {...BoxUser}/>
      </div>
      <div className="box box5"><LineChartBox/></div>
      <div className="box box6">
        <span><PieChartBox/></span>
      </div>
      <div className="box box7"><SchedulesBox/></div>
      
      
    </div>
  )
}
