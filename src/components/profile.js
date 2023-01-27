import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import DribbleShots from "./dribbleShots";

let accessToken = "43179613111cce84d49ba4171c92163f0088573c1e513aef414a4766e41350a3";

function Profile() {
  const [userData, setUserData] = useState(null);
  const fetchUser = () => {
    axios
      .get(`https://api.dribbble.com/v2/user?access_token=` + accessToken)
      .then((res) => {
        const fetchedUser = res.data;
        setUserData(fetchedUser);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const renderUser = () => {
    if (userData) {
      return (
        <div className="App">
          <div className="card">
            <h1>Welcome Dear User</h1>
          <div>
            <Link to="/create">
              <button className="btn btn-primary">Add Project</button>
            </Link>
          </div>
          <div className="user-details">
            <div className="user-avatar">
              <img src={userData.avatar_url} alt={userData.name} />
            </div>
            <div className="user-info">
              <h2>{userData.name}</h2>
              <p>
                <b>Bio:</b>
                {userData.bio}
              </p>
              <p>{userData.location}</p>
              <a href="mailto:{userData.email}">Send email</a> 
              {/* eslint-disable-next-line */}
              <a href={userData.html_url} target="_blank">
                Dribbble
              </a>
            </div>
          </div>
          </div>
          </div>
        
      );
    } else {
      return (
        <div className="user-details">
          <p>User details not available...</p>
        </div>
      );
    }
  };

  return (
    <div>
      {renderUser()}
      <DribbleShots/>
          </div>
  );
}

export default Profile;