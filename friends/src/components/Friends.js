import React, { useState, useEffect } from 'react';
// import axios from 'axios'; // Use the wrapped axios!
import axiosWithAuth from '../axios';
// import { Redirect } from 'react-router-dom';

export default function Friends(props) {
  const [friendsList, setFriendsList] = useState([]);

  useEffect(() => {
   
    axiosWithAuth().get('http://localhost:5000/api/friends')
      .then(res => {
        setFriendsList(res.data);
      })
      .catch(error => {
        alert(error.message);
      });
  }, []);

  return (
    <div className='friends'>
      {
        friendsList.map(friend => (
          <li key={friend.id}>{friend.name} is {friend.age} years old and uses the email {friend.email}</li>
        ))
      }
    </div>
  );
}