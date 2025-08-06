import happy_gilmore from '../../assets/happy-gilmore-2.webp';
import spiderman from '../../assets/spiderman-no-way-home.webp';
import sinners from '../../assets/sinners.webp';
import superman from '../../assets/superman-cover.webp';
import dragon from '../../assets/how-to-train-your-dragon.webp';

export function peliculas() {
    const peliculasSection = document.createElement('section');
    peliculasSection.className = 'peliculas';
    peliculasSection.innerHTML = `
        <h2>Películas</h2>
        <div class="container">
            <div class="card">
                <img src="${happy_gilmore}" alt="Happy Gilmore">
                <div class="card-info">
                    <h2>Happy Gilmore 2</h2>
                    <p>Un golfista poco convencional usa su talento y temperamento para triunfar en el mundo del golf profesional, enfrentando desafíos y rivales con humor y determinación.</p>
                </div>
            </div>

            <div class="card">
                <img src="${spiderman}" alt="Spiderman">
                <div class="card-info">
                    <h2>Spiderman: No Way Home</h2>
                    <p>Peter Parker busca ayuda del Doctor Strange cuando su identidad es revelada, lo que provoca la llegada de villanos de otros universos y pone en peligro el multiverso.</p>
                </div>
            </div>

            <div class="card">
                <img src="${sinners}" alt="Sinners">
                <div class="card-info">
                    <h2>Sinners</h2>
                    <p>Un grupo de personas se enfrenta a sus propios pecados y secretos en una historia de redención y suspenso, donde cada decisión puede cambiar sus vidas para siempre.</p>
                </div>
            </div>

            <div class="card">
                <img src="${superman}" alt="Superman">
                <div class="card-info">
                    <h2>Superman</h2>
                    <p>Clark Kent debe equilibrar su vida como Superman mientras enfrenta una nueva amenaza que pone en peligro el futuro de la humanidad.</p>
                </div>
            </div>

            <div class="card">
                <img src="${dragon}" alt="How to train your dragon">
                <div class="card-info">
                    <h2>How to train your dragon</h2>
                    <p>En la isla de Berk, un joven vikingo llamado Hipo desafía las tradiciones de su pueblo al entablar una inesperada amistad con un temible dragón, demostrando que humanos y dragones pueden convivir en armonía.</p>
                </div>
        </div>
    `;
    return peliculasSection;
}