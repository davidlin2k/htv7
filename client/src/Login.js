import React from "react";
import LoginButton from "./components/LoginButton";

const Login = (props) => {
    return (
        <div>
            <h1>{props.publicKey}</h1>
            <LoginButton setPublicKey={props.setPublicKey} setLoggedIn={props.setLoggedIn} desoIdentity={props.desoIdentity}/>
        </div>
    );
};

export default Login;