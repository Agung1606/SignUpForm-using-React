import React from "react";
import "./style.css";

export default function App() {
  const [formData, setFormData] = React.useState({
      email: '',
      password: '',
      confirmPassword: '',
      joinedNewsletter: false
  })
      
  function handleChange(event) {
      const {name, value, type, checked} = event.target;
      setFormData(prevFormData => {
          return{
              ...prevFormData,
              [name]: type === "checkbox" ? checked : value
          }
      })
  }
  
  function handleSubmit(event) {
      event.preventDefault()
      if(formData.password === formData.confirmPassword) {
          console.log("Successfully signed up")
      } else {
          console.log("passwords not match")
          return;
      }

      if(formData.joinedNewsletter === true) {
        console.log("Thanks for signing up for our newsletter!")
      }
  }
  
  return (
      <div className="form-container">
          <form className="form" onSubmit={handleSubmit}>
              <input 
                  type="email" 
                  placeholder="Email address"
                  className="form--input"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
              />
              <input 
                  type="password" 
                  placeholder="Password"
                  className="form--input"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
              />
              <input 
                  type="password" 
                  placeholder="Confirm password"
                  className="form--input"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
              />
              
              <div className="form--marketing">
                  <input
                      id="okayToEmail"
                      type="checkbox"
                      name="joinedNewsletter"
                      checked={formData.joinedNewsletter}
                      onChange={handleChange}
                  />
                  <label htmlFor="okayToEmail">I want to join the newsletter</label>
              </div>
              <button className="form--submit">Sign up</button>
          </form>
      </div>
  )
}
