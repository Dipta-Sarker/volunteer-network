import React from 'react';
import { Link } from 'react-router-dom';
import Css from './VolunteerWork.css';
const VolunteerWork = (props) => {
    
    const{_id,name,img}=props.volunteer;
    
    return (
        <div className="col-md-3">
            <Link to={'/'+_id}>
            <img src={img} alt=""/>
            <div className="name">
            <h5>{name}</h5>
            </div>
            </Link>
        </div>
    );
};

export default VolunteerWork;