import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useAuth } from '@/data/context/AuthContext';
import Cookies from 'js-cookie';
import Loading from '@/components/modules/Loading';
import getUserData from '@/data/getUserData';

export default function LogIn() {
  const router = useRouter();
  const { setUserEmail, login } = useAuth();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [submitError, setSubmitError] = useState<string>("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    if (!email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
      setEmailError("Enter a valid email address.")
    } else {
      try {
        setIsLoading(true);
        await logIn(email, password);
      } catch (err) {
        setIsLoading(false);
        console.log(err);
        setSubmitError(JSON.stringify(err));
      };
    };
  };

  async function logIn(email: string, password: string){
    try {
      const response = await fetch("https://daynotes-server.onrender.com/login", {
        method: "POST",
        headers: { 
          "Content-type": "application/json"
        },
        body: JSON.stringify({ email, password }),
      });
      
      if (response.status === 200) {
        const data = await response.json();
        Cookies.set('accessToken', data.accessToken, { expires: 1 / 24, path: '/' });
        setUserEmail(email);
        router.push(`/${email}`); 
      } else if (response.status === 401) {
        setSubmitError("Invalid email or password.");
      } else {
        setSubmitError("An error occured during login.");
      }
    } catch (err) {
      console.error(err);
      setSubmitError("An error occured during login.");
    }
  };

  return (
    <main className="font-sans bg-white w-screen absolute top-28 sm:top-1/4">
      <div className='flex flex-col justify-center items-center'>
        <Image
          src={"/daynotes-logo.png"}
          width={740}
          height={149}
          alt="DayNotes logo"
          className="w-48 mb-12"
        />
        {
          isLoading
          ?
          <div className='flex justify-center items-center w-full'>
            <Loading dimensions={125} invert={false} />
          </div>
          :
          <div className='w-[370px] text-center'>
            <section className='mb-8 flex flex-col items-center justify-center'>
              <h1 className='text-2xl font-semibold tracking-wide mb-4'>
                Log In
              </h1>
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
                className='border-gray-400 border w-80 h-10 font-light rounded-md bg-gray-100 px-3 mb-4'
                placeholder='Enter your email address'
              />
              <input
                type='password'
                value={password}
                onChange={handlePasswordChange}
                className='border-gray-400 border w-80 h-10 font-light rounded-md bg-gray-100 px-3 mb-4'
                placeholder='Password'
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
              <Link href={"/auth/signup"}>
                <p className='mt-4 hover:cursor-pointer hover:text-gray-500 underline underline-offset-2 text-sm font-light text-gray-400'>
                  Don't have an account? Sign up here
                </p>
              </Link>
            </section>
          </div>
        }
      </div>
    </main>
  )
}

