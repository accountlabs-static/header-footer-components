import styled from 'styled-components';
import { DEVICE_QUERY_MOBILE } from '../config';

export const Container = styled.div`
  width: 1280px;
  max-width: 96%;
  min-width: 1024px;
  margin: 0 auto;

  @media ${DEVICE_QUERY_MOBILE} {
    width: 100%;
    max-width: 100%;
    min-width: auto;
  }
`;
