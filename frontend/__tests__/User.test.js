import React from 'react';
import { fireEvent, getAllByTestId, render, waitFor, screen } from '@testing-library/react';
import mockRouter from 'next-router-mock';
import User from "../pages/[user]/index";
import AuthProvider from "../data/context/AuthContext";
import Cookies from 'js-cookie';

jest.mock('next/router', () => jest.requireActual('next-router-mock'));

jest.mock('../data/context/AuthContext', () => ({
  useAuth: () => ({
    isAuthenticated: true,
    login: jest.fn(),
    logout: jest.fn(),
    userData: {
      userEmail: "test@gmail.com",
      userId: "123abc",
      username: "test",
      memberSince: new Date(2023, 6, 20, 19, 11, 23),
      userImage: "/user.png",
    },
    setUserData: jest.fn(),
    userEmail: "test@gmail.com",
    setUserEmail: jest.fn(),
    token: "test",
    setToken: jest.fn(),
  })
}));

jest.mock('../data/context/NotesContext', () => ({
  useNotes: () => ({
    usersNotes: [
      {
        _id: "0",
        date: "2023-07-19T07:00:00.000Z",
        documentId: "testdocument1",
        userId: "123abc",
        data: {
          ops: [
            {
              insert: "apple"
            }
          ]
        },
        lastUpdated: new Date(2023, 6, 20, 19, 11, 23),
      },
    ],
    setUsersNotes: jest.fn(),
  })
}));

jest.mock('../data/getUserData', () => ({
  default: jest.fn().mockResolvedValue({
    userEmail: "test@gmail.com",
    userId: "123abc",
    username: "test",
    memberSince: new Date(2023, 6, 20, 19, 11, 23),
    userImage: "/user.png",
  })
}))

const mockRouterSetup = () => {
  mockRouter.push("/test@gmail.com");
};

describe('next-router-mock', () => {
  it('mocks the useRouter hook', () => {
    mockRouterSetup();
  });
});

describe('User component', () => {
  let renderedComponent;
  const mockUserResponse = {
    userEmail: "test@gmail.com",
    userId: "123abc",
  };

  beforeEach(() => {
    mockRouterSetup();
    renderedComponent = render(
      <User userResponse={mockUserResponse} />
    );
  });

  it('displays the users username, email, and member since date', async () => {
    const { getByTestId } = renderedComponent;
    
    await waitFor(() => {
      const usersUsername = getByTestId("user-username");
      expect(usersUsername.textContent).toBe("test");

      const usersEmail = getByTestId("user-email");
      expect(usersEmail.textContent).toBe("test@gmail.com");
    });
  });
});
