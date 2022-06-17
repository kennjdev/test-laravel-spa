import React from 'react';
import { Navigate, Link } from "react-router-dom";
import ListNotes from './Note/ListNotes';
function Dashboard(props) {
    if (!sessionStorage.getItem('accessToken')) {
        return (<Navigate to={'/login'} />)
    } _
    return (
        <div>
            <ListNotes />
        </div>
    );
}
export default Dashboard;