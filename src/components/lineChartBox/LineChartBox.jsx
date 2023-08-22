import React from 'react'
import './lineChartBox.scss'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";


const data = [
    {
        name: "",
        User: 100,
        Guest: 200,
        amt: 200
    },
    {
        name: "Week 1",
        User: 430,
        Guest: 400,
        amt: 200
    },
    {
        name: "Week 2",
        User: 150,
        Guest: 200,
        amt: 300
    },
    {
        name: "Week 3",
        User: 490,
        Guest: 300,
        amt: 400
    },
    {
        name: "Week 4",
        User: 190,
        Guest: 350,
        amt: 500
    },
    {
        name: "",
        User: 280,
        Guest: 450,
        amt: 600
    }
    
];
const customYAxisTicks = [0, 100, 200, 300, 400, 500];
export const LineChartBox = () => {

    const currentDate = new Date().toDateString();
    console.log(currentDate)
    const renderLegend = (props) => {
        const { payload } = props;
        return (
            <ul className="custom-legend">
                {payload.map((entry, index) => (
                    <li key={`item-${index}`} className="legend-item">
                        <span className="dot" style={{ backgroundColor: entry.color }}></span>
                        {entry.value}
                    </li>
                ))}
            </ul>
        );
    };
    return (
        <div className='lineChartBox'>
            <h1>Activities</h1>
            <div className="current-date">
                <span>{currentDate}</span>
                <div className="arrow-down"></div>
            </div>
            <div className="chart">
                <ResponsiveContainer width="99%" height={300}>
                <LineChart
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20
                }}
                >
                <CartesianGrid vertical={false} strokeDasharray="" />
                <XAxis dataKey="name" axisLine={false} />
                <YAxis axisLine={false} tickCount={6} ticks={customYAxisTicks} />
                <Tooltip />
                <Legend content={renderLegend} align="right" verticalAlign="top"/>
                <Line
                    type="monotone"
                    dataKey="Guest"
                    stroke="#FFC0CB"
                    dot={false}
                    strokeWidth={4}
                />
                <Line type="monotone" dataKey="User" stroke="#82ca9d" dot={false}  strokeWidth={4}/>
                </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}
