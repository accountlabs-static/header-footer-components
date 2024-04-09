import propTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const Span = styled.span`
  display: inline-flex;
  align-items: center;
`;

export default function Format({ children, ...args }) {
  return (
    <Span {...args}>
      {'\u200b'}
      {children}
    </Span>
  );
}

