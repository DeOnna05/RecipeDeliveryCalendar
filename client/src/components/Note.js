import React from 'react';

const Note = (props) => (
    <div className="note">
        <p>{props.content}</p>
        <button value={props.value} onClick={props.clickHandler} >Delete</button>
    </div>
)

export default Note;