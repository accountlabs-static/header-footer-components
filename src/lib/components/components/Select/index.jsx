import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Tooltip } from 'react-tooltip'
import { Container, ListItem } from './style'
import Check from '../../assets/images/Check'

function Select({ value, options, multiple = false, onChange, tooltip, ...args }) {
  const [checkList, setCheckList] = useState(options.map((it) => ({ ...it, checked: it.value === value })))

  function toggleChecked(data) {
    let setData = null

    if (!multiple) {
      setData = checkList.map((it) => ({
        ...it,
        checked: it.value === data.value,
      }))
    } else {
      setData = checkList.map((it) => ({
        ...it,
        checked: it.value === data.value ? !it.checked : it.checked,
      }))
    }

    setCheckList(setData)

    if (onChange) {
      onChange(!multiple ? { ...data, checked: !data.checked } : setData)
    }
  }

  return (
    <Container {...args}>
      {checkList.map((it) => (
        <ListItem
          key={it.value}
          className="contact-tooltip-select"
          onClick={() => toggleChecked(it)}
          data-tooltip-content={it.value?.replace?.('mailto:', '')}
          data-tooltip-hidden={!it.value}
        >
          {it.name}
          <Check className="check-icon actived" style={{ visibility: it.checked ? 'initial' : 'hidden' }} />
        </ListItem>
      ))}
      {tooltip && <Tooltip anchorSelect=".contact-tooltip-select" render={({ content }) => <span>{content}</span>} />}
    </Container>
  )
}

Select.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      onClick: PropTypes.func,
    }),
  ).isRequired,
  multiple: PropTypes.bool,
  onChange: PropTypes.func,
}

export default Select
