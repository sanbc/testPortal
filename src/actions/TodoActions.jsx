import dispatcher from "../dispatcher/dispatcher.jsx";


 export var validateLogin = (details) => {
    dispatcher.dispatch({
        type: "VALIDATE_LOGIN",
        data: details,
    });
}


//export default validateLogin; 
