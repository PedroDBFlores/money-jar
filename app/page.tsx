import Link from "next/link";
import Header from "./ui/header";
import { createMovement, getBalance } from "./api/movements";
import { get } from "http";
import { getServerSideProps } from "next/dist/build/templates/pages";
import { useState } from "react";
import { TopUpComponent } from "./topup-component";
import { auth } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const balance = await getBalance();
  const formattedValue = `€ ${balance}`

  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
      {/* <Header title="Balance" /> */}
      <div className="row-start-1 bg-gradient-to-r from-purple to-mint w-full text-white text-center pt-4 pb-2">Balance</div>
      <main className="w-full bg-gray-100 h-full flex flex-col gap-8 row-start-2 items-center justify-between p-5">

        <div className="flex flex-col items-center justify-center min-h-44 bg-white w-full rounded gap-4 font-slim">
          <p className="text-3xl font-bold text-primary ">{formattedValue}</p>
          <p className="text-gray-900"> Money Jar Balance</p>
        </div>

        <TopUpComponent/>
      </main>
    </div>
  );
}