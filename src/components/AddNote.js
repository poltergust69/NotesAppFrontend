import {useEffect, useState} from "react";
import NotesService from "../services/NotesService";
import {useNavigate} from "react-router-dom";
import {useParams} from "react-router";

const AddNote=() => {

  const[title,setTitle] = useState('');
  const[body,setBody] = useState('');
  const[category,setCategory] = useState('programming');
  const history = useNavigate();
  const {id} = useParams();
  const [errors,setErrors] = useState(false);


    useEffect(()=>{
        if(id){ //if the id is present
            NotesService.get(id)
                .then(note => {
                    //update the state
                    setTitle(note.data.title);
                    setBody(note.data.body);
                    setCategory(note.data.category);
                })
                .catch(error =>{
                    console.log("id is not present", error
                    )
                })
        }
    },[]);


    const saveNote = (event) => {
        event.preventDefault();

        if(!title || !body){
            setErrors(true);
            return;  //error message za ako ne vnesime nis vo polinata
        }

        const note = {id,title,body,category}
        if(id){ //if id is present call the service update method
            NotesService.update(note)
                .then(response => {
                    console.log('Note updated successfully', response.data)
                    history("/");
                })
                .catch(error=> {
                    console.log('something is wrong with the update in AddNote', error)
                })
        }else{ //if id is not present call the service create method
            NotesService.create(note)
                .then(response=> {
                    console.log('Note added successfully', response.data)
                    history("/");
                })
                .catch(error=> {
                    console.log('something went wrong', error)
                })
        }


    }

    return (
        <div className="create">
            <form>
                <div className="text-center">
                    <h5>{id ? "Update a Note" : "Add a New Note"}</h5>
                    {errors && <span style={{color: 'red', fontStyle:'italic'}}>Please enter mandatory fields</span>}
                </div>
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