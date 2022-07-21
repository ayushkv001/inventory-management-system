import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

//
//
//  NOT COMPLETE 
//
//

function FPass() {
  const [user,setUser] = useState('');
  const [pass,setPass] = useState('');

  let navigate = useNavigate();
  
  const handleSubmit = (e)=>{
    e.preventDefault();
    if(!user && !pass)
    {
      navigate('/error')
    }
    else{
      navigate('/default')
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
            <label htmlFor='password'>New Password : </label>
            <input
              type='password'
              id='password'
              name='password'
              value={pass}
              onChange={(e) => setPass(e.target.value)}
            />
          </div>
          <button type='submit'>Change</button>
        </form>
    </div>
  );
}

export default FPass;
