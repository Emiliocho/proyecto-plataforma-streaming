export function Navbar() {
    const navbar = document.createElement('nav');
    navbar.className = 'navbar';
    navbar.innerHTML = `
    <h1>Streaming</h1>
    <ul>
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Series</a></li>
        <li><a href="#">Peliculas</a></li>
        <li><a href="#">Mis perfil</a></li>
    </ul>
    `;
    return navbar;
}