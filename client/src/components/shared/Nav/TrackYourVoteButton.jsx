import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TrackerImg from '../../../Assets/TrackYourBallotLogo.png'
import './TrackYourBallotButton.css'


const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    backgroundColor: 'white',
    borderRadius: '15px',
    height: '70px',
    width: '250px',
    textTransform: 'none',
    border: '1px solid black',
    '&:hover': {
      backgroundColor: '#DDE3F5',
  }
  },
}));

export default function IconLabelButtons() {
  const classes = useStyles();

  return (
    <div>
      <Button
        variant="contained"
        className={classes.button}
      >
        <img className='truck' src={TrackerImg} alt="wab" />
        <h4 className='button-text'>Track Your Ballot</h4>
      </Button>
    </div>
  );
}