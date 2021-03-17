import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../../App';

import Task from '../../Components/Task/Task';
const EventTasks = () => {
  const [loggedInUser,setLoggedInUser]=useContext(userContext)

  const [registerVolunteer,setRegisterVolunteer]=useState([]);
  
  useEffect(()=>{
    fetch('https://fast-dawn-09231.herokuapp.com/registerVolunteer?email='+loggedInUser.email)
    .then(res => res.json())
    .then(data =>setRegisterVolunteer(data))
    
  },[])

    return (
        <div className="row">
          {
            registerVolunteer.map(vol =><Task work={vol}></Task> )
          }
           
        </div>
    );
};

export default EventTasks;