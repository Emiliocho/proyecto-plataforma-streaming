import './style.css'
import { Navbar } from './components/navbar.js';
import { Home } from './components/home.js';
import { PopularSeries } from './components/popularSeries.js';

document.querySelector('#app').appendChild(Home());
document.querySelector('header').appendChild(Navbar());