import React, { Fragment } from 'react'
import { Submenu } from '../style'
import MetaMask from '../../assets/images/MetaMask'
import Eth from '../../assets/images/Eth'
import Bnb from '../../assets/images/Bnb'
import Matic from '../../assets/images/Matic'
import OKX from '../../assets/images/OKX'
import Btc from '../../assets/images/Btc'
import Keplr from '../../assets/images/Keplr'
import {
  Wallets,
  Wallet,
  Coin,
  WalletName,
  CoinName,
  Coins,
  WalletsAndAssetsLink,
  WalletsAndAssetsWrapper,
  MoreCoins,
} from './index.style'
import Divider from '../../components/Divider'
import { LINKS } from '../../config'
import { Tag } from '../Products/index.style'
import useMessages from './hooks/useMessages'
import Link from '../../components/Link'
import More from '../../assets/images/More'
import Popover from '../../components/Popover'
import Tron from '../../assets/images/Tron'
import { useIsMobile } from '../../hooks'
import Atom from '../../assets/images/Atom'
import Cro from '../../assets/images/Cro'
import Dym from '../../assets/images/Dym'
import NunchukLight from '../../assets/images/NunchukLight'

const walletsAndAssets = [
  {
    id: 'metamask',
    walletName: 'MetaMask',
    icon: <MetaMask width="48px" height="48px" />,
    coins: [
      {
        id: 'eth',
        coinName: 'ETH',
        icon: <Eth width="32px" height="32px" />,
      },
      {
        id: 'bnb',
        coinName: 'BNB',
        icon: <Bnb width="32px" height="32px" />,
      },
      {
        id: 'matic',
        coinName: 'MATIC',
        icon: <Matic width="32px" height="32px" />,
      },
    ],
    supportAllEvmChains: true,
    shouldShowEvmHoverTip: true,
  },
  {
    id: 'okx',
    walletName: 'OKX',
    icon: <OKX width="48px" height="48px" />,
    coins: [
      {
        id: 'btc',
        coinName: 'BTC',
        icon: <Btc width="32px" height="32px" />,
      },
      {
        id: 'eth',
        coinName: 'ETH',
        icon: <Eth width="32px" height="32px" />,
      },
      {
        id: 'trx',
        coinName: 'TRON',
        icon: <Tron width="32px" height="32px" />,
      },
    ],
    supportAllEvmChains: true,
    shouldShowEvmHoverTip: false,
  },
  {
    id: 'keplr',
    walletName: 'Keplr',
    icon: <Keplr width="48px" height="48px" />,
    coins: [
      {
        id: 'atom',
        coinName: 'ATOM',
        icon: <Atom width={'32px'} height={'32px'} />,
      },
      {
        id: 'cro',
        coinName: 'CRO',
        icon: <Cro width={'32px'} height={'32px'} />,
      },
      {
        id: 'dym',
        coinName: 'DYM',
        icon: <Dym width={'32px'} height={'32px'} />,
        tag: 'new',
      },
    ],
    supportAllEvmChains: true,
    shouldShowEvmHoverTip: false,
  },
  {
    id: 'nunchuk',
    walletName: 'Nunchuk',
    icon: <NunchukLight width="48px" height="48px" />,
    tag: 'new',
    coins: [
      {
        id: 'btc',
        coinName: 'BTC',
        icon: <Btc width="32px" height="32px" />,
      },
    ],
    supportAllEvmChains: false,
    shouldShowEvmHoverTip: false,
  },
]

const MoreDots = ({ id, hoverTip }) => (
  <MoreCoins key={`header-nav-${id}-more`}>
    {hoverTip !== '' ? (
      <Popover placement="top" transition="slide top-10" content={<div>{hoverTip}</div>}>
        <More />
      </Popover>
    ) : (
      <More />
    )}
  </MoreCoins>
)

const WalletsAndAssets = ({ open, ...args }) => {
  const message = useMessages()
  const isMobile = useIsMobile()
  const { onClose } = args

  const renderWallets = () => {
    return walletsAndAssets.map((wallet, index) => {
      return (
        <Fragment key={wallet.id}>
          <Link
            arrow={false}
            href={`${LINKS.supportAssetsAndWallets}?type=wallets&id=${wallet.walletName.toLowerCase()}`}
            data-mixpanel-id={`walletsAndAssets ${wallet.walletName}`}
            data-mixpanel-pos="header"
            data-mixpanel-to={`${LINKS.supportAssetsAndWallets}?type=wallets&id=${wallet.walletName.toLowerCase()}`}
            onClick={onClose}
          >
            <Wallet>
              <WalletName>
                {wallet.icon}
                {wallet.walletName}
                {wallet.tag && <Tag color="purple">{wallet.tag}</Tag>}
              </WalletName>
              <Coins>
                {wallet.coins.map((coin) => {
                  return (
                    <Coin key={coin.id}>
                      {coin.icon}
                      <CoinName>{coin.coinName}</CoinName>
                      {coin.tag && <Tag color="purple">{coin.tag}</Tag>}
                    </Coin>
                  )
                })}
                {wallet.supportAllEvmChains && (
                  <MoreDots id={wallet.id} hoverTip={wallet.shouldShowEvmHoverTip ? message.evmCoinsTip : ''} />
                )}
              </Coins>
            </Wallet>
          </Link>
          {index !== walletsAndAssets.length - 1 && !isMobile && (
            <Divider gap="32px" color="var(--color-border-slight)" style={{ height: 218 }} />
          )}
        </Fragment>
      )
    })
  }
  return (
    <Submenu height={382} className={open ? 'active' : ''} {...args}>
      <WalletsAndAssetsWrapper>
        <Wallets>{renderWallets()}</Wallets>
        <WalletsAndAssetsLink
          color="var(--color-fg-subtle)"
          hoverColor="var(--color-bd-pink)"
          href={LINKS.supportAssetsAndWallets}
          onClick={onClose}
          data-mixpanel-id={'walletsAndAssets allWalletsAndAssetslink'}
          data-mixpanel-pos={'header'}
          data-mixpanel-to={LINKS.supportAssetsAndWallets}
        >
          {message.linkText}
        </WalletsAndAssetsLink>
      </WalletsAndAssetsWrapper>
    </Submenu>
  )
}

export default WalletsAndAssets
