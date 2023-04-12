import React, { useState } from 'react'
import Link from 'next/link'
import { FormProvider, useForm, Resolver } from 'react-hook-form'
import { useRouter } from 'next/router'
import { auth } from '@/data/firebase/firebase.config'
import { signInWithEmailAndPassword } from 'firebase/auth'
import Navbar from '@/components/navbar'
import Footer from '@/components/modules/footer'

type FormValues = {
  email: string;
  password: string;
  passwordConfirmation: string;
}

export default function LogIn() {
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
  
    const onSubmit = async (data: any) => {
      await signInWithEmailAndPassword(auth, data.email, data.password)
        .then(() => {
          setInvalid(""),
          setLoadingTransition(true),
          setTimeout(() => {router.push(`/user/${data.username}`);}, 1000)
        })
        .catch ((error: any) => {
          console.log(error.message)
          if (error.code === "auth/wrong-password") {
            setInvalid("Invalid password")
          } else if (error.code === "auth/user-not-found"){
            setInvalid("User not found")
          }
        })
    };

    return (
        <div className="pb-60 font-Hind w-screen relative bg-stone-100 min-h-screen">
        <Navbar />
        <div className="flex justify-center text-center">
              <div className="xs:w-11/12 sm:w-[500px] flex-col justify-center items-center border border-slate-300 rounded-lg pt-28 pb-12 mt-20 mb-4 bg-gray-200">
                <h4 className="mb-6 text-2xl font-semibold tracking-wide">Log In</h4>
                <FormProvider {...methods}>
                  <form action="" onSubmit={handleSubmit(onSubmit)} className="">
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
                      {errors.email && <p className="">{errors.email.message}</p>}
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
                      />
                      {errors.password && <p className="">{errors.password.message}</p>}
                    </div>
                  <div className="flex flex-col items-center justify-center">
                      <button
                        type="submit"
                        className=""
                      >
                        <p className="my-4 bg-gray-500 text-white px-4 py-1.5 rounded-full text-sm hover:bg-gray-700">Submit</p>
                      </button>
                      <p className="text-sm text-red-600 mb-4">{invalid}</p>
                    </div>
                  </form>
                </FormProvider>
                <Link href="/user/signup">
                  <p className="text-xs text-slate-500">Don&apos;t have an account? Click here to sign up!</p>
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
    