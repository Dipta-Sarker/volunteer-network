import React, { useEffect, useState } from 'react';
import VolunteerWork from '../VolunteerWork/VolunteerWork';
import Css from './Home.css';
import Header from '../Header/Header'

const Home = () => {
    const [volunteer,setVolunteer]=useState([])

    useEffect(()=>{
        fetch('https://fast-dawn-09231.herokuapp.com/volunteerWork')
        .then(res => res.json())
        .then(data => setVolunteer(data))
    },[])

    return (
    <div>
        <Header></Header>
        <div className="row home">
            {
                 volunteer.map(work =><VolunteerWork  volunteer={work}></VolunteerWork>)
            }
        </div>
    </div>
    );
};

export default Home;