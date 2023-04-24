import { useState, useEffect } from "react"
import { Link } from "react-router-dom";

const SignIn = () => {
    const [ signIn, setSignIn ] = useState({
        email: "",
        password: ""
    })

    const [errors, setErrors] = useState({})
    const [isSubmit, setIsSubmit] = useState(false)

    const handleChange = (event) => {
        const {name, value} = event.target
        setSignIn(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setErrors(Validation(signIn));
        setIsSubmit(true)
    }

    useEffect(() =>{
        if (Object.keys(errors).length === 0 && isSubmit) {
            alert("Welcome back!")

        }
    }, [errors])

    const Validation = (signIn) => {
    let errors = {};

     if(!signIn.email){
        errors.email="Email is required"
    }else if(!/\S+@\S+\.\S+/.test(signIn.email)){
        errors.email="Email is invalid"
    }

    if(!signIn.password){
        errors.password="Password is incorrect"
    }

    return errors;
    }

    return ( 
        <div className="sign_in">
            <div className="sign_up">
            <div className="forms">
                <div className="mid">
                <div className="head">
                    <h3 className="underline">Sign In</h3>
                   
                </div>
                <form onSubmit={handleSubmit}>
                    <input type="text" 
                           placeholder="Email"
                           name="email"
                           value={SignIn.email}
                           onChange={handleChange}
                    />
                    {errors.email && <p className="errors">{errors.email}</p>}
                    <input type="text"
                           placeholder="Password"
                           name="password"
                           value={SignIn.password}
                           onChange={handleChange} 
                    />
                    {errors.password && <p className="errors">{errors.password}</p>}
                    <button>Sign Up</button>
                     <Link to="/forgotten" className="forgot">
                        Forgot Password?
                    </Link>
                </form>
            </div>
        </div>
        </div>
        </div>
     );
}
 
export default SignIn;