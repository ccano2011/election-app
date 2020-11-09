import React, { useState, useEffect } from "react";
import "./AccountLandingPage.css";
import { getUsers, deleteUser } from "../../services/usersConnect";
import Nav from "../../components/shared/Nav/Nav";
import ArrowImg from "../../Assets/left-arrow.svg";
import { Link } from "react-router-dom";
import userEvent from "@testing-library/user-event";

function AccountLandingPage(props) {
  const [user, setUser] = useState({});
  const [isLoaded, setLoaded] = useState(false);

  useEffect(() => {
    const userInfo = async () => {
      const userInfoApi = await getUsers();
      setUser(userInfoApi);
    };
    userInfo();
  }, [isLoaded]);
  console.log(user);

  if (!user.length) {
    return <h4>будь терпелив, товарищ</h4>;
  }

  const handleDelete = async (id) => {
    await deleteUser(id);
    setLoaded(!isLoaded);
    alert(`Request Deleted!`);
  };

  let mappingTime = user.map(function (id) {
    return id._id;
  });
  console.log(mappingTime);

  return (
    <div className="whole-page">
      <Nav />
      <div className="subHeader">
        <Link to="/dashboard">
          <img
            className="arrow"
            src={ArrowImg}
            alt="arrow"
            height="25"
            weight="25"
          />
        </Link>
        <p className="headline">My Account</p>
      </div>

      <div className="accountImage"></div>

      <div className="accountInfo">
        {user.map((post, index) => (
          <div className="mappedUser" key={index}>
            <p className="username">Username: {post.username} </p>
            <p className="password">Password: {post.password}</p>
          </div>
        ))}
        <Link to="/">
          <p className="logout">Log Out </p>
        </Link>

        <Link to="/delete-account">
          <p className="delete-account">Delete Account</p>
        </Link>
      </div>
    </div>
  );
}

export default AccountLandingPage;
