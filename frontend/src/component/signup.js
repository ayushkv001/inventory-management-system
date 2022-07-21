import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import '../App.css';

function SignUp() {
  const [user,setUser] = useState('');
  const [uname,setUname] = useState('');
  const [pass,setPass] = useState('');
  const [email,setEmail] = useState('');
  const [gender,setGender] = useState('');

  let navigate = useNavigate();
  
  const handleSubmit = (e)=>{
    e.preventDefault();
    if(!user && !pass && !uname)
    {
      navigate('/error')
    }
    const data1 = {name:user,username:uname,password:pass,email:email,gender:gender}
    if( user && uname && pass ){
        axios.post("http://localhost:5000/register",data1 )
        .then( res => {
            alert(res.body.message)
        })
    } else {
        alert("invlid input")
    }

    setUser('')
    setUname('')
    setPass('')
    setEmail('')
    setGender('')
    navigate('/')
    
  }
  return (
    <div className="App">
      <form className='form' onSubmit={handleSubmit}>
          <div className='form-control'>
            <label htmlFor='firstName'>Name : </label>
            <input
              type='text'
              id='firstName'
              name='firstName'
              value={user}
              onChange={(e) => setUser(e.target.value)}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='userName'>Username : </label>
            <input
              type='text'
              id='userName'
              name='userName'
              value={uname}
              onChange={(e) => setUname(e.target.value)}
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
          <div className='form-control'>
            <label htmlFor='email'>Email : </label>
            <input
              type='email'
              id='email'
              name='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='gender'>Gender : </label>
            <input
              type='gender'
              id='gender'
              name='gender'
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            />
          </div>
          <button type='submit'>SignUp</button>
        </form>
    </div>
  );
}

export default SignUp;
