import pathToRegexp from 'path-to-regexp';
import { createBrowserHistory } from 'history'

let routes = [];
let routesByName = {};
let history = createBrowserHistory();

function setRoutes(routesConfig) {
  routes = [];
  routesByName = {};

  routesConfig.forEach((route) => {
    const compiledRoute = getCompiledRoute(route);

    routes.push(compiledRoute);
    routesByName[compiledRoute.name] || (routesByName[compiledRoute.name] = compiledRoute);
  });
}

function listen(fn) {
  history.listen(() => fn(current()));
}

function current() {
  for (let i = 0; i < routes.length; i++) {
    const match = routes[i].path.exec(history.location.pathname);

    if (match) {
      return {
        ...routes[i],
        path: history.location.pathname,
        params: getMatchedRouteParams(routes[i], match)
      };
    }
  }

  return null;
}

function getCompiledRoute(route) {
  let params = [];
  const routePath = route.path ? route.path.toString() : '/:path*';
  const path = pathToRegexp(routePath, params);
  const resolve = pathToRegexp.compile(routePath);

  return {...route, path, params, resolve};
}

function getMatchedRouteParams(route, matches) {
  let params = {};
  route.params.forEach((param, index) => params[param.name] = matches[index + 1]);

  return params;
}

function resolve(name, params = {}) {
  return routesByName[name] ? routesByName[name].resolve(params) : '/';
}

function navigate(name, params) {
  history.push(resolve(name, params));
}

export { setRoutes, current, listen, navigate, resolve, history };
