import React, { useState } from 'react';
import Form from "./components/Form.js";
import SavedForm from "./components/SavedForm.js";

import './App.css';


function App() {
  const [ member, setMember ] = useState({ name:"", email:"", role:"" });
  
  const handleChange = event => {
    console.log('checking: ', event.target.value)
    console.log(event.target.name, )
    setMember({...member, [event.target.name]: event.target.value})
  };
  
  const memberToEdit = () => {
    setMember({...member})
  }
  const [savedUser, setSavedUser] = useState({ name:"Darren", email:"dr@darren.com", role:"Team Lead"  });
  console.log('savedUser:', savedUser)
  return (
    <div className="App">
      <h1>Join team Darren</h1>
      <Form handleChange={handleChange} setMember={setMember} member={member} memberToEdit={memberToEdit}/>
      <div className="printed-form">
        <p>Your name: {member.name}</p>
        <p>Email: {member.email}</p> 
        <p>What is your role? {member.role}</p>
        <SavedForm savedUser={savedUser}/>
        <button onClick={() => memberToEdit()}>Edit</button>
      </div>
    </div>
  );
}

export default App;
