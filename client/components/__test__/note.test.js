/**
 * @jest-environment node
 */

import "@testing-library/jest-dom"
import { render, screen, fireEvent, act, waitFor } from '@testing-library/react';
import { mocked } from 'jest-mock'
import { useUser } from '@auth0/nextjs-auth0/client';
import Navbar from '../Navbar';
import DayNote from "@/pages/note/[id]";
const Environment = require('jest-environment-jsdom');
// import clientPromise from '@/lib/mongodb';

jest.mock('@auth0/nextjs-auth0/client');

const mockedAuth0 = mocked(useUser, true);

describe('User to todays note', () => {
    // beforeAll(async () => {
    //     await clientPromise;
    //   });

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

    test("User is logged in", () => {
        render(
            <Navbar />
        );
        const userButton = screen.getByText(/User/i);
        expect(userButton).toBeInTheDocument();
    });

    test("Todays note is rendered", () => {
        render(
            <Day />
        )
        
    })
});