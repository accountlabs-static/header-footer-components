import styled, { css } from 'styled-components';
import Link from '../../components/Link';
import { Container as BaseContainer } from '../../styles/layout.style';
import { DEVICE_QUERY_MOBILE } from '../../config';
import { H7 } from '../../styles/title.style';
import { Body } from '../../styles/body.style';

export const Container = styled(BaseContainer)`
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 48px 0 44px;
  @media ${DEVICE_QUERY_MOBILE} {
    padding: 12px 24px;
  }
`;

export const Groups = styled.div`
  display: flex;
  align-items: flex-start;
  @media ${DEVICE_QUERY_MOBILE} {
    flex-direction: column;
  }
`;

export const Group = styled.div`
  margin-right: 120px;
  display: flex;
  flex-direction: column;
  align-items: start;
  &:last-child {
    margin-right: 0;
  }
  @media ${DEVICE_QUERY_MOBILE} {
    margin: 0 0 40px;
  }
`;

export const Title = styled(H7)`
  color: var(--color-fg-subtle);
  margin-bottom: 32px;
`;

export const List = styled(Body)`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 0 40px;
  height: 220px;
  @media ${DEVICE_QUERY_MOBILE} {
    height: auto;
  }
`;

export const Item = styled.div`
  margin-bottom: 16px;
`;

const ProductLinkCssGenerator = ({ disabled }) => {
  return disabled ? null : css`
    color: var(--color-fg-muted);
    &:hover {
      color: var(--color-fg-emphasis);
      .link-arrow {
        opacity: 1;
        color: var(--color-bd-pink);
      }
    }
    &:last-child {
      margin-bottom: 0;
    }
  `;
}

export const ProductLink = styled(Link)`
  display: inline-block;
  padding: 4px 0;
  color: var(--color-fg-slight);
  .link-arrow {
    opacity: 0;
    color: var(--color-fg-muted);
  }
  ${ProductLinkCssGenerator}
  @media ${DEVICE_QUERY_MOBILE} {
    font-size: 16px;
  }
`;

export const Tag = styled.span`
  font-family: Open Sans;
  font-weight: 600;
  display: inline-block;
  padding: 2px 6px;
  line-height: 16px;
  text-align: center;
  border-radius: 4px;
  font-size: 12px;
  background-color: ${props => `var(--color-bd-${props.color || 'pink'}-trans)`};
  color: ${props => `var(--color-bd-${props.color || 'pink'})`};
  margin-left: 6px;
  text-transform: uppercase;
`;

export const AllProducts = styled(H7)`
  margin-top: 30px;
  @media ${DEVICE_QUERY_MOBILE} {
    display: flex;
    flex-direction: column;
    margin-top: 0;
  }
`;

export const AllProductsLink = styled(Link)`
  padding: 4px 0;
  font-weight: 600;
  .link-arrow {
    position: relative;
    top: -1px;
  }
`;

export const KeystoneAppLink = styled(AllProductsLink)`
  margin-left: 78px;
  text-transform: uppercase;
  .app-init {
    opacity: 1;
  }
  .app-active {
    opacity: 0;
  }
  :hover {
    .app-active {
      opacity: 1;
    }
    .app-init {
      opacity: 0;
    }
  }
  @media ${DEVICE_QUERY_MOBILE} {
    margin: 30px 0 0 24px;
  }
`;

export const AppImg = styled.img`
  position: absolute;
  top: -4px;
  left: -30px;
  width: 24px;
  height: 24px;
  margin-right: 6px;
`;

export const Preview = styled.div`
  position: absolute;
  top: 0;
  left: 60%;
  bottom: 0;
  right: 0;
  background: var(--color-bg-muted);
  @media ${DEVICE_QUERY_MOBILE} {
    display: none;
  }
`;

export const Img = styled.img`
  width: 480px;
`;

export const FooterMask = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background: linear-gradient(180deg, rgba(26, 27, 31, 0) 0%, #1a1b1f 100%);
`;
