import { Link } from "react-router-dom";


const Home = () => {
    return ( 
        <div className="home">
            <div className="content">
                <div className="center">
                    Luxury
                </div>
                <p>Enjoy secret offers of 30% on first booking</p>
                <Link to="/signup">
                <button>Register Now</button>
                </Link>
            </div>
        </div>
    );
}
 
export default Home;