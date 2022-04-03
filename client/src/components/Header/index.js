import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from 'components/Button';
import Switcher from 'components/Switcher';
import { Link } from 'react-router-dom';

import appActions from 'store/app/actions';

import StyledComponent from './StyledComponent';

const { setTheme } = appActions;

const Header = () => {
  const dispatch = useDispatch();

  const { theme } = useSelector((state) => state.app);

  const changeTheme = () => {
    dispatch(setTheme(theme === 'light' ? 'dark' : 'light'));
  };

  return (
    <StyledComponent>
      <div className="container">
        <div className="logo">
          <span>yum food</span>
        </div>

        <div className="search">
          <div className="search_ingredients">
            <button type="button">Поиск по ингредиентам</button>
          </div>

          <div className="search_input-container">
            <div className="search_input-container_input">
              <input
                type="text"
                placeholder="Название блюда"
              />
            </div>

            <div className="search_input-container_button">
              <button
                type="button"
              >
                Найти
              </button>
            </div>
          </div>
        </div>

        <div className="menu">
          <Link to="/main">
            <Button onClick={() => {}}>Главная</Button>
          </Link>
          <Button onClick={() => {}}>Рецепты</Button>
        </div>

        <div className="switcher">
          <Switcher isActive={theme !== 'light'} onClick={changeTheme} />
        </div>
      </div>
    </StyledComponent>
  );
};

export default Header;
