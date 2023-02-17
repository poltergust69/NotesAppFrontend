// import {useEffect, useState} from "react";
// import NotesService from "../services/NotesService";
//
// const NotesList = () => {
//
//     const [notes, setNotes] = useState([]);
//
//     useEffect(() => {
//         NotesService.getALl()
//             .then(response => {
//                 console.log('printing response', response.data);
//                 setNotes(response.data);
//
//             }).catch(error => {
//             console.log('something is wrong', error)
//         })
//     }, [])
//
//
//     return (
//         <div>
//             <h1>List of Notes</h1>
//             {
//                 notes && notes.map(note => (
//                     <div key={note.id}>
//                         <p>{note.title}</p>
//                         <p>{note.body}</p>
//                     </div>
//                 ))
//             }
//         </div>
//     );
// }
//
// export default NotesList;
//
import { useEffect, useState } from "react";
import NotesService from "../services/NotesService";
import {Link} from "react-router-dom";


const NotesList = () => {

    const [notes, setNotes] = useState([]);

    useEffect(() => {
        NotesService.getAll()
            .then(response => {
                console.log('printing response', response.data);
                setNotes(response.data);
            })
            .catch(error => {
                console.log('something went wrong', error);
            })
    }, []);

    return (
        <div className="container-sm mt-5 text-center">
            <div className="container-sm">
                <h2>List of Notes</h2>
                    <div className="notes-list mt-4">
                    {
                        notes && notes.map(note => (
                            <div key={note.id} className="bg-light mt-3 pt-3 pb-3">
                                <Link to={`/notes/${note.id}`}>
                                    <h5 className="text-danger text-capitalize pt-3 pb-3">{note.title}</h5>
                                    <p>{note.body}</p>
                                </Link>
                            </div>
                        ))
                    }
                    </div>
            </div>
        </div>
    );
}

export default NotesList;