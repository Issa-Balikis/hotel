import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar">
           <Link to="/" className="h1">Hotel</Link>
            <ul>
                <li>
                    <Link to="/signin">Sign in</Link>
                </li>
                <li>
                    <Link to="/signup">Sign up</Link>
                </li>
            </ul>

        </div>
     );
}
 
export default Navbar;
