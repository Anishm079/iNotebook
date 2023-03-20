import React,{useState} from "react";
import { useNavigate  } from 'react-router-dom'

const Login = (props) => {

  const [credentials, setCredentials] = useState({email:"",password:""})
  const navigate = useNavigate()

  const handleSubmit=async (e)=>{
    e.preventDefault();

    const response = await fetch(`https://inotebook-nodejs-backend.onrender.com/api/auth/login`,{
      method:"POST",
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify({email:credentials.email,password:credentials.password})
    })

    const json = await  response.json()
    if(json.success){
      localStorage.setItem('token',json.authToken);
      props.showAlert("Logged In Successfully","Success")
      navigate('/')
    }else{
      props.showAlert("Retry With Correct Credentials","Error")
    }

  }

  const onChange=(e)=>{
    setCredentials({...credentials,
                  [e.target.name]:e.target.value
                })
  }

  return (
    <div className="container mt-3 d-flex flex-column justify-content-center align-items-center">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="d-flex flex-column justify-content-center align-items-center width-100">
        <div className="mb-3 mt-4 px-5" style={{width:"27vw"}}>
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
        <div className="mb-3  px-5" style={{width:"27vw"}}>
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

export default Login;
