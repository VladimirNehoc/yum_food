import React from 'react';
import {
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';

import _ from 'lodash';

import routes from './routes';

const AppRoutes = () => (
  <Routes>
    {
      _.map(routes, (route) => (
        <Route
          path={route.path}
          element={route.component}
          key={route.path}
        />
      ))
    }

    <Route path="*" element={<Navigate to="/recipes" />} />
  </Routes>
);

export default AppRoutes;
