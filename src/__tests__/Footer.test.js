import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from '../components/Footer';

describe('Test Footer render', () => {
  it('Test Footer snapshot', () => {
    const tree = renderer
      .create(
        <Router>
          <Footer />
        </Router>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
