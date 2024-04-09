import styled, { css } from 'styled-components';
import { DEVICE_QUERY_MOBILE } from '../config';

export const OpenSansFontStyle = css`
  font-family: 'Open Sans', -apple-system, 'Microsoft Yahei', 微软雅黑,
    'MicrosoftJhengHei', BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
    Cantarell, 'Helvetica Neue', sans-serif;
  font-style: normal;
  font-weight: 400;
`;

export const Body = styled.div`
  ${OpenSansFontStyle}
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.32px;
  @media ${DEVICE_QUERY_MOBILE} {
    font-size: 14px;
    line-height: 22px;
    letter-spacing: 0.28px;
  }
`;

export const Caption = styled.div`
  ${OpenSansFontStyle}
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0.28px;
  @media ${DEVICE_QUERY_MOBILE} {
    font-size: 12px;
    line-height: 18px;
    letter-spacing: 0.24px;
  }
`;

export const OpenSansFont = styled.div`
  ${OpenSansFontStyle}
`;

export const BodyMaxStyle = css`
  font-size: 26px;
  font-style: normal;
  line-height: 40px;
  letter-spacing: 0.04em;
`;

export const BodyMax = styled(OpenSansFont).attrs({
  className: 'body-max',
})`
  ${BodyMaxStyle}
`;

export const BodyPlusStyle = css`
  font-size: 18px;
  line-height: 28px;
  letter-spacing: 0.04em;
`;
export const BodyPlus = styled(OpenSansFont).attrs({
  className: 'body-plus',
})`
  ${BodyPlusStyle}
`;

export const BodyPlusMStyle = css`
  ${BodyPlusStyle}
  font-weight: 600;
`;
export const BodyPlusM = styled(BodyPlus).attrs({
  className: 'body-plus-m',
})`
  ${BodyPlusMStyle}
`;

export const BodyLoose = styled(OpenSansFont).attrs({
  className: 'body-loose',
})`
  font-size: 16px;
  line-height: 28px;
  letter-spacing: 0.04em;
`;

export const BodyStyle = css`
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.04em;
`;

export const BodyMStyle = css`
  ${BodyStyle}
  font-weight: 600;
`;
export const BodyM = styled(Body).attrs({
  className: 'body-m',
})`
  ${BodyMStyle}
`;

export const CaptionStyle = css`
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0.04em;
`;

export const CaptionMStyle = css`
  ${CaptionStyle}
  font-weight: 600;
`;

export const CaptionM = styled(Caption).attrs({
  className: 'caption-m',
})`
  ${CaptionMStyle}
`;

export const OverlineStyle = css`
  font-size: 12px;
  line-height: 18px;
  letter-spacing: 0.04em;
`;

export const Overline = styled(OpenSansFont).attrs({
  className: 'overline',
})`
  ${OverlineStyle}
`;

export const OverlineMStyle = css`
  ${OverlineStyle}
  font-weight: 600;
`;

export const OverlineM = styled(OpenSansFont).attrs({
  className: 'overline-m',
})`
  ${OverlineMStyle}
`;

