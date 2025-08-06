import '../navbar/navbar.css';

// La función Navbar ahora recibe renderRoute como argumento
export function Navbar(renderRoute) {
  const navbar = document.createElement('nav');
  navbar.className = 'navbar';
  navbar.innerHTML = `
    <h1>Streaming</h1>
    <ul class="navbar-menu">
      <li><a href="#">Inicio</a></li>
      <li><a href="#">Series</a></li>
      <li><a href="#">Películas</a></li>
      <li class="dropdown">
        <span class="dropdown-toggle">Mi perfil</span>
        <ul class="dropdown-menu">
          <li><a href="#" id="view-profile">Ver perfil</a></li>
          <li><a href="#" id="logout">Cerrar sesión</a></li>
        </ul>
      </li>
    </ul>
  `;

  const logoutButton = navbar.querySelector('#logout');
  logoutButton.addEventListener('click', (event) => {
    event.preventDefault();

    // Elimina los datos de usuario del localStorage
    localStorage.removeItem('userData');
    localStorage.removeItem('isLoggedIn');

    // Usa la lógica de enrutamiento para redirigir y renderizar
    window.history.pushState({}, '', '/login');
    
    // Si renderRoute existe, llámala para actualizar la vista
    if (renderRoute) {
        renderRoute();
    }
  });

  return navbar;
}