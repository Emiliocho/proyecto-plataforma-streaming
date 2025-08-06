import '../navbar/navbar.css';
import { getRoute } from '../../routes/router.js';

// La función Navbar ahora recibe renderRoute como argumento
export function Navbar(renderRoute) {
  const navbar = document.createElement('nav');
  navbar.className = 'navbar';
  navbar.innerHTML = `
    <h1>Streaming</h1>
    <ul class="navbar-menu">
      <li><a href="#" id="nav-home">Inicio</a></li>
      <li><a href="#" id="nav-series">Series</a></li>
      <li><a href="#" id="nav-peliculas">Películas</a></li>
      <li class="dropdown">
        <span class="dropdown-toggle">Mi perfil</span>
        <ul class="dropdown-menu">
          <li><a href="#" id="view-profile">Ver perfil</a></li>
          <li><a href="#" id="logout">Cerrar sesión</a></li>
        </ul>
      </li>
    </ul>
  `;

  // Navegación general
  navbar.querySelector('#nav-home').addEventListener('click', (e) => {
    e.preventDefault();
    window.history.pushState({}, '', getRoute('home'));
    if (renderRoute) renderRoute();
  });

  navbar.querySelector('#nav-series').addEventListener('click', (e) => {
    e.preventDefault();
    window.history.pushState({}, '', getRoute('series'));
    if (renderRoute) renderRoute();
  });

  navbar.querySelector('#nav-peliculas').addEventListener('click', (e) => {
    e.preventDefault();
    window.history.pushState({}, '', getRoute('peliculas'));
    if (renderRoute) renderRoute();
  });

  // Acción para ver perfil
  navbar.querySelector('#view-profile').addEventListener('click', (e) => {
    e.preventDefault();
    window.history.pushState({}, '', getRoute('perfil'));
    if (renderRoute) renderRoute();
  });

  // Acción para cerrar sesión
  navbar.querySelector('#logout').addEventListener('click', (e) => {
    e.preventDefault();
    localStorage.setItem('isLoggedIn', 'false');
    window.history.pushState({}, '', getRoute('login'));
    if (renderRoute) renderRoute();
  });

  return navbar;
}
