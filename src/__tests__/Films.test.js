import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../redux/store';
import Films from '../components/Films';

describe('Test Films render', () => {
  test('Test Snapshot', () => {
    const tree = render(
      <Provider store={store}>
        <Router>
          <Films />
        </Router>
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
