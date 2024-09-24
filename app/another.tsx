'use client'
import { Dispatch, SetStateAction, useState } from "react";

function SelectAmount({amount, selected, onClick} : {amount: number, selected: boolean;  onClick: Dispatch<SetStateAction<number | undefined>> }){
  // const [ selected, setSelected ] = useState(false);

  return (
  <div 
      className={"bg-white w-full w-1/2 text-gray-400 border flex items-strech justify-center p-2 rounded" + (selected && " border-purple bg-purple-100 ")}
      onClick={() => onClick(amount)}
      >
  €{amount}
</div>)
}

export default function Home() {

  const [ amount, setAmount] = useState<number>();

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
                    <SelectAmount amount={5} selected={amount === 5} onClick={setAmount}/>
                    <SelectAmount amount={10} selected={amount === 10} onClick={setAmount}/>
                </div>
                <input 
                    type="number"
                    placeholder="Enter own amount"
                    className="rounded-lg text-sm py-2 px-4 text-black w-full border"/>
            </div>
            <button className="font-bold text-sm bg-white text-black rounded-3xl px-16 py-2 justify-center border border-gray-300 bg-gradient-to-r from-purple to-mint py-2 text-white">Top-Up</button>
        </form>

      
      </main>
    </div>
  );
}
