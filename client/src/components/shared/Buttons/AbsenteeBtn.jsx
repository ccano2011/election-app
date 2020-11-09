import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import AbsenteeImg from '../../../Assets/ToDoList.png'
import './Absentee.css'


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
      <Link className='absentee-link' to="/disclaimer">
        <Button
          variant="contained"
          className={classes.button}
        >
          <img className='absenteeImg' src={AbsenteeImg} alt="Absentee Img" />
          <h4 className='absentee-btn'>Absentee Ballot</h4>
        </Button>
      </Link>
    </div>
  );
}