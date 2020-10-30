import React from "react";
// import { Image } from 'react-native'
// import Layout from '../../shared/Layout/Layout'
import { Link } from "react-router-dom";
import Nav from "../../components/shared/Nav/Nav";
import "./Home.css";
import TrackButton from "../../components/shared/Buttons/TrackYourVoteButton";
import VoteButton from "../../components/shared/Buttons/VoteLinkBtn";
import AbsenteeButton from "../../components/shared/Buttons/AbsenteeBtn";
import CalendarButton from "../../components/shared/Buttons/Calendarbtn";

const Home = () => {
  return (
    <div className="homepage">
      <div>
        <Nav />
      </div>
      <div className="hp-buttons">
        <TrackButton />

        <VoteButton />

        <AbsenteeButton />

        <CalendarButton />
      </div>
    </div>
  );
};

export default Home;
