import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

export const LoginPage = () =>  {
  const [errorMessage, setErrorMessage] = useState('') //to show the error message when user input wrong email or password
  const [emailValue, setEmailValue] = useState('') //variable to store the emailValue
  const [passwordValue, setPasswordValue] = useState('') //variable to store the passwordValue
  const history = useHistory() //gives the access to the history instance that we use to navigate, such as Link to react router

  const onLoginClicked = async() => {
    alert('Login not implemented yet')
  }

  return (
    <div className="content-container">
        <h1>Login</h1>
        {/* if the error message exist then the div error message will occur */}
        {errorMessage && <div className="fail">{errorMessage}</div>}
        <input 
          value={emailValue}
          onChange={e => setEmailValue(e.target.value)} //when the value on the input form change, it will automatically setEmailValue with the event target value from input form
          placeholder="user@email.com"
          />
        <input 
          value={passwordValue}
          onChange={e => setPasswordValue(e.target.value)} //when the value on the input form change, it will automatically setPasswordValue with the event target value from input form
          type="password" 
          placeholder="your password"
          /> 
        <hr/>
        <button 
          onClick={onLoginClicked}
          disabled={!emailValue || !passwordValue} //the button login will disabled when emailValue is empty or passwordValue is empty
          >
            Login
          </button>
        <button onClick={() => history.push('/forgot-password')}>Forgot your password?</button>
        <button onClick={() => history.push('/register')}>Don't have and account ? Sign Up</button>
    </div>
  )
}
