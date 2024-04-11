import React, { useCallback, useMemo, useState } from 'react'
import { FormattedMessage, useIntl } from 'react-intl'
import { ContactButton } from './Contact.style'
import messages from './messages'
import { RegisteredInfoContainer } from './style'
import { H4 } from '../styles/title.style'
import { Body } from '../styles/body.style'
import Modal from '../components/Modal'
import Button from '../components/Button'
import Select from '../components/Select'
import Mail from '../assets/images/Mail'
import ArrowRight from '../assets/images/ArrowRight'
import Popover from '../components/Popover'
import { useRef } from 'react'

export default function Contact() {
  const intl = useIntl()
  const [open, setOpen] = useState(false)
  const [showRegisteredInfo, setShowRegisteredInfo] = useState(false)
  const modalContainerRef = useRef()

  const onChange = useCallback((data) => {
    setOpen(data)
  }, [])

  const onSelectChange = useCallback((data) => {
    if (data.onClick) {
      data.onClick()
      return
    }
    const windowRef = window.open(data.value, '_blank')
    windowRef.focus()
    setTimeout(function () {
      if (!windowRef?.document?.hasFocus()) {
        windowRef.close()
      }
    }, 500)
  }, [])

  const options = useMemo(
    () => [
      {
        name: intl.formatMessage(messages.contactUs.menu.supportTeam),
        value: 'mailto:support@keyst.one',
      },
      {
        name: intl.formatMessage(messages.contactUs.menu.forCollabs),
        value: 'mailto:affiliate@keyst.one',
      },
      {
        name: intl.formatMessage(messages.contactUs.menu.raiseATicket),
        value: 'https://keystonewallet.atlassian.net/servicedesk/customer/portal/1',
      },
      {
        name: intl.formatMessage(messages.contactUs.menu.registeredInfo),
        value: '',
        onClick: () => {
          setShowRegisteredInfo(true)
        },
      },
    ],
    [intl, setShowRegisteredInfo],
  )

  return (
    <ContactButton target="_blank" popoverIsOpen={open} ref={modalContainerRef}>
      <Popover
        placement="top"
        transition="slide bottom-10"
        trigger="click"
        onChange={onChange}
        content={<Select value={1} options={options} onChange={onSelectChange} tooltip />}
      >
        <Button size="small" icon={<Mail color="var(--color-bd-pink)" />}>
          <FormattedMessage {...messages.contactUs} />
          <ArrowRight className="right-arrow" />
        </Button>
      </Popover>
      <Modal
        open={showRegisteredInfo}
        centered
        closeIcon
        width={510}
        onClose={() => {
          setShowRegisteredInfo(false)
        }}
        container={modalContainerRef}
      >
        <RegisteredInfoContainer>
          <H4>Registered Info</H4>
          <Body as="p">Registered name：CYPHERVERSE LTD</Body>
          <Body as="p">Registered number：14447777</Body>
          <Body as="p">Address：Level 1, Devonshire House, 1 Mayfair Place, London, England, W1J 8AJ, UK</Body>
        </RegisteredInfoContainer>
      </Modal>
    </ContactButton>
  )
}
