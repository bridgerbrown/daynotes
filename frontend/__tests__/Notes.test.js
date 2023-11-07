import React from 'react';
import { render, waitFor } from '@testing-library/react';
import mockRouter from 'next-router-mock';
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
    usersNotes: [
      {
        _id: "abc123456789",
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
      {
        _id: "abc123456789",
        date: "2023-07-20T07:00:00.000Z",
        documentId: "testdocument2",
        userId: "123abc",
        data: {
          ops: [
            {
              insert: "blue"
            }
          ]
        },
        lastUpdated: new Date(2023, 6, 21, 19, 11, 23),
      },
      {
        _id: "abc123456789",
        date: "2023-07-21T07:00:00.000Z",
        documentId: "testdocument3",
        userId: "123abc",
        data: {
          ops: [
            {
              insert: "chocolate"
            }
          ]
        },
        lastUpdated: new Date(2023, 6, 22, 19, 11, 23),
      },

    ],
    setUsersNotes: jest.fn(),
  })
}));

jest.mock('../data/getUsersNotes', () => ({
  default: jest.fn().mockResolvedValue([
      {
        _id: "abc123456789",
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
      {
        _id: "abc123456789",
        date: "2023-07-20T07:00:00.000Z",
        documentId: "testdocument2",
        userId: "123abc",
        data: {
          ops: [
            {
              insert: "blue"
            }
          ]
        },
        lastUpdated: new Date(2023, 6, 21, 19, 11, 23),
      },
      {
        _id: "abc123456789",
        date: "2023-07-21T07:00:00.000Z",
        documentId: "testdocument3",
        userId: "123abc",
        data: {
          ops: [
            {
              insert: "chocolate"
            }
          ]
        },
        lastUpdated: new Date(2023, 6, 22, 19, 11, 23),
      },

  ]),
}));

const mockRouterSetup = () => {
  mockRouter.push("/test@gmail.com/notes");
};

describe('next-router-mock', () => {
  it('mocks the useRouter hook', () => {
    mockRouterSetup();
  });
});

describe('Notes component with existing notes', () => {
  let renderedComponent;
  const mockUserResponse = {
    userEmail: "test@gmail.com",
    userId: "123abc",
  };

  beforeEach(() => {
    const mockedDate = new Date(2023, 11, 6);
    jest.useFakeTimers("modern");
    jest.setSystemTime(mockedDate);

    mockRouterSetup();
    renderedComponent = render(<Notes userResponse={mockUserResponse} />);
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('displays existing notes', async () => {
    const { getByTestId } = renderedComponent;
    
    await waitFor(() => {
      const notesMadeText = getByTestId("notes-notesmadetext");
      expect(notesMadeText.textContent).toBe("3 notes made");
    });
  });
});
