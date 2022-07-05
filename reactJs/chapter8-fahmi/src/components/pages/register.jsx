import React from 'react'

function Daftar(){
  return(
<div>
  <form>
    <div class="form-group">
    <label for="exampleInputUsername">Username</label>
    <input type="text" class="form-control"/>
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="form-group">
    <label for="exampleInputExperience">Experience</label>
    <input type="number" class="form-control"/>
  </div>
  <div class="form-group">
    <label for="exampleInputLvl">Level</label>
    <input type="number" class="form-control"/>
  </div>
  <div class="form-group form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
</div>
  )
}


export default Daftar;


