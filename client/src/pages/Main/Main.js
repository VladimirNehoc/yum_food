import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import _ from 'lodash';

import ContainerBlock from 'containers/ContainerBlock';

const Main = () => {
  const { items } = useSelector((state) => state.main);

  return (
    <div className="list-items">
      {
        _.map(items, (item) => (
          <Link
            to={`/recipe/${item.id}`}
            key={item.id}
          >
            <ContainerBlock>
              <span>{item.name}</span>
            </ContainerBlock>
          </Link>
        ))
      }
    </div>
  );
};

export default Main;
