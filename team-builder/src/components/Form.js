import React from "react";

function Form(props) {
    console.log(props);
    
    return(
        <form>
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
        </form>
    )
}

export default Form;