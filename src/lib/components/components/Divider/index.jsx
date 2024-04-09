import React from 'react';
import { Box } from './style';

export default function Divider({
  direction = 'vertical',
  gap = '24.5px',
  color = 'var(--color-border-subtle)',
  ...args
}) {
  return <Box direction={direction} gap={gap} color={color} {...args} />;
}
