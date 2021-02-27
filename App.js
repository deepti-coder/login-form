import './App.css';
import {useState} from 'react';

function App() {
  const [islogged,setlogged]=useState(false);
  const[formitem ,setformitem] = useState({
    usernamevalidation :true,
    emailvalidation :true,
    passwordvalidation: true,
    username:"",
    email:"",
    password:"",
  });
  const validation = () => {
    if(formitem.usernamevalidation && formitem.emailvalidation && formitem.passwordvalidation){
        setlogged(!islogged);
    } 
   else{
     alert("Entered values are wrong");
   }
  };
  const usernameChange = (e) => {
    setformitem({
      ...formitem,
      username:e.target.value
    });
    if (e.target.value.length  > 0){
      setformitem({
        ...formitem,
        usernamevalidation :true,
      });
    }else {
      setformitem({
        ...formitem,
        usernamevalidation: false
      });
    }
  };
    const passwordChange = (e) => {
      setformitem({
        ...formitem,
        password:e.target.value
      });
      if (e.target.value.length > 8){
        setformitem({
          ...formitem,
          passwordvalidation : true,
        });
      }else {
        setformitem({
          ...formitem,
          passwordvalidation: false
        });
      }
    };
    const emailChange = (e) => {
      setformitem({
        ...formitem,
        email:e.target.value
      });
      if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(e.target.value)){
        setformitem({
          ...formitem,
          emailvalidation : true,
        });
      }else {
        setformitem({
          ...formitem,
          emailvalidation: false
        });
      }
    };
  return (
    <div className ="App">
      <img src ="loginn.png" className = "login"></img>
      {islogged ? (<h1>Logged In</h1>):
      (<form onSubmit ={validation}>
       <p>Username </p>  <input id='uname' type = "text" onChange ={usernameChange} placeholder="Enter Username" required />
        {!formitem.usernamevalidation && <p style={{color:'red',fontFamily:'serif'} }> Username is Required</p>}
        <p>Email</p> <input id ='emailname' type = "text" onChange ={emailChange} placeholder="Enter Your Email id"required/>
        {!formitem.emailvalidation && <p style={{color:'red',fontFamily:'serif'}}> Email is wrong</p>}
        <p>Password</p> <input  id ='pwd'type = "password" onChange ={passwordChange} placeholder="Enter Password"required />
        {!formitem.passwordvalidation && <p style={{color:'red',fontFamily:'serif'}}> Password is too short</p>}
        <button id='btn'type= "submit">LogIn</button>
      </form>)}
    </div>
  );
  
}

export default App;
