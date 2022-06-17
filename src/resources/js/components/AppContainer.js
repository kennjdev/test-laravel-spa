import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Login'
import Dashboard from './DashBoard'
import NewNote from './Note/NewNote';
function AppContainer(props) {
    return (
        <div className="container">
            <div className='row justify-content-center'>
                <BrowserRouter>
                    <Routes>
                        <Route index element={<Dashboard />} />
                        <Route path="login" element={<Login />} />
                        <Route path="add-note" element={<NewNote />} />
                    </Routes>
                </BrowserRouter>
            </div>
        </div>
    );
}
export default AppContainer;
ReactDOM.render(<AppContainer />, document.getElementById('app'));