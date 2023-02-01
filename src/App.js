// import {BrowserRouter, Route, Switch} from 'react-router-dom';
// import './App.css';
// import NotesList from "./components/NotesList";
//
// function App() {
//   return (
//     <div className="App">
//         <NotesList />
//     </div>
//   );
// }
//
// export default App;

import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {Routes} from 'react-router';
import './App.css';
import NotesList from "./components/NotesList";
import NotFound from "./components/NotFound";
import Navbar from "./components/Navbar";

function App() {
    return (
        <BrowserRouter>
            <div>
                <Navbar />
                <div>
                    <Routes>
                    <Route path="/" element={<NotesList/>} />
                    <Route path="/*" element={<NotFound/>} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;