import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../redux/store';
import Planets from '../components/Planets';

describe('Test Planets render', () => {
  test('Test Snapshot', () => {
    const tree = render(
      <Provider store={store}>
        <Router>
          <Planets />
        </Router>
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
