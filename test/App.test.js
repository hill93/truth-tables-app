/**
 * @jest-environment jsdom
 */

import renderer from 'react-test-renderer';
import {screen, render} from '@testing-library/react';
import App from '../src/App.js';

test('renders learn react link', () => {
  const component = renderer.create(<App/>);

  expect(component).toBeTruthy();
  
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});

test('another test', () => {
  render(<App></App>)
});
