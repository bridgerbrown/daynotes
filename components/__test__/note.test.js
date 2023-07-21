/**
 * @jest-environment jsdom
 */

import "@testing-library/jest-dom"
import { render, screen, fireEvent, act, waitFor } from '@testing-library/react';
import { mocked } from 'jest-mock'
import { useUser } from '@auth0/nextjs-auth0/client';
import Navbar from '../Navbar';
import Link from 'next/link';
import { startOfToday } from "date-fns";

const Environment = require('jest-environment-jsdom');
// import clientPromise from '@/lib/mongodb';

jest.mock('@auth0/nextjs-auth0/client');
jest.mock("next/link", () => {
    return ({ children }) => children;
});

const mockedAuth0 = mocked(useUser, true);

describe('User to todays note', () => {
    beforeEach(async () => {
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

    it("should log user in", () => {
        render(
            <Navbar />
        );
        const userButton = screen.getByText(/User/i);
        expect(userButton).toBeInTheDocument();
    });

    it("should render Note page", async () => {
        const usersId = "123456789";
        const todaysDate = startOfToday()
        render(
            <Link href={`/note/${usersId}_${todaysDate}`}></Link>
        )
    })
});