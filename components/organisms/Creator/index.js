import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Form from './Presentation/FormComp';
import BrandHeading from '../../molecules/BrandHeading';

const useStyles = makeStyles({
    root: {
        width: '100%',
        flexGrow: 1,
        padding: '5%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    item: {
        flexGrow: 1,
        margin: '1%',
    }
});

export default function Creator(props) {
    const classes = useStyles();
    return (
        <Grid container className={classes.root} spacing={3}>
            <BrandHeading />
            <Form className={classes.item} />
        </Grid>
    );
}
