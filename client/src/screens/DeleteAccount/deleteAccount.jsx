import React, { useState, useEffect } from 'react';
import './deleteAccount.css'
import Nav from "../../components/shared/Nav/Nav";
import ArrowImg from '../../Assets/left-arrow.svg';
import { getUsers, deleteUser } from '../../services/usersConnect'
// import CreateUsers from '../../components/createuser/CreateUser'
import { Link, useHistory } from "react-router-dom"


function DeleteAccount(props) {
  const [isLoaded, setLoaded] = useState(false)
  const [userReq, setUserReq] = useState([]);

  useEffect(() => {
    const userData = async () => {
      const userDataApi = await getUsers()
      setUserReq(userDataApi)
      // setRenderReq(ballotDataApi)
    }
    userData();
  }, [props.isLoaded])
  console.log(userReq)

  const history = useHistory()

  const handleDelete = async () => {
    await deleteUser(currentUser)
    setLoaded(!isLoaded)
    // alert(`Request Deleted!`)
    setTimeout(() => {
      history.push(`/account-deleted`)
    }, 200)
  };

  let mappingTime = userReq.map(function (id) {
    return id._id
  })
  console.log(mappingTime)

  const currentUser = mappingTime.slice(-1)
  console.log(currentUser)

  return (
    <div>
      <Nav />
      <div className='subHeader'>
        <Link to="/account-landing-page">
          <img className='arrow' src={ArrowImg} alt='arrow' height='25' weight='25' />
        </Link>
        <p className="headline">DELETE ACCOUNT</p>
      </div>
      <div className='delete-p'>
        <p>Are you sure you would like to delete your account?</p>
      </div>
      <div className='buttons'>
        <div className='cancel-btn'>
          <Link to="/account-landing-page"><button className="cancelAccountBtn" >Cancel</button></Link>
        </div>
        <div className='delete-btn'>
          <button className="deleteAccountBtn" onClick={handleDelete} >Confirm</button>
        </div>
      </div>
    </div>
  );
}

export default DeleteAccount;