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

                <div id="menuButton" className="menu-btn" onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <aside id="sidebar" className="side-bar">
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
                                    <span style={{transform: "translate(30px, 220px)"}}>
                                      <h2 >the best food in the world</h2>
                                      <p>your flavor matters</p>
                                    </span>
                                </div>
                                <div className="slide">
                                    <img src={dishes} alt="dishes" />
                                    <span style={{transform: "translate(60px, 100px)"}}>
                                      <h2>Everyday From 10AM To 7PM</h2>
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
                    </section>
                </div>

                <div className="menus-section">
                    <section>
                        <div className="menu-cards">
                            <div className="card-item event">
                                <h2><span data-aos="fade-left" data-aos-duration="600">Also Special </span>
                                    <span data-aos="zoom-out" data-aos-duration="800" style={{color:"#d00",fontSize:"1.5em"}}>Events</span> 
                                    <span data-aos="fade-right" data-aos-duration="600"> every 3 Month included our :</span> 
                                </h2>
                                <ul>
                                    <li data-aos="fade-right">upComing talented singers</li>
                                    <li data-aos="fade-right">leading chefs</li>
                                    <li data-aos="fade-right">and Magicians</li>
                                </ul>
                            </div>
                            <p className="above-line" data-aos="zoom-out-down" data-aos-duration="900">Appetizers</p>
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
