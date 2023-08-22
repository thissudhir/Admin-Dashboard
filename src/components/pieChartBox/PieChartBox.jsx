import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

import './pieChartBox.scss';

const data = [
    { name: "Basic Tees", value: 55, color: " #00C49F" },
    { name: "Custom short pants", value: 31, color: "#FFBB28" },
    { name: "Super hoddies", value: 14, color: "#0088FE" },
];




export const PieChartBox = () => {

    const currentDate = new Date().toDateString();
return (
    <div className='pieChartBox'>
        <div className="current-date">
            <h1>Top Products</h1>
            <span>{currentDate}</span>
        </div>
        <div className="wrapChart-Option">
        <div className="chart">
            <ResponsiveContainer width="99%" height={300}>
                <PieChart width={300} height={300}>
                <Tooltip contentStyle={{ background: "white", borderRadius: "5px" }}
                />
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        // label={renderCustomizedLabel}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {data.map((item) => (
                        <Cell key={item.name} fill={item.color} />
                        ))}
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
    </div>
    <div className="options">
        {data.map((item) => (
        <div className="option" key={item.name}>
            <div className="title">
            <div className="dot" style={{ backgroundColor: item.color }} />
            <span className="name">{item.name}</span>
            </div>
            <span className="value">{item.value}%</span>
        </div>
        ))}
    </div>
    </div>
    </div>
);
};
