import './style.css'
import { Navbar } from './components/navbar.js';
import { Home } from './components/home/home.js';
import { PopularSeries } from './components/Series populares/popularSeries.js';
import { initCarrusel } from './components/home/carrusel.js';


document.querySelector('header').appendChild(Navbar());
document.querySelector('#app').appendChild(Home());
initCarrusel();

