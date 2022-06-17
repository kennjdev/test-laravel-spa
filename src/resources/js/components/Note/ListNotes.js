import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import NewNote from './NewNote';
import { API_URL } from '../../define'
function ListNotes(props) {
    const [notes, setNotes] = useState([])
    const [loading, setLoading] = useState(false)
    const fetchNotes = async () => {
        let response = await axios.get(`${API_URL}/notes`)
        setNotes(response.data)
    }
    const deleteNote = async (id) => {
        setLoading(true)
        await axios.delete(`${API_URL}/notes/${id}`)
        fetchNotes()
        setLoading(false)
    }
    useEffect(() => {
        fetchNotes()
    }, [])

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-12">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Content</th>
                                <th scope="col">Resource Type</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {notes.map((item, i) => {
                                return <tr key={item.id} >
                                    <th scope="row">{++i}</th>
                                    <td>{item.content}</td>
                                    <td>{item.resource_type}</td>
                                    <td> <button onClick={e => deleteNote(item.id)} className={loading?'disabled':''}>delete</button></td>
                                </tr>
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
export default ListNotes;
