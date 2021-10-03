import { useState } from "react"
import { useHistory } from "react-router-dom"

export const RegisterPage = () => {
  const [errorMessage, setErrorMessage] = useState('')
  const [nameValue, setNameValue] = useState('')
  const [emailValue, setEmailValue] = useState('')
  const [passwordValue, setPasswordValue] = useState('')
  const [confirmPasswordValue, setConfirmPasswordValue] = useState('')

  const history = useHistory()

  const onRegisterClicked = () => {
    alert('register clicked')
  }

  return(
    <div className="content-container">
      <h1>Register Page</h1>
      {errorMessage && <div className="fail">{errorMessage}</div>}
      <input 
        value={nameValue}
        onChange={e => setNameValue(e.target.value)}
        placeholder="Your Name"
        type="text"
      />
      <input 
        value={emailValue}
        onChange={e => setEmailValue(e.target.value)}
        placeholder="Your Email"
        type="email"
      />
      <input 
        value={passwordValue}
        onChange={e => setPasswordValue(e.target.value)}
        placeholder="Password"
        type="password"
      />
      <input 
        value={confirmPasswordValue}
        onChange={e => setConfirmPasswordValue(e.target.value)}
        placeholder="Password Confirmation"
        type="password"
      />
      <hr />
      <button 
        disabled={
          !emailValue || !passwordValue || 
          passwordValue !== confirmPasswordValue}
        onClick={onRegisterClicked}
        >
        Register
      </button>
      <button onClick={() => history.push('/login')}>Already have an account? Login</button>
    </div>
  )
}