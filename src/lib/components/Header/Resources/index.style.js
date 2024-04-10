import ArrowWireRight from '../../assets/images/ArrowWireRight'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Container } from '../../styles/layout.style'
import { H5 } from '../../styles/title.style'
import { Body, Caption } from '../../styles/body.style'
import { DEVICE_QUERY_MOBILE } from '../../config'

export const Main = styled(Container)`
  padding: 56px 0;
  color: var(--color-fg-muted);
  display: flex;
  justify-content: center;
  @media ${DEVICE_QUERY_MOBILE} {
    display: block;
    padding: 0;
  }
`

export const Start = styled.div`
  padding-left: 120px;
  border-left: 1px solid var(--color-border-subtle);
  transition: var(--transition);
  &:hover {
    color: var(--color-fg-emphasis);
    .start-icon {
      opacity: 0;
    }
    .start-icon-active {
      opacity: 1;
    }
  }
  @media ${DEVICE_QUERY_MOBILE} {
    padding: 0;
    margin: 0;
    border-right: none;
    border-left: none;
  }
`

export const StartIcon = styled.div`
  position: relative;
  width: 64px;
  height: 64px;
  img {
    width: 100%;
    height: 100%;
    transition: var(--transition);
  }
  .start-icon-active {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
  }
  @media ${DEVICE_QUERY_MOBILE} {
    display: none;
  }
`

export const StartTitle = styled(H5)`
  margin: 36px 0 12px;
  &:hover {
    & > span {
      margin-left: 14px;
      transition: 0.25s;
    }
  }
  &:not(:hover) {
    & > span {
      transition: 0.25s;
    }
  }
  @media ${DEVICE_QUERY_MOBILE} {
    margin-top: 0;
  }
`

export const StartArrow = styled(ArrowWireRight)`
  color: var(--color-fg-subtle);
  margin-left: 8px;
  & > svg {
    fill: var(--color-bd-pink);
  }
  @media ${DEVICE_QUERY_MOBILE} {
    display: inline-block;
  }
`

export const StartDesc = styled(Caption)`
  color: var(--color-fg-subtle);
`

export const Grid = styled(Body)`
  display: grid;
  grid-template-columns: repeat(4, minmax(220px, 280px));
  gap: 32px 16px;
  color: var(--color-fg-muted);
  white-space: nowrap;
  @media ${DEVICE_QUERY_MOBILE} {
    grid-template-columns: 1fr;
    height: auto;
    gap: 16px;
  }
`

export const Item = styled.div`
  width: 100%;
  padding: 16px 12px;
  &:hover {
    color: var(--color-fg-emphasis);
    background-color: var(--color-bg-subtle);
    .link-arrow {
      opacity: 1;
      color: var(--color-bd-primary);
      transform: translateX(6px);
    }
    a {
      color: var(--color-fg-emphasis);
    }
    cursor: pointer;
  }
  @media ${DEVICE_QUERY_MOBILE} {
    height: 72px;
    padding: 12px 24px;
    &:hover {
      background: var(--color-bg-slight);
    }
    a {
      height: 100%;
      width: 100%;
    }
  }
`

export const ItemIcon = styled.img`
  width: 48px;
  height: 48px;
  margin-right: 12px;
  @media ${DEVICE_QUERY_MOBILE} {
    margin-right: 16px;
  }
`

export const ResourceLink = styled(Link)`
  display: flex;
  align-items: center;
  color: var(--color-fg-muted);
  .link-text {
    transition: none;
    display: flex;
    align-items: center;
  }
  &:last-child {
    margin-bottom: 0;
  }
  .link-arrow {
    opacity: 0;
    color: var(--color-fg-muted);
  }
  @media ${DEVICE_QUERY_MOBILE} {
    font-size: 16px;
    height: 24px;
  }
`
