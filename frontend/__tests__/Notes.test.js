import React from 'react';
import { fireEvent, getAllByTestId, render, waitFor } from '@testing-library/react';
import mockRouter from 'next-router-mock';
import Notes from "../pages/[user]/notes";
import { act } from 'react-test-renderer';

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
      {
        _id: "1",
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
        _id: "2",
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
      {
        _id: "1",
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
        _id: "2",
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

  it('sorts notes by date created ascending', async () => {
    const { getAllByTestId, getByTestId } = renderedComponent;
    
    await waitFor(() => {
      const notesMadeText = getByTestId("notes-notesmadetext");
      expect(notesMadeText.textContent).toBe("3 notes made");
    });

    await act(() => {
      const sortByDateButton = getByTestId("notes-sortby-date");
      fireEvent.click(sortByDateButton);
    });

    const notes = getAllByTestId("note-preview");

    for (let i = 0; i < notes.length - 1; i++) {
      const firstNoteDate = new Date(notes[i].getAttribute("data-date"));
      const secondNoteDate = new Date(notes[i + 1].getAttribute("data-date"));
      expect(firstNoteDate <= secondNoteDate).toBeTruthy();
    };
  });


  it('sorts notes by date created descending', async () => {
    const { getAllByTestId, getByTestId } = renderedComponent;
    
    await waitFor(() => {
      const notesMadeText = getByTestId("notes-notesmadetext");
      expect(notesMadeText.textContent).toBe("3 notes made");
    });

    await act(() => {
      const sortByDateButton = getByTestId("notes-sortby-date");
      fireEvent.click(sortByDateButton);
    });

    await act(() => {
      const sortByDateButton = getByTestId("notes-sortby-date");
      fireEvent.click(sortByDateButton);
    });

    const notes = getAllByTestId("note-preview");

    for (let i = 0; i < notes.length - 1; i++) {
      const firstNoteDate = new Date(notes[i].getAttribute("data-date"));
      const secondNoteDate = new Date(notes[i + 1].getAttribute("data-date"));
      expect(firstNoteDate >= secondNoteDate).toBeTruthy();
    };
  });

  it('sorts notes by last updated', async () => {
    const { getAllByTestId, getByTestId } = renderedComponent;
    
    await waitFor(() => {
      const notesMadeText = getByTestId("notes-notesmadetext");
      expect(notesMadeText.textContent).toBe("3 notes made");
    });

    await act(() => {
      const sortByLastUpdatedButton = getByTestId("notes-sortby-lastupdated");
      fireEvent.click(sortByLastUpdatedButton);
    });

    const notes = getAllByTestId("note-preview");

    for (let i = 0; i < notes.length - 1; i++) {
      const firstNoteDate = new Date(notes[i].getAttribute("data-lastupdated"));
      const secondNoteDate = new Date(notes[i + 1].getAttribute("data-lastupdated"));
      expect(firstNoteDate <= secondNoteDate).toBeTruthy();
    };
  });
});
