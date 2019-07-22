import React, { useState } from 'react';
import Form from "./components/Form.js";

import './App.css';

function App() {
  const [ member, setMember ] = useState({ name:"", email:"", role:"" });
  const handleChange = event => {
    setMember({...member, [event.target.name]: event.target.value})
  };
  const memberToEdit = () => {
    setMember({...member})
  }

  return (
    <div className="App">
      hi {member.name}
      <Form handleChange={handleChange} setMember={setMember} member={member} memberToEdit={memberToEdit}/>
      <div>
        <p>{member.name} {member.role} {member.email}</p>
        <button onClick={() => memberToEdit()}>Edit</button>
      </div>
      
    </div>
  );
}

export default App;
