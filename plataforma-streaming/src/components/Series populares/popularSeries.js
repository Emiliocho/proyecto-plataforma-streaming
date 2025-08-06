import './series.css';
import adolescence from '../../assets/adolescence.webp';
import squidGames from '../../assets/squid-games-3.webp';

export function PopularSeries() {
    const popularSeries = document.createElement('section');
    popularSeries.className = 'popular-series';
    popularSeries.innerHTML = `
        <h2>Series Populares</h2>
        <div class="container">
            <div class="card">
                <img src="${adolescence}" alt="adolescence">
                <div class="card-info">
                    <h2>Adolescence</h2>
                    <p>Drama psicológico que explora las transiciones emocionales en un mundo distópico.</p>
                 </div>
            </div>

            <div class="card">
                <img src="${squidGames}" alt="Squid Games">
                <div class="card-info">
                <h2>Squid Games</h2>
                <p>es una serie surcoreana de suspenso y supervivencia que presenta juegos infantiles con consecuencias mortales.</p>
                </div>
            </div>
        </div>
    `;
    return popularSeries;
}