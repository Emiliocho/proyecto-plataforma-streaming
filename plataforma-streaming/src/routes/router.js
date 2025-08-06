import { peliculas } from "./peliculas/peliculas";

const routes = {
    home: '/',
    series: '/series',
    peliculas: '/peliculas',
    perfil: '/perfil',
    login: '/login',
    register: '/register',
    loginBasic: '/login/basic',
};

export function getRoute(path) {
    return routes[path];
}