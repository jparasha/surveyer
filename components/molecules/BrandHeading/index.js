import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    rootContainer: {
        padding: '5% 5% 1% 5%'
    },
    special: {
        fontSize: 36,
        fontStyle: 'italic',
        margin: '0',
    },
    first: {
        fontSize: 24,
        margin: '0 auto 0 34px',
        fontStyle: 'italic',
    },
    last: {
        fontSize: 24,
        margin: '0 0 0 47px',
        fontStyle: 'italic',
    },
    flexContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    fixedWidth: {
        maxWidth: 700,
        padding: '5% 2%'
    }

}));

export default function BrandHeading(props) {

    const classes = useStyles();

    return (<>
        <div className={`${classes.flexContainer} ${classes.rootContainer}`}>
            <Grid container spacing={3} className={classes.flexContainer}>
                <Typography variant={'h5'} component={'h1'} className={classes.flexContainer}>
                    <Typography component={'p'} className={classes.first}>Publish</Typography>
                    <Typography component={'p'} className={classes.special} color={'primary'}>survey models</Typography>
                    <Typography component={'p'} className={classes.last}>to user groups</Typography>
                </Typography>
            </Grid>
            <Grid container spacing={3} className={`${classes.flexContainer} ${classes.fixedWidth}`}>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                    scrambled it to make a type specimen book.
                    It has survived not only five centuries, but also the leap into electronic typesetting,
                    remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                    and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
            </Grid>
        </div>

    </>
    );
}
