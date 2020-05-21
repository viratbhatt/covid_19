import React from 'react';  
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import cx from 'classnames';

import CountUp from 'react-countup';
import styles from './Cards.module.css';
const Info = ( {data: { confirmed, recovered, deaths, lastUpdate } } ) =>
{
    if( !confirmed )
    {
        return 'Loading....';
    }
    return(
        <div className = { styles.container }>
            <Grid container spacing ={3} justify ="center" >
                <Grid item component = {Card} xs={12} md={3} className={cx (styles.card, styles.infected)}>
                    <CardContent>
                        <Typography color="inherit" gutterBottom>
                            Infected
                        </Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={confirmed.value} duration={0.5} separator="," />
                        </Typography>
                        <Typography color="inherit">
                            {new Date(lastUpdate).toDateString()}
                        </Typography>
                        <Typography variant="body2">
                            Number of Infected Cases
                        </Typography>
                    </CardContent>
                </Grid>

                <Grid item component = {Card} xs={12} md={3} className={cx (styles.card, styles.recovered)}>
                    <CardContent>
                        <Typography color="inherit" gutterBottom>
                            RECOVERED
                        </Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={recovered.value} duration={0.5} separator="," />
                        </Typography>
                        <Typography color="inherit">
                            {new Date(lastUpdate).toDateString()}
                        </Typography>
                        <Typography variant="body2">
                            Number of recoveries
                        </Typography>
                    </CardContent>
                </Grid>

                <Grid item component = {Card} xs={12} md={3} className={cx (styles.card, styles.deaths)}>
                    <CardContent>
                        <Typography color="inherit" gutterBottom>
                            Deaths
                        </Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={deaths.value} duration={0.5} separator="," />
                        </Typography>
                        <Typography color="inherit">
                            {new Date(lastUpdate).toDateString()}
                        </Typography>
                        <Typography variant="body2">
                            Number of Deaths by COVID-19
                        </Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Info;