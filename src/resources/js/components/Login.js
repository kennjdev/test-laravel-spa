import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { API_URL } from '../define'
function Login(porps) {
    const navigate = useNavigate()
    const [state, setState] = useState({
        email: "test@example.com",
        password: "123123",
        loading: false
    })
    const onChangeHandle = (e) => {
        const { name, value } = e.target;
        setState({
            [name]: value
        });
    }
    const onSubmitHandle = async (e) => {
        e.preventDefault();
        let { email, password } = state;
        axios.post(`${API_URL}/login`, { email, password })
            .then(response => {
                if (response.data.message == "success") {
                    sessionStorage.setItem('accessToken', response.data.access_token)
                    axios.defaults.headers.common["Authorization"] = "Bearer " + sessionStorage.accessToken;
                }
                navigate('/')
            })
    }
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-md-offset-4">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <h3 className="panel-title">Login</h3>
                            </div>
                            <div className="panel-body">
                                <form onSubmit={onSubmitHandle}>
                                    <fieldset>
                                        <div className="form-group">
                                            <input className="form-control"
                                                value={state.email}
                                                name="email"
                                                onChange={onChangeHandle}
                                                type="text" />
                                        </div>
                                        <div className="form-group">
                                            <input className="form-control" placeholder="Password"
                                                value={state.password}
                                                name="password"
                                                onChange={onChangeHandle}
                                                type="password" />
                                        </div>
                                        <div className="checkbox">
                                            <label>
                                                <input name="remember" type="checkbox" value="Remember Me" /> Remember Me
                                            </label>
                                        </div>
                                        <input className="btn btn-lg btn-success btn-block" type="submit" value="Login" />
                                    </fieldset>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Login;
