import { RenderResult, fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import Login from './index';

test('login component should handle username and password input correctly', async () => {
  const { getByPlaceholderText }: RenderResult = render(<Login />);

  const usernameInput: HTMLInputElement = getByPlaceholderText('Username') as HTMLInputElement;
  const passwordInput: HTMLInputElement = getByPlaceholderText('Password') as HTMLInputElement;

  fireEvent.change(usernameInput, { target: { value: 'testuser' } });
  fireEvent.change(passwordInput, { target: { value: 'testpassword' } });

  expect(usernameInput.value).toBe('testuser');
  expect(passwordInput.value).toBe('testpassword');

  const loginButton: HTMLElement = await screen.findByRole('button');

  fireEvent.click(loginButton);
});
