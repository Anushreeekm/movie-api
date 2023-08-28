import React, { useState } from "react";
import { useNavigate } from "react-router-dom"

const Login = () => {

    const navigate = useNavigate()

    const [ input, setInput ] = useState({
        name: "",
        password: "",
    });

    const loginHandler = (e) => {
        e.preventDefault();
        const loggeduser = JSON.parse (localStorage.getItem("user"));
        if(input.name ===loggeduser.name && input.pass === loggeduser.pass){
            localStorage.setItem("loggedin",true)
            navigate("/")
        } else {
            alert("Invalid Credentials")
        }
    };

    return (
        <section className="bg-image">
                <div className="container">
                    <div className="row">
                            <div className="card">
                                <div className="card-body">
                                    <h2 className="text">
                                            Login
                                    </h2>

                                    <form autoComplete="off" onSubmit={loginHandler}>
                                        <div className="form-outline mb-4">
                                        <label htmlFor="name" className="form-label">UserName</label>
                                            <input type="text" name="name" id="name" value={input.name} onChange={ (e) => setInput({...input,[e.target.name] : e.target.value,})} className="form-control form-control-lg" placeholder="Enter Your Name" required />
                                            
                                        </div>
                                        <div className="form-outline mb-4">
                                            <label htmlFor="pass" className="form-label">Password</label>
                                            <input type="password" name="pass" id="pass" value={input.pass} onChange={(e) => setInput({...input,[e.target.name] : e.target.value,})} className="form-control form-control-lg" placeholder="Enter Your Password" required />
                                        </div>
                                        <div className="form-outline mb-4">
                                    <input type="submit" value="Login" className="btn btn-success" />
                                </div>
                                <div className="bottom">
                                    <span>Not yet registered? <a href="register">Register here</a> </span>
                                </div>
                                    </form>
                                </div>
                            </div>
                        </div>
            </div>
        </section>
    )
}

export default Login