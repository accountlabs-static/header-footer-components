import styled from 'styled-components'
import { BodyMStyle, BodyPlusM, BodyStyle, Caption, CaptionStyle, OpenSansFontStyle } from '../styles/body.style'
import CompLink from '../components/Link'
import GithubIcon from '../assets/images/Github'
import { DEVICE_QUERY_MOBILE } from '../config'
import { H6 } from '../styles/title.style'
import { FadeUp, FadeUpActive } from '../styles/animate'

export const FooterBox = styled.footer`
  background: var(--color-bg-default);
  border-top: 1px solid var(--color-border-slight);
  padding: 96px 0 24px;
  @media ${DEVICE_QUERY_MOBILE} {
    padding-left: 24px;
    padding-right: 24px;
    z-index: 99;
  }
`

export const Main = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  @media ${DEVICE_QUERY_MOBILE} {
    flex-direction: column;
  }
`

export const MainLeft = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: flex-start;
`

export const Logo = styled.img`
  width: 48px;
  height: 48px;
`

export const Slogan = styled(H6)`
  color: var(--color-fg-default);
  margin-top: 24px;
`

export const ContactButton = styled.a`
  margin-top: 30px;
  display: inline-block;
`

export const Category = styled.div.attrs({ as: 'li' })`
  margin-right: 80px;
  @media ${DEVICE_QUERY_MOBILE} {
    margin-right: 34px;
    margin-top: 48px;
  }
`

export const Categories = styled.div.attrs({ as: 'ul' })`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  & > ${Category}:last-child {
    margin-right: 0;
  }
  @media ${DEVICE_QUERY_MOBILE} {
    justify-content: space-between;
    margin-top: 16px;
  }
`

export const CategoryTitle = styled(BodyPlusM)`
  margin-bottom: 24px;
  color: var(--color-fg-muted);
  @media ${DEVICE_QUERY_MOBILE} {
    ${BodyMStyle}
  }
`

export const Link = styled(CompLink).attrs({
  arrow: false,
})`
  display: flex;
  align-items: center;
  ${BodyStyle}
  color: var(--color-fg-subtle);
  white-space: nowrap;
  svg {
    transition: var(--transition);
  }
  &:last-child {
    margin-bottom: 0;
  }
  &:hover {
    color: var(--color-fg-emphasis);
    svg {
      color: var(--color-fg-emphasis);
    }
  }
  img {
    margin-left: 4px;
  }
  @media ${DEVICE_QUERY_MOBILE} {
    ${CaptionStyle}
  }
`

export const Github = styled(GithubIcon)`
  color: var(--color-fg-muted);
  margin-left: 4px;
`

export const UtilsArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 48px;
  margin-top: 64px;
  line-height: 1;
  color: var(--color-fg-muted);
  @media ${DEVICE_QUERY_MOBILE} {
    flex-direction: column;
    height: auto;
  }
`

export const MediaList = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media ${DEVICE_QUERY_MOBILE} {
    margin-top: 48px;
  }
`

export const Media = styled.a`
  position: relative;
  margin-left: 24px;
  &:first-child {
    margin-left: 0;
  }
  &:hover {
    .default {
      opacity: 0;
    }
    .active {
      opacity: 1;
    }
  }
  img {
    width: 24px;
    height: 24px;
  }
  .default {
    transition: var(--transition);
  }
  .active {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    opacity: 0;
    transition: var(--transition);
  }

  .react-tooltip {
    padding: 4px 8px;
    font-size: 14px;
    line-height: 22px;
  }
`

export const FixedBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 100;
  right: 24px;
  bottom: 90px;
  width: 48px;
  height: 48px;
  box-sizing: border-box;
  border: 1px solid var(--color-border-default);
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.01);
  cursor: pointer;
  color: var(--color-fg-muted);
  transition: var(--transition);
  &:hover {
    border-color: var(--color-border-emphasis);
  }
  @media ${DEVICE_QUERY_MOBILE} {
    display: none;
  }
`

export const Top = styled(FixedBtn)`
  ${FadeUp}
  &:hover {
    color: var(--color-bd-pink);
  }
  &.active {
    ${FadeUpActive}
  }
`

export const Contact = styled(FixedBtn)`
  ${FadeUp}
  bottom: 136px;
  .default {
    opacity: 1;
    transition: var(--transition);
  }
  .active {
    opacity: 0;
    transition: var(--transition);
    position: absolute;
    left: auto;
    right: auto;
    margin: 0 auto;
  }
  &:hover {
    .default {
      opacity: 0;
    }
    .active {
      opacity: 1;
    }
  }
  &.active {
    ${FadeUpActive}
  }
`

export const Copyright = styled(Caption)`
  color: var(--color-fg-subtle);
  text-align: center;
  margin-top: 16px;
  @media ${DEVICE_QUERY_MOBILE} {
    margin-top: 24px;
  }
`

export const UtilsAreaLeft = styled.div`
  display: flex;
  gap: 24px;
  @media ${DEVICE_QUERY_MOBILE} {
    div:first-child {
      width: 100%;
      text-align: center;
    }
  }
`

export const FooterLinkItem = styled.p`
  margin: 0;
  color: var(--color-fg-muted);
  ${OpenSansFontStyle}
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0.04em;
  & > span > svg {
    fill: var(--color-fg-subtle);
  }
`

export const LinkIcon = styled.img`
  width: 18px;
  height: 18px;
  margin-right: 8px;
  vertical-align: text-bottom;
`

export const RegisteredInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 48px;
  color: var(--color-fg-muted);

  @media ${DEVICE_QUERY_MOBILE} {
    padding: 24px 12px;
  }

  h4 {
    margin-bottom: 32px;
    color: white;
    @media ${DEVICE_QUERY_MOBILE} {
      font-weight: 500;
      font-size: 18px;
      line-height: 28px;
    }
  }

  p + p {
    margin-top: 14px;
    @media ${DEVICE_QUERY_MOBILE} {
      ${CaptionStyle}
    }
  }
`
