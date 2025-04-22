import axios from 'axios'
import React from 'react'

const loginPage = () => {

  const loginFunction = (formData) => {
    const name = formData.get("name");
    const password = formData.get("password");

    axios.post('http://localhost:4000/user/login', {
      name: formData.get("name"),
      password: formData.get("password")
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
  }
 
  return (
    <div>
      <div>Login Page</div>
      <form className="flex" action={loginFunction}>
        <input name="name" />
        <input name="password" />
        <button type="submit">Login</button>
      </form>
      <div>Register User</div>
    </div>
  )
}

export default loginPage;