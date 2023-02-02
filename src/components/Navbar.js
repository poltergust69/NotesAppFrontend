import {Link} from 'react-router-dom';

const Navbar=()=>{
    return (
        <div className="container small">
        <nav className="navbar navbar-expand-sm navbar-light bg-light">
                <div className="col">
                <h2 className="text-danger">Notes App</h2>
                </div>
                <div className="col">
                <Link to="/">Home</Link>
                </div>
                <div className="col">
                <Link to="/add" className="m-3">New Note</Link>
                </div>
        </nav>
        </div>
    );
}

export default Navbar;