import { Link } from "react-router-dom"
import Header from '../Components/Header.jsx';
import React from "react";
import { Tooltip } from '@mui/material';
import axios from "axios";



export default function SignUp(){
    const [firstName, setfirstName ] = React.useState("");
    const [lastName, setlastName ] = React.useState("");
    const [email, setEmail ] = React.useState("");
    const [phoneNumber, setphoneNumber ] = React.useState("");
    const [password, setPassword ] = React.useState("");
    const [confirmPassword, setconfirmPassword ] = React.useState("");
    const [gender, setGender] = React.useState("");
    const [select, setSelect] = React.useState("")
    const [accept, setAccept] = React.useState(false);
    const [emailError, setemailError] = React.useState("")
    
    
    

    
    //First Name and Last Name check... //
    const Fname = (firstName !== '');
    function error3(){
        if (Fname === true){
            return ''
        }else{
            return 'This Field is required.'
        }
    }
    const Lname = (lastName !== '');
    function error4(){
        if (Lname === true){
            return ''
        }else{
            return 'This Field is required.'
        }
    }

    


    //Phone check... //
    const titlePhone = ("Please start with (+) then (area code) then (your number) \n   +963 997654643");
    const phonePattern = /^\+\d{1,3} ?\d{7,14}$/;
    const checkphone = phonePattern.test(phoneNumber);
    
    function error2(){
        if(checkphone === true){
            return '';
        }else{
            return 'Phone Number is not valid'
        }
    }



    //password check... //
    const titlePassword = ("Enter a strong password with at least 8 characters :\n"
                            +"Uppercase letter," +" Lowercase letter," +" Number");
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    const checkpassword = passwordPattern.test(password);
    function error(){

        if (checkpassword === true){
            return  '';
        }else{
            return  'Password is not valid.';
        }      
    }     
    

    //password confirm....//
    const passwordC = (password === confirmPassword);
    function error1(){
        if (passwordC === true){
            return '';
        }else{
            return 'Password is not match.';
        }
    }

    
    

    async function Submit(e){
        let flag = true;
        e.preventDefault();
        setAccept(true);
        if(firstName === '' || lastName === '' || checkphone === false || checkpassword === false || passwordC === false){
            flag = false;
        }
        
        else flag = true;

        try{
            if(flag === true){
                let res = await axios.post("",{
                    Fname: firstName,
                    Lname: lastName,
                    Email: email,
                    Phone: phoneNumber,
                    Password: password,
                    Cpassword: confirmPassword,
                    Gender: gender,
                    Select: select,
                });
                if(res.status === 200 && select === "Student"){
                    window.localStorage.setItem("email", email);
                    window.location.pathname = "/students"
                }
                if(res.status === 200 && select === "Coache"){
                    window.localStorage.setItem("email", email);
                    window.location.pathname = "/coaches"
                }
        }     
        } catch(err){
            setemailError(err.response.status);
        }



    }

    return(

        <>
            <div className="all" >
            <Header/>

            <div className="signup" >
                
                <form className="form2" action="" onSubmit={Submit} >

                    <p className="we" >Welcome</p>
                    <h2 className="SIGN" >Create New Account</h2>
                    <div className="input" >
                            <div className="input-container">
                                <input id="firstname" type="text" placeholder="First Name" className="text"  value={firstName} onChange={(e) => setfirstName(e.target.value)} />
                                <i className="errorMessage" >{accept && error3()}</i>
                            </div>
                            
                            <div className="input-container">
                                <input id="lastname" type="text" placeholder="Last Name" className="text"  value={lastName} onChange={(e) => setlastName(e.target.value)} />
                                <i className="errorMessage" >{accept && error4()}</i>
                            </div>
                            
                            <div className="input-container">
                                <input id="email" type="email" placeholder="Email" className="text"  value={email} onChange={(e) => setEmail(e.target.value)} />
                                {accept && emailError === 422 && <i className="errorMessage1" >Email is already been taken</i>}
                            </div>

                            <div className="input-container" >
                                <Tooltip title={titlePhone} arrow placement="top" >
                                    <input id="mobilenumber" type="tel"  placeholder="Mobile Number" className="text"  value={phoneNumber} onChange={(e) => setphoneNumber(e.target.value)}/>
                                </Tooltip>
                                <i className="errorMessage1" >{accept && error2()}</i>
                            </div>
                            
                            <div className="input-container" >
                                <Tooltip title={titlePassword} arrow placement="top"> 
                                    <input id="password" type="password" placeholder="Password" className="text"   value={password} onChange={(e) => setPassword(e.target.value)} />
                                </Tooltip>
                                <i className="errorMessage" >{accept && error()}</i>
                            </div>

                            <div className="input-container" >
                                <input id="passwordR" type="password" placeholder="Confirm Password" className="text"  value={confirmPassword} onChange={(e) => setconfirmPassword(e.target.value)} />
                                <i className="errorMessage" >{accept && error1()}</i>
                            </div>
                            
                            <div>
                                <label className="label-1" htmlFor="gender" >Your Gender :</label>
                            </div>
                            <div>
                                <label className="label-1" htmlFor="birthday" >Your Birthday :</label>   
                            </div>

                            <div className="gen" id="gender" >
                                <label className="gender" htmlFor="M" >Male
                                    <input id="M"  type="radio" name="sex"  value={gender} onChange={(e) => setGender(e.target.value)} />
                                </label>

                                <label className="gender" htmlFor="F" >Femail
                                    <input id="F" type="radio" name="sex"  value={gender} onChange={(e) => setGender(e.target.value)} />
                                </label>
                            </div>  

                            <div className="bir" id="birthday" >
                                <select name="Month" className="row">
                                    <option value="1">Jan</option>
                                    <option value="2">Feb</option>
                                    <option value="3">Mar</option>
                                    <option value="4">Apr</option>
                                    <option value="5">May</option>
                                    <option value="6">Jun</option>
                                    <option value="7">Jul</option>
                                    <option value="8">Aug</option>
                                    <option value="9">Sep</option>
                                    <option value="10">Oct</option>
                                    <option value="11">Nov</option>
                                    <option value="12">Dec</option>
                                </select>

                                <select name="Day" className="row" >
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                    <option value="13">13</option>
                                    <option value="14">14</option>
                                    <option value="15">15</option>
                                    <option value="16">16</option>
                                    <option value="17">17</option>
                                    <option value="18">18</option>
                                    <option value="19">19</option>
                                    <option value="20">20</option>
                                    <option value="21">21</option>
                                    <option value="22">22</option>
                                    <option value="23">23</option>
                                    <option value="24">24</option>
                                    <option value="25">25</option>
                                    <option value="26">26</option>
                                    <option value="27">27</option>
                                    <option value="28">28</option>
                                    <option value="29">29</option>
                                    <option value="30">30</option>
                                    <option value="31">31</option>
                                </select>

                                <select name="Year" className="row" >
                                    <option value="2024">2024</option>
                                    <option value="2023">2023</option>
                                    <option value="2022">2022</option>
                                    <option value="2021">2021</option>
                                    <option value="2020">2020</option>
                                    <option value="2019">2019</option>
                                    <option value="2018">2018</option>
                                    <option value="2017">2017</option>
                                    <option value="2016">2016</option>
                                    <option value="2015">2015</option>
                                    <option value="2014">2014</option>
                                    <option value="2013">2013</option>
                                    <option value="2012">2012</option>
                                    <option value="2011">2011</option>
                                    <option value="2010">2010</option>
                                    <option value="2009">2009</option>
                                    <option value="2008">2008</option>
                                    <option value="2007">2007</option>
                                    <option value="2006">2006</option>
                                    <option value="2005">2005</option>
                                    <option value="2004">2004</option>
                                    <option value="2003">2003</option>
                                    <option value="2002">2002</option>
                                    <option value="2001">2001</option>
                                    <option value="2000">2000</option>
                                    <option value="1999">1999</option>
                                    <option value="1998">1998</option>
                                    <option value="1997">1997</option>
                                    <option value="1996">1996</option>
                                    <option value="1995">1995</option>
                                    <option value="1994">1994</option>
                                    <option value="1993">1993</option>
                                    <option value="1992">1992</option>
                                    <option value="1991">1991</option>
                                    <option value="1990">1990</option>
                                    <option value="1989">1989</option>
                                    <option value="1988">1988</option>
                                    <option value="1987">1987</option>
                                    <option value="1986">1986</option>
                                    <option value="1985">1985</option>
                                    <option value="1984">1984</option>
                                    <option value="1983">1983</option>
                                    <option value="1982">1982</option>
                                    <option value="1981">1981</option>
                                    <option value="1980">1980</option>
                                    <option value="1979">1979</option>
                                    <option value="1978">1978</option>
                                    <option value="1977">1977</option>
                                    <option value="1976">1976</option>
                                    <option value="1975">1975</option>
                                    <option value="1974">1974</option>
                                    <option value="1973">1973</option>
                                    <option value="1972">1972</option>
                                    <option value="1971">1971</option>
                                    <option value="1970">1970</option>
                                    <option value="1969">1969</option>
                                    <option value="1968">1968</option>
                                    <option value="1967">1967</option>
                                    <option value="1966">1966</option>
                                    <option value="1965">1965</option>
                                    <option value="1964">1964</option>
                                    <option value="1963">1963</option>
                                    <option value="1962">1962</option>
                                    <option value="1961">1961</option>
                                    <option value="1960">1960</option>
                                    <option value="1959">1959</option>
                                    <option value="1958">1958</option>
                                    <option value="1957">1957</option>
                                    <option value="1956">1956</option>
                                    <option value="1955">1955</option>
                                    <option value="1954">1954</option>
                                    <option value="1953">1953</option>
                                    <option value="1952">1952</option>
                                    <option value="1951">1951</option>
                                    <option value="1950">1950</option>
                                    <option value="1949">1949</option>
                                    <option value="1948">1948</option>
                                    <option value="1947">1947</option>
                                    <option value="1946">1946</option>
                                    <option value="1945">1945</option>
                                    <option value="1944">1944</option>
                                    <option value="1943">1943</option>
                                    <option value="1942">1942</option>
                                    <option value="1941">1941</option>
                                    <option value="1940">1940</option>
                                    <option value="1939">1939</option>
                                    <option value="1938">1938</option>
                                    <option value="1937">1937</option>
                                    <option value="1936">1936</option>
                                    <option value="1935">1935</option>
                                    <option value="1934">1934</option>
                                    <option value="1933">1933</option>
                                    <option value="1932">1932</option>
                                    <option value="1931">1931</option>
                                    <option value="1930">1930</option>
                                    <option value="1929">1929</option>
                                    <option value="1928">1928</option>
                                    <option value="1927">1927</option>
                                    <option value="1926">1926</option>
                                    <option value="1925">1925</option>
                                    <option value="1924">1924</option>
                                    <option value="1923">1923</option>
                                    <option value="1922">1922</option>
                                    <option value="1921">1921</option>
                                    <option value="1920">1920</option>
                                    <option value="1919">1919</option>
                                    <option value="1918">1918</option>
                                    <option value="1917">1917</option>
                                    <option value="1916">1916</option>
                                    <option value="1915">1915</option>
                                    <option value="1914">1914</option>
                                    <option value="1913">1913</option>
                                    <option value="1912">1912</option>
                                    <option value="1911">1911</option>
                                    <option value="1910">1910</option>
                                    <option value="1909">1909</option>
                                    <option value="1908">1908</option>
                                    <option value="1907">1907</option>
                                    <option value="1906">1906</option>
                                    <option value="1905">1905</option>
                                </select>
                            </div>

                            <br />
                            <br />     
                            <div className="input-1" >
                                <label className="label-1" htmlFor="sc" >Are you a student or a coche ?</label>
                                <br />
                                <br />
                                <select className="select" id="sc" value={select} onChange={(e) => setSelect(e.target.value)} >
                                    <option disabled >Choose....</option>
                                    <option >Student</option>
                                    <option >Coache</option>
                                </select>
                            </div>
                            <br />
                    
                    </div>

                    <br />
                    <div>
                        <p className="terms" >By clicking the &#34;Sign Up&#34; button, I acknowledge that I have read, understood, and agree to be bound by the Spark Tik <Link to="/terms" className="ter1" > Terms, Privacy Policy and Cookies Policy.. </Link>  I understand that my use of the website is subject to these terms and conditions, and I agree to comply with all applicable laws and regulations.</p>
                    </div>
                    <br />
                    <button type="submit" className="sign" id="sign1" >SignUp</button>
                    <br />    
                    <Link to="/login" className="already" >Already have an account, SignIn.</Link>
                </form>
            </div>
            </div>

        </>


    )

}

