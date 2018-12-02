import React from 'react';

const Scrollspy = (props) => (   
    
        <nav className="nav nav-pills flex-column flex-sm-row">
            <a className={props.activeElement === "Monday" ? 'active flex-sm-fill text-sm-center nav-link' : 'flex-sm-fill text-sm-center nav-link'} onClick={(event)=>{event.preventDefault(); props.activeClass("Monday")}} href="#">Monday</a>
            <a className={props.activeElement === "Tuesday" ? 'active flex-sm-fill text-sm-center nav-link' : 'flex-sm-fill text-sm-center nav-link'} onClick={(event)=>{event.preventDefault(); props.activeClass("Tuesday")}} href="#">Tuesday</a>
            <a className={props.activeElement === "Wednesday" ? 'active flex-sm-fill text-sm-center nav-link' : 'flex-sm-fill text-sm-center nav-link'} onClick={(event)=>{event.preventDefault(); props.activeClass("Wednesday")}} href="#">Wednesday</a>
            <a className={props.activeElement === "Thursday" ? 'active flex-sm-fill text-sm-center nav-link' : 'flex-sm-fill text-sm-center nav-link'} onClick={(event)=>{event.preventDefault(); props.activeClass("Thursday")}} href="#">Thursday</a>
            <a className={props.activeElement === "Friday" ? 'active flex-sm-fill text-sm-center nav-link' : 'flex-sm-fill text-sm-center nav-link'} onClick={(event)=>{event.preventDefault(); props.activeClass("Friday")}} href="#">Friday</a>
            <a className={props.activeElement === "Saturday" ? 'active flex-sm-fill text-sm-center nav-link' : 'flex-sm-fill text-sm-center nav-link'} onClick={(event)=>{event.preventDefault(); props.activeClass("Saturday")}} href="#">Saturday</a>
            <a className={props.activeElement === "Sunday" ? 'active flex-sm-fill text-sm-center nav-link' : 'flex-sm-fill text-sm-center nav-link'} onClick={(event)=>{event.preventDefault(); props.activeClass("Sunday")}} href="#">Sunday</a>
        </nav>      
)

export default Scrollspy