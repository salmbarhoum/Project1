import Header from '../Components/Header.jsx';
import { Link } from 'react-router-dom';
function Start(){

    return(
        <>
        <Header/>
        <br />
        <div className="start" >
        
            <div className="p">
                <p className="p1" >Welcome In Our Website</p>
                <p className="p2" >Start Your Education Journey With Us</p>
            </div>


        <div className="mi">
            <div className="about">
                <div className="AboutUs">
                    <h2 className="A" >AboutUs:</h2>
                    <p> Welcome to Spark Tik Academy, a leading provider of tech education and training solutions. <br />
                         Our mission is to empower individuals and organizations with the skills and knowledge they need to succeed in today is fast-paced world. <br />
                         We believe that education is the key to unlocking human potential,
                        and we are committed to providing high-quality training programs that meet the needs of our students.
                    </p>
                    <p>
                    Our values are centered around excellence,
                    innovation, and customer satisfaction. We strive to create a learning environment that is engaging, interactive, and fun, and we are dedicated to helping our students achieve their goals.
                    </p>
                    <p className="p3" >Register Now</p>
                </div>

                <div className="button" >
                     <Link to="/login" className='link' >SignIn</Link> 
                     <Link to="/rigester" className='link' >SignUp</Link> 
                </div>
                
                <Link to="/admin" style={{color:"white"}}>admin</Link>
            
                <Link to="/coaches" style={{color:"white"}}> coaches</Link>
                
                <Link to="/students" style={{color:"white"}}> students</Link>
            </div>


            <div className="slideshow">
                <img  src="/public/image/background1.jpg"/>
                <img  src="/public/image/background2.jpg"/>
                <img  src="/public/image/background3.jpg"/>
                <img  src="/public/image/background4.jpg"/>
                <img  src="/public/image/background5.jpg"/>
            </div>
        </div>
        </div>





        </>

        
    );
}
export default Start