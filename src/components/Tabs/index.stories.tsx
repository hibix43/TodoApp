import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../../store';
import { Tabs } from './index';

export default {
  title: 'Tabs'
};

export const Normal: React.VFC = () => (
  <Provider store={store}>
    <Tabs
      selectedTabId={1}
      contents={[
        {
          id: 0,
          title: 'Tab1',
          content: <p>Tab1</p>
        },
        {
          id: 1,
          title: 'Tab2',
          content: <p>Tab2</p>
        },
        {
          id: 2,
          title: 'Tab3',
          content: <p>Tab3</p>
        },
        {
          id: 3,
          title: 'Tab4',
          content: <p>Tab4</p>
        }
      ]}
    />
  </Provider>
);
