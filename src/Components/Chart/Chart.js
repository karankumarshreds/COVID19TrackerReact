import React, { useState, useEffect } from 'react';
import { fetchDailyData, fetchData } from '../../api/index';
import { Line, Bar } from 'react-chartjs-2';
import styles from './Chart.module.css'
import { colors } from '@material-ui/core';

const Chart = (props) => {

    //[state, setState]
    const [dailyData, setDailyData] = useState({});

    //runs after the mount
    useEffect(() => {
        const fetchAPI = async () => {
            setDailyData(await fetchDailyData());
        }

        fetchAPI();
        //we used two functions because we cannot use async with useEffect() function
    }, []);
    
    const lineChart = (
        dailyData.length 
        ?
        (
        <div className={styles.container}>
        <Line 
            className={styles.Chart}
            data={{   
                labels:dailyData.map(({ date }) => date),
                datasets: [{
                    data: dailyData.map(({confirmed}) => confirmed),
                    label: "Infected",
                    borderColor: "#00e1ff",
                    fill: true,
                    }, {
                    data: dailyData.map(({deaths}) => deaths),
                    label: "Deaths",
                    borderColor: "#fa276d",
                    backgroundColor: "rgba(255, 0, 0, 0.2)",
                    fill: true,
                }],
            }}
        />
        </div>            
        ) : null
    )

    const barChart = (
        props.data.confirmed ? (
            <Bar 
                data={{
                    labels: ['Infected', 'Recovered', 'Deaths'],
                    datasets: [{
                        data: [
                            props.data.confirmed.value, 
                            props.data.recovered.value, 
                            props.data.deaths.value
                        ], 
                        label: 'People',
                        backgroundColor: ['#15bdf0', '#00ffb3', '#fa276d'],
                    }]
                }}
                options={{
                    legend: {display: false},
                    title: {display: true, text: `Current Count in ${props.country}`},
                }}
            />
        ) : null
    );  

    return (
        <div className={styles.container}>
            {props.country ? barChart : lineChart}
        </div>
    
    )
}

export default Chart;