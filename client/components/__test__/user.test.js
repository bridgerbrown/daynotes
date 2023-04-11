import "@testing-library/jest-dom"
import { render, screen, fireEvent, act, waitFor } from '@testing-library/react';
import { mocked } from 'jest-mock'
import { useUser } from '@auth0/nextjs-auth0/client';
import Navbar from '../Navbar';

jest.mock('@auth0/nextjs-auth0/client');

const mockedAuth0 = mocked(useUser, true);

describe('Logged in', () => {
    beforeEach(() => {
        mockedAuth0.mockReturnValue({
            isAuthenticated: true,
            user: "user",
            logout: jest.fn(),
            loginWithRedirect: jest.fn(),
            getAccessTokenWithPopup: jest.fn(),
            getAccessTokenSilently: jest.fn(),
            getIdTokenClaims: jest.fn(),
            loginWithPopup: jest.fn(),
            isLoading: false,
        });
    });

    test("User displays when logged in", () => {
        render(
            <Navbar />
        );
        const userButton = screen.getByText(/User/i);
        expect(userButton).toBeInTheDocument();
    });
});