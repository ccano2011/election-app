import React from 'react';
import { Link  } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import VoteImg from '../../../Assets/vote.png'
import './VoteLink.css'

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    backgroundColor: '#061540',
    borderRadius: '15px',
    height: '70px',
    width: '250px',
    textTransform: 'none',
    border: '1px solid black',
    '&:hover': {
      backgroundColor: '#092266',
  }
  },
}));

export default function IconLabelButtons() {
  const classes = useStyles();

  return (
    <div>
      <a className='link' href="https://vote.nyc/" target='_blanck'>
      <Button
        variant="contained"
        className={classes.button}
      >
      
        <img className='vote-img' src={VoteImg} alt="vote" height='30px' width='30px' />
        <h4 className='vote-text'>Vote.org</h4>
     
        </Button>
        </a>
    </div>
  );
}