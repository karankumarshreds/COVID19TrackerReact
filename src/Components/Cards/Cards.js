import React from 'react';
import { Card, CardContent, Typography, Grid} from '@material-ui/core';
import styles from './Cards.module.css';
import CountUp from 'react-countup';
import cx from 'classnames'

const Cards = ({data : {confirmed, recovered, deaths, lastUpdate}}) => {

    if (!confirmed) {
        return 'loading...'
    }

    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom> <h2>Infected</h2> </Typography>
                        <Typography variant="h5">   
                            <CountUp start={0} end={confirmed.value} duration={1} separator="," />
                        </Typography>
                        <Typography color="textSecondary">
                            {new Date(lastUpdate).toDateString()}
                        </Typography>
                        <Typography variant="body2">
                            Active cases of COVID-19
                        </Typography>
                    </CardContent>
                </Grid>
                
                <Grid item component={Card}  xs={12} md={3} className={cx(styles.card, styles.recovered)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            <h2>Recovered</h2>
                        </Typography>
                        <Typography variant="h5">   
                            <CountUp start={0} end={recovered.value} duration={1} separator="," />
                        </Typography>
                        <Typography color="textSecondary">
                            {new Date(lastUpdate).toDateString()}
                        </Typography>
                        <Typography variant="body2">
                            Recovered cases of COVID-19
                        </Typography>
                    </CardContent>
                </Grid>
                
                <Grid item component={Card}  xs={12} md={3} className={cx(styles.card, styles.deaths)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            <h2>Deaths</h2>
                        </Typography>
                        <Typography variant="h5">   
                            <CountUp start={0} end={deaths.value} duration={1} separator="," />
                        </Typography>
                        <Typography color="textSecondary">
                            {new Date(lastUpdate).toDateString()}
                        </Typography>
                        <Typography variant="body2">
                            Total deaths due to COVID-19
                        </Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards