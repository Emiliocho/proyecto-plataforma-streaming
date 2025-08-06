import adolescence from '../../assets/adolescence.webp';
import squidGames from '../../assets/squid-games-3.webp';
import chespirito from '../../assets/chespirito.webp';
import  '../home/home.css';

export function Home() {
    const home = document.createElement('section');
    home.className = 'home';
    home.innerHTML = `
        <div class="carrusel">
            <div class="item active">
                <img src="${adolescence}" alt="adolescence">
                <div class="info">
                    <h2>Adolescence</h2>
                    <p>Drama psicológico que explora las transiciones emocionales en un mundo distópico.</p>
                 </div>
            </div>

            <div class="item">
                <img src="${squidGames}" alt="Squid Games">
                <div class="info">
                <h2>Squid Games</h2>
                <p>Una serie de juegos de acción y aventura para niños de 8 años.</p>
                </div>
            </div>

            <div class="item">
                <img src="${chespirito}" alt="Chespirito">
                <div class="info">
                <h2>Chespirito</h2>
                <p>La nueva serie de 2025 explora la vida y legado de Roberto Gómez Bolaños, mostrando su impacto en la comedia latinoamericana.</p>
                </div>
            </div>           

        </div>
    `;

    return home;
}