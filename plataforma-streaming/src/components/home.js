import adolescence from '../assets/adolescence.webp';
import '../home.css';
export function Home() {
    const home = document.createElement('section');
    home.className = 'home';
    home.innerHTML = `
        <div class="carrusel">
            <div class="item">
                <img src="${adolescence}" alt="adolescence">
            </div>
            <div class="info">
                <h2>Adolescence</h2>
                <p>Drama psicológico que explora las transiciones emocionales en un mundo distópico.</p>
            </div>
        </div>
    `;
    return home;
}