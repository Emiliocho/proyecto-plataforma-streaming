import adolescence from '../../assets/adolescence.webp';
import squidGames from '../../assets/squid-games-3.webp';
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

        </div>
    `;

    return home;
}