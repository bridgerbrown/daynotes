import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useAuth } from '@/data/context/AuthContext';

export default function SignUp() {
  const router = useRouter();
  const { setUserData, setToken } = useAuth();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [email, setEmail] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [usernameError, setUsernameError] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");
  const [submitError, setSubmitError] = useState<string>("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    if (!email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
      setEmailError("Enter a valid email address.");
    } else if (username.length < 4) {
      setUsernameError("Enter a username with at least 4 characters.");
    } else if (password !== confirmPassword) {
      setPasswordError("Make sure both passwords match.");
    } else {
      try {
        await register(email, username, password);
      } catch (err) {
        console.log(err);
        setSubmitError(JSON.stringify(err));
      };
    };
  };

  async function register(email: string, username: string, password: string){
    try {
      const response = await fetch("http://localhost:10000/register", {
        method: "POST",
        headers: { 
          "Content-type": "application/json"
        },
        body: JSON.stringify({ email, username, password }),
      });
      console.log(response.status); 
      console.log(response);
      if (response.status === 201) {
        const data = await response.json();
        setUserData(data);
        router.push("/auth/login");
      } else if (response.status === 409) {
        setSubmitError("Email address is already registered.");
      } else if (response.status === 401) {
        setSubmitError("Username is already taken.");
      } else {
        setSubmitError("An error occured during registration.");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <main className="font-sans bg-white min-h-screen w-screen relative flex flex-col justify-center items-center">
      <Image
        src={"/daynotes-logo.png"}
        width={740}
        height={149}
        alt="DayNotes logo"
        className="w-48 mb-10"
      />
      <div className='w-[400px] h-[700px] text-center'>
        <section className='mb-8 flex flex-col items-center justify-center'>
          <h1 className='text-2xl font-semibold tracking-wide mb-2'>
            Sign Up
          </h1>
          <p className='text-gray-500 font-light mb-6'>
            Choose your method for signing up
          </p>
          {
            emailError ?
            <p className='pb-2 text-sm text-red-600 font-light'>
              {emailError}
            </p>
            :
            <p className='pb-0'></p>
          }
          <input
            type='email'
            value={email}
            onChange={handleEmailChange}
            className='border-gray-400 border w-80 h-10 font-light rounded-md bg-gray-100 px-3'
            placeholder='Enter your email address'
          />
          {
            usernameError ?
            <p className='py-2 text-sm text-red-600 font-light'>
              {usernameError}
            </p>
            :
            <p className='py-2'></p>
          }
          <input
            type='text'
            value={username}
            onChange={handleUsernameChange}
            className='border-gray-400 border w-80 h-10 font-light rounded-md bg-gray-100 px-3'
            placeholder='Enter a username'
          />
          {
            passwordError ?
            <p className='py-2 text-sm text-red-600 font-light'>
              {passwordError}
            </p>
            :
            <p className='py-2'></p>
          }
          <input
            type='password'
            value={password}
            onChange={handlePasswordChange}
            className='border-gray-400 border w-80 h-10 font-light rounded-md bg-gray-100 px-3 mb-4'
            placeholder='Password'
          />
          <input
            type='password'
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            className='border-gray-400 border w-80 h-10 font-light rounded-md bg-gray-100 px-3 mb-4'
            placeholder='Confirm Password'
          />
          <button
            className='w-80 h-10 bg-blue-300 rounded-md text-white text-sm'
            onClick={handleSubmit}
          >
            Continue
          </button>
          {
            submitError ?
            <p className='pt-2 text-sm text-red-600 font-light'>
              {submitError}
            </p>
            :
            <p className='pb-0'></p>
          }
          <Link href={"/auth/login"}>
            <p className='mt-4 hover:cursor-pointer hover:text-gray-500 underline underline-offset-2 text-sm font-light text-gray-400'>
              Already registered? Log in
            </p>
          </Link>
        </section>
        <section className='flex flex-col items-center'>
          <div className='mb-8 h-0.5 w-80 bg-gray-200'>
            <div className='w-80 relative bottom-2.5 flex items-center justify-center'>
              <p className='z-10 font-light text-gray-500 text-sm'>
                or
              </p>
              <div className='bg-white w-8 h-8 absolute'>
              </div>
            </div>
          </div>
          <button
            className='mb-3 w-80 h-10 bg-white border-gray-400 border rounded-md font-semibold text-sm'
          >
            Continue with Google
          </button>
          <button
            className='w-80 h-10 bg-white border-gray-400 border rounded-md font-semibold text-sm'
          >
            Email me a magic link
          </button>
          <p className='mt-4 hover:cursor-pointer hover:text-gray-500 underline underline-offset-2 text-sm font-light text-gray-400'>
            Learn about our secure login process
          </p>
        </section>
      </div>
    </main>
  )
}
