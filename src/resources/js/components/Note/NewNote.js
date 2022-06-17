import React, { useState, useEffect, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Menu from '../Menu'
function NewNote(props) {
    const [state, setState] = useState({
        content: '',
        resource_type:'',
        loading: false
    });
    const navigate = useNavigate()
    const onChangeHandle = (e) => {
        const { name, value } = e.target;
        setState({
            ...state,
            [name]: value
        });
    }
    const onSubmitHandle = (e) => {
        e.preventDefault();
        setState({
            ...state,
            loading: true
        });
        let { content ,resource_type} = state
        axios.post('/api/notes', { content, resource_type })
            .then(response => {
                setState({
                    ...state,
                    loading: false
                });
                navigate('/')
            })
            .catch((error) => {
            });
    }
    return (
        <React.Fragment>
             <Menu/>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <form >
                            <h2>Add New Note</h2>
                            <div className="form-group">
                                <label>Resource Type</label>
                                <input className="form-control"
                                    value={state.resource_type}
                                    name="resource_type"
                                    onChange={onChangeHandle}
                                    type="text" />
                            </div>
                            <div className="form-group">
                                <label>Content</label>
                                <textarea className="form-control"
                                    value={state.content}
                                    name="content"
                                    onChange={onChangeHandle}
                                    type="text" > </textarea>
                            </div>
                            <div className="form-group">
                                <br />
                                <a onClick={onSubmitHandle} className="btn btn-info btn-lg  btn-block"> Add Note </a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
export default NewNote