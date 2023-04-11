import User from '../../pages/user/[user]';
import "@testing-library/jest-dom"
import { render, screen, fireEvent } from '@testing-library/react';
import { useUser } from '@auth0/nextjs-auth0/client';

describe('User', () => {
    let user = useUser();
    it('should render the user page if logged in', () => {
        if(user) {
            render(<User />);
            expect(screen.getByText('User')).toBeInTheDocument();
        } else {
            expect(screen.getByText('User')).not.toBeInTheDocument();
        }
    });

});