import React from 'react';
import Css from './Task.css';
const Task = (props) => {
    

const{work,date}=props.work.data

    return (
        <div className="col-md-6 data">
            <div className="info">
            <h1>{work}</h1>
            <h2>{date}</h2>
            </div> 
        </div>
    );
};

export default Task;