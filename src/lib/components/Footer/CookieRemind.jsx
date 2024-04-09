import React from 'react';
import styled from 'styled-components';
import { FormattedMessage, injectIntl } from 'react-intl';
import { MoreLink, VaultButton } from '../common/style';
import messages from './messages';

const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  z-index: 10000;
  box-shadow: 0 -4px 20px 0 rgba(25, 25, 70, 0.1);
  width: 400px;
  height: 240px;
  background: #f5f9fc;
  border-radius: 10px;
  left: 50px;
  bottom: 60px;
  flex-direction: column;
  align-items: center;
  font-family: 'Montserrat', -apple-system, 'PingFang SC', 'Microsoft Yahei',
    微软雅黑, 'MicrosoftJhengHei', BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

const Button = styled(VaultButton)`
  width: 160px;
  height: 48px;
`;

const TextContainer = styled.div`
  width: 90%;
  color: #352757;
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 26px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export function CookieRemind(props) {
  const { intl, acceptCookie, onClose } = props;
  return !acceptCookie && process.browser ? (
    <FlexContainer>
      <TextContainer>
        <FormattedMessage
          {...messages.cookieRemindText}
          values={{
            cookiePrivacy: (
              <MoreLink inline>
                <a
                  href={`https://webview.cobo.com/internal/des/pp?locale=${
                    intl.locale
                  }`}
                  target="_blank"
                >
                  {intl.formatMessage(messages.cookiePrivacy)}
                </a>
              </MoreLink>
            ),
          }}
        />
      </TextContainer>
      <ButtonContainer>
        <Button onClick={onClose}>
          {intl.formatMessage(messages.cookieButton)}
        </Button>
      </ButtonContainer>
    </FlexContainer>
  ) : null;
}

export default injectIntl(CookieRemind);
