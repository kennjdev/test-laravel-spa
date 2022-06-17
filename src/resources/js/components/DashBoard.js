import React from 'react';
import { Navigate, Link } from "react-router-dom";
import ListNotes from './Note/ListNotes';
import Menu from './Menu';
function Dashboard(props) {
    if (!sessionStorage.getItem('accessToken')) {
        return (<Navigate to={'/login'} />)
    } _
    return (
        <div>
            <Menu/>
            <ListNotes />
        </div>
    );
}
export default Dashboard;