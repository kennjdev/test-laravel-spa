import React from 'react';
import { Navigate, Link } from "react-router-dom";
export default function Menu() {
    const logout = () => {
        sessionStorage.removeItem('accessToken')
        window.location.href = '/'
    }
    return (
        <div>
            <div className="container">
                <nav className="navbar navbar-expand-lg" style={{ justifyContent: 'space-between' }}>
                    <a className="navbar-brand" href="#">Test Laravel</a>
                    <br />
                    <ul className="navbar-nav navbar-right">
                        <li className="nav-item">      <Link className="nav-link" to={'/'}>Dashboard</Link></li>
                        <li className="nav-item">    <Link className="nav-link" to={'add-note'}>Add Note</Link></li>
                        <li className="nav-item">  <a className="nav-link" href='void(0)' onClick={e => logout()}>Logout!</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};