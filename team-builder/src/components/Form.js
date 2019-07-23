import React, { useState, useEffect } from "react";

import SavedForm from './SavedForm.js';

function Form(props) {
    console.log(props)

    const handleSubmit = event => {
        event.preventDefault();
        props.setMember({ name:"", email:"", role:"" });
    }
    // useEffect(() => {
    //     memberToSave()
    // }, [])
    return(
        <form onSubmit={handleSubmit}>
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
            <SavedForm />
        </form>
    )
}

export default Form;