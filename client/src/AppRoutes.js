import React from 'react';
import {
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';

const Main = React.lazy(() => import('./pages/Main'));
const Recipe = React.lazy(() => import('./pages/Recipe'));

const AppRoutes = () => (
  <Routes>
    <Route path="/main" element={<Main />} />
    <Route path="/recipe/:recipeId" element={<Recipe />} />
    <Route path="*" element={<Navigate to="/main" />} />
  </Routes>
);

export default AppRoutes;
