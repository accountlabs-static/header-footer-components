import React from 'react';
import { Submenu } from '../style';
import {
  Wallets,
  Wallet,
  WalletName,
  WalletDescription,
  WalletInfo,
  PartnershipsWrapper,
  AllPartnershipsLink,
} from './index.style';
import MetaMask from '../../assets/images/MetaMask';
import OKX from '../../assets/images/OKX';
import messages from '../messages';
import { FormattedMessage } from 'react-intl';
import { LINKS } from '../../config';
import Link from '../../components/Link';

const Partnerships = ({ open, ...args }) => {
  return (
    <Submenu height={350} className={open ? 'active' : ''} {...args}>
      <PartnershipsWrapper>
        <Wallets>
          <Link
            arrow={false}
            to={LINKS.metamask}
            data-mixpanel-id={'partnerships metamask'}
            data-mixpanel-pos={'header'}
            data-mixpanel-to={LINKS.metamask}
          >
            <Wallet>
              <MetaMask width={58} height={52} />
              <WalletInfo>
                <WalletName>
                  <FormattedMessage {...messages.partnershipsMetaMaskName} />
                </WalletName>
                <WalletDescription>
                  <FormattedMessage
                    {...messages.partnershipsMetaMaskDescription}
                  />
                </WalletDescription>
              </WalletInfo>
            </Wallet>
          </Link>
          <Link
            arrow={false}
            to={LINKS.okxCollabs}
            data-mixpanel-id={'partnerships okx'}
            data-mixpanel-pos={'header'}
            data-mixpanel-to={LINKS.okx}
          >
            <Wallet>
              <OKX width={52} height={52} />
              <WalletInfo>
                <WalletName>
                  <FormattedMessage {...messages.partnershipsOKXName} />
                </WalletName>
                <WalletDescription>
                  <FormattedMessage {...messages.partnershipsOKXDescription} />
                </WalletDescription>
              </WalletInfo>
            </Wallet>
          </Link>
        </Wallets>
        <AllPartnershipsLink
          data-mixpanel-id={'partnerships allPartnershipsLink'}
          data-mixpanel-po={'header'}
          data-mixpanel-to={LINKS.coBranded}
        >
          <Link to={LINKS.coBranded}>
            <FormattedMessage {...messages.partnershipsLink} />
          </Link>
        </AllPartnershipsLink>
      </PartnershipsWrapper>
    </Submenu>
  );
};

export default Partnerships;
