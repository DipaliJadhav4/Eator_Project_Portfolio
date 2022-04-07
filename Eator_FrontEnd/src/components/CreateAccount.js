const CreateAccount =(props)=>{
    return(
        <form>

    <div class="mb-3">
      <label for="firstname" class="form-label">First Name</label>
      <input type="text" 
      class="form-control" 
      id="firstname" 
      placeholder="Enter your first name"/>  
    </div>

    <div class="mb-3">
      <label for="lastname" class="form-label">Last Name</label>
      <input type="text" 
      class="form-control" 
      id="lastname" 
      placeholder="Enter your first name"/>  
    </div>


    <div class="mb-3">
      <label for="email" class="form-label">Email address</label>
      <input type="email" 
      class="form-control" 
      id="email" 
      placeholder="Enter your email id"
      aria-describedby="emailHelp"/>
      <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
    </div>

    <div class="mb-3">
      <label for="password" class="form-label">Password</label>
      <input type="password"
       class="form-control"
       placeholder="Enter your password"
        id="password"/>
    </div>

    <button type="submit" class="btn btn-primary">Signup</button>
  </form>
    )
}
export default CreateAccount;