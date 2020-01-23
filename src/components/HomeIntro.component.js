import React, { useEffect } from 'react';
import '../styles/main.css'

const HomeIntro = () => {

    useEffect(() => {
        setTimeout(() =>{
            window.scrollTo(0, 0);
        },1000);
    },[])

    return(
        <div className="main-intro">
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
                <h2>lorem</h2>
                <ul>
                    <li>lorem</li>
                    <li>lorem</li>
                    <li>lorum</li>
                    <li>lorem</li>
                </ul>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel ducimus dicta exercitationem esse cumque eius cupiditate minus voluptatum sapiente facilis quibusdam, incidunt iusto ipsa molestias minima. Architecto maxime aspernatur expedita explicabo amet natus quibusdam?</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel ducimus dicta exercitationem esse cumque eius cupiditate minus voluptatum sapiente facilis quibusdam, incidunt iusto ipsa molestias minima. Architecto maxime aspernatur expedita explicabo amet natus quibusdam?</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel ducimus dicta exercitationem esse cumque eius cupiditate minus voluptatum sapiente facilis quibusdam, incidunt iusto ipsa molestias minima. Architecto maxime aspernatur expedita explicabo amet natus quibusdam?</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel ducimus dicta exercitationem esse cumque eius cupiditate minus voluptatum sapiente facilis quibusdam, incidunt iusto ipsa molestias minima. Architecto maxime aspernatur expedita explicabo amet natus quibusdam?</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel ducimus dicta exercitationem esse cumque eius cupiditate minus voluptatum sapiente facilis quibusdam, incidunt iusto ipsa molestias minima. Architecto maxime aspernatur expedita explicabo amet natus quibusdam?</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel ducimus dicta exercitationem esse cumque eius cupiditate minus voluptatum sapiente facilis quibusdam, incidunt iusto ipsa molestias minima. Architecto maxime aspernatur expedita explicabo amet natus quibusdam?</p>
            </main>
        </div>
    )
}



export default HomeIntro;
