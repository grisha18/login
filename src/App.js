import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import React from 'react';


const Login =({login, registration})=>{

  const [loginValue, setLoginValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [disabledValue, setDisabledvalue] = useState(true);

  const changeLogin = (e)=>{
    setLoginValue(e.target.value);
    if(e.target.value.length && passwordValue.length){
      setDisabledvalue(false)
    }
    else{
      setDisabledvalue(true)
    }

  }

  const changePassword = (e)=>{
    setPasswordValue(e.target.value);
    if(loginValue.length && e.target.value.length){
      setDisabledvalue(false)
    }
    else{
      setDisabledvalue(true)
    }
  } 
  // https://learn.javascript.ru/promise




  const doLogin = (login, password) =>{
    return new Promise(  (resolve, reject)=>{

      setTimeout( ()=>{
        if( ('grisha' === login) && (password === 'grisha') ){
          resolve(1)
        }
        else{
          reject("error")
        }
    
      } ,2000 )

    }  ) 
  }

  // когда промис разрешился (удачно или с ошибкой), надо разблокировать кнопку
  // если неудачно, то вывести на экран
  // для этого создать элемент (спан) со стэйтом внутри
  // при ошибке стейт меняется - задается текст ошибки
  // если всё сделаете, выводить ошибки логин неправильный или пароль неправильный
  // для этого разделить условие проверки на две проверки



  return(  
    <div>
      <div className="login">
        <input type="text" placeholder="login"  value={loginValue} onChange={changeLogin}></input>
        <input type="password" placeholder="password" value={passwordValue} onChange={changePassword}></input>
 
      {/* здесь будет вызов функции, которая будет ждать и давать ответ через секунду
      если grisha grisha - то ок,
      если нет - то еррор */}
             

             {/* сюда нужен стейт, дизэйблд */}
        <button disabled={disabledValue} onClick={(e)=>{ setDisabledvalue(true); doLogin(loginValue, passwordValue).then((result)=>console.log(result)).catch(e => console.log(e))} }>{login}</button>
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
