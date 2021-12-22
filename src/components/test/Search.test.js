/**
 * @jest-environment jsdom
 */
import React from 'react';
import Search from '../Search';

import { render, fireEvent, screen } from '@testing-library/react';

it('searchRender', () => {
  const { queryByTitle } = render(<Search />);
  const search = queryByTitle('example');
  expect(search).toBeTruthy();
});

describe('changeInput', () => {
  it('onChange', () => {
    const { queryByTitle } = render(<Search />);
    const search = queryByTitle('example');
    fireEvent.change(search, { target: { value: 'ArticAngel' } });
    expect(search.innerHTML).toBe('ArticAngel');
  });
});
