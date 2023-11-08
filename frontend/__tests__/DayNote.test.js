import React from 'react';
import { fireEvent, getAllByTestId, render, waitFor, screen } from '@testing-library/react';
import mockRouter from 'next-router-mock';
import DayNote from "../pages/[user]/[date]";

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
  mockRouter.push("/test@gmail.com/Tue%20Nov%2007%202023%2000:00:00%20GMT-0800%20(Pacific%20Standard%20Time)");
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
    const mockedDate = new Date(2023, 11, 7);
    jest.useFakeTimers("modern");
    jest.setSystemTime(mockedDate);
    mockRouterSetup();
    renderedComponent = render(
      <DayNote userResponse={mockUserResponse} />
    );
  });

  afterEach(() => {
    jest.useRealTimers();
  });


  it('displays correct dates', async () => {
    const { getByTestId } = renderedComponent;
    
    await waitFor(() => {
      const dateheaderPrevDay = getByTestId("daynote-dateheader-prevday");
      expect(dateheaderPrevDay.textContent).toBe("November 6");

      const dateheaderToday = getByTestId("daynote-dateheader-today");
      expect(dateheaderToday.textContent).toBe("November 7");

      const dateheaderNextDay = getByTestId("daynote-dateheader-nextday");
      expect(dateheaderNextDay.textContent).toBe("November 8");
    });
  });
});
