import React from 'react';
import { Link  } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import './SignUp.css'


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
      <Link className='signup-link' to="/create-account">
      <Button
        variant="contained"
        className={classes.button}
      >
        <h4 className='signup-btn'>Sign Up</h4>  
      </Button>
       </Link>
    </div>
  );
}