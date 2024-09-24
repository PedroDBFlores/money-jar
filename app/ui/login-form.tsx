'use client';
 
import {
  AtSymbolIcon,
  KeyIcon,
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

  const [ isSignUp, setIsSignUp ] = useState(false);
 
  return (
    <form action={formAction} className="space-y-3">
      <div className="flex-1 rounded-lg">
        <div className="w-full">
          <div>
            <div className="relative">
              <input
                className="bg-white text-purple text-center w-full rounded-3xl px-16 py-3"
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
                className="bg-white text-purple text-center w-full rounded-3xl px-16 py-3"
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
      <button className="bg-white text-purple font-bold w-full rounded-3xl px-16 py-2" aria-disabled={isPending}>
          Log in 
        </button>
      <button className="text-white mt-4 w-full" onClick={() => setIsSignUp(true)}>
          Don't have an account? Sign up.
        </button>
    </form>
  );
}