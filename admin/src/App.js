import React, { Suspense, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import _ from 'lodash';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import GlobalStyles from 'components/GlobalStyles';

import Menu from 'components/Menu';
import PageContainer from 'containers/PageContainer';
import api from 'api';
import appActions from 'store/app/actions';
import AppRoutes from './AppRoutes';

import { light, dark } from '../theme';

const { setUnits } = appActions;

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
      <GlobalStyles />

      <PageContainer>
        {/* <div className="header">
          <Header />
        </div> */}

        <div className="menu">
          <Menu />
        </div>

        <div className="content">
          <Suspense fallback={<div>Загрузка...</div>}>
            <AppRoutes />
          </Suspense>
        </div>
      </PageContainer>

      <ToastContainer
        autoClose={3000}
        closeOnClick={false}
        pauseOnHover
        theme={theme}
      />
    </ThemeProvider>
  );
};

export default App;
