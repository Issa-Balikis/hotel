const Validation = (signUp) => {
    let errors = {};
    

    if(!signUp.firstName){
        errors.firstName="First name is required"
    }
    if(!signUp.lastName){
        errors.lastName="Last name is required"
    }

    if(!signUp.email){
        errors.email="Email is required"
    }else if(!/\S+@\S+\.\S+/.test(signUp.email)){
        errors.email="Email is invalid"
    }

    if(!signUp.password){
        errors.password="Password is required"
    }else if(signUp.password.length < 8){
        errors.password="Password must be more than 8 characters."
    }

    return errors; 
}
 
export default Validation;
