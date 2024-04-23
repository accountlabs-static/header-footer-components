import Link from '../../components/Link'
import React from 'react'
import { useIntl } from 'react-intl'
import messages from './../messages'
import { Item, ItemIcon, Grid, Main, ResourceLink } from './index.style'
import { Submenu } from './../style'
import { LINKS } from '../../config'
import getStarted from '../../assets/images/get-started.svg'
import authentication from '../../assets/images/web-auth.svg'
import firmware from '../../assets/images/device.svg'
import roadmap from '../../assets/images/roadmap.svg'
import tutorial from '../../assets/images/scan.svg'
import blog from '../../assets/images/blog.svg'
import expertReviews from '../../assets/images/user.svg'
import btcOnly from '../../assets/images/btc-only.svg'

const menuList = [
  {
    id: 'getStarted',
    href: LINKS.getStarted,
    icon: getStarted,
    title: messages.resourcesStart,
  },
  {
    id: 'authentication',
    href: LINKS.authentication,
    icon: authentication,
    title: messages.resourcesAuth,
  },
  {
    id: 'firmware',
    href: LINKS.firmware,
    icon: firmware,
    title: messages.resourcesUpgrade,
  },
  {
    id: 'roadmap',
    href: LINKS.roadmap,
    icon: roadmap,
    title: messages.resourcesRoadmap,
  },
  {
    id: 'tutorial',
    href: LINKS.tutorial,
    icon: tutorial,
    title: messages.resourcesTutorials,
    blank: true,
  },
  {
    id: 'blog',
    href: '/',
    icon: blog,
    title: messages.resourcesBlog,
    blank: true,
  },
  {
    id: 'expertReviews',
    href: LINKS.expertReviews,
    icon: expertReviews,
    title: messages.resourcesExpertReviews,
  },
  {
    id: 'btc-only',
    href: LINKS.btcOnly,
    icon: btcOnly,
    title: messages.resourcesBtcOnly,
  },
]

export default function Resources({ open, ...args }) {
  const intl = useIntl()

  const list = menuList.map((it) => ({
    ...it,
    href: it.href && it.href.id ? intl.formatMessage(it.href) : it.href,
    title: intl.formatMessage(it.title),
  }))

  return (
    <Submenu height={304} className={open ? 'active' : ''} {...args}>
      <Main>
        <Grid>
          {list.map((item) => (
            <Item key={item.title}>
              <ResourceLink as={Link} href={item.href} target={item.blank ? '_blank' : null}>
                <ItemIcon src={item.icon} loading="lazy" />
                {item.title}
              </ResourceLink>
            </Item>
          ))}
        </Grid>
      </Main>
    </Submenu>
  )
}
