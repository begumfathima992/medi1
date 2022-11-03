import React from "react";

 const Create = ({ onAdd }) => {
  const handleOnSubmit = (evt) => {
    evt.preventDefault();
    onAdd(evt.target.name.value, evt.target.email.value);
    evt.target.name.value = "";
    evt.target.email.value = "";
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <h4>Create User</h4>
      <input className="input" placeholder="Name" name="name" />&nbsp;&nbsp;&nbsp;
      <input className="input" placeholder="Email" name="email" />&nbsp;&nbsp;&nbsp;
      <button className="input" onSubmit={handleOnSubmit}>Add</button><br></br>
     
    </form>
  );
};
export default Create