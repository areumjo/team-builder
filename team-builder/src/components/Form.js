import React, { useState, useEffect } from "react";
import SavedForm from "./SavedForm";

function Form(props) {

    const handleSubmit = event => {
        // wo prevenDefault, when use clicks submit, page will refresh
        event.preventDefault();
        // alert('A name was submitted: ' + props.member.name);
        // props.setSavedUser({...props.savedUser, [event.target.name]: event.target.value });
        // console.log('props.savedUser:', props.savedUser)
        console.log('submit clicked: ', props.member)
        props.savedUser.push(props.member);
        props.setSavedUser(props.savedUser);
        props.setMember({...props.member})
    }
    useEffect(() => {
        props.setSavedUser(props.savedUser)
    }, [])
    // const newUser = props.savedUser
    return(
        <form onSubmit={handleSubmit} className="form-container">
            <label>
                Name:
               <input 
                type="text"
                name="name"
                value={props.member.name}
                onChange={(event)=>props.handleChange(event)}
                />
            </label><br/>
            <label>
                email:
               <input 
                type="text"
                name="email"
                value={props.member.email}
                onChange={event=>props.handleChange(event)}
                />
            </label><br/>
            <label>
                role:
               <input 
                type="text"
                name="role"
                value={props.member.role}
                onChange={event=>props.handleChange(event)}
                />
            </label><br/>
            <button>Submit</button>
            {/* <SavedForm savedUser={props.savedUser.map(e => ` ${e.role} ${e.name}, email: ${e.email}`)} /> */}
            <SavedForm savedUser={props.savedUser}/>
        </form>
    )
}

export default Form;