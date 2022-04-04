import React, { Suspense, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import _ from 'lodash';

import GlobalStyles from 'components/GlobalStyles';

import Header from 'components/Header';
import PageContainer from 'containers/PageContainer';
import api from 'api';
import appActions from 'store/app/actions';
import AppRoutes from './AppRoutes';

import { light, dark } from '../theme';

const { setUnits } = appActions;

const AppComponent = styled.div`
    width: 100%;
    font-size: 14px;
    
    a {
      text-decoration: none;
    }
  `;

const App = () => {
  const dispatch = useDispatch();

  const { theme, units } = useSelector((state) => state.app);

  // Установка темы приложения
  const themeData = theme === 'light' ? light : dark;

  useEffect(() => {
    api.get('units', { $limit: 50 })
      .then((res) => {
        const unitsData = _.keyBy(res.data, 'id');

        dispatch(setUnits(unitsData));
      });
  }, []);

  if (_.isEmpty(units)) return null;

  return (
    <ThemeProvider theme={themeData}>
      <AppComponent>
        <GlobalStyles />
        <Header />

        <Suspense fallback={<div>Загрузка...</div>}>
          <PageContainer>
            <AppRoutes />
          </PageContainer>
        </Suspense>
      </AppComponent>
    </ThemeProvider>
  );
};

export default App;
