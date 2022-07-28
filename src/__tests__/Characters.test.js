import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../redux/store';
import Characters from '../components/Characters';

describe('Test Characters render', () => {
  test('Test Snapshot', () => {
    const tree = render(
      <Provider store={store}>
        <Router>
          <Characters />
        </Router>
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
