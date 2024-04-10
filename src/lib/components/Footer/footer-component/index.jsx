import React, { useMemo } from 'react'
import { FormattedMessage, useIntl } from 'react-intl'
import { Tooltip } from 'react-tooltip'
import {
  Categories,
  Category,
  CategoryTitle,
  FooterBox,
  Link,
  Github,
  Logo,
  Main,
  Media,
  UtilsArea,
  Slogan,
  Top,
  Copyright,
  MediaList,
  UtilsAreaLeft,
  FooterLinkItem,
  LinkIcon,
  MainLeft,
} from '../style'
import messages from '../messages'
import Contact from '../Contact'
import { useIsMobile } from '../../hooks'
import { LINKS } from '../../config'
import { Container } from '../../styles/layout.style'
import ArrowUp from '../../assets/images/ArrowUp'
import ship from '../images/ship.svg'
import orderTrack from '../images/orderTrack.svg'

const menuList = [
  [
    {
      type: 'title',
      title: 'Keystone',
      name: 'keystone',
      index: 1,
    },
    {
      id: 'Blog',
      type: 'link',
      target: '_blank',
      link: messages.blog.link,
      text: messages.blog,
    },
    {
      id: 'PrivacyPromises',
      type: 'link',
      linkUse: 'to',
      link: '/privacy-promises',
      text: messages.privacyPromises,
    },
    {
      id: 'Support',
      type: 'link',
      target: '_blank',
      link: messages.support.link,
      text: messages.support,
    },
    {
      id: 'SuggestWalletOrAssets',
      type: 'link',
      target: '_blank',
      link: LINKS.suggestWalletAssets,
      text: messages.suggestWalletOrAssets,
    },
    {
      id: 'ImportNft',
      type: 'link',
      linkUse: 'to',
      link: '/nft',
      text: messages.importNft,
    },
    {
      id: 'GitHubRepo​',
      type: 'link',
      target: '_blank',
      link: 'https://github.com/KeystoneHQ',
      text: messages.githubRepo,
      icon: <Github />,
    },
    {
      id: 'ENSDatabase',
      type: 'link',
      link: LINKS.ensDatabase,
      target: '_blank',
      text: messages.ensDatabase,
    },
    {
      id: 'ABIPack',
      type: 'link',
      link: LINKS.abiPack,
      target: '_blank',
      text: messages.abiPack,
    },
  ],
  [
    {
      type: 'title',
      name: 'legal',
      title: messages.legal,
      index: 5,
    },
    {
      id: 'SalesTermsAndConditons',
      type: 'link',
      linkUse: 'to',
      link: '/sales-terms-and-conditions',
      text: messages.termsAndConditions,
    },
    {
      id: 'WebsiteTermsofUse',
      type: 'link',
      linkUse: 'to',
      link: '/website-terms-of-use',
      text: messages.website,
    },
    {
      id: 'KeystoneTermsOfUse',
      type: 'link',
      linkUse: 'to',
      link: '/keystone-terms-of-use',
      text: messages.appTerms,
    },
    {
      id: 'PrivacyPolicy',
      type: 'link',
      linkUse: 'to',
      link: '/privacy-policy',
      text: messages.privacyPolicy,
    },
    {
      id: 'CookiePolicy',
      type: 'link',
      linkUse: 'to',
      link: '/cookie-policy',
      text: messages.cookiePolicy,
    },
    {
      id: 'ShippingPolicy',
      type: 'link',
      linkUse: 'to',
      link: '/shipping-policy',
      text: messages.shippingPolicy,
    },
    {
      id: 'RefundPolicy',
      type: 'link',
      linkUse: 'to',
      link: '/refund-policy',
      text: messages.refundPolicy,
    },
  ],
  [
    {
      type: 'title',
      name: 'partnership',
      title: messages.partnership,
      index: 10,
    },
    {
      id: 'Resellers',
      type: 'link',
      linkUse: 'to',
      link: '/resellers',
      text: messages.resellers,
    },
    {
      id: 'Affiliate',
      type: 'link',
      linkUse: 'to',
      link: '/affiliates',
      text: messages.affiliates,
    },
    {
      id: 'BountyProgram',
      type: 'link',
      linkUse: 'to',
      link: '/bug-bounty-program',
      text: messages.bountyProgram,
    },
    {
      id: 'MediaKit',
      type: 'link',
      target: '_blank',
      link: 'https://drive.google.com/drive/folders/1MqffY73AbWE3ItSE6s_YP8SD7k1Gbz8r',
      text: messages.mediaKit,
    },
    {
      id: 'MetaMask',
      type: 'link',
      link: LINKS.metamask,
      linkUse: 'to',
      text: messages.metamask,
    },
  ],
]

const desktopMenuOrder = ['keystone', 'legal', 'partnership']
const mobileMenuOrder = ['keystone', 'partnership', 'legal']

export const Footer = () => {
  const intl = useIntl()
  const isZh = useMemo(() => intl.locale === 'zh', [intl.locale])
  // const icons = [
  //   {
  //     title: 'Discord',
  //     icon: new URL('../images/discord.png', import.meta.url).href,
  //     activeIcon: new URL('../images/discord_c.png', import.meta.url).href,
  //     link: 'https://keyst.one/discord',
  //   },
  //   {
  //     title: 'Twitter',
  //     icon: new URL('../images/x.png', import.meta.url).href,
  //     activeIcon: new URL('../images/x_c.png', import.meta.url).href,
  //     link: isZh ? 'https://twitter.com/KeystoneCN' : 'https://twitter.com/KeystoneWallet',
  //   },
  //   {
  //     title: 'Medium',
  //     icon: new URL('../images/medium.png', import.meta.url).href,
  //     activeIcon: new URL('../images/medium_c.png', import.meta.url).href,
  //     link: 'https://blog.keyst.one',
  //   },
  //   {
  //     title: 'YouTube',
  //     icon: new URL('../images/youtube.png', import.meta.url).href,
  //     activeIcon: new URL('../images/youtube_c.png', import.meta.url).href,
  //     link: 'https://www.youtube.com/channel/UCaReIdawwYPPcyWGoNunF7g',
  //   },
  //   {
  //     title: 'Telegram',
  //     icon: new URL('../images/telegram.png', import.meta.url).href,
  //     activeIcon: new URL('../images/telegram_c.png', import.meta.url).href,
  //     link: isZh ? 'https://t.me/KeystoneWalletCN' : 'https://t.me/KeystoneWallet',
  //   },
  //   {
  //     title: '即刻',
  //     icon: new URL('../images/jike.png', import.meta.url).href,
  //     activeIcon: new URL('../images/jike_c.png', import.meta.url).href,
  //     link: 'https://web.okjike.com/u/370FC219-7DFC-4774-BC01-3AE19347D1E7',
  //   },
  //   {
  //     title: 'Reddit',
  //     icon: new URL('../images/reddit.png', import.meta.url).href,
  //     activeIcon: new URL('../images/reddit_c.png', import.meta.url).href,
  //     link: 'https://www.reddit.com/r/KeystoneWallet/',
  //   },
  // ]

  const isMobile = useIsMobile()
  const menu = useMemo(() => {
    const orderByKeys = isMobile ? mobileMenuOrder : desktopMenuOrder
    return orderByKeys.map((key) => menuList.find((it) => it[0].name === key))
  }, [isMobile])

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
  }

  // const medias = icons.map((e) => (
  //   <Media
  //     target="_blank"
  //     href={e.link}
  //     key={e.title}
  //     className={`media-${e.title}`}
  //     data-background-color="var(--color-bg-slight)"
  //     data-text-color="var(--color-fg-default)"
  //     data-mixpanel-id={e.title}
  //     data-mixpanel-pos="footer"
  //     data-mixpanel-to={e.link}
  //   >
  //     <img src={e.icon} className="default" alt={e.title} loading="lazy" />
  //     <img src={e.activeIcon} className="active" alt={e.title} loading="lazy" />
  //     <Tooltip anchorSelect={`.media-${e.title}`} content={e.title} />
  //   </Media>
  // ))

  const categories = menu.map((it) =>
    it.map((col) => ({
      ...col,
      ...(col.title && col.title.id
        ? {
            title: intl.formatMessage(col.title),
          }
        : col.title),
      ...(col.link && col.link.id
        ? {
            link: intl.formatMessage(col.link),
          }
        : col.link),
      ...(col.text && {
        text: intl.formatMessage(col.text),
      }),
    })),
  )

  return (
    <FooterBox className="page-footer theme-dark">
      <Container>
        <Main>
          <MainLeft>
            {/* <Logo src={new URL('../images/logo.png', import.meta.url).href} loading="lazy" /> */}
            <Slogan>
              <FormattedMessage {...messages.slogan} values={{ br: <br /> }} />
            </Slogan>
            <Contact />
          </MainLeft>
          <nav>
            <Categories>
              {categories.map((col) => (
                <Category key={col[0].title}>
                  <CategoryTitle>{col[0].title}</CategoryTitle>
                  <ul>
                    {col.slice(1).map((row) => {
                      const linkUse = {
                        [!row.linkUse ? 'href' : row.linkUse]: row.link,
                      }
                      return (
                        <li key={row.id} style={{ listStyleType: 'none', marginBottom: 8 }}>
                          <Link
                            {...linkUse}
                            data-mixpanel-id={row.id}
                            data-mixpanel-pos="footer"
                            data-mixpanel-to={row.link}
                            target={row.target}
                          >
                            {row.text}
                            {row.icon && row.icon}
                          </Link>
                        </li>
                      )
                    })}
                  </ul>
                </Category>
              ))}
            </Categories>
          </nav>
        </Main>
        <UtilsArea>
          <UtilsAreaLeft>
            <FooterLinkItem as={Link} to={LINKS.shippingRegions}>
              <LinkIcon src={ship} />
              <FormattedMessage {...messages.shippingRegions} />
            </FooterLinkItem>
            <FooterLinkItem as={Link} href={LINKS.trackOrder} blank>
              <LinkIcon src={orderTrack} />
              <FormattedMessage {...messages.orderTrack} />
            </FooterLinkItem>
          </UtilsAreaLeft>
          {/* <MediaList>{medias}</MediaList> */}
        </UtilsArea>
        <Copyright>Keystone © All rights reserved 2018 - {new Date().getFullYear()}</Copyright>
      </Container>
      <Top className="active" onClick={scrollTop}>
        <ArrowUp />
      </Top>
    </FooterBox>
  )
}
