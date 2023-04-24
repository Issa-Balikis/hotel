import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./component/home";
import Navbar from "./component/navbar";
import ForgottenPassword from "./pages/forgottenpassword";
import SignIn from "./pages/signin";
import SignUp from "./pages/signup";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
           <Route exact path="/" element={<Home />} /> 
           <Route  path="/signin" element={<SignIn />} /> 
           <Route  path="/signup" element={<SignUp />} /> 
           <Route  path="/forgotten" element={<ForgottenPassword />} /> 
        </Routes>
      </Router>
     
    </div>
  );
}

export default App;
