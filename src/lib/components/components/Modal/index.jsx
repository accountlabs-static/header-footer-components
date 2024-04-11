import React, { useRef, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { Body, CloseIcon, Container, Footer, Header, Main } from './style'
import { useVisibleTransition } from '../../hooks'
import { isBrowser } from '../../utils'
import Close from '../../assets/images/Close'

export default function Modal({
  open,
  defaultOpen,
  children,
  width = 800,
  className,
  style,
  header,
  body,
  footer,
  closeIcon,
  closeIconType = 'external',
  onClose,
  rounded,
  transition = 'slide bottom',
  theme = 'dark',
  maskTheme = 'dark',
  opacity,
  mask = true,
  centered = false,
  disableMaskClose,
  container,
}) {
  const containerRef = useRef()

  const hostElement = container.current

  function stopPropagation(ev) {
    ev.stopPropagation()
  }

  const { visible, className: transitionClassName } = useVisibleTransition({
    open,
    transition,
    containerRef,
    onClose,
    defaultVisible: defaultOpen,
  })

  function onMaskClick() {
    if (disableMaskClose) return
    onClose && onClose()
  }

  // useEffect(() => {
  //   if (open) {
  //     document && document.body.classList.add('modal-mobile')
  //   } else {
  //     document && document.body.classList.remove('modal-mobile')
  //   }
  // }, [open])

  const content = (
    <Main
      render={document?.body}
      visible={open}
      className={`${open ? 'visible' : ''} ${className}`}
      onClick={onMaskClick}
      mask={mask}
      theme={maskTheme || theme}
      centered={centered}
    >
      <Container
        ref={containerRef}
        width={width}
        className={transitionClassName}
        style={style}
        footer={footer}
        theme={theme}
        onClick={stopPropagation}
        rounded={rounded}
        opacity={opacity}
        centered={centered}
      >
        {closeIcon &&
          (typeof closeIcon === 'boolean' ? (
            <CloseIcon theme={theme} type={closeIconType} onClick={onClose}>
              <Close width={closeIconType === 'inner' ? '26' : '24'} height={closeIconType === 'inner' ? '26' : '24'} />
            </CloseIcon>
          ) : (
            closeIcon
          ))}
        {visible && (
          <>
            {header && <Header>{header}</Header>}
            {body && <Body>{body}</Body>}
            {children}
            {footer && <Footer>{footer}</Footer>}
          </>
        )}
      </Container>
    </Main>
  )

  if (hostElement && isBrowser()) {
    return createPortal(content, hostElement)
  }

  /* fallback to inline rendering */
  console.warn('Modal: Could not find {hostElement} node.\n Switched to inline rendering mode.')

  return content
}
