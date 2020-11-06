import React from 'react';
// import { Link  } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import CalendarImg from '../../../Assets/Calendar.png'
import './Calendar.css'

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    backgroundColor: '#D6DDF3',
    borderRadius: '15px',
    height: '250px',
    width: '250px',
    textTransform: 'none',
    border: '1px solid black',
  },
}));

export default function IconLabelButtons() {
  const classes = useStyles();

  return (
    <div>
      <a className='calendar-link' href="https://vote.nyc/" target='_blanck'>
        <Button
          variant="contained"
          className={classes.button}
        >
          <div className='calendar-div'>
            <h4 className='calendar-text'>Important Dates</h4>
            <img className='calendar-img' src={CalendarImg} alt="calendar" height='180px' width='180px' />
          </div>
        </Button>
      </a>
    </div>
  );
}