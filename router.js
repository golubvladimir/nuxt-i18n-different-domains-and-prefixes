import Vue from 'vue'
import Router from 'vue-router'
import {defaultDomain, espaniaDomain} from "~/helpers/domains";
import {defaultDomainLangs} from "~/helpers/langs";

Vue.use(Router)

export function createRouter(ssrContext, createDefaultRouter, routerOptions, config, store) {
  const options = routerOptions ? routerOptions : createDefaultRouter(ssrContext, config).options
  const { req } = ssrContext;

  const domain = req.headers.host;

  if (domain === defaultDomain) {
    return new Router({
      ...options,
      routes: fixRoutes(options.routes, store)
    })
  }

  if (domain === espaniaDomain) {
    return new Router(options)
  }
}

function fixRoutes(defaultRoutes, store) {
  // default routes that come from `pages/`
  // Filter some routes using the content of the store for example

  let langsRoutes = [];

  defaultDomainLangs.map(lang => {
    const langRoutes = defaultRoutes.map(route => ({
      ...route,
      name: `${ route.name }_${ lang }`,
      path: `/${ lang }${ route.path }`
    }));

    langsRoutes = langsRoutes.concat(langRoutes);
  })

  return [
    ...langsRoutes,
    ...defaultRoutes
  ];
}
