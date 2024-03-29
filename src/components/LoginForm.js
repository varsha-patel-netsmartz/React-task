// LoginForm.js
import React, {useState} from 'react';
import CommonHeader from './CommonHeader.js'
import ButtonComponent from './ButtonComponent.js';
function LoginForm() {
  
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (event) => {
    event.preventDefault()
    console.log(username, password)
  }
  return (
    <>
      <div align='center'>
        <CommonHeader />
        <form className='login-form'>
          <label>Username:
            <input
              type="text" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label><br />
          <label>Password:
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
          </label><br />
          <ButtonComponent text='Login' clickbtn={handleLogin}/>
        </form>
      </div>
    </>
  );
}

export default LoginForm;
