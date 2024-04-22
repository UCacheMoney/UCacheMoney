import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SIDENAV from '@/app/components/sideNav';

describe('SIDENAV component', () => {
  it('renders without crashing', () => {
    const { getByText, getByLabelText } = render(<SIDENAV />);

    expect(getByText('Home')).toBeInTheDocument();
    expect(getByText('Profile')).toBeInTheDocument();
    expect(getByText('Set Spend Limit')).toBeInTheDocument();
    expect(getByLabelText('spendlimit')).toBeInTheDocument();
    expect(getByText('Set Savings Goal')).toBeInTheDocument();
    expect(getByLabelText('savegoal')).toBeInTheDocument();
    expect(getByText('Logout')).toBeInTheDocument();
  });
});
