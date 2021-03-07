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
      selectedTabIndex={1}
      contents={[
        {
          index: 0,
          title: 'Tab1',
          content: <p>Tab1</p>
        },
        {
          index: 1,
          title: 'Tab2',
          content: <p>Tab2</p>
        },
        {
          index: 2,
          title: 'Tab3',
          content: <p>Tab3</p>
        },
        {
          index: 3,
          title: 'Tab4',
          content: <p>Tab4</p>
        }
      ]}
    />
  </Provider>
);
