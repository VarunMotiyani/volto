import React from 'react';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-intl-redux';

import EditHeroTile from './Edit';

global.__SERVER__ = true; // eslint-disable-line no-underscore-dangle

const mockStore = configureStore();
test('renders an edit hero tile component', () => {
  const store = mockStore({
    content: {
      create: {},
      data: {},
    },
    intl: {
      locale: 'en',
      messages: {},
    },
  });
  const component = renderer.create(
    <Provider store={store}>
      <EditHeroTile
        data={{ url: 'hero' }}
        selected={false}
        tile="1234"
        content={{}}
        request={{
          loading: false,
          loaded: false,
        }}
        pathname="/news"
        onChangeTile={() => {}}
        onSelectTile={() => {}}
        onDeleteTile={() => {}}
        createContent={() => {}}
      />
    </Provider>,
  );
  const json = component.toJSON();
  expect(json).toMatchSnapshot();
});
