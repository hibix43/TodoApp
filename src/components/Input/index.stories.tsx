import React, { useState } from 'react';
// import { action } from '@storybook/addon-actions';
import Input from './index';

export default {
  title: 'Input'
};

export const Normal: React.VFC = () => {
  const [text, setText] = useState('');
  return (
    <Input type="text" value={text} onChange={(e) => setText(e.target.value)} />
  );
};

export const SubmitOnEnterKeyPress: React.VFC = () => {
  const [text, setText] = useState('');
  return (
    <Input
      type="text"
      value={text}
      onChange={(e) => setText(e.target.value)}
      onKeyPress={(e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          setText(''); // 入力をリセットすることで動作を確認する
          // action(`Submit content: ${text}`); 期待通りに動作しない。原因不明。5.0.1のissueは見つけたが解決されているみたい?
        }
      }}
    />
  );
};
