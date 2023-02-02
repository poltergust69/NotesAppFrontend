import {useState} from "react";
import NotesService from "../services/NotesService";
import {useNavigate} from "react-router-dom";

const AddNote=() => {

  const[title,setTitle] = useState('');
  const[body,setBody] = useState('');
  const[category,setCategory] = useState('programming');
  const history = useNavigate();

    const saveNote = (event) => {
        event.preventDefault();
        const note = {title,body,category}
        NotesService.create(note)
            .then(response=> {
                console.log('Note added successfully', response.data)
                history.push("/");
            })
            .catch(error=> {
                console.log('something went wrong', error)
            })
    }
    return (
        <div className="create">
            <form>
                <div className="form-group">
                    <label htmlFor="title">Note Title: <sup>*</sup></label>
                        <input type="text"
                        className="form-control"
                        id="title"
                        value={title}
                        onChange={(event => setTitle(event.target.value))}/>
                </div>

                <div className="form-group">
                    <label htmlFor="body">Note Description: <sup>*</sup></label>
                    <textarea className="form-control"
                              id="body"
                              value={body}
                              onChange={(event => setBody(event.target.value))}/>
                </div>

                <div className="form-group">
                    <label htmlFor="category">Note Category:</label>
                    <select id="category"
                            className="form-control"
                            value={category}
                            onChange={(event => setCategory(event.target.value))}>
                        <option value="programing">Programming</option>
                        <option value="vacation">Vacation</option>
                        <option value="meeting">Meeting</option>
                        <option value="blogging">Blogging</option>
                    </select>
                </div>
                <div className="text-center">
                <button onClick={(event => saveNote(event))}>Add Note</button>
                </div>
            </form>
        </div>
    );
}
export default AddNote;