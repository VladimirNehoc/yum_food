import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import { toast } from 'react-toastify';

import Image from 'components/Image';
import Button from 'components/Button';
import ContainerBlock from 'containers/ContainerBlock';
import FiltersBlock from 'containers/FiltersBlock';

import api from 'api';

import mainActions from 'store/recipes/actions';

const {
  setItems,
  setIsLoadingItems,
} = mainActions;

const Main = () => {
  const dispatch = useDispatch();

  const { items } = useSelector((state) => state.recipes);

  useEffect(() => {
    dispatch(setIsLoadingItems(true));

    api.service('recipes').find()
      .then((res) => {
        dispatch(setItems(res.data));
      })
      .catch((err) => {
        toast(err.message, { type: 'error' });
      })
      .finally(() => {
        dispatch(setIsLoadingItems(false));
      });
  }, []);

  return (
    <>
      <div className="page-header">
        <div className="page-header_title">
          <span>Рецепты</span>
        </div>

        <Link to="/recipes/edit">
          <Button
            spinnerColor="#222"
            onClick={() => {}}
          >
            Новый рецепт
          </Button>
        </Link>
      </div>

      <FiltersBlock className="mt-15" template="" />

      <div className="list-items mt-15">
        {
        _.map(items, (item) => {
          const description = item.description.length > 250
            ? `${item.description.slice(0, 250).split(' ').slice(0, -1).join(' ')}...`
            : item.description;

          return (
            <Link
              to={`/recipes/edit/${item.id}`}
              key={item.id}
            >
              <ContainerBlock padding="15px">
                <div className="recipe-card">
                  <div className="recipe-card_image">
                    <Image path={item.image?.path} adaptive />
                  </div>

                  <div className="recipe-card_head">
                    <span>{item.name}</span>
                  </div>

                  <div className="recipe-card_content" alt={description}>
                    <span>{description}</span>
                  </div>
                </div>
              </ContainerBlock>
            </Link>
          );
        })
      }
      </div>
    </>
  );
};

export default Main;
