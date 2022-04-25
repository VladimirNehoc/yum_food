import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

import _ from 'lodash';
import cn from 'classnames';

import ContainerBlock from 'containers/ContainerBlock';
import Switcher from 'components/Switcher';

import appActions from 'store/app/actions';
import routes from '../../routes';

import StyledComponent from './StyledComponent';

const { setTheme } = appActions;

const routesForMenu = _.filter(routes, (route) => route.isMenuItem);

const Menu = () => {
  const dispatch = useDispatch();

  const { pathname } = useLocation();

  const pagePath = _.get(_.split(pathname, '/'), '[1]', '');

  const { theme } = useSelector((state) => state.app);

  const changeTheme = () => {
    dispatch(setTheme(theme === 'light' ? 'dark' : 'light'));
  };

  return (
    <StyledComponent>
      <ContainerBlock padding="10px">
        <div className="header">
          <Switcher
            isActive={theme === 'dark'}
            onClick={changeTheme}
          />
        </div>

        <div className="menu-items">
          {
              _.map(routesForMenu, (route) => {
                const routePath = _.get(_.split(route.path, '/'), '[0]', '');
                const active = pagePath === routePath;

                const menuItemClass = cn('menu-items_item', { active });

                return (
                  <Link
                    className={menuItemClass}
                    to={route.link}
                    key={route.path}
                  >
                    {route.name}
                  </Link>
                );
              })
            }
        </div>
      </ContainerBlock>
    </StyledComponent>
  );
};

export default Menu;
