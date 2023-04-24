import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './sign.css'
import Validation from "../component/validation.js";

const SignUp = () => {

    const [ signUp, setSignUp ] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    })

    const [errors, setErrors] = useState({})
    const [isSubmit, setIsSubmit] = useState(false)

    const handleChange = (event) => {
        const {name, value} = event.target
        setSignUp(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(Validation(signUp));
        setIsSubmit(true)
    }

    useEffect(() =>{
        if (Object.keys(errors).length === 0 && isSubmit) {
            alert("Signed successfully")
        }
    }, [errors]);

  
    return (
        <div className="sign_up">
            <div className="forms">
                <div className="mid">
                <div className="head">
                    <h3 className="underline">Sign Up</h3>
                    <div className="sub_h3">
                        Already have an account?
                    <Link to="/signin" className="signin">  Sign In.</Link>
                    </div>
                </div>
                <form onSubmit={handleSubmit}>
                    <input type="text" 
                           placeholder="First Name"
                           name="firstName"
                           value={signUp.firstName}
                           onChange={handleChange}
                    />
                    {errors.firstName && <p className="errors">{errors.firstName}</p>}

                    <input type="text" 
                           placeholder="Last Name"
                           name="lastName"
                           value={signUp.lastName}
                           onChange={handleChange}
                    />
                    {errors.lastName && <p className="errors">{errors.lastName}</p>}

                    <input type="text" 
                           placeholder="Email"
                           name="email"
                           value={SignUp.email}
                           onChange={handleChange}
                    />
                    {errors.email && <p className="errors">{errors.email}</p>}

                    <input type="text"
                           placeholder="Password"
                           name="password"
                           value={SignUp.password}
                           onChange={handleChange} 
                    />
                    {errors.password && <p className="errors">{errors.password}</p>}

                    <button>Sign Up</button>
                </form>
            </div>
        </div>
        </div>
     );
}
 
export default SignUp;