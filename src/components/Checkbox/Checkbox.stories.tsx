import React from 'react';
import Checkbox from './Checkbox';

export default {
  title: 'Checkbox'
};

export const Normal: React.VFC = () => <Checkbox />;
export const Disabled: React.VFC = () => (
  <Checkbox checked={true} disabled={true} />
);
