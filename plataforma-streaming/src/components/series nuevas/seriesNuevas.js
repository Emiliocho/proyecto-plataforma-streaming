import '../series nuevas/seriesNuevas.css';
import adolescence from '../../assets/adolescence.webp';
import squidGames from '../../assets/squid-games-3.webp';
import chespirito from '../../assets/chespirito.webp';
import The_rookie from '../../assets/the-rookie.webp';
import Suits from '../../assets/Suits-9.webp';

export function nuevasSeries() {
    const nuevasSeriesSection = document.createElement('section');
    nuevasSeriesSection.className = 'nuevas-series';
    nuevasSeriesSection.innerHTML = `
        <h2>Agregadas recientemente</h2>
        <div class="container">
            <div class="card">
                <img src="${adolescence}" alt="Adolescence">
                <div class="card-info">
                    <h2>Adolescence</h2>
                    <p>Serie juvenil que explora los desafíos emocionales y sociales de la adolescencia moderna.</p>
                </div>
            </div>

            <div class="card">
                <img src="${squidGames}" alt="Squid Games">
                <div class="card-info">
                    <h2>Squid Games</h2>
                    <p>Serie surcoreana de suspenso y supervivencia con juegos infantiles de consecuencias mortales.</p>
                </div>
            </div>

            <div class="card">
                <img src="${chespirito}" alt="Chespirito">
                <div class="card-info">
                    <h2>Chespirito</h2>
                    <p>Explora la vida y legado de Roberto Gómez Bolaños, ícono de la comedia latinoamericana.</p>
                </div>
            </div>

            <div class="card">
                <img src="${The_rookie}" alt="The Rookie">
                <div class="card-info">
                    <h2>The Rookie</h2>
                    <p>Drama policial sobre oficiales novatos enfrentando su primer año en la fuerza.</p>
                </div>
            </div>

            <div class="card">
                <img src="${Suits}" alt="Suits">
                <div class="card-info">
                    <h2>Suits</h2>
                    <p>Drama legal sobre un abogado sin título que trabaja en un prestigioso bufete de Nueva York.</p>
                </div>
            </div>
        </div>
    `;
    return nuevasSeriesSection;
}
