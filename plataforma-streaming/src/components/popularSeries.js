export function PopularSeries() {
    const popularSeries = document.createElement('section');
    popularSeries.className = 'popular-series';
    popularSeries.innerHTML = `
        <h2>Series Populares</h2>
        <div class="container">
            <div class="item">
                <img src="https://www.peliculas-hd.es/wp-content/uploads/2022/03/The-Witcher-S01E01-HD-720p.jpg" alt="The Witcher">
                <div class="info">
                    <h3>The Witcher</h3>
                    <p>La saga de los hechiceros de la Tierra de Narnia, cuando los reinos de la Tierra de Narnia se convierten en una civilización de hechiceros.</p>
                </div>
            </div>
            <div class="item">
                <img src="https://www.peliculas-hd.es/wp-content/uploads/2022/03/The-Witcher-S01E01-HD-720p.jpg" alt="The Witcher">
                <div class="info">
                    <h3>The Witcher</h3>
                    <p>La saga de los hechiceros de la Tierra de Narnia, cuando los reinos de la Tierra de Narnia se convierten en una civilización de hechiceros.</p>
                </div>
            </div>
        </div>
    `;
    return popularSeries;
}