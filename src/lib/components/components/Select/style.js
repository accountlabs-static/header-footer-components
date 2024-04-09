import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;
`;

export const ListItem = styled.div.attrs({
  className: 'list-item',
})`
  position: relative;
  display: flex;
  justify-content: space-between;
  border-radius: 4px;
  padding: 4px 8px;
  cursor: pointer;
  color: var(--color-fg-muted);
  white-space: nowrap;
  &:hover {
    background: var(--color-bg-subtle);
  }
  + .list-item {
    margin-top: 4px;
  }
  > .check-icon {
    margin-left: 10px;
    width: 18px;
    height: 18px;
    &.actived {
      color: var(--color-bd-primary);
    }
  }
`;
