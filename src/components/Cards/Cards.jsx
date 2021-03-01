import React from 'react';
import { Card,CardContent, Typography, Grid} from "@material-ui/core";

import styles from "./Cards.module.css";

const Cards = ({ data: {cases, deaths, recovered} } ) => {
    
    if(!cases) {
        return 'Loading...';
    }
    
    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item componment={Card}>
                    <CardContent>
                        <Typography color ="textSecondary" gutterBottom>Infected </Typography>
                        <Typography variant="h5">{cases}</Typography>
                        <Typography color="textSecondary">Real Date</Typography>
                        <Typography variant="body2">Number of active cases of covid-19 </Typography>
                    </CardContent>
                </Grid>

                <Grid item componment={Card}>
                    <CardContent>
                        <Typography color ="textSecondary" gutterBottom>Recovered </Typography>
                        <Typography variant="h5">{recovered}</Typography>
                        <Typography color="textSecondary">Real Date</Typography>
                        <Typography variant="body2">Number of recoveried from covid-19 </Typography>
                    </CardContent>
                </Grid>

                <Grid item componment={Card}>
                    <CardContent>
                        <Typography color ="textSecondary" gutterBottom>Deaths </Typography>
                        <Typography variant="h5">{deaths}</Typography>
                        <Typography color="textSecondary">Real Date</Typography>
                        <Typography variant="body2">Number of deaths by covid-19 </Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    );
}

export default Cards;