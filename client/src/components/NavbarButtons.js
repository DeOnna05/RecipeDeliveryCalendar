import React from 'react';

const NavbarButtons = (props) => (
    <div className="note">
        <p>{props.content}</p>
        <button value={props.value} onClick={props.clickHandler} >Delete</button>
    </div>
)

export default Note;