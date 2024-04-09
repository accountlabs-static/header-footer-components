import styled from 'styled-components';
import { DEVICE_QUERY_MOBILE } from '../../config';
import { H5, H7A } from '../../styles/title.style';
import { Body } from '../../styles/body.style';

export const PartnershipsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media ${DEVICE_QUERY_MOBILE} {
    align-items: flex-start;
  }
`;

export const Wallets = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: center;
  gap: 40px;
  @media ${DEVICE_QUERY_MOBILE} {
    flex-direction: column;
    margin-top: 0;
    svg {
      width: 48px;
      height: 48px;
    }
    gap: 0;
  }
`;

export const WalletInfo = styled.div``;

export const WalletName = styled(H5)`
  color: var(--color-fg-muted);
  margin-top: 20px;
  font-weight: 600;
  text-align: center;
  @media ${DEVICE_QUERY_MOBILE} {
    margin-top: 0;
    text-align: start;
  }
`;

export const WalletDescription = styled(Body)`
  text-align: center;
  color: var(--color-fg-subtle);
  @media ${DEVICE_QUERY_MOBILE} {
    text-align: start;
  }
`;

export const Wallet = styled.div`
  border: 1px solid var(--color-border-subtle);
  padding-top: 30px;
  padding-bottom: 30px;
  width: 280px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: var(--color-bg-muted);
    border-color: var(--color-bg-muted);
    cursor: pointer;
    ${WalletName} {
      color: var(--color-fg-emphasis);
    }
    ${WalletDescription} {
      color: var(--color-fg-muted);
    }
  }
  @media ${DEVICE_QUERY_MOBILE} {
    flex-direction: row;
    padding: 12px 24px;
    width: 100%;
    border: 0px;
    gap: 16px;
    justify-content: flex-start;
  }
`;

export const AllPartnershipsLink = styled(H7A)`
  color: var(--color-fg-subtle);
  margin-top: 40px;
  margin-bottom: 28px;
  font-weight: 600;
  a {
    color: inherit;
  }
  &:hover {
    color: var(--color-bd-pink);
  }
  @media ${DEVICE_QUERY_MOBILE} {
    margin-left: 24px;
  }
`;
