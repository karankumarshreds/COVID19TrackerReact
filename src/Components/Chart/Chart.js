import React, { useState, useEffect } from 'react';
import { fetchDailyData, fetchData } from '../../api/index';
import { Line } from 'react-chartjs-2';
import styles from './Chart.module.css'

const Chart = () => {

    //[state, setState]
    const [dailyData, setDailyData] = useState({});

    //runs after the mount
    useEffect(() => {
        const fetchAPI = async () => {
            setDailyData(await fetchDailyData());
        }

        fetchAPI();
        //we used two functions because we cannot use async with useEffect() function
    });

    const lineChart = (
        dailyData.length 
        ?
        (
        <Line 
            className={styles.Chart}
            data={
                {   labels:dailyData.map(({ date }) => date),
                    datasets: [{
                        data: dailyData.map(({confirmed}) => confirmed),
                        label: "Infected",
                        borderColor: "#00e1ff",
                        fill: true,
                    }, {
                        data: dailyData.map(({deaths}) => deaths),
                        label: "Deaths",
                        borderColor: "red",
                        backgroundColor: "rgba(255, 0, 0, 0.2)",
                        fill: true,
                    }],
                }
            }
        />
        ) : null
    )
    return (
        <div className={styles.container}>
            {lineChart}
        </div>
    
    )
}

export default Chart;