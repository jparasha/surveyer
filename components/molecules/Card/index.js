
import React from 'react';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const useStyles = makeStyles({
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
        minHeight: 450,
    },
    cardContent: {
        flexWrap: 'wrap',
        padding: '5%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        flexDirection: 'column'
    },
    item: {
        marginTop: 5
    },
    cta: {
        width: '100%',
        justifyContent: 'center',
    }
});

export default function CardComponent(props) {

    const { imagePath = '', title = '', href = '', content = '', ctaText = '' } = props || {};
    const classes = useStyles();
    return (
        <Card className={classes.cardRoot} elevation={15}>
            <CardActionArea href={href}>
                <CardMedia
                    className={classes.media}
                    image={imagePath}
                    title={title}
                />
                <CardContent className={classes.cardContent}>
                    <Typography variant="h5" className={classes.item} component="h2" gutterBottom>
                        {title}
                    </Typography>
                    <Typography variant="body2" component="p" className={classes.item}>
                        {content}
                    </Typography>
                    <CardActions className={`${classes.item} ${classes.cta}`} >
                        <Button
                            variant={'outlined'}
                            color="primary"
                            size={'large'}
                            className={classes.cta}
                            endIcon={<ArrowForwardIcon />} >
                            {ctaText}
                        </Button>
                    </CardActions>
                </CardContent>
            </CardActionArea>
        </Card >
    );
}
