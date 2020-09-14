import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(0.5),
        },
    },
}));

const chipTypes = ['input', 'option', 'checkbox'];
const colors = ['salmon', 'rebeccapurple', 'orange'];

const getChips = (item, props) => {
    const { label = item.toUpperCase(), handleClick } = props;
    const color = colors[chipTypes.indexOf(item)];

    return (
        <Chip
            variant='default'
            size='medium'
            id={label}
            avatar={<Avatar id={label} onClick={() => handleClick(label)}>+</Avatar>}
            label={label}
            onClick={() => handleClick(label)}
            clickable
            style={{ backgroundColor: color }}
        />
    );
};


export default function ChipComponent(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            {
                chipTypes.map((item, index) => ((props.count > index) && getChips(item, props)))
            }
        </div>
    );
}
