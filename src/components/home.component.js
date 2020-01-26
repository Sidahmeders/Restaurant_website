import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../styles/intro&navbar.css'
import breakfest from '../resto-img/breakfest.jpg'
import dishes from '../resto-img/dishes.jpg'
import cook from '../resto-img/wine.jpg'
import chef from '../resto-img/chef.jpg'

const IntroNavbar = () => {

    AOS.init({
        offset: 200,
        duration: 1500,
        easing: 'ease-in-sine',
    });

    useEffect(() => {
        setTimeout(() =>{
            window.scrollTo(0, 0);
        },1000);
    },[])

    return(
        <div className="app">

            {/* <header>
                <div className="loading">
                    <h2>Hungry</h2>
                    <div className="break"></div>
                    <h2>Satisfied</h2>
                </div>
                <div className="intro">
                    <div><h2>Wellcome To Our Restaurant</h2></div>
                    <div></div>
                    <div><h2>Zoujj Ou Haba</h2></div>
                    <div></div>
                </div>

            </header> */}

            <main>

                <aside className="side-bar">
                    <a href="/" className="logo">
                      <i className="fab fa-gitkraken"></i>
                      <h1>ZOUJ OU HABA</h1>
                      <p>how fast is fatser</p>  
                    </a>
                    
                    <ul>
                        <li><a href="/side"><i className="fa fa-th-list"></i>Menus</a></li>
                        <li><a href="/side"><i className="fa fa-images"></i>Gallery</a></li>
                        <li><a href="/side"><i className="fa fa-carrot"></i>Services</a></li>
                        <li><a href="/side"><i className="fa fa-users"></i>About Us</a></li>
                        <li><a href="/side"><i className="fa fa-phone"></i>Booking</a></li>
                    </ul>
                    <div className="p">
                        <p>chlef oulad mohamed</p>
                        <p>Rue de salam chorfa</p>
                        <p>email: habazoj@gmail.com</p>
                        <p>phone: 0772670416</p>
                    </div>
                </aside>

                <div className="images-section">
                    <section>
                        <div className="slidershow">
                            <div className="slides">
                                <input type="radio" name="w" id="w1" defaultChecked/>
                                <input type="radio" name="w" id="w2"/>
                                <input type="radio" name="w" id="w3"/>
                                <input type="radio" name="w" id="w4"/>
                                <div className="slide s1">
                                    <img src={breakfest} alt="breakfest" data-aos="zoom-out" />
                                    <span style={{transform: "translate(150px, 50px)"}}>
                                      <h2 >the best food in the world</h2>
                                      <p>your flavor matters</p>
                                    </span>
                                </div>
                                <div className="slide">
                                    <img src={dishes} alt="dishes" />
                                    <span style={{transform: "translate(120px, 90px)"}}>
                                      <h2>Everyday From 10AM To 7PM</h2>
                                      <h4>step in and Feel at Home</h4>
                                    </span>
                                </div>
                                <div className="slide">
                                    <img src={cook} alt="cook" />
                                    <span style={{transform:"translate(200px, 10px)",textAlign:"left"}}>
                                      <h6>our master chef is</h6>
                                      <h4 style={{fontSize:".7em"}}>miamoto povotkin the winner of master Chef 2012</h4>
                                    </span>
                                </div>
                                <div className="slide">
                                    <img src={chef} alt="chef" />
                                    <span style={{transform:"translate(40px, 10px)"}}>
                                      <h2>get your Table now</h2>
                                      <p>and give it a try</p>
                                    </span>
                                </div>
                            </div>
                            <div className="navigation">
                                <label htmlFor="w1" className="bar"></label>
                                <label htmlFor="w2" className="bar"></label>
                                <label htmlFor="w3" className="bar"></label>
                                <label htmlFor="w4" className="bar"></label>
                            </div>
                        </div>
                    </section>
                </div>

                <div className="menus-section">
                    <section>
                        
                    </section>
                </div>

                <div className="undefined-sections">
                   <section data-aos="fade-up">
                        <p>lorem Insum los immet sunm hcnjkd</p>
                    </section>
                    <section data-aos="flip-left">
                        <p>lorem Insum los immet sunm hcnjkd</p>
                    </section>
                    <section data-aos="fade-left">
                        <p>lorem Insum los immet sunm hcnjkd</p>
                    </section>
                    <section data-aos="zoom-out-down">
                        <p>lorem Insum los immet sunm hcnjkd</p>
                    </section>
                </div>

            </main>

        </div>
    )
}



export default IntroNavbar;
