import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { FormProvider, useForm, Resolver } from 'react-hook-form'
import { useRouter } from 'next/router'
import { auth } from '@/data/firebase/firebase.config'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import clientPromise from '@/lib/mongodb'

type FormValues = {
  username: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}

export default function SignUp({users}: InferGetServerSidePropsType<typeof getServerSideProps>) {
    const methods = useForm({ mode: "onBlur"})
    const router = useRouter()
    const [invalid, setInvalid] = useState("")
    const [loadingTransition, setLoadingTransition] = useState<boolean>(false)

    const resolver: Resolver<FormValues> = async (values) => {
      return {
        values: values.email ? values : {},
        errors: !values.email
        ? {
          email: {
            type: 'required',
            message: 'This is required.',
          },
        }
        : {},
      }
    }
    const {
      register,
      handleSubmit,
      formState: { errors },
      getValues
    } = useForm<FormValues>({ resolver });

    async function createUserData(username: string, email: string){
      let res = await fetch("http://localhost:3000/api/users",
      {
        method: "POST",
        body: JSON.stringify({
          username: username,
          email: email,
          notes: {}
        }),
      });
      res = await res.json();
    }
  
    const onSubmit = async (data: any) => {
      const pw1: any = document.getElementById("pw1")
      const pw2: any = document.getElementById("pw2")

      switch (data) {
        case pw1.value !== pw2.value:
          setInvalid("Passwords do not match.")
          break;
        case !users.includes(data.username):
          setInvalid("Username is taken")
          break; 
        default:
          await createUserWithEmailAndPassword(auth, data.email, data.password)
          .then(() => {
            createUserData(data.username, data.email),
            setLoadingTransition(true),
            setTimeout(() => {router.push(`/user/${data.username}`);}, 1000),
            setInvalid("")
          })
          .catch ((error: any) => {
            if (error) {
              console.log(error.message)
              setInvalid(error.message)
            }
            if (error.code === "auth/weak-password") {
              setInvalid("Password shoud be at least 6 characters long.")
            } else if (error.code === "auth/email-already-in-use"){
              setInvalid("Email already in use.")
            } else if (error.code === "auth/internal-error"){
              setInvalid("Please check fields.")
            }
        })
      }
    };

    return (
        <div className="pb-60 w-screen relative bg-stone-100 min-h-screen">
        <Navbar />
        <div className="flex justify-center text-center">
              <div className="xs:w-11/12 sm:w-144 px-16 flex-col justify-center items-center border border-slate-300 rounded-lg pt-28 pb-12 mt-20 mb-4 bg-white">
                <h4 className="mb-6 text-2xl font-semibold tracking-wide">Sign Up</h4>
                <FormProvider {...methods}>
                  <form action="" onSubmit={handleSubmit(onSubmit)} className="">
                    <div className="">
                      <div className="mb-2">
                        <label htmlFor="" className="text-sm">
                          Username
                        </label>
                      </div>
  
                      <input
                        type="text"
                        {...register("username", { required: "Username is required" })}
                        className="mb-4"
                      />
                      {errors.email && <p className="error">{errors.email.message}</p>}
                    </div>
                    <div className="">
                      <div className="mb-2">
                        <label htmlFor="" className="text-sm">
                          Email
                        </label>
                      </div>
  
                      <input
                        type="email"
                        {...register("email", { required: "Email is required" })}
                        className="mb-4"
                      />
                      {errors.email && <p className="error">{errors.email.message}</p>}
                    </div>
                    <div className="">
                      <div className="mb-2">
                        <label htmlFor="" className="text-sm">
                          Password
                        </label>
                      </div>
  
                      <input
                        type="password"
                        {...register("password", { required: "Password is required" })}
                        className="mb-4"
                        id='pw1'
                      />
                      {errors.password && <p className="error">{errors.password.message}</p>}
                    </div>
                    <div className="">
                    <div className="mb-2">
                      <label htmlFor="" className="text-sm">
                        Confirm Password
                      </label>
                    </div>

                    <input
                      type="password"
                      {...register("passwordConfirmation", {
                        required: "Verify your password",
                        validate: {
                          matchesPreviousPassword: (value) => {
                            const { password } = getValues();
                            return password === value || "Passwords should match!";
                          },
                        }
                      })}
                      className="mb-4"
                      id="pw2"
                    />
                    {errors.passwordConfirmation && (
                      <p className="">{errors.passwordConfirmation.message}</p>
                    )}
                  </div>
                  <div className="flex flex-col items-center justify-center">
                      <button
                        type="submit"
                        className=""
                      >
                        <p className="my-4 bg-blue-900 text-white px-4 py-1.5 rounded-full text-sm hover:bg-blue-700">Submit</p>
                      </button>
                      <p className="text-sm text-red-600 mb-4 text-center">{invalid}</p>
                    </div>
                  </form>
                </FormProvider>
                <Link href="/profile/login">
                  <p className="text-xs text-slate-500">Already have an account? Click here to log in!</p>
                </Link>
                {
                  loadingTransition
                  ?
                  <div className='pt-8 '>
                    Loading...
                  </div>
                  :
                  <div className='pt-24 pb-5 mb-0.5'></div>
                }
              </div>
          </div>
          <Footer />
      </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => { 
  try {
    const client = await clientPromise;
    const database = client.db('users-db');

    const users = await database
        .collection('users')
        .find({})
        .toArray();
    
    const userIds = users.map(function (obj) { return obj.username} )

    return {
        props: { 
          users: JSON.parse(JSON.stringify(userIds)) 
        },
    };
  } catch (e) {
    console.error(e);
    return {
      props: { users: [] }
    }
  } 
}   