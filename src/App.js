import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import React from 'react';


const Login =({login, registration})=>{

  const [loginValue, setLoginValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  const changeLogin = (e)=>{
    setLoginValue(e.target.value);

  }

  const changePassword = (e)=>{
    setPasswordValue(e.target.value);
  } 
  // https://learn.javascript.ru/promise

  return(  
    <div>
      <div className="login">
        <input type="text" placeholder="login"  value={loginValue} onChange={changeLogin}></input>
        <input type="password" placeholder="password" value={passwordValue} onChange={changePassword}></input>
 

     
        let promise = new Promise((resolve, reject)   {

          setTimeout('promise', 2000)
          });

          promise
          .then(
            result  {
              alert("все ок")
            },
            error  {
              alert("ошибка")
            }
          );
          resolve();
                              
                

      {/* здесь будет вызов функции, которая будет ждать и давать ответ через секунду
      если grisha grisha - то ок,
      если нет - то еррор */}
             
        <button onClick={(e)=>{console.log(`login is ${loginValue}, password ${passwordValue}`) } }>{login}</button>
        <button>{registration}</button>
      </div>
    </div>
    
  )
  
}




function App() {
  return (
    <Login login="Log in" registration="Reg"/>
  );
}

export default App;
