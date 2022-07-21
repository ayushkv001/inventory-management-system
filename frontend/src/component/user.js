import { useState } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

const User = ()=>{
    const [user,setUser] = useState({})
    const [go,setGo] = useState(true)

    if(go){
    axios.post("http://localhost:5000/retreive" )
      .then( res => {
        setUser(res.data.user)
        setGo(false)
      })
    }


    return <div>
        <h1>{user.name}</h1>
        <h5>{user.username}</h5>
        <h5>{user.email}</h5>
        <h5>{user.gender}</h5><br/>
        <Link to='/'>Logout</Link>
    </div>
}

export default User;