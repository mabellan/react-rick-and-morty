import React from 'react';
import NavbarComponent from "../navbar/NavbarComponent";
import './home.scss';
import {Image} from "react-bootstrap";
import fondo from '../assets/fondo.png'; // with import



const Home = () => {


    return (
        <div>
            <NavbarComponent>
            </NavbarComponent>
            <Image src={fondo} fluid />
            <div>
                <p>This page has been created solely and exclusively to learn React JS. If you want to see more about my project you can go to my Github account and check it out.
                    Next I plan to create something similar in Vue.js and Angular.
                    Created with love by http://miguelabellan.me
                </p>
            </div>
            <div>
                <p>Esta página ha sido creada única y exclusivamente para aprender React JS. Si quieres ver más acerca de mis proyecto puedes ir a mi cuenta de Github y echarle un vistazo.

                    Próximanente tengo pensado crear algo parecido en Vue.js and Angular.

                    Creado con amor por http://miguelabellan.me
                </p>
            </div>
        </div>
    );

}

export default Home;
