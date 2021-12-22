/**
 * @jest-environment jsdom
 */
import React from 'react';
import Button from '../Button';

import { render, fireEvent, screen } from '@testing-library/react';

it('checkRender', () => {
  const { getByText } = render(<Button />);
  const button = getByText(`I'm a button`);
  expect(button).toBeTruthy();
});

describe('clickButton', () => {
  it('onClick', () => {
    const { getByText } = render(<Button />);
    const button = getByText(`I'm a button`);
    fireEvent.click(button);
    expect(button.innerHTML).toBe('No touchy touchy!');
  });
});
