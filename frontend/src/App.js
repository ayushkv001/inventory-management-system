import { useState } from 'react';
import { useNavigate, Link} from 'react-router-dom';
import axios from 'axios';
import './App.css';

let toSend;

function App() {
  const [user,setUser] = useState('');
  const [pass,setPass] = useState('');


  let navigate = useNavigate();
  
  const handleSubmit = (e)=>{
    e.preventDefault();
    if(!user && !pass)
    {
      navigate('/error')
    }
    if( user  && pass ){
      axios.post("http://localhost:5000/login",{username:user,password:pass} )
      .then( res => {
          alert(res.data.message)
          navigate('/user')

      })
  } else {
      alert("invlid input")
  }
  }
  return (
    <div className="App">
      <form className='form' onSubmit={handleSubmit}>
          <div className='form-control'>
            <label htmlFor='firstName'>Username : </label>
            <input
              type='text'
              id='firstName'
              name='firstName'
              value={user}
              onChange={(e) => setUser(e.target.value)}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='password'>Password : </label>
            <input
              type='password'
              id='password'
              name='password'
              value={pass}
              onChange={(e) => setPass(e.target.value)}
            />
          </div>
          <button type='submit'>Login</button>
        </form>
      <br/>
      <Link to='/signup'><button >SignUp</button></Link>
      <br/>
      <Link to='/newpass'><u>Forgot Password?</u></Link>
    </div>
  );
}

export default App;


