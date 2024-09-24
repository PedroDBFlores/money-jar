import Link from "next/link";
import { getBalance } from "./api/movements";
import { TopUpComponent } from "./topup-component";
import Withdraw from "./withdraw/page";

export default async function Home() {
  const balance = await getBalance();
  const formattedValue = `€ ${balance}`

  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
      <div className="row-start-1 bg-gradient-to-r from-purple to-mint w-full text-white text-center pt-4 pb-2">Balance</div>
      <div className="flex w-full bg-red-100 justify-stretch items-stretch">
          <Link href={"/contribuiters"} className={"bg-white text-black w-full justify-center text-center items-center border border-gray-300 py-2"}>
            See contribuiters
          </Link>
          <Link href={"/withdrawals"} className="bg-white text-black w-full justify-center items-center text-center border border-gray-300 to-mint py-2 text-gray-900">
            See withdrawals
          </Link>
        </div>
      <main className="w-full bg-gray-100 h-full flex flex-col gap-8 row-start-2 items-center justify-between p-5">
        <div className="flex flex-col items-center justify-center min-h-44 bg-white w-full rounded gap-4 font-slim">
          <p className="text-3xl font-bold text-primary ">{formattedValue}</p>
          <p className="text-gray-900"> Money Jar Balance</p>
        </div>
        <TopUpComponent />
        {<Withdraw />}
      </main>
    </div>
  );
}