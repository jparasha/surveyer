
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        padding: '5%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    media: {
        minHeight: 275,
        paddingTop: '56.25%', // 16:9
    },
    cardRoot: {
        minWidth: 275,
        minHeight: 275,
        background: '#484848cf',
        color: '#939393',
        borderBottom: '1px solid rgba(211, 211, 211, 0.26)',
        transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)',
        '&:hover': {
            transform: 'scale(1.04)',
            boxShadow: '1px 1px 6px #939393, 9px 10px 19px #c9c9c980'
        }
    },
    title: {
        color: '#ac96db',
    }
}));

export default function CardComponent(props) {

    const { imagePath = '', imageTitle = '' } = props || {};
    const classes = useStyles();
    return (
        <Card className={classes.cardRoot} raised>
            <CardMedia
                className={classes.media}
                image={imagePath}
                title={imageTitle}
            />
            <CardContent>
                <Typography className={classes.title} gutterBottom>
                    Word of the Day
                </Typography>
                <Typography variant="h5" className={classes.title} component="h2" gutterBottom>
                    benevolent
                </Typography>
                <Typography variant="body2" component="p">
                    well meaning and kindly.
                <br />
                    {'"a benevolent smile"'}
                </Typography>
            </CardContent>
        </Card>
    );
}
