import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  text-align: center;
  color: #ffffff;

  & > p {
    font-size: 14px;
    opacity: 0.4;
    line-height: 26px;
  }

  @media (max-width: 768px) {
    margin-top: 6px;
    padding: 0 30px;

    & > p {
      line-height: 20px;
      margin-bottom: 5px;
    }
  }
`;

function getCopyright(host) {
  return host === 'a.cobowallet.cn' || host === 'wf14.aoyingame.com'
    ? '铠石 © 版权所有 2018 - 2022'
    : 'Keystone © All rights reserved 2018 - 2022';
}

export default function getInfo() {
  return (
    <Container>
      <p>{getCopyright()}</p>
    </Container>
  );
}
