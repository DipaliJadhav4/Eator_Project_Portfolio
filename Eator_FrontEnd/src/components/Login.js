import { useState } from "react";

const Login = (props) => {
  //state which takes care of email and password
  const [formdata, setFormData] = useState({
    email: '',
    password: ''
  })

  //handele the change
  const handleChange = ce =>{
   // console.log(ce.target.id)
   //make a copy of the data
   const copy_state = {...formdata}
   //manipulate the copy
   copy_state[ce.target.id]=ce.target.value
   //update the actual form using the copy
   setFormData(copy_state)
  }

  return (
    <form>
      <div class="mb-3">
        <label for="email" class="form-label">Email address</label>
        <input type="email"
          class="form-control"
          id="email"
          value={formdata.email}
          onChange={handleChange}
          placeholder="Enter your email id"
          aria-describedby="emailHelp" />
        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input type="password"
          value={formdata.password}
          onChange={handleChange}
          class="form-control"
          placeholder="Enter your password"
          id="password" />
      </div>
      <button type="submit" class="btn btn-primary">Login</button>
    </form>
  )
}

export default Login;