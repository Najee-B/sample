import React from 'react'
import './Register.css'
import img from '../assets/arrow.png'

function Register() {
  return (
    <>
    <div class="container">
      <div class="left">
        <div class="triangle"><img src={img} alt=""></img></div>
        <h3>Join Us</h3>
       <p> Subscribe Easy Tutorials YouTube Channel towatch more videos</p>
        <input type="button" class="about" value="About Us" ></input>
    </div>
    <div class="right">
      <form>
         <h2>Register Here</h2>
        <input type="text" class="in" id="name" placeholder="Name" pattern="[A-Za-z\s]{2,}"
         title="Name can only contain alphabets" required></input>
        <input type="text" class="in" id='uname' placeholder="Username" pattern="[A-Za-z0-9\-\@\.\#]{5,10}" 
        title="Username should be atleast 5 character and maximum 10 character"></input>
        <input type="text" class="in" id='email' placeholder="Email" pattern="[a-zA-Z0-9\-]{4,10}[@][a-z]+[\.][a-z]{2,3}" 
        title="Enter valid email format" required></input>
        <input type="password" class="in" id='pass' placeholder="Password" pattern="[a-zA-Z0-9\@\-\.\$]{8}"
         title="Passwod should be 8 letter long" required></input>
        <input type="submit" class="register" value="Register"></input>
        </form>
    <div className="tbox">
        <label for="name" className='lb'>Name:</label>
        <label className='lb' for="uname">User Name:</label>
        <label className='lb' for="email">Email:</label>
        <label className='lb' for="pass">Password:</label>
        </div> 
    </div>
    </div>
    </>
  )
}

export default Register