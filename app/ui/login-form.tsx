'use client';
 
import {
  ExclamationCircleIcon,
} from '@heroicons/react/24/outline';
import { authenticate } from '@/app/lib/actions';
import { useFormState } from 'react-dom';
import { useState } from 'react';
 
export default function LoginForm() {

  const [errorMessage, formAction, isPending] = useFormState(
    authenticate,
    undefined,
  );

  /* eslint-disable */
  const [ _, setIsSignUp ] = useState(false);
  /* eslint-enable */

 
  return (
    <form action={formAction} className="space-y-3" autoComplete="off">
      <div className="flex-1 rounded-lg">
        <div className="w-full space-y-6">
          <div>
            <div className="relative">
              <input
                className="bg-input font-sans text-white text-center w-full rounded-3xl px-16 py-3 placeholder:text-white"
                id="email"
                type="email"
                name="email"
                placeholder="Email"
                required
              />
            </div>
          </div>
          <div className="mt-4">
            <div className="relative">
              <input
                className="bg-input font-sants text-white text-center w-full rounded-3xl px-16 py-3 placeholder:text-white"
                id="password"
                type="password"
                name="password"
                placeholder="Password"
                required
                minLength={6}
              />
            </div>
          </div>
        </div>
        <div
          className="flex h-8 items-end space-x-1"
          aria-live="polite"
          aria-atomic="true"
        >
          {errorMessage && (
            <>
              <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
              <p className="text-sm text-red-500">{errorMessage}</p>
            </>
          )}
        </div>
      </div>
      <button className="font-sans bg-white text-purple font-bold w-full rounded-3xl px-16 py-2" aria-disabled={isPending}>
          Log in 
      </button>
      <button className="mt-4 w-full text-white" onClick={() => setIsSignUp(true)}>
          Don&apos;t have an account? <b>Sign up.</b>
      </button>
    </form>
  );
}