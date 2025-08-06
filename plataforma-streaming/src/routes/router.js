const routes = {
    home: '/',
    seriesPopulares: '/series-populares',
    perfil: '/perfil',
};

export function getRoute(path) {
    return routes[path];
}