import { PopularSeries } from "../../components/Series populares/popularSeries.js";
import { nuevasSeries } from "../../components/series nuevas/seriesNuevas.js";


export function series() {
  const seccion = document.createElement('section');
  seccion.className = 'series';

  // Componente importado
  const seriesPopulares = PopularSeries();
  const seriesNuevas = nuevasSeries();

  // Construcción del bloque
  seccion.appendChild(seriesPopulares);
  seccion.appendChild(seriesNuevas);

  return seccion;
}
