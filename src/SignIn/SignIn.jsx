import React from "react";
import { Link } from "react-router-dom";
import Header from '../Components/Header.jsx';
import axios from "axios";

function SignIn(){


    const [email, setEmail ] = React.useState("");
    const [password, setPassword ] = React.useState("");
    const [accept, setAccept] = React.useState(false);
    const [emailError, setemailError] = React.useState("")

    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    const checkpassword = passwordPattern.test(password);
    function error(){

    if (checkpassword === true){
        return  '';
        }else{
        return  'Password is not valid.';
        }      
    } 


    async function Submit(e){
        let flag = true;
        e.preventDefault();
        setAccept(true);
        if(checkpassword === false){
            flag = false;
        }
        
        else flag = true;

        try{
            if(flag === true){
                let res = await axios.post("",{
                    Email: email,
                    Password: password,
                });
                
                
        }     
        } catch(err){
            setemailError(err.response.status);
        }
        if(email === "admin@gmail.com" && password === "Admin9999"){
            window.localStorage.setItem("email", email)
            window.location.pathname = "/admin"
        }
    }



    return(
    <>

        <div className="all1">
        <Header/>
        <div className="signin">
            <form className="form1" onSubmit={Submit} >
                <p className="we" >Welcome</p>
                <h2 className="SIGN" >Sign In</h2>

                <div className="input-container">
                    <input id="email" type="email" placeholder="Email" className="text"  value={email} onChange={(e) => setEmail(e.target.value)} />
                    {accept && emailError === 422 && <i className="errorMessage1" >Email is already been taken</i>}
                </div> 

                <div className="input-container" >
                    <input id="password" type="password" placeholder="Password" className="text"   value={password} onChange={(e) => setPassword(e.target.value)} />         
                    <i className="errorMessage2" >{accept && error()}</i>
                </div>
                <br />
                <button className="sign" type="submit" id="sign1" >SignIn</button>
                <br />    
                <Link to="/rigester" className="already" >If you don&#39;t have an account, SignUp.</Link>
            </form>
        </div>
        </div>
    </>
    );

}

export default SignIn