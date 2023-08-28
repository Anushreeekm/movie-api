import React, { useState } from "react";
import { useNavigate } from "react-router-dom"

const Register = () => {

    const navigate = useNavigate();

    const [ input, setInput ] = useState({
        name: "",
        email: "",
        password: "",
        phone: "",
        profession: ""
    });

    // to store value in local storage
    const submitHandler = (e) => {
        e.preventDefault();
        localStorage.setItem("user",JSON.stringify(input));
        navigate('/login');
    };

    return (
        <section className="bg-image">

                <div className="container">
                    <div className="row">
                        <div className="card">
                                <div className="card-body">
                                    <h2 className="text">
                                            Sign Up
                                    </h2>

                                    <form autoComplete="off" onSubmit={submitHandler}>
                                        <div className="form-outline">
                                        <label htmlFor="name" className="form-label">UserName</label>
                                        <input type="text" name="name" id="name" value={input.name} onChange={ (e) => setInput({...input,[e.target.name] : e.target.value,})} className="form-control" placeholder="Enter Your Name" required />
                                        </div>
                                        <div className="form-outline">
                                            <label htmlFor="email" className="form-label">Email</label>
                                            <input type="email" name="email" id="email" value={input.email} onChange={(e) => setInput({...input,[e.target.name] : e.target.value,})} className="form-control" placeholder="Enter Your Email" required />
                                        </div>
                                        <div className="form-outline">
                                        <label htmlFor="pass" className="form-label">Password</label>
                                            <input type="password" name="pass" id="pass" value={input.pass} onChange={(e) => setInput({...input,[e.target.name] : e.target.value,})} className="form-control" placeholder="Enter Your Password" required />
                                            
                                        </div>
                                        <div className="form-outline">
                                        <label htmlFor="phone" className="form-label">Phone Number</label>
                                            <input type="number" name="phone" id="phone" value={input.phone} onChange={(e) => setInput({...input,[e.target.name] : e.target.value,})} className="form-control" placeholder="Enter Your Phone Number" required />
                                            
                                        </div>
                                        <div className="form-outline">
                                        <label htmlFor="profession" className="form-label">Profession</label>
                                            <select name="profession" id="profession" class="form-control" value={input.profession} onChange={(e) => setInput({...input,[e.target.name] : e.target.value,})}>
                                                <option value="" disabled >Select</option>
                                                <option value="Doctor">Doctor</option>
                                                <option value="Teacher">Teacher</option>
                                                <option value="Lawyer">Lawyer</option>
                                                <option value="Artist">Artist</option>
                                            </select>
                                            
                                        </div>
                                        <div className="form-outline">
                                    <input type="submit" value="Register" className="btn btn-primary" />
                                </div>
                                <div className="bottom">
                                    <span>Aldready have an account? <a href="login">Login here</a> </span>
                                </div>
                                    </form>
                                </div>
                            </div>
                        </div>
            </div>
        </section>
    )
}

export default Register