import React, { Suspense } from 'react';
import { ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import GlobalStyles from 'components/GlobalStyles';

import Menu from 'components/Menu';
import PageContainer from 'containers/PageContainer';
import AppRoutes from './AppRoutes';

import { light, dark } from '../theme';

const App = () => {
  const { theme } = useSelector((state) => state.app);

  // Установка темы приложения
  const themeData = theme === 'light' ? light : dark;

  return (
    <ThemeProvider theme={themeData}>
      <GlobalStyles />

      <PageContainer>
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
        autoClose={5000}
        closeOnClick={false}
        pauseOnHover
        theme={theme}
      />
    </ThemeProvider>
  );
};

export default App;
