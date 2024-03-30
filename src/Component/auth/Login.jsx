
import React, { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../CustomHook/Auth'

const url = 'https://fakestoreapi.com'

function Login() {
  const [username,setUsername] = useState("mor_2314")
  const [password,setPassword] = useState("83r5^_")

  const { setToken } = useAuth()

  const navigate = useNavigate()

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      console.log(`data =`, {username, password})
      let data = {
        username,
        password
      }
      await axios.post(`${url}/auth/login`, data)
      .then(res => {
        toast.success("Login successful")
        console.log(`res =`, res.data)
        setToken(res.data.token)
        localStorage.setItem("token", res.data.token)
        navigate(`/`)
      }).catch(err => toast.error(err.message))
    } catch (err) {
      toast.error(err.message)
    }
  }
  return (
    <div className='container'>
      <div className="row">
        <div className="col text-center">
          <h1 className="display-3 text-dark">User Login</h1>
        </div>
      </div>
      <div className="row">
        <div className="col login">
          <div className="card">
            <div className="card-body">
              <form autoComplete="off" onSubmit={submitHandler}>
                <div className="form-item">
                  <label htmlFor="username">UserName</label>
                  <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)} id="username" className="form-control" required />
                </div>
                <div className="form-item">
                  <label htmlFor="password">Password</label>
                  <input type="password" name="password" value={password} id="password" onChange={(e) => setPassword(e.target.value)}className="form-control" required />
                </div>
                <div className="form-item">
                  <input type="submit" value="SignIn" className="btn" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
