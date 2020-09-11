import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CardComponent from '../../../molecules/Card';

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
        padding: '5%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
}));

export default function AutoGrid() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item lg={6} xs={12} md={6}>
                    <CardComponent
                        imagePath={'/assets/images/choose-template.jpg'}
                        imageTitle='choose template'
                        href={'/surveys/templates'}
                    />
                </Grid>
                <Grid item lg={6} xs={12} md={6}>
                    <CardComponent
                        imagePath={'/assets/images/orange-edit.jpg'}
                        imageTitle='create own'
                        href={'/surveys/create-new'}
                    />
                </Grid>
            </Grid>
        </div>
    );
}
