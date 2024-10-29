import { useState } from "react";
import { Link } from "react-router-dom";
export default function HomeC(){

    const [setting,setSetting] = useState(true);

    function Toggle(){
        setSetting((prev) => !prev );
    }


    return (
        <>
            
            
            <div className="al" >
                <nav className="nav">
                    <div className="nav1">
                    <div className="icon" onClick={Toggle} >
                        <i className="fa-solid fa-bars" style={{color: "rgb(207, 231, 255)", fontSize:"28px" ,  cursor:"pointer" }} ></i>
                    </div>
                        <img src="./public/logo/logo.png" className="logo"/>
                        <h1><span>S</span>park <span>T</span>ik <span className="aca" >Academy</span> </h1>
                    </div>
                        <div className="B1" >
                            <i className="fa-solid fa-house" style={{color: "rgb(207, 231, 255)", fontSize:"15px" ,  cursor:"pointer"}}  > H o m e</i>
                            <i className="fa-solid fa-bell" style={{color: "rgb(207, 231, 255)", fontSize:"15px" ,  cursor:"pointer" }}  > N o t i f i c a t i o n s</i>
                            <Link to="/start">
                                <i className="fa-solid fa-right-from-bracket" style={{color: "rgb(207, 231, 255)", fontSize:"15px" , cursor:"pointer" }} > S i g n O u t</i>
                            </Link>
                        </div>
                </nav>
                

                    { setting && (
                <div className="sidebar"> 
                    <div className="icon-1" onClick={Toggle} >
                        <i className="fa-solid fa-bars" style={{color: "rgb(207, 231, 255)", fontSize:"25px" ,  cursor:"pointer" }} > C o a c h e s</i>
                    </div>
                    <div className="ul" >
                        <div className="ul-ic">
                            <i className="fa-solid fa-address-card"> P r o f i l e</i>
                        </div>
                        <br />
                        <div className="ul-ic" >
                            <i className="fa-solid fa-book"> C o u r s e s</i>
                        </div>
                        <br />

                        <div className="ul-ic" >
                            <i className="fa-solid fa-user"> S t u d e n t s</i>
                        </div>
                        <br />

                        <div className="ul-ic">
                            <i className="fa-solid fa-cart-shopping"> W a l l e t</i>
                        </div>
                    
                        
                        <div className="ul-img" ></div> 
                   
                    </div>
                </div>
                    )}


            </div>


        </>
    );
} 