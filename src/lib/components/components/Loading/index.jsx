import React from 'react';
import PropTypes from 'prop-types';
import { Main } from './style';

function Loading(props) {
  return <Main {...props} className="loading-line"></Main>;
}

Loading.propTypes = {
  color: PropTypes.string,
  background: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
};

export default Loading;
