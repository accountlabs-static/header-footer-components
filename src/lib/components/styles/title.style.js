import styled, { css } from 'styled-components'
import { DEVICE_QUERY_MOBILE } from '../config'

export const montFontStyle = css`
  font-style: normal;
  font-family:
    'Mont',
    -apple-system,
    'Microsoft Yahei',
    '微软雅黑',
    'MicrosoftJhengHei',
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    Oxygen,
    Ubuntu,
    Cantarell,
    'Open Sans',
    'Helvetica Neue',
    sans-serif;
`

export const montserratFontStyle = css`
  font-style: normal;
  font-family:
    'Montserrat',
    -apple-system,
    'Microsoft Yahei',
    微软雅黑,
    'MicrosoftJhengHei',
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    Oxygen,
    Ubuntu,
    Cantarell,
    'Open Sans',
    'Helvetica Neue',
    sans-serif;
`

export const H1 = styled.h1`
  ${montFontStyle}
  font-size: 56px;
  font-weight: 600;
  line-height: 68px;
  letter-spacing: 2.24px;
  @media ${DEVICE_QUERY_MOBILE} {
    font-size: 30px;
    line-height: 44px;
    letter-spacing: 0.6px;
  }
`

export const H2 = styled.h2`
  ${montFontStyle}
  font-size: 48px;
  font-weight: 600;
  line-height: 56px;
  @media ${DEVICE_QUERY_MOBILE} {
    font-size: 26px;
    line-height: 36px;
    letter-spacing: 0.52px;
  }
`

export const H2A = styled(H2)`
  text-transform: uppercase;
`

export const H3 = styled.h3`
  ${montFontStyle}
  font-size: 40px;
  font-weight: 600;
  line-height: 52px;
  @media ${DEVICE_QUERY_MOBILE} {
    font-size: 24px;
    line-height: 32px;
    letter-spacing: 0.48px;
  }
`

export const H3A = styled(H3)`
  text-transform: uppercase;
`

export const H4 = styled.h4`
  ${montFontStyle}
  font-size: 32px;
  font-weight: 600;
  line-height: 48px;
  @media ${DEVICE_QUERY_MOBILE} {
    font-size: 20px;
    line-height: 30px;
    letter-spacing: 0.4px;
  }
`

export const H4A = styled(H4)`
  text-transform: uppercase;
`

export const H5 = styled.h5`
  ${montFontStyle}
  font-size: 24px;
  font-weight: 600;
  line-height: 36px;
  @media ${DEVICE_QUERY_MOBILE} {
    font-size: 18px;
    line-height: 28px;
  }
`

export const H5A = styled(H5)`
  text-transform: uppercase;
`

export const H6 = styled.h6`
  margin: 0;
  ${montserratFontStyle}
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0.32px;
  @media ${DEVICE_QUERY_MOBILE} {
    font-size: 14px;
    line-height: 22px;
    letter-spacing: 0.56px;
  }
`

export const H7 = styled.div`
  ${montserratFontStyle}
  font-size: 14px;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: 0.56px;
  @media ${DEVICE_QUERY_MOBILE} {
    font-size: 12px;
    line-height: 18px;
  }
`

export const H7A = styled(H7)`
  text-transform: uppercase;
`
