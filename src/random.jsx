// src/components/RandomUserList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const RandomUserList = ({ numberOfUsers }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchRandomUsers = async () => {
      try {
        const response = await axios.get(`https://randomuser.me/api/?results=${numberOfUsers}`);
        setUsers(response.data.results);
      } catch (error) {
        console.error('Error fetching random users:', error);
      }
    };

    fetchRandomUsers();
  }, [numberOfUsers]);

  return (
    <div className="user-list">
      <h2>Random User List</h2>
      <ul>
        {users.map((user, index) => (
          <li key={index} className="user-card">
            <img src={user.picture.medium} alt="User" />
            <div className="user-info">
              <p>
                <strong><h3>{`${user.name.first} ${user.name.last}`}</h3></strong>
              </p>
              <p>Email: {user.email}</p>
              <p>Phone: {user.phone}</p>
              <p>City: {user.location.city}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RandomUserList;
