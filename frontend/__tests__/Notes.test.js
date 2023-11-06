import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import mockRouter from 'next-router-mock';
import { act } from 'react-dom/test-utils';
import Navbar from "../components/modules/Navbar";
import Notes from "../pages/[user]/notes";

jest.mock('next/router', () => jest.requireActual('next-router-mock'));

jest.mock('../data/context/AuthContext', () => ({
  useAuth: () => ({
    isAuthenticated: true,
    login: jest.fn(),
    logout: jest.fn(),
    userData: {
      userEmail: "test@gmail.com",
      userId: "123abc"
    },
    setUserData: jest.fn(),
    userEmail: "test@gmail.com",
    setUserEmail: jest.fn(),
    token: "",
    setToken: jest.fn(),
  })
}));

jest.mock('../data/context/NotesContext', () => ({
  useNotes: () => ({
    usersNotes: [],
    setUsersNotes: jest.fn(),
  })
}));

const mockRouterSetup = () => {
  mockRouter.push("/test@gmail.com/notes");
};

describe('next-router-mock', () => {
  it('mocks the useRouter hook', () => {
    mockRouterSetup();
  });
});

describe('Notes component', () => {
  let renderedComponent;
  const mockUserResponse = {
    userEmail: "test@gmail.com",
    userId: "123abc",
  };

  beforeEach(() => {
    mockRouterSetup();
    renderedComponent = render(<Notes userResponse={mockUserResponse} />);
  });

  it('display no notes if notes context is empty', async () => {
    const { getByTestId } = renderedComponent;
    
    await waitFor(() => {
      const notesMadeText = getByTestId("notes-notesmadetext");
      expect(notesMadeText.textContent).toBe("0 notes made");
    });
  });
});
