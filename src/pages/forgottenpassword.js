import { useState, useEffect } from "react"

const ForgottenPassword = () => {
     const [ forgotten, setForgotten ] = useState({
        email: "",
    })

    const [errors, setErrors] = useState({})
    const [isSubmit, setIsSubmit] = useState(false)

      const handleChange = (event) => {
        const {name, value} = event.target
        setForgotten(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        })
    }

    const handleSubmit = (event) => {
    event.preventDefault()
    setErrors(validate(forgotten));
    setIsSubmit(true)
    }

    useEffect(() =>{
        if (Object.keys(errors).length === 0 && isSubmit) {
            alert("Sent link")
        }
    }, [errors])

    const validate = (forgotten) => {
        let errors = {}

    if(!forgotten.email){
        errors.email="Email is required"
    }else if(!/\S+@\S+\.\S+/.test(forgotten.email)){
        errors.email="Email is invalid"
    }
    return errors;
    }

    return (
        <div className="f-pwd">
            <div className="forms">
                <div className="mid">
                <div className="head">
                <h3 className="f-title"> Forgot Your Password?</h3>
                <p className="text">Enter your email address below and we'll send you a link to reset your password.</p>
                </div>

                <form onSubmit={handleSubmit}>
                    <input type="text" 
                           placeholder="Email"
                           name="email"
                           value={forgotten.email}
                           onChange={handleChange}
                    />
                   {errors.email && <p className="errors">{errors.email}</p>}
                    <button>Send Reset Link</button>
                </form>
            </div>
            </div>
        </div>
     );
}
 
export default ForgottenPassword;