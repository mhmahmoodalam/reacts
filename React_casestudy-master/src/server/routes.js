import React from 'react';
import { renderToString } from 'react-dom/server';

import { StaticRouter, RouterContext, matchPath, Route } from 'react-router-dom';
import routes from '../shared/routes.js';
import createLocation from '$history';
import LoginForm from './../shared/components/LoginForm.jsx';
import sharedRoutes from "./../shared/routes";

module.exports = (req, res) => {
  console.log(routes);
  routes.some(route => {
    let match = matchPath(req.url, route);
    if (match) {
      const context = {}
      const markup = renderToString(
        <StaticRouter
          location={req.url}
          context={context}
        >
          <div>
            {sharedRoutes.map(route => (
              <Route {...route} />
            ))}
          </div>
        </StaticRouter>
      );
      console.log("server side rendering",markup);
      res.render('pages/index', { "title": "React Case Study", "html": markup, data: JSON.stringify(markup), signInCss: "css/Signin.css", cssPath: " " });
    }
  });

}
