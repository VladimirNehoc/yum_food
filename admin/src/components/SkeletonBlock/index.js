import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import StyledComponent from './StyledComponent';

const defaultTemplate = [
  ['100px', '100px', null, null, '50%'],
  ['calc(80% - 120px)', '15px', '120px', '25px'],
  ['calc(50% - 120px)', '15px', '120px', '55px'],
  ['100%', '15px', null, '120px'],
  ['70%', '15px', null, '155px'],
  ['80%', '15px', null, '190px'],
  ['50%', '15px', null, '225px'],
];

const SkeletonBlock = ({
  template,
  height: skeletonHeight,
}) => (
  <StyledComponent height={skeletonHeight}>
    {
        _.map(template, (item, index) => {
          const [
            width,
            height,
            fromLeft,
            fromTop,
            borderRadius,
          ] = item;

          return (
            <div
              className="item"
              style={{
                width,
                height,
                left: fromLeft,
                top: fromTop,
                borderRadius,
              }}
              key={index}
            />
          );
        })
      }
  </StyledComponent>
);

SkeletonBlock.propTypes = {
  template: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
  height: PropTypes.string,
};

SkeletonBlock.defaultProps = {
  template: defaultTemplate,
  height: null,
};

export default SkeletonBlock;
