import React, { useState, useEffect} from 'react';  
import { fetchDailyData } from '../../api';
import { Line, Bar } from 'react-chartjs-2';
import styles from './Chart.module.css';


const Chart = ({ data: { confirmed, recovered, deaths }, country }) => {
    
    const [dailyData, setDailyData] = useState([]);
    useEffect(() => {
        const fetchAPI = async () => {
            setDailyData ( await fetchDailyData());
        };
        fetchAPI();
    }, []);

    const lineChart = (
        dailyData[0] ? (
        <Line
            data={{
                labels: dailyData.map(( {date }) => date),
                datasets: [{
                    data: dailyData.map(({ confirmed }) => confirmed ),
                    label: 'Infected',
                    borderColor: '#333fff',
                    fill:true,
                },{
                    data: dailyData.map(({ deaths }) => deaths ),
                    label: 'Deaths',
                    borderColor: 'red',
                    backgroundColor: 'rgba(255, 0, 0, 0.5)',
                    fill:true
                },],
            }}
        /> ) : null
    );



    const barchart = (
        confirmed
        ? (
            <Bar
                data={{
                    labels: [ 'Infected', 'Recovered','Deaths'],
                    datasets: [ { 
                        label: 'People',
                        backgroundColor: ['rgb(0,0,255,0.5)',
                        'rgb(0,255,0,0.5)',
                        'rgb(255,0,0,0.5)',
                    ],
                    data:[ confirmed.value, recovered.value, deaths.value ]
                    }]
                }}
                options={{

                    legend: { display: false},
                    title: { display: true, text:`Current state in ${country}` },
                }}
            />
        ) : null
    );


    return(
        <div className={ styles.container }>
            {country ? barchart: lineChart}
        </div>
    )
}

export default Chart;