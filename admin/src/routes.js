import React from 'react';

const Recipe = React.lazy(() => import('./pages/Recipes'));

export default [
  {
    isMenuItem: true,
    path: 'recipes/*',
    link: 'recipes',
    name: 'Рецепты',
    component: <Recipe />,
  },
];
