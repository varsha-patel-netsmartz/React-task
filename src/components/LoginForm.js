// LoginForm.js
import React, {useState} from 'react';
import CommonHeader from './CommonHeader.js'
import ButtonComponent from './ButtonComponent.js';
import style from './style.module.css'
function LoginForm() {
  
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const myStyle = {
    backgroundColor: "lightblue",
    width: '30%',
    padding: '2%'
  };

  const handleLogin = (event) => {
    event.preventDefault()
    console.log(username, password)
  }
  return (
    <>
      <div align='center' className={style.backColor}>
        <CommonHeader />
        <form className='login-form' style={myStyle}>
          <label>Username:
            <input
              type="text" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={{margin: 10}}
            />
          </label><br />
          <label>Password:
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{margin: 10}}
              />
          </label><br />
          <ButtonComponent text='Login' clickbtn={handleLogin}/>
        </form>
      </div>
    </>
  );
}

export default LoginForm;
