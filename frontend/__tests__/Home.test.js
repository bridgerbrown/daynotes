import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import mockRouter from 'next-router-mock';
import { act } from 'react-dom/test-utils';
import Home from "../pages/index";
import Navbar from "../components/modules/Navbar";

jest.mock('next/router', () => jest.requireActual('next-router-mock'));

jest.mock('../data/context/AuthContext', () => ({
  useAuth: () => ({
    isAuthenticated: false,
    login: jest.fn(),
    logout: jest.fn(),
    userData: {
      userEmail: "",
      userId: ""
    },
    setUserData: jest.fn(),
    userEmail: "",
    setUserEmail: jest.fn(),
    token: "",
    setToken: jest.fn(),
  })
}));

const mockRouterSetup = () => {
  mockRouter.push('/');
};

describe('next-router-mock', () => {
  it('mocks the useRouter hook', () => {
    mockRouterSetup();
  });
});

describe('Navbar component', () => {
  it('should render without errors', () => {
    const { getByTestId } = render(<Navbar />);
    const navbarLogo = getByTestId("navbar-logo");
    expect(navbarLogo.alt).toBe("DayNotes logo");
  });
});

describe('Home component', () => {
  let renderedComponent;


  beforeEach(() => {
    mockRouterSetup();
  });

  it('should display the sign up button if no user detected', async () => {
    const nullUserResponse = {
    };

    renderedComponent = render(<Home userResponse={nullUserResponse} />);
    const { getByTestId } = renderedComponent;
    
    await waitFor(() => {
      const homeSignupButton = getByTestId("home-signup-button");
      expect(homeSignupButton).toBeInTheDocument(); 
    });
  });

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

  it('should display welcome text if user exists', async () => {
    const trueUserResponse = {
      userEmail: "test@gmail.com",
      userId: "123abc",
    };

    renderedComponent = render(<Home userResponse={trueUserResponse} />);
    const { getByTestId } = renderedComponent;

    await waitFor(() => {
      const homeWelcomeText = getByTestId("home-welcome-text");
      expect(homeWelcomeText).toBeInTheDocument(); 
    });
  });
});
