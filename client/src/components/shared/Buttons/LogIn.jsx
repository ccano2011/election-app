import React from 'react';
import { Link  } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import './LogIn.css'


const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    backgroundColor: '#061540',
    color: 'white',
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
      <Link className='login-link' to="/">
      <Button
        variant="contained"
        className={classes.button}
      >
        <h4 className='login-btn'>Log In</h4>  
      </Button>
       </Link>
    </div>
  );
}