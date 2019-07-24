import React from "react";

function SavedForm(props) {
    console.log("savedForm props:", props);
    return (
        <div>
            {/* <p>Working? {props.member.name} {props.member.role} {props.member.email}</p> */}
            <h1>Introduce our team</h1>
            <p>{props.savedUser.role} - {props.savedUser.name}, {props.savedUser.email}</p>
        </div>
    )
}

export default SavedForm;