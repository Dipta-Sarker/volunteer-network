import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { userContext } from '../../App';
import img from '../../logos/Group 1329.png';
import Css from './RegisterVolunteer.css';

const RegisterVolunteer = () => {
    const {id} = useParams()
    const [volunteer, setVolunteer]=useState([])    
    const [loggedInUser,setLoggedInUser]=useContext(userContext)
    const work = volunteer.find(task =>task._id === id)

    
    
    const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => {
      const registerWork ={...loggedInUser,data}
      fetch('https://fast-dawn-09231.herokuapp.com/addVolunteer',{
        method: 'POST',
        body: JSON.stringify(registerWork),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
      .then(res =>res.json())
      .then(data=>{
          if(data){
              alert('Registration Successfully')
          }
      })
  };

    useEffect(()=>{
        fetch('https://fast-dawn-09231.herokuapp.com/volunteerWork')
        .then(res=>res.json())
        .then(data => setVolunteer(data))
    },[])

   
    
    return (
        <div className="register">
             <img src={img} alt=""/>
            
             <form  className="form" onSubmit={handleSubmit(onSubmit)}>
            
            <h1>Register as a volunteer</h1>

            <input name="name" defaultValue={loggedInUser.name} ref={register} />
            <input name="email" defaultValue={loggedInUser.email} ref={register({ required: true })} />
            <input name="date" type="Date" ref={register({ required: true })} />
            <input name="desicription"  placeholder="Desicription" ref={register({ required: true })} />
            <input name="work"  defaultValue={work && work.name} ref={register({ required: true })} />
            <button type="submit" class="btn btn-primary">Registration</button>
            </form>
            
        </div>
    );
};
export default RegisterVolunteer;