import './style.css';
import { Navbar } from './components/navbar/navbar.js';
import { Home } from './components/home/home.js';
import { PopularSeries } from './components/Series populares/popularSeries.js';
import { initCarrusel } from './components/home/carrusel.js';
import { renderLogin, handleLoginEvents, renderRoute } from './routes/login/login.js';

document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app');

  // Función que maneja el renderizado de toda la aplicación
  function renderApp() {
    // Obtiene el estado de autenticación
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const currentPath = window.location.pathname;

    app.innerHTML = ''; // Limpia el contenido antes de renderizar

    if (isLoggedIn) {
      // Si el usuario está autenticado y está en una página de login, redirige a la principal
      if (currentPath === '/login' || currentPath === '/register' || currentPath === '/login/basic') {
        window.history.pushState({}, '', '/');
      }
      
      // Renderiza la vista principal
      app.appendChild(Navbar(renderApp)); // Pasa renderApp a Navbar
      app.appendChild(Home());
      app.appendChild(PopularSeries());
      initCarrusel();
      
    } else {
      // Si el usuario no está autenticado, asegura que esté en una ruta de login/register
      if (currentPath !== '/login' && currentPath !== '/register' && currentPath !== '/login/basic') {
        window.history.pushState({}, '', '/login');
      }
      
      // Renderiza la vista de login/registro
      app.innerHTML = renderLogin();
      handleLoginEvents(renderApp); // Pasa renderApp a handleLoginEvents
      renderRoute();
    }
  }

  // Se inicia la aplicación
  renderApp();

  // Escucha los cambios de URL para re-renderizar
  window.addEventListener('popstate', renderApp);
});