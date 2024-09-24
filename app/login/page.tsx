import LoginForm from '@/app/ui/login-form';
import React from "react";
import Header from '../ui/header';
import logo from '/logo.svg';

export default function LoginPage() {
  return (
    <main className="flex items-center justify-center h-max min-h-screen justify-center bg-gradient-to-br from-purple to-mint">
      <div className="mx-auto flex w-full max-w-[400px] flex-col space-y-10 p-4 md:-mt-32">
       <h1 className='font-bold font-serif text-white text-center text-4xl'>Lunch Queen</h1>
          <p className='font-sans text-white text-lg text-center w-1/2 self-center'>The simplest way to <br></br>pay for your meal</p>
        <LoginForm />
      </div>
    </main>
  );
}