import { Link } from "react-router-dom"
function Terms(){
    return(
        <> 
                <div className="header1" >
                    <div className="he">
                        <img src="./public/logo/logo.png" className="logo"/>
                        <h1><span>S</span>park <span>T</span>ik <span className="aca" >Academy</span> </h1>
                    </div>
                    <Link to="/rigester" > <i className="fa-solid fa-right-from-bracket" style={{color: "rgb(207, 231, 255)", fontSize:"15px" , cursor:"pointer", marginRight:"60px"}} > S i g n  U p</i> </Link>
                </div>
            <div className="terms-all">
                <div className="T-P-C" >
                    <div className="Terms" >
                        <h2 className="TPC" >Terms</h2>
                        <h3>Introduction</h3>
                        <p className="pa">Welcome to Spark Tik Academy.<br/> These Terms of Use outline the rules and guidelines for using our website.<br/> By accessing and using our website, you agree to be bound by these Terms of Use.</p>
                        <h3>Using Our Website</h3>
                        <p className="pa">You must be at least 18 years old to use our website.<br/>
                            You are responsible for maintaining the confidentiality of your account and password.<br/>
                            You agree not to use our website for any illegal or unauthorized purpose.
                        </p>
                        <h3>Intellectual Property</h3>
                        <p className="pa">All content on our website, including text, images, and logos, is the property of Spark Tik.<br/>
                        You may not reproduce, modify, or distribute any content without our prior written consent.
                        </p>
                        <h3>Changes to Terms of Use</h3>
                        <p className="pa">
                            We reserve the right to modify or update these Terms of Use at any time without notice.<br/>
                            Your continued use of our website after any changes to these Terms of Use will constitute your acceptance of the revised terms. 
                        </p>
                        <h3>Contact Us</h3>
                        <p className="pa">If you have any questions or concerns about these Terms of Use, please contact us at [insert contact information].</p>
                    </div>

                    <div className="Terms" >
                        <h2 className="TPC" >Privacy Policy</h2>
                        <h3>Introduction</h3>
                        <p className="pa">At Spark Tik, we respect your privacy and are committed to protecting your personal information.<br/> This Privacy Policy outlines how we collect, use, and disclose your personal information.
                        </p>
                        <h3>What Information We Collect</h3>
                        <p className="pa">We collect personal information such as your name, phone number, email address, and password when you create an account on our website.<br/>
                            We also collect information about your interactions with our website, such as your browsing history and search queries.
                        </p>
                        <h3>How We Use Your Information</h3>
                        <p className="pa">
                            We use your personal information to provide you with our services, including responding to your inquiries and sending you newsletters.<br/>
                            We may also use your information to improve our website and services.
                        </p>
                        <h3>Sharing Your Information</h3>
                        <p className="pa">We do not share your personal information with third parties, except as required by law or to protect our rights.</p>
                        <h3>Security</h3>
                        <p className="pa">We take reasonable measures to protect your personal information from unauthorized access, disclosure, or use.</p>
                        <h3>Changes to Privacy Policy</h3>
                        <p className="pa">We reserve the right to modify or update this Privacy Policy at any time without notice.<br/>
                        Your continued use of our website after any changes to this Privacy Policy will constitute your acceptance of the revised terms.
                        </p>
                        <h3>Contact Us</h3>
                        <p className="pa">If you have any questions or concerns about this Privacy Policy, please contact us at [insert contact information]</p>
                    </div>
                    
                    <div className="Terms" >
                        <h2 className="TPC" >Cookies Policy</h2>
                        <h3>Introduction</h3>
                        <p className="pa">At Spark Tik, we use cookies to improve your experience on our website.<br/> This Cookies Policy outlines how we use cookies and how you can manage them.</p>
                        <h3>What Are Cookies?</h3>
                        <p className="pa">Cookies are small text files that are stored on your device when you visit our website.<br/>
                        Cookies allow us to recognize your device and provide you with a personalized experience.
                        </p>
                        <h3>Types of Cookies We Use</h3>
                        <p className="pa">Necessary Cookies: These cookies are essential for our website to function properly.<br/>
                        Analytical Cookies: These cookies help us understand how you interact with our website.<br/>
                        Marketing Cookies: These cookies are used to personalize our marketing efforts.
                        </p>
                        <h3>How to Manage Cookies</h3>
                        <p className="pa">
                            You can manage cookies through your browser settings.<br/>
                            You can also opt-out of cookies by using our cookie management tool.
                        </p>
                        <h3>Changes to Cookies Policy</h3>
                        <p className="pa">We reserve the right to modify or update this Cookies Policy at any time without notice.<br/>
                        Your continued use of our website after any changes to this Cookies Policy will constitute your acceptance of the revised terms.
                        </p>
                        <h3>Contact Us</h3>
                        <p className="pa">If you have any questions or concerns about this Cookies Policy, please contact us at [insert contact information].</p>
                        <br />
                        <p className="pa">Please note that these are just examples and you should adjust them according to your website&#39;s specific needs and requirements.<br/> It&#39;s also a good idea to consult with a lawyer to ensure that your policies comply with applicable laws and regulations.</p>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Terms