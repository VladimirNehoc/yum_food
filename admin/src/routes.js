import React from 'react';

const Recipe = React.lazy(() => import('./pages/Recipes'));
const Exercises = React.lazy(() => import('./pages/Exercises'));

export default [
  {
    isMenuItem: true,
    path: 'recipes/*',
    link: 'recipes',
    name: 'Рецепты',
    component: <Recipe />,
  },
  {
    isMenuItem: true,
    path: 'exercises/*',
    link: 'exercises',
    name: 'Задачи',
    component: <Exercises />,
  },
];
