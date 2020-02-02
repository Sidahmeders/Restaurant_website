import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../styles/intro&navbar.css';
import breakfest from '../resto-img/breakfest.jpg';
import dishes from '../resto-img/dishes.jpg';
import cook from '../resto-img/wine.jpg';
import chef from '../resto-img/chef.jpg';

import beef from '../resto-img/nested-img/beef.jpg';
import zouj from '../resto-img/zouj.svg';
import handHold from '../resto-img/nested-img/hand-hold.jpg';
import gathering from '../resto-img/nested-img/gathering.jpg';
import chairs from '../resto-img/nested-img/chair-dining.jpg';

import ReactMapGl, { Marker, NavigationControl, Popup } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import zoujAdr from '../resto-img/nested-img/zoujadr.svg';
import couple from '../resto-img/nested-img/couple.jpg';


const IntroNavbar = () => {

    
    AOS.init({
        offset: 200,
        duration: 500,
        easing: 'ease-out',
    });

    useEffect(() => {
        setTimeout(() =>{
            window.scrollTo(0, 0);
        },1000);
    },[]);

    let toggle = true;

    const toggleMenu = () => {
        const menuBtn = document.getElementById('menuButton');
        const sideBar = document.getElementById('sidebar');
        if(toggle) {
            menuBtn.classList.add('cross');
            sideBar.classList.add('show');
            toggle = false;
        } else {
            menuBtn.classList.remove('cross');
            sideBar.classList.remove('show');
            toggle = true;
        }
    }

    useEffect(() => {
        const burger = document.getElementById('burger');
        const listItem = [...burger.getElementsByTagName("li")];
        const sticky = burger.offsetTop;

        window.onscroll = function() {
            listItem.forEach(item => {
                if(window.pageYOffset > sticky - 50) {
                    item.classList.add('close-burger');
                } else {
                    item.classList.remove('close-burger');
                } 
            });
        }  
    },[]);

    const [viewPort, setViewPort] = useState({
        latitude: 45.4198,
        longitude: -75.6925,
        width: "100vw",
        height: "100vh",
        zoom: 16
      });

    const [selecedHome, setSelectedHome] = useState(null);


    return(
        <div className="app">

            <header>
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

            </header>

            <main>

                <div id="menuButton" className="menu-btn" onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <aside id="sidebar" className="side-bar">
                    <a href="/" className="logo">
                      <i className="fab fa-gitkraken"></i>
                      <h1>ZOUJ OU HABA.</h1>
                      <p>how fast is fatser.</p>  
                    </a>
                    
                    <ul>
                        <li onClick={toggleMenu}><a href="#menu"><i className="fa fa-th-list"></i>Menus</a></li>
                        <li onClick={toggleMenu}><a href="#gallery"><i className="fa fa-images"></i>Gallery</a></li>
                        <li onClick={toggleMenu}><a href="#sercices"><i className="fa fa-carrot"></i>Services</a></li>
                        <li onClick={toggleMenu}><a href="#about"><i className="fa fa-users"></i>About Us</a></li>
                        <li onClick={toggleMenu}><a href="#booking"><i className="fa fa-phone"></i>Booking</a></li>
                    </ul>

                    <div className="p">
                        <p>Ottawa Gloucester St</p>
                        <p>Rue Laurier Ave W 48</p>
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
                                    <span style={{transform: "translate(30px, 220px)"}}>
                                      <h2 >the best food in the world</h2>
                                      <p>your flavor matters</p>
                                    </span>
                                </div>
                                <div className="slide">
                                    <img src={dishes} alt="dishes" />
                                    <span style={{transform: "translate(40px, 100px)"}}>
                                      <h2>Everyday From 10AM To 9PM</h2>
                                      <h4>step in and Feel at Home</h4>
                                    </span>
                                </div>
                                <div className="slide">
                                    <img src={cook} alt="cook" />
                                    <span style={{transform:"translate(50px, 300px)",textAlign:"left"}}>
                                      <h6>our master chef is</h6>
                                      <h4 style={{fontSize:".8em"}}>miamoto povotkin the winner of master Chef 2012</h4>
                                    </span>
                                </div>
                                <div className="slide">
                                    <img src={chef} alt="chef" />
                                    <span style={{transform:"translate(40px, 100px)"}}>
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
                        <div className="under-home"></div>
                    </section>
                </div>

                <div className="menus-section">
                    <section>
                        <div className="menu-cards">
                            <div className="card-item event">
                                <h1>for our loyal customers</h1>
                                <h2><span data-aos="fade-left" data-aos-duration="600">Also Special </span>
                                    <span data-aos="zoom-out" data-aos-duration="800" style={{color:"#d00",fontSize:"1.5em"}}>Events</span> 
                                    <span data-aos="fade-right" data-aos-duration="600"> every 3 Month included our :</span> 
                                </h2>
                                <ul>
                                    <li data-aos="fade-right">upComing talented singers</li>
                                    <li data-aos="fade-right">leading chefs</li>
                                    <li data-aos="fade-right">special Offering from "chef tables" to "private dinner"</li>
                                    <li data-aos="fade-right">and Magicians</li>
                                </ul>
                            </div>
                            <p id="menu" className="above-line" data-aos="zoom-out-down" data-aos-duration="900">Appetizers</p>
                            <span className="line" data-aos="slide-right" data-aos-duration="700"/>
                            <div className="card-item menu">
                                <section>
                                    <div className="list-item" data-aos="fade-up">
                                        <h3 style={{display:"flex"}}>SMALL SALAD <span style={{marginLeft:"auto"}}>9.50$</span></h3>
                                        <p>Lettuce mix, grilled corn & edamame</p>
                                    </div>
                                    <div className="list-item" data-aos="fade-up">
                                        <h3 style={{display:"flex"}}>FRIED CHICKEN & HONEY <span style={{marginLeft:"auto"}}>12.15$</span></h3>
                                        <p>Buttermilk chicken, thyme honey glaze, chipotle mayo</p>
                                    </div>
                                    <div className="list-item" data-aos="fade-up">
                                        <h3 style={{display:"flex"}}>CLASSIC BEEF <span style={{marginLeft:"auto"}}>15.75$</span></h3>
                                        <p>Capers, shallot, fresh herbs</p>
                                    </div>  
                                </section>
                                <section>
                                    <div className="list-item" data-aos="fade-up">
                                        <h3 style={{display:"flex"}}>SMALL CAESER<span style={{marginLeft:"auto"}}>10.85$</span></h3>
                                        <p>Lettuce, capers, parmesan, croutons & bacon</p>
                                    </div>
                                    <div className="list-item" data-aos="fade-up">
                                        <h3 style={{display:"flex"}}>GENERAL TAO TOFU <span style={{marginLeft:"auto"}}>14.65$</span></h3>
                                        <p>Crispy tofu bites and house General Tao sauce, house pickled vegetables</p>
                                    </div>
                                    <div className="list-item" data-aos="fade-up">
                                        <h3 style={{display:"flex"}}>FRIED CALAMARI BOWL <span style={{marginLeft:"auto"}}>16.90$</span></h3>
                                        <p>Artichoke, jalapeno, chorizo, horseradish mayo and spicy mayo</p>
                                    </div>
                                </section>
                                <section>
                                    <div className="list-item" data-aos="fade-up">
                                        <h3 style={{display:"flex"}}>FRENCH ONION SOUP <span style={{marginLeft:"auto"}}>11.20$</span></h3>
                                        <p>Chicken stock, red beer, thyme, swiss and mozarella cheese</p>
                                    </div>
                                    <div className="list-item" data-aos="fade-up">
                                        <h3 style={{display:"flex"}}>NATURAL SALMON TARTAR <span style={{marginLeft:"auto"}}>14.85$</span></h3>
                                        <p>Citrus and herb</p>
                                    </div>
                                    <div className="list-item" data-aos="fade-up">
                                        <h3 style={{display:"flex"}}>DUCK CONFIT POUTINE <span style={{marginLeft:"auto"}}>18.15$</span></h3>
                                        <p>Fries, chees curds, duck confit, red cabbage, caramelized onions & green peas</p>
                                    </div>  
                                </section>
                            </div>
                            <p className="above-line" data-aos="zoom-out-down" data-aos-duration="900">Main Dishes</p>
                            <span className="line" data-aos="slide-right" data-aos-duration="700"/>
                            <div className="card-item menu">
                                <section>
                                    <div className="list-item" data-aos="fade-up">
                                        <h3 style={{display:"flex"}}>CAESAR SALAD WITH CHICKEN <span style={{marginLeft:"auto"}}>23.75$</span></h3>
                                        <p>Lettuce, capers, parmesan, croutons & bacon</p>
                                    </div>
                                    <div className="list-item" data-aos="fade-up">
                                        <h3 style={{display:"flex"}}>HALLOUMI <span style={{marginLeft:"auto"}}>22.50$</span></h3>
                                        <p>Roasted vegetables, celeriac purée, sunflower seeds, black olive crumble, pesto</p>
                                    </div>
                                    <div className="list-item" data-aos="fade-up">
                                        <h3 style={{display:"flex"}}>FISH & CHIPS <span style={{marginLeft:"auto"}}>21.50$</span></h3>
                                        <p>Crispy cod, coleslaw, tartar sauce and fries</p>
                                    </div>
                                    <div className="list-item" data-aos="fade-up">
                                        <h3 style={{display:"flex"}}>NATURAL SALMON TARTAR <span style={{marginLeft:"auto"}}>26.00$</span></h3>
                                        <p>Citrus and herb, and some fresh vegeies</p>
                                    </div>
                                    <div className="list-item" data-aos="fade-up">
                                        <h3 style={{display:"flex"}}>SALMON <span style={{marginLeft:"auto"}}>27.90$</span></h3>
                                        <p>Seared salmon, vegetables, celeriac purée and salsa verde</p>
                                    </div>
                                </section>
                                <section>
                                    <div className="list-item" data-aos="fade-up">
                                        <h3 style={{display:"flex"}}>DUCK CONFIT POUTINE <span style={{marginLeft:"auto"}}>20.35$</span></h3>
                                        <p>Pickled red cabbage, green peas, caramelized onions, duck confit, gravy</p>
                                    </div>
                                    <div className="list-item" data-aos="fade-up">
                                        <h3 style={{display:"flex"}}>GOAT CHEESE SALAD <span style={{marginLeft:"auto"}}>22.40$</span></h3>
                                        <p>Mixed greens, beets, sunflower seeds, dried cranberries, candied walnuts, maple dressing</p>
                                    </div>
                                    <div className="list-item" data-aos="fade-up">
                                        <h3 style={{display:"flex"}}>DUCK CONFIT SHEPHERD'S PIE <span style={{marginLeft:"auto"}}>25.80$</span></h3>
                                        <p>Braised cabbage, corn and fruit ketchup</p>
                                    </div>
                                    <div className="list-item" data-aos="fade-up">
                                        <h3 style={{display:"flex"}}>CLASSIC BEEF <span style={{marginLeft:"auto"}}>28.10$</span></h3>
                                        <p>Capers, shallot, fresh herbs, fries or salad</p>
                                    </div>
                                    <div className="list-item" data-aos="fade-up">
                                        <h3 style={{display:"flex"}}>GRILLED BEEF STEAK <span style={{marginLeft:"auto"}}>30.60$</span></h3>
                                        <p>Grilled beef Black Angus AA, fries and sautéed vegetables</p>
                                    </div>
                                </section>
                                <section>
                                    <div className="list-item" data-aos="fade-up">
                                        <h3 style={{display:"flex"}}>MAC 'N' CHEESE <span style={{marginLeft:"auto"}}>18.85$</span></h3>
                                        <p>Cheddar and mozzarella sauce, chili parmesan crumble</p>
                                    </div>
                                    <div className="list-item" data-aos="fade-up">
                                        <h3 style={{display:"flex"}}>VALLIER'S SALAD <span style={{marginLeft:"auto"}}>24.10$</span></h3>
                                        <p>Romaine lettuce, coriander, kale, Soba noodles, carrot, red cabbage, pumpkin seeds, grapes, marinated tofu and sweet & salty dressing</p>
                                    </div>
                                    <div className="list-item" data-aos="fade-up">
                                        <h3 style={{display:"flex"}}>BACON & CHEDDAR CHEESEBURGER <span style={{marginLeft:"auto"}}>25.80$</span></h3>
                                        <p>Sriracha fried onions and horseradish mayonnaise</p>
                                    </div>
                                    <div className="list-item" data-aos="fade-up">
                                        <h3 style={{display:"flex"}}>DUCK CONFIT SHEPERD’S PIE <span style={{marginLeft:"auto"}}>24.75$</span></h3>
                                        <p>Braised cabbage and corn, house made fruit ketchup</p>
                                    </div>
                                    <div className="list-item" data-aos="fade-up">
                                        <h3 style={{display:"flex"}}>TOASTED CHICK LEG'S <span style={{marginLeft:"auto"}}>30.60$</span></h3>
                                        <p>chicken legs with some kachaup and masserati</p>
                                    </div>
                                </section>
                            </div>
                            <p className="above-line" data-aos="zoom-out-down" data-aos-duration="900">Fast Food</p>
                            <span className="line" data-aos="slide-right" data-aos-duration="700"/>
                            <div className="card-item menu">
                                <section>
                                    <div className="list-item" data-aos="fade-up">
                                        <h3 style={{display:"flex"}}>HUMBURGER small / big <span style={{marginLeft:"auto"}}>10.60$ / 15.00$</span></h3>
                                        <p>with french fries salad, viandache and red cheese</p>
                                    </div>
                                    <div className="list-item" data-aos="fade-up">
                                        <h3 style={{display:"flex"}}>SANDWICH small / big <span style={{marginLeft:"auto"}}>12.00$ / 16.00$</span></h3>
                                        <p>chicken formage fondui, fries and chawarma </p>
                                    </div>
                                    <div className="list-item" data-aos="fade-up">
                                        <h3 style={{display:"flex"}}>panini <span style={{marginLeft:"auto"}}>13.25$</span></h3>
                                        <p>with red and white cheese, chicken Chest, viandache, escalope, </p>
                                    </div>
                                </section>
                                <section>
                                    <div className="list-item" data-aos="fade-up">
                                        <h3 style={{display:"flex"}}>PIZZA small / big <span style={{marginLeft:"auto"}}>14.50$ / 16.95$</span></h3>
                                        <p>masserati, mushroom, white cheese , formage fondui, viandache, poulle</p>
                                    </div>
                                    <div className="list-item" data-aos="fade-up">
                                        <h3 style={{display:"flex"}}>PIZZA KAZA  <span style={{marginLeft:"auto"}}>24.25$</span></h3>
                                        <p>creuvate royal, viandache,double cheese, escalope ache, and some vegeies</p>
                                    </div>
                                    <div className="list-item" data-aos="fade-up">
                                        <h3 style={{display:"flex"}}>PIZZA KING'S small / big <span style={{marginLeft:"auto"}}>28.50$ / 34.75$</span></h3>
                                        <p>with viandache, escalope, red cheese and cheese butter, gellyfish, escoador and fresh vegeies</p>
                                    </div>
                                </section>
                                <section>
                                    <div className="list-item" data-aos="fade-up">
                                        <h3 style={{display:"flex"}}>TAKOS small / big <span style={{marginLeft:"auto"}}>16.10$ / 20.50$</span></h3>
                                        <p>viandache, french fries, maiuenese, and some vegeies</p>
                                    </div>
                                    <div className="list-item" data-aos="fade-up">
                                        <h3 style={{display:"flex"}}>BORRITO small / big <span style={{marginLeft:"auto"}}>14.30$ / 17.75$</span></h3>
                                        <p>chips chawarma, cheese and green leaf, chidar</p>
                                    </div>
                                    <div className="list-item" data-aos="fade-up">
                                        <h3 style={{display:"flex"}}>MILLANO small / big <span style={{marginLeft:"auto"}}>15.50$ / 19.00$</span></h3>
                                        <p>chicken legs with some masserati, viandache, hashed aspargus</p>
                                    </div>
                                </section>
                            </div>
                            <p className="above-line" data-aos="zoom-out-down" data-aos-duration="900">Dessert</p>
                            <span className="line" data-aos="slide-right" data-aos-duration="700"/>
                            <div className="card-item menu">
                                <section>
                                    <div className="list-item" data-aos="fade-up">
                                        <h3 style={{display:"flex"}}>POUDING CHÔMEUR <span style={{marginLeft:"auto"}}>9.20$</span></h3>
                                        <p>With maple English cream</p>
                                    </div>
                                    <div className="list-item" data-aos="fade-up">
                                        <h3 style={{display:"flex"}}>CHEESECAKE <span style={{marginLeft:"auto"}}>8.75$</span></h3>
                                        <p>With berry coulis</p>
                                    </div>
                                    <div className="list-item" data-aos="fade-up">
                                        <h3 style={{display:"flex"}}>SALAD OF FRUITS <span style={{marginLeft:"auto"}}>10.05$</span></h3>
                                        <p>cocktail based on starwberry and peach</p>
                                    </div>
                                </section>
                                <section>
                                    <div className="list-item" data-aos="fade-up">
                                        <h3 style={{display:"flex"}}>CRÈME BRÛLÉE OF THE MOMENT <span style={{marginLeft:"auto"}}>7.55$</span></h3>
                                        <p>Maple</p>
                                    </div>
                                    <div className="list-item" data-aos="fade-up">
                                        <h3 style={{display:"flex"}}>CHOCOLATE FONDANT <span style={{marginLeft:"auto"}}>8.85$</span></h3>
                                        <p>With english cream</p>
                                    </div>
                                    <div className="list-item" data-aos="fade-up">
                                        <h3 style={{display:"flex"}}>CREPE <span style={{marginLeft:"auto"}}>11.05$</span></h3>
                                        <p>With starwberry jam or choclate cream & buffer</p>
                                    </div>
                                </section>
                                <section>
                                    <div className="list-item" data-aos="fade-up">
                                        <h3 style={{display:"flex"}}>CARROTS CAKE <span style={{marginLeft:"auto"}}>7.90$</span></h3>
                                        <p>with cheese icing</p>
                                    </div>
                                    <div className="list-item" data-aos="fade-up">
                                        <h3 style={{display:"flex"}}>CHOCOLATE CAKE <span style={{marginLeft:"auto"}}>8.15$</span></h3>
                                        <p>with icing cream</p>
                                    </div>
                                    <div className="list-item" data-aos="fade-up">
                                        <h3 style={{display:"flex"}}>MIXIN CAKE <span style={{marginLeft:"auto"}}>9.50$</span></h3>
                                        <p>with some Citrus & pear</p>
                                    </div>
                                </section>
                            </div>
                            <p className="above-line" data-aos="zoom-out-down" data-aos-duration="900">Coffees & Teas</p>
                            <span className="line" data-aos="slide-right" data-aos-duration="700"/>
                            <div className="card-item menu">
                                <section>
                                    <div className="list-item" data-aos="fade-up">
                                        <h3 style={{display:"flex"}}>ESPRESSO / DOUBLE <span style={{marginLeft:"20%"}}>3.85$ / 4.75$</span></h3>
                                    </div>
                                    <div className="list-item" data-aos="fade-up">
                                        <h3 style={{display:"flex"}}>MACCHIATO <span style={{marginLeft:"20%"}}>3.50$</span></h3>
                                    </div>
                                    <div className="list-item" data-aos="fade-up">
                                        <h3 style={{display:"flex"}}>ICED COFFEE <span style={{marginLeft:"20%"}}>4.00$</span></h3>
                                    </div>
                                </section>
                                <section>
                                    <div className="list-item" data-aos="fade-up">
                                        <h3 style={{display:"flex"}}>AMERICANO <span style={{marginLeft:"20%"}}>3.60$</span></h3>
                                    </div>
                                    <div className="list-item" data-aos="fade-up">
                                        <h3 style={{display:"flex"}}>CAPPUCCINO <span style={{marginLeft:"20%"}}>3.95$</span></h3>
                                    </div>
                                    <div className="list-item" data-aos="fade-up">
                                        <h3 style={{display:"flex"}}>MEXECANO <span style={{marginLeft:"20%"}}>3.60$</span></h3>
                                    </div>
                                </section>
                                <section>
                                    <div className="list-item" data-aos="fade-up">
                                        <h3 style={{display:"flex"}}>LUNGO <span style={{marginLeft:"20%"}}>3.25$</span></h3>
                                    </div>
                                    <div className="list-item" data-aos="fade-up">
                                        <h3 style={{display:"flex"}}>CAFÉ LATTE / BOWL <span style={{marginLeft:"20%"}}>3.25$ / 4.25$</span></h3>
                                    </div>
                                    <div className="list-item" data-aos="fade-up">
                                        <h3 style={{display:"flex"}}>CAPOCHINO <span style={{marginLeft:"20%"}}>3.70$</span></h3>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </section>
                </div>

                <div id="gallery" className="gallery-section">
                    <section>
                        <div className="gallery-textImages">
                            <div className="image-one">
                                <img src={beef} alt="beef" data-aos="fade-right" />
                                <p data-aos="slide-up">
                                The kinds of dishes to be produced obviously determine the jobs that need to be done. The menu is, 
                                in fact, the basis for the entire operation. Because of its importance, we devote a whole chapter to
                                a study of the menu to get the best flavor.
                                </p>
                            </div>
                            <div id="burger" className="burger"> 
                                <p data-aos="slide-up">
                                Whether you’re in the mood for a <span>‘small’</span>  or a <span>‘big’</span> meal, 
                                Zouj ou Haba is what you need to keep the day rolling,  or a double shot espresso, when it satisfies your birds, it’s all good to go.
                                </p>
                                <ul>
                                    <li style={{transform:"translate(0, -3px)"}}><img src="http://vallierbistro.com/wp-content/themes/vallier/img/burger-1.png" alt="brg"/></li>
                                    <li style={{transform:"translate(0, 7px)",opacity:".5"}}><img src="http://vallierbistro.com/wp-content/themes/vallier/img/burger-2.png" alt="brg"/></li>
                                    <li style={{transform:"translate(0, 10px)"}}><img src="http://vallierbistro.com/wp-content/themes/vallier/img/burger-3.png" alt="brg"/></li>
                                    <li style={{transform:"translate(0, 6px)",opacity:".7"}}><img src="http://vallierbistro.com/wp-content/themes/vallier/img/burger-4.png" alt="brg"/></li>
                                    <li style={{transform:"translate(0, 1px)",opacity:".6"}}><img src="http://vallierbistro.com/wp-content/themes/vallier/img/burger-5.png" alt="brg"/></li>
                                    <li><img src="http://vallierbistro.com/wp-content/themes/vallier/img/burger-6.png" alt="brg"/></li>
                                </ul>
                                <img src={zouj} alt="zouj"/>
                            </div>
                            <div className="image-two">
                                <p data-aos="fade-left">
                                The value of history is that it helps us understand the present and the future. In food service,
                                knowledge of our professional heritage helps us see why we do things as we do, how our cooking techniques
                                have been developed and refined,and how we can continue to develop and innovate in the years ahead.
                                </p>
                                <img data-aos="fade-right" src={handHold} alt="handhold" />
                            </div>
                        </div>
                    </section>
                </div>

                <div id="sercices" className="services-section">
                    <section>
                        <div className="service-textImages">
                            <div className="image-one">
                                <p data-aos="fade-up">zouj ou haba <span style={{color:"#d34",fontSize:".6em"}}>the way to go</span></p>
                                <img data-aos="zoom-in" src={gathering} alt="gathering" />
                                <p style={{fontSize:".5em"}}>Service with a Smile, Being Available, Being Exceptional</p>
                            </div>
                            <div className="image-two">
                                <img data-aos="fade-up" data-aos-duration="1200" src={chairs} alt="chair" data-aos-delay="600"/>
                                <p data-aos="fade-up" data-aos-duration="1200" data-aos-delay="600">
                                    We work hard not only to give you the best flavor experience but also to let feel 
                                    comfortable as if you are at home and beyond.
                                </p>
                                <ul data-aos="fade-down" data-aos-duration="2000" data-aos-delay="600">
                                    Our Restaurant have Thousands of small items to let feel Home and beyon.
                                    <li>cool location</li>
                                    <li>amazing staff that are passionate of what we produce</li>
                                    <li>Child friendly with larger table and high chairs and booster seats, coloring materials and toys</li>
                                    <li>updated menu every 6 Month that keeps the kitchen team excited and creative</li>
                                    <li>and our excellent platform to let you know About special events or extra tables and so on</li>
                                </ul>
                            </div>
                            <div className="image-three">
                                <div data-aos="fade-left" data-aos-duration="1200" data-aos-delay="600" className="romantic-text">
                                <h2>and finlly for those of you who are confused of how to impress their wives or fiance</h2>
                                <p>
                                There's something special about getting engaged over a romantic dinner. But if you're wondering about 
                                how to propose in a restaurant "Call and say, 'I'm considering getting engaged at your restaurant.
                                and The staff will want to talk about what you have in mind, whether you've dined there before, 
                                and what kind of vibe you'd like the engagement to have (fun and playful or romantic and meaningful?).
                                </p>
                                <h3>but if you have no idea in mind it's Alright</h3>
                                <p>the staff will probably have some good ideas for proposing as well as some helpful tips</p>
                                </div>
                                <img data-aos="fade-right" data-aos-duration="1200" data-aos-delay="600" src={couple} alt="couple" />
                            </div>
                        </div>
                    </section>
                </div>

                <div id="about" className="about-section">
                    <section>
                        <div className="about-us">
                            <div className="about-team">
                                
                            </div>
                            <div className="about-text">
                                <h1>FIND US</h1>
                                <p>Ottawa Gloucester St</p>
                                <p>Rue Laurier Ave W 48</p>
                                <h3>Opening Hours</h3>
                                <p> Mon-Tue-Wed 10:00AM - 10PM</p>
                                <p>Thu-Fri-Sat 10:30 am-11 pm</p>
                                <p>Sunday - closed (Jan to Mar)</p> 
                                <p>11:30 am-10:00 (Apr to Dec)</p>
                                <h3>RESERVATIONS</h3>
                                <p><span style={{color:"rgb(0, 168, 0)",textDecoration:"underline"}}>514.842.2905</span> or <a href="http://zoujouhaba/book.com" target="blank">Book a table</a></p>
                                <p style={{fontSize:".9em"}}>For more information</p> 
                                <p><a href="http://info.com" target="blank">info@zoujouhab.com</a></p>
                            </div>
                            <div className="about-map">
                                <ReactMapGl mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
                                    {...viewPort} onViewportChange={viewPort => { setViewPort(viewPort)}}
                                    mapStyle="mapbox://styles/sidahmedzoldik/ck5mq44f32cfc1ipo6fvy86ct"
                                    width="600px" height="450px" 
                                    >
                                    <div style={{position: 'absolute', right: 0}}>
                                    <NavigationControl />
                                    </div>

                                    <Marker
                                        key={"876785"}
                                        latitude={45.4211}
                                        longitude={-75.6945}
                                        >
                                        <button className="map-mark" onClick={e => {
                                            e.preventDefault();
                                            setSelectedHome("zouj ou haba wellcome you to be our next guest")
                                        }}>
                                            <img src ={zoujAdr} alt="address" width="88px"/>
                                        </button>
                                    </Marker>

                                    {selecedHome ? (
                                    <Popup      
                                    latitude={45.4211}
                                    longitude={-75.6945}
                                    onClose={() => {
                                        setSelectedHome(null)
                                    }}
                                    >
                                        <p>{selecedHome}</p>
                                    </Popup>
                                    ) : null}
                                </ReactMapGl>
                            </div>
                        </div>
                    </section>
                </div>

                <div id="booking" className="booking-section">
                    <section>
                        <div className="find-us">
                            <div className="item">
                                <p>Website by boutaraa sidahmed freelancer and software_engineer.</p>
                            </div>
                            <div className="item">
                                <p>Follow us on:</p>
                                <a href="http://facebook.com" target="blank"><i className="fab fa-facebook"></i> facebook</a>
                                <a href="http://instagram.com" target="blank"><i className="fab fa-instagram"></i> instagram</a>
                            </div>
                            <div className="item">
                                <p>Copyright © 2020 Zouj_ou_Haba - All rights reserved</p>
                            </div>
                        </div>
                    </section>
                </div>

            </main>

        </div>
    )
}



export default IntroNavbar;
