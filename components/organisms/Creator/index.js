import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        padding: '5%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default function Creator(props) {
    const classes = useStyles();
    return (
        <Grid container className={classes.root} spacing={3}>
            <Typography variant="h3" className={classes.titleRow} component="h1" gutterBottom>
                benevolent
            </Typography>
            <Typography variant="h5" className={classes.titleRow} component="h4" gutterBottom>
                benevolent tesl jkdfs jlksjdlkfjdslf sldkfjlksdjfksljd dsfjlsdjfljsdlk slkjklj
            </Typography>
        </Grid>
    );
}
