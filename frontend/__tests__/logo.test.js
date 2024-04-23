import React from 'react';
import { render } from '@testing-library/react';
import Logo from '@/app/components/logo';

describe('Logo Component', () => {
  test('renders logo image', () => {
    const { getByAltText } = render(<Logo />);
    const logoImage = getByAltText('UCache$');
    expect(logoImage).toBeInTheDocument();
  });

  test('has correct image source', () => {
    const { getByAltText } = render(<Logo />);
    const logoImage = getByAltText('UCache$');
    expect(logoImage).toHaveAttribute('src', './UCache$Logo.png');
  });

  test('has link to "#"', () => {
    const { getByRole } = render(<Logo />);
    const link = getByRole('link', { href: '#' });
    expect(link).toBeInTheDocument();
  });
});
