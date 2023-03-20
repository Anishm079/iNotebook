import React,{useState} from "react";
import { useNavigate  } from 'react-router-dom'

const Signup = (props) => {  
  const [credentials, setCredentials] = useState({email:"",password:"",name:""})
  const navigate = useNavigate()

  const handleSubmit=async (e)=>{
    e.preventDefault();

    const response = await fetch(`https://inotebook-nodejs-backend.onrender.com/api/auth/createuser`,{
      method:"POST",
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify({email:credentials.email,password:credentials.password,name:credentials.name})
    })

    const json = await  response.json()
    // console.log(json)
    if(json.success){
      localStorage.setItem('token',json.authToken);
      props.showAlert("Signed Up Successfully","Success")
      navigate('/')
    }else{
      props.showAlert("Retry With Correct Details","Error")
    }

  }

  const onChange=(e)=>{
    setCredentials({...credentials,
                  [e.target.name]:e.target.value
                })
  }

  return (
    <div className="container mt-3 d-flex flex-column justify-content-center align-items-center width-100">
    <h2>Signup</h2>
      <form onSubmit={handleSubmit} className="d-flex flex-column justify-content-center align-items-center width-100">
        <div className="mb-3 mt-4 px-5" style={{width:"27vw"}}>
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            aria-describedby="emailHelp"
            onChange={onChange}
          />
        </div>
        <div className="mb-3 px-5" style={{width:"27vw"}}>
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            aria-describedby="emailHelp"
            onChange={onChange}
          />
        </div>
        <div className="mb-3 px-5" style={{width:"27vw"}}>
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            onChange={onChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Signup;
