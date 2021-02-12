import React from 'react';
import Button from './Button';

export default {
  title: 'Button'
};

export const Normal: React.VFC = () => <Button>Button</Button>;
export const Edit: React.VFC = () => (
  <Button imgUrl={'./assets/images/edit.svg'} />
);
export const Delete: React.VFC = () => (
  <Button imgUrl={'./assets/images/delete.svg'} />
);
