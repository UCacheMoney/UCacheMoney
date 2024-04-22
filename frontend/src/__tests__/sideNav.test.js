import { render } from 'vitest';
import SIDENAV from '@/app/components/sideNav';

describe('SIDENAV Component', () => {
  it('renders properly', async () => {
    const { getByText, getByLabelText } = render(<SIDENAV />);
    
    // Check if navigation links are present
    expect(getByText('Home')).toBeInTheDocument();
    expect(getByText('Profile')).toBeInTheDocument();
    expect(getByText('Logout')).toBeInTheDocument();

    // Check if input fields are present
    expect(getByLabelText('Spend Limit')).toBeInTheDocument();
    expect(getByLabelText('Savings Goal')).toBeInTheDocument();
  });
});
