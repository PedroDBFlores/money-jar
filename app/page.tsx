import Link from "next/link";
import Header from "./ui/header";
import { getLatestContribuiters, getBalance } from "./api/movements";

export default async function Home() {
  const x = await getLatestContribuiters()

  console.log(await getBalance())

  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
      {/* <Header title="Balance" /> */}
      <div className="row-start-1 bg-gradient-to-r from-purple to-mint w-full text-white text-center pt-4 pb-2">Balance</div>
      <main className="w-full bg-gray-100 h-full flex flex-col gap-8 row-start-2 items-center justify-between p-5">
        
        <div className="flex flex-col items-center justify-center min-h-44 bg-white w-full rounded gap-4 font-slim">
          <p className="text-3xl font-bold text-primary ">€ 59.50 </p>
          <p className="text-gray-900"> Money Jar Balance</p>
        </div>

        <form className="flex flex-col gap-4 w-full">
            <div className="flex flex-col gap-4">
                <h2 className="text-gray-900 text-sm font-bold">Top Up</h2>
                <div className="cursor-pointer grid grid-rows-2 grid-cols-2 place-items-center place-content-center gap-2 mb-4">
                    <div 
                        className="bg-white w-full w-1/2 text-gray-400 border flex items-strech justify-center p-2 rounded">
                        €5
                    </div>
                    <div 
                        className="bg-white w-full w-1/2 text-gray-400 flex items-strech justify-center p-2 rounded">
                        10
                    </div>
                    <div 
                        className="bg-white w-full w-1/2 text-gray-400 flex items-strech justify-center p-2 rounded">
                        20
                    </div>
                    <div 
                        className="bg-white w-full w-1/2 text-gray-400 flex items-strech justify-center p-2 rounded">
                        50
                    </div>
                </div>
                <input 
                    type="number"
                    placeholder="Enter own amount"
                    className="rounded-lg text-sm py-2 px-4 text-black w-full border"/>
            </div>
            <button className="bg-white text-black rounded-3xl px-16 py-2 justify-center border border-gray-300 bg-gradient-to-r from-purple to-mint py-2 text-white">Top-Up</button>
            {/* <div className="flex">
                <Link 
                    className="w-1/2 flex justify-center border border-gray-300 bg-white text-purple py-2" 
                    href="/">
                        Back
                </Link>
                <button className="w-1/2 flex justify-center border border-gray-300 bg-gradient-to-r from-purple to-mint py-2 text-white">Done</button>
            </div> */}
        </form>

      
      </main>
    </div>
  );
}
