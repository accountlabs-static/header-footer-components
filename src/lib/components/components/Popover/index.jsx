import React, {
  cloneElement,
  createElement,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import PropTypes from 'prop-types';
import { useVisibleTransition } from '../../hooks';
import { Container, PopoverContainer } from './style';

function Popover({
  content,
  children,
  placement = 'bottom',
  transition = 'slide bottom',
  trigger = 'hover',
  onChange,
  defaultOpen = false,
  ...args
}) {
  const popoverRef = useRef();

  const [popoverOpen, setPopoverOpen] = useState(defaultOpen);

  const { visible, className: transitionClassName } = useVisibleTransition({
    open: popoverOpen,
    transition,
    containerRef: popoverRef,
  });

  function toggleVisible() {
    setPopoverOpen(!visible);
    onChange && onChange(!visible);
  }

  function onClose() {
    if (visible) {
      toggleVisible(false);
    }
  }

  const [width, setWidth] = useState(160);

  useLayoutEffect(() => {
    if (popoverRef.current) {
      setWidth(popoverRef.current.offsetWidth);
    }
  }, [visible]);

  function onHiddenPopover() {
    if (visible) {
      maskTimer = setTimeout(() => {
        onClose();
      }, 100);
    }
  }

  function onShowPopover() {
    clearTimeout(maskTimer);
    toggleVisible();
  }

  let maskTimer = null;

  return (
    <>
      <Container {...args}>
        {visible &&
          createElement(
            PopoverContainer,
            {
              tabIndex: 2,
              ref: popoverRef,
              className: transitionClassName,
              width,
              placement,
              [{ hover: 'onMouseEnter', click: 'onBlur' }[trigger]]() {
                clearTimeout(maskTimer);
              },
              [{ click: 'onFocus' }[trigger]]() {
                onHiddenPopover();
              },
              [{ hover: 'onMouseLeave' }[trigger]]() {
                onHiddenPopover();
              },
            },
            content,
          )}
        {cloneElement(children, {
          tabIndex: 1,
          [{ hover: 'onMouseEnter', click: 'onClick' }[trigger]]() {
            if (trigger === 'click') {
              if (visible) {
                onHiddenPopover();
              } else {
                onShowPopover();
              }
            } else if (trigger === 'hover') {
              onShowPopover();
            }
          },
          [{ hover: 'onMouseLeave', click: 'onBlur' }[trigger]]() {
            onHiddenPopover();
          },
        })}
      </Container>
    </>
  );
}

Popover.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Popover;
