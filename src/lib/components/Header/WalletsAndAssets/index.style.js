import styled from 'styled-components';
import { Container } from '../../styles/layout.style';
import { DEVICE_QUERY_MOBILE } from '../../config';
import { H5, H7A } from '../../styles/title.style';
import { PopoverContainer } from '../../components/Popover/style';
import { Body } from '../../styles/body.style';
import Link from '../../components/Link';

export const WalletsAndAssetsWrapper = styled(Container)`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  @media ${DEVICE_QUERY_MOBILE} {
    margin: 0;
    width: 100%;
  }
`;

export const Wallets = styled.div`
  color: var(--color-fg-muted);
  margin-top: 40px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  a {
    height: fit-content;
    color: inherit;
  }
  @media ${DEVICE_QUERY_MOBILE} {
    flex-direction: column;
    margin-top: 0;
    width: 100%;
  }
`;

export const Wallet = styled.div`
  width: 260px;
  display: flex;
  flex-direction: column;
  display: flex;
  padding: 16px 16px 8px 16px;
  gap: 16px;
  &:hover {
    color: var(--color-fg-emphasis);
    background-color: var(--color-bg-subtle);
    cursor: pointer;
  }
  @media ${DEVICE_QUERY_MOBILE} {
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    padding: 12px 24px;
  }
`;

export const WalletIcon = styled.span`
  margin-right: 18px;
`;

export const WalletName = styled(H5)`
  display: flex;
  align-items: center;
  font-weight: 600;
  margin: 0 auto;
  svg,
  img {
    width: 48px;
    height: 48px;
    margin-right: 18px;
  }
  @media ${DEVICE_QUERY_MOBILE} {
    gap: 0;
    font-size: 16px;
    font-weight: 400;
    svg,
    img {
      height: 36px;
      width: 36px;
      margin-right: 16px;
    }
  }
`;

export const Coins = styled.ul`
  @media ${DEVICE_QUERY_MOBILE} {
    display: flex;
    flex-direction: row;
    gap: 4px;
    align-items: center;
  }
`;

export const Coin = styled.li`
  display: flex;
  padding: 4px 8px;
  align-items: center;
  gap: 16px;
  @media ${DEVICE_QUERY_MOBILE} {
    svg {
      height: 24px;
      width: 24px;
    }
    padding: 0;
  }
`;

export const MoreCoins = styled(Coin)`
  display: block;
  text-align: center;
  ${PopoverContainer} {
    max-width: 400px;
    padding: 8px;
    transform: translateX(-40%);
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const CoinName = styled(Body)`
  @media ${DEVICE_QUERY_MOBILE} {
    display: none;
  }
`;

export const WalletsAndAssetsLink = styled(Link)`
  display: inline-block;
  margin-top: 40px;
  margin-bottom: 28px;
  color: var(--color-fg-subtle);
  ${H7A}
  &:hover {
    color: var(--color-bd-pink);
  }
  @media ${DEVICE_QUERY_MOBILE} {
    margin-left: 24px;
  }
`;
