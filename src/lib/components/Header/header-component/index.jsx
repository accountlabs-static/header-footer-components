import { useCallback, useEffect, useRef, useState } from 'react'
import { FormattedMessage, useIntl } from 'react-intl'
import classNames from 'classnames'
import { useIsMobile } from '../../hooks'
import {
  DropIcon,
  HeaderBox,
  Logo,
  Menu,
  MenuTitle,
  Container,
  LogoMobile,
  Menus,
  MenuEntryMobile,
  MenuBackMobile,
  LogoBox,
  LogoLink,
  SubmenuTitle,
  HeaderStickyBox,
} from '../style'
import messages from '../messages'
import Products from '../Products'
import Resources from '../Resources'
import MenuIcon from '../../assets/images/Menu'
import CloseIcon from '../../assets/images/Close'
import LogoIcon from '../../assets/images/logo.png'
import LogoMobileIcon from '../../Footer/images/logo.svg'
import Partnerships from '../Partnerships'
import WalletsAndAssets from '../WalletsAndAssets'
import '../../index.scss'
import { DOMAIN } from '../../config'

export const Header = () => {
  const intl = useIntl()
  const isMobile = useIsMobile()
  const [activeMenu, setActiveMenu] = useState()
  const [isHover, setIsHover] = useState()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState()

  const dom = useRef()

  const menuTypes = {
    products: 'products',
    walletsAndAssets: 'walletsAndAssets',
    resources: 'resources',
    partnerships: 'partnerships',
  }

  const menuList = [
    {
      name: menuTypes.products,
      title: messages.products,
    },
    {
      name: menuTypes.walletsAndAssets,
      title: messages.walletsAndCoins,
    },
    {
      name: menuTypes.resources,
      title: messages.resources,
    },
    {
      name: menuTypes.partnerships,
      title: messages.partnerships,
    },
  ]

  let leaveTimer
  let enterTimer

  const closeSubmenu = () => {
    setActiveMenu(null)
    setIsMobileMenuOpen(false)
    setIsHover(false)
  }

  const handleOnMouseEnter = (menu) => {
    if (isMobile) return
    clearTimeout(enterTimer)
    clearTimeout(leaveTimer)
    enterTimer = setTimeout(() => {
      setActiveMenu(menu)
    }, 300)
  }

  const handleOnMouseLeave = () => {
    leaveTimer = setTimeout(() => {
      closeSubmenu()
    }, 300)
  }

  const handleClickMenu = (menu) => {
    if (!isMobile) return
    setActiveMenu(menu)
  }

  useEffect(() => {
    if (!isMobile) {
      setIsMobileMenuOpen(false)
    }
    if (isMobile && activeMenu) {
      setIsMobileMenuOpen(true)
    }
  }, [activeMenu, isMobile])

  const handleOnMouseArgs = useCallback(
    (name) => {
      return (
        !isMobile && {
          onMouseEnter: () => handleOnMouseEnter(name),
          onMouseLeave: handleOnMouseLeave,
        }
      )
    },
    [isMobile],
  )

  return (
    <>
      <HeaderStickyBox className="theme-dark">
        <HeaderBox
          ref={dom}
          className={classNames('page-header', {
            active: isHover || activeMenu,
            'active-mobile': isMobileMenuOpen,
            'active-menu': activeMenu,
          })}
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          <nav>
            <Container>
              <LogoBox>
                <LogoLink href={isMobile && activeMenu ? window?.location?.pathname : DOMAIN}>
                  <Logo src={LogoIcon} title={intl.formatMessage(messages.home)} />
                  <LogoMobile src={LogoMobileIcon} />
                </LogoLink>
                <MenuBackMobile
                  className="header-menu-back"
                  onClick={() => {
                    setActiveMenu(null)
                  }}
                />
              </LogoBox>
              <Menus>
                {menuList.map((it) => {
                  const isShowInMobile = (it.onlyMobile && isMobile) || it.onlyMobile === undefined
                  const isShowInPC = !it.onlyMobile && !isMobile
                  return (
                    (isShowInMobile || isShowInPC) && (
                      <Menu
                        className={it.className || ''}
                        key={it.name}
                        onClick={() => handleClickMenu(it.name)}
                        {...handleOnMouseArgs(it.name)}
                      >
                        {it.icon}
                        <MenuTitle className={activeMenu === it.name ? 'active' : ''}>
                          <FormattedMessage {...it.title} />
                          <DropIcon />
                        </MenuTitle>
                      </Menu>
                    )
                  )
                })}
              </Menus>
              <SubmenuTitle>
                {activeMenu && activeMenu === menuTypes.products && <FormattedMessage {...messages.products} />}
                {activeMenu && activeMenu === menuTypes.walletsAndAssets && (
                  <FormattedMessage {...messages.walletsAndCoins} />
                )}
                {activeMenu && activeMenu === menuTypes.partnerships && <FormattedMessage {...messages.partnerships} />}
                {activeMenu && activeMenu === menuTypes.resources && <FormattedMessage {...messages.resources} />}
              </SubmenuTitle>
              <MenuEntryMobile>
                {isMobileMenuOpen ? (
                  <CloseIcon className="menu-mobile-icon" onClick={() => closeSubmenu()} />
                ) : (
                  <MenuIcon className="menu-mobile-icon" onClick={() => setIsMobileMenuOpen(true)} />
                )}
              </MenuEntryMobile>
            </Container>
          </nav>
          <Products open={activeMenu === menuTypes.products} {...handleOnMouseArgs(menuTypes.products)} />
          <WalletsAndAssets
            open={activeMenu === menuTypes.walletsAndAssets}
            {...handleOnMouseArgs(menuTypes.walletsAndAssets)}
            onClose={handleOnMouseLeave}
          />
          <Resources open={activeMenu === menuTypes.resources} {...handleOnMouseArgs(menuTypes.resources)} />
          <Partnerships open={activeMenu === menuTypes.partnerships} {...handleOnMouseArgs(menuTypes.partnerships)} />
        </HeaderBox>
      </HeaderStickyBox>
    </>
  )
}
