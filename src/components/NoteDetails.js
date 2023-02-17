import {useEffect, useState} from "react";
import {useParams} from "react-router";
import NotesService from "../services/NotesService";
import {useNavigate} from "react-router-dom";

const NoteDetails = () => {

    const {id} = useParams();
    const[currentNote, setCurrentNote] = useState('');
    const history = useNavigate();

    useEffect(()=>{
        NotesService.get(id)
            .then(note => {
                setCurrentNote(note.data);
            })
            .catch(error => {
                console.log('something went wrong', error)
            })
    }, []);

    const handleDelete = () =>{
        NotesService.remove(id)
            .then(response => {
                //navigate to home page after deleting
                history("/");
            })
            .catch(error =>{
                console.log("something is wrong in handleDelete NoteDetails", error);
            })
    }

    const handleEdit = () => {
        history(`/notes/edit/${id}`);
    }

    return(
        <div className="note-details main-content">

                <div className="container-sm mt-5 text-center bg-light">
                    <article>
                        <h5 className="text-capitalize text-success">{currentNote.title}</h5>
                        <div className="mb-3 font-italic metadata">
                            <span>{currentNote.updatedAt}</span>
                            <span className="text-capitalize">, {currentNote.category}</span>
                        </div>
                    </article>
                <div className="mb-3">{currentNote.body}</div>
                </div>
            <button onClick={handleDelete} className="btn-danger">Delete</button>
            <button onClick={handleEdit} className="ml-3">Edit</button>

        </div>
    )
}
export default NoteDetails;