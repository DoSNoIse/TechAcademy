import './Welcometext.css'
import sports1 from './sports1.png'
import sports2 from './sports2.png'
import sports3 from './sports3.png'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './App.css'
import Footer from './footer'

function Welcometext() {
    return (
        <React.Fragment>
            <div className="text-light text-center bg-dark vh-100 d-flex flex-column">
                <div className="App" >
                    <div className="container" >


                        <img src={sports1} alt="logo" />
                        <img src={sports2} alt="logo" />

                    </div>
                    <div className='container'>
                        <h1>
                            About our App
                        </h1>
                        <img src={sports3} alt="logo" />
                    </div>







                    <div className='container'>

                        <p className="custom-container1">
                            JBF is the cutting-edge app that revolutionizes how you track and optimize your sports performance.
                            Whether you're a professional athlete or a fitness enthusiast, JBF offers advanced tracking technology and intuitive features to help you reach your goals.
                            Effortlessly track your speed, distance , set personalized goals, access detailed training plans, and connect with a vibrant community of athletes.
                            Download JBF now and unlock your full athletic potential.
                        </p>


                        <div className='custom-container2'>
                            <h2 className='header2'>
                                Personalized Training Plans:
                            </h2>
                            <p>
                                Say goodbye to generic training programs. JBF offers personalized training plans tailored to your specific goals and abilities. Whether you're training for a marathon, improving your agility for team sports, or striving for explosive power, JBF will create a comprehensive plan designed to maximize your potential and drive your success.
                            </p>
                        </div>

                        <div className='custom-container2'>
                            <h2 className='header2'>
                                Your Success is Our Priority:
                            </h2>
                            <p>
                                At JBF, we are dedicated to your success. We continually update and improve our app based on user feedback and the latest advancements in sports science. We strive to provide you with an intuitive and user-friendly experience that enhances your training, boosts your motivation, and helps you achieve breakthrough results.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    
    );
};
export default Welcometext