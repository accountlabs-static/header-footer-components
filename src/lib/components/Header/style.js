import styled from 'styled-components'
import ArrowLeft from '../assets/images/ArrowLeft'
import { H6 } from '../styles/title.style'
import Drop from '../assets/images/Drop'
import { Container as Con } from '../styles/layout.style'
import Button from '../components/Button'
import { DEVICE_QUERY_MOBILE } from '../config'

export const HeaderStickyBox = styled.div`
  position: sticky;
  display: flex;
  flex-direction: column;
  top: 0;
  z-index: 1100;
  width: 100vw;
  background-color: var(--color-bg-default);
`

export const HeaderBox = styled.header`
  background-color: rgba(17, 18, 20, 0);
  transition: var(--transition);
  nav {
    transition: var(--transition);
    z-index: 1200;
  }
  &.active nav {
    background-color: rgba(17, 18, 20, 0.88);
    backdrop-filter: blur(8px);
  }
  &.active-mobile {
    height: 100vh;
  }
  @media ${DEVICE_QUERY_MOBILE} {
    --background-color: rgba(17, 18, 20, 0.88) !important;
    --backdrop-filter: blur(8px) !important;
    background: var(--background-color);
    backdrop-filter: var(--backdrop-filter);
    nav {
      background: none !important;
      backdrop-filter: none !important;
    }
    &.active-mobile {
      .header-menus {
        display: inline-block;
      }
    }
    &.active-menu {
      .header-menus {
        display: none;
      }
      .header-logo-mobile {
        opacity: 0;
      }
      .header-menu-back,
      .header-submenu-title {
        visibility: visible;
        opacity: 1;
      }
    }
  }
`

export const Container = styled(Con)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: var(--height-header);
  z-index: 1200;
  @media ${DEVICE_QUERY_MOBILE} {
    padding: 0 16px;
    box-sizing: border-box;
  }
`

export const LogoBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`

export const LogoLink = styled.a`
  position: relative;
  display: flex;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`

export const Logo = styled.img`
  height: 32px;
  @media ${DEVICE_QUERY_MOBILE} {
    display: none;
  }
`

export const LogoMobile = styled.img.attrs({
  className: 'header-logo-mobile',
})`
  height: 32px;
  display: none;
  transition: var(--transition);
  @media ${DEVICE_QUERY_MOBILE} {
    display: inline-block;
  }
`

export const Menus = styled.ul.attrs({
  className: 'header-menus',
})`
  display: flex;
  align-items: center;
  @media ${DEVICE_QUERY_MOBILE} {
    position: absolute;
    top: var(--height-header);
    display: none;
    right: 0;
    left: 0;
    height: calc(100vh - var(--height-header));
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-start;
    padding-top: 24px;
  }
`

export const MenuTitle = styled(H6)`
  color: var(--color-fg-muted);
  padding: 4px 12px;
  cursor: pointer;
  transition: var(--transition);
  box-sizing: border-box;
  display: flex;
  align-items: center;
  svg {
    transition: var(--transition);
  }
  &.active {
    color: var(--color-fg-emphasis);
    height: var(--height-header);
    svg {
      color: var(--color-bd-pink);
    }
  }
  @media ${DEVICE_QUERY_MOBILE} {
    padding: 0;
    & > span {
      transform: rotate(-90deg);
    }
    &.active {
      height: auto;
      background: var(--color-bg-slight);
    }
    &:hover {
      background: var(--color-bg-slight);
    }
  }
`

export const Menu = styled.li`
  display: flex;
  justify-content: flex-start;
  margin-right: 16px;
  gap: 0 10px;
  svg {
    width: 24px;
    height: 24px;
    color: var(--color-fg-muted);
  }
  &:last-child {
    margin-right: 0;
  }
  @media ${DEVICE_QUERY_MOBILE} {
    margin: 0 0 16px;
    padding: 12px 24px;
    &:last-child {
      margin-bottom: 0;
    }
    &.menu-language {
      margin-top: 48px;
    }
  }
`

export const MenuEntryMobile = styled.div`
  display: none;
  .menu-mobile-icon {
    color: var(--color-fg-muted);
  }
  @media ${DEVICE_QUERY_MOBILE} {
    display: flex;
    align-items: center;
    gap: 0 16px;
  }
`

export const MenuBackMobile = styled(ArrowLeft).attrs({
  width: '24',
  height: '24',
  className: 'header-menu-back',
})`
  color: var(--color-fg-muted);
  display: none;
  position: absolute;
  top: 4px;
  left: 4px;
  z-index: 2;
  transition: var(--transition);
  @media ${DEVICE_QUERY_MOBILE} {
    display: block;
    visibility: hidden;
    opacity: 0;
    transition: var(--transition);
  }
`

export const DropIcon = styled(Drop)`
  margin-left: 4px;
  color: var(--color-fg-subtle);
`

export const Entries = styled.div`
  display: flex;
  align-items: center;
  min-width: 137px;
  justify-content: flex-end;
  gap: 0 24px;
  @media ${DEVICE_QUERY_MOBILE} {
    display: none;
  }
`

export const EntryIcon = styled.a`
  color: var(--color-fg-muted);
  margin-right: 24px;
  &:last-child {
    margin-right: 28px;
  }
`

export const Submenu = styled.div.attrs({
  className: 'theme-dark',
})`
  position: absolute;
  top: var(--height-header);
  left: 0;
  right: 0;
  z-index: 800;
  border: 1px solid var(--color-border-slight);
  border-left: none;
  border-right: none;
  background: var(--color-bg-default-trans);
  backdrop-filter: blur(6px);
  box-sizing: border-box;
  height: 0;
  opacity: 0;
  transform: translateY(-${(props) => props.height / 2}px);
  overflow: hidden;
  transition: all var(--transition-duration) ease-out;
  &.active {
    opacity: 1;
    height: ${(props) => props.height}px;
    transform: translateY(0);
  }
  @media ${DEVICE_QUERY_MOBILE} {
    padding-bottom: 48px;
    transform: translateY(-100vh);
    --height: calc(100vh - var(--header-computed-height));
    height: var(--height);
    overflow-y: auto;
    background: transparent;
    backdrop-filter: none;
    border: none;
    z-index: 1100;
    &.active {
      height: var(--height);
    }
  }
`

export const SubmenuTitle = styled(H6).attrs({
  className: 'header-submenu-title',
})`
  color: var(--color-fg-muted);
  display: none;
  @media ${DEVICE_QUERY_MOBILE} {
    display: block;
    visibility: hidden;
    opacity: 0;
    transition: var(--transition);
  }
`

export const BuyButton = styled(Button)`
  display: ${(props) => (props.show ? 'none' : 'block')};
  height: 32px;
  padding: 0 16px;
  color: var(--color-fg-default);
  font-size: 14px;
  font-family: 'Open Sans';
  line-height: 22px;
  background: transparent;
  border-image: var(--color-gd-primary) 1;
`

export const ProductQuantity = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -8px;
  left: 12px;
  width: auto;
  min-width: 19px;
  height: 18px;
  padding: 0 6px;
  color: #ffffff;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 20px;
  white-space: nowrap;
  letter-spacing: 0.04em;
  border-radius: 10px;
  background: var(--color-bd-pink);
  @media ${DEVICE_QUERY_MOBILE} {
    width: 16px;
    height: 16px;
    min-width: 16px;
    top: -3px;
    left: 14px;
  }
`

export const CartIconBox = styled.div`
  cursor: pointer;
  svg {
    color: var(--color-fg-muted);
  }
`
