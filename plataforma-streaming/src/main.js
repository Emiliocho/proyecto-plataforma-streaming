import './style.css';
import { Navbar } from './components/navbar/navbar.js';
import { Home } from './components/home/home.js';
import { PopularSeries } from './components/Series populares/popularSeries.js';
import { initCarrusel } from './components/home/carrusel.js';
import { renderLogin, handleLoginEvents, renderRoute } from './routes/login/login.js';
import { Perfil } from './routes/perfil/perfil.js';
import { series } from './routes/series/series.js';
import { peliculas } from './routes/peliculas/peliculas.js';

document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app');

  const routes = {
    '/': () => {
      app.appendChild(Home());
      app.appendChild(PopularSeries());
      initCarrusel();
    },
    '/perfil': () => {
      const perfilComponent = Perfil();
      if (perfilComponent) app.appendChild(perfilComponent);
    },
    '/series': () => {
      const seriesComponent = series();
      if (seriesComponent) app.appendChild(seriesComponent);
    },
    '/peliculas': () => {
      const peliculasComponent = peliculas();
      if (peliculasComponent) app.appendChild(peliculasComponent);
    }
  };

  function renderApp() {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const currentPath = window.location.pathname;
    app.innerHTML = '';

    if (isLoggedIn) {
      const userData = localStorage.getItem('userData');
      const isValidUser = userData && (() => {
        try {
          const { email, password, username } = JSON.parse(userData);
          return email && password && username;
        } catch {
          return false;
        }
      })();

      if (!isValidUser) {
        localStorage.removeItem('isLoggedIn');
        window.history.pushState({}, '', '/login');
        renderApp();
        return;
      }

      if (['/login', '/register', '/login/basic'].includes(currentPath)) {
        window.history.pushState({}, '', '/');
      }

      app.appendChild(Navbar(renderApp));

      const routeHandler = routes[currentPath] || routes['/'];
      routeHandler();

    } else {
      if (!['/login', '/register', '/login/basic'].includes(currentPath)) {
        window.history.pushState({}, '', '/login');
      }

      app.innerHTML = renderLogin();
      handleLoginEvents(renderApp);
      renderRoute();
    }
  }

  renderApp();
  window.addEventListener('popstate', renderApp);
});
