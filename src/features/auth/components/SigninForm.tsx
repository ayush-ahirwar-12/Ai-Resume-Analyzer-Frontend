import React from 'react'
import LabelInput from './LabelInput'
import { useForm } from 'react-hook-form'

const SigninForm = () => {

const {register,handleSubmit} = useForm<{
  email:String,
  password:String

}>()

  return (
    <div>
      <h1 className="text-3xl font-semibold text-center text-gray-800 mb-8">
        Sign in to Your Account
      </h1>
      {/* <form className="mt-8 space-y-6">
        <LabelInput
          label="Email"
          placeholder="your email"
          type="email"
          {...register("email", { required: true })}
        />

        <LabelInput
          label="Password"
          placeholder="8+ characters"
          type="password"
          {...register("password", { required: true })}
        />

        <p className="text-right -mt-4">
          <a
            href="/forgot-password"
            className="text-sm text-[#4C62ED] hover:underline font-medium"
          >
            Forgot Password?
          </a>
        </p>

        <button
          type="submit"
          disabled={isLoggingIn}
          className="w-full bg-[#4C62ED] hover:bg-[#3a4cd1] transition-all text-white font-medium rounded-base py-3 flex items-center justify-center gap-2 disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          {isLoggingIn ? (
            "Signing in..."
          ) : (
            <>
              <CiMail className="text-lg" />
              Continue with Email
            </>
          )}
        </button>

        <div className="flex items-center justify-center my-6">
          <span className="flex-1 border-t border-gray-300"></span>
          <span className="mx-4 text-gray-400 text-xs font-medium">OR</span>
          <span className="flex-1 border-t border-gray-300"></span>
        </div>

        <button
          type="button"
          className="w-full bg-[#3B3A3A] hover:bg-black transition-colors text-white font-medium rounded-base py-3 flex items-center justify-center gap-2"
        >
          <FcGoogle className="text-xl" />
          Continue with Google
        </button>
      </form> */}
    </div>
  )
}

export default SigninForm