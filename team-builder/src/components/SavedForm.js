import React from "react";

function SavedForm(props) {
    console.log("savedForm props:", props);
    return (
        <div>
            <h1>Introduce our team</h1>
            {props.savedUser.map(e => <h3>{e.role} {e.name}, email: {e.email}</h3>)}
            {/* <p>{props.savedUser.map(e => ` ${e.role} ${e.name}, email: ${e.email}`)}</p> */}
            {/* <p>{props.savedUser.role} - {props.savedUser.name}, {props.savedUser.email}</p> */}
            {/* <p>{props.savedUser.map(e => e.name)}</p> */}
        </div>
    )
}

export default SavedForm;