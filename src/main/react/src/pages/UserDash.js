import React, { useState, useEffect } from 'react';
import Post from '../components/Post';
import ContainerView from '../components/ContainerView';
import axios from 'axios';
import { authHeader } from '../App';
import
{ Link } from 'react-router-dom';
import { Button, Container } from 'reactstrap';
import history from "../History";

const UserDashboard = ({ onTermChange, user }) => {
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    if(!user) {
        history.push("/login");
    }
  });

  return (
    <ContainerView search={true} onTermChange={onTermChange} user={user}>
        <div>
            <h1 className="my-3" style={{ textAlign:'center' }}>Welcome, User!</h1>
        </div>
    </ContainerView>
  );
};

export default UserDashboard;