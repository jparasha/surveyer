import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CardComponent from '../../../molecules/Card';
import CONSTANTS from '../../../utils/constants';

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
        padding: '5%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardGrid: {
        maxHeight : 500,
        marginBottom: '2%'
    }
}));

export default function AutoGrid() {
    const { CARDS: { NEW_CARD, TEMPLATE_CARD } } = CONSTANTS;
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item lg={6} xs={12} sm={6} md={6} className={classes.cardGrid}>
                    <CardComponent
                        imagePath={'/assets/images/choose-template.jpg'}
                        title={TEMPLATE_CARD.TITLE}
                        href={TEMPLATE_CARD.CARD_HREF}
                        content={TEMPLATE_CARD.CONTENT}
                        ctaText={TEMPLATE_CARD.CTA_TEXT}
                    />
                </Grid>
                <Grid item lg={6} xs={12} sm={6} md={6}>
                    <CardComponent
                        imagePath={'/assets/images/orange-edit.jpg'}
                        title={NEW_CARD.TITLE}
                        href={NEW_CARD.CARD_HREF}
                        content={NEW_CARD.CONTENT}
                        ctaText={NEW_CARD.CTA_TEXT}
                    />
                </Grid>
            </Grid>
        </div>
    );
}
