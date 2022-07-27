import React from 'react';
import {
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';

import Main from './Main';

import StyledComponent from './StyledComponent';

const ExercisesPage = () => (
  <StyledComponent>
    <Routes>
      <Route
        path="/"
        element={<Main />}
      />

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  </StyledComponent>
);

export default ExercisesPage;
