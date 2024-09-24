'use client'

import { useSession } from "next-auth/react";
import { createMovement } from "./api/movements";
import { Dispatch, SetStateAction, useState } from "react";
import { useRouter } from "next/navigation";

function SelectAmount({amount, selected, onClick} : {amount: number, selected: boolean;  onClick: Dispatch<SetStateAction<number>> }){
  // const [ selected, setSelected ] = useState(false);

  return (
  <div 
      className={"bg-white w-full w-1/2 text-gray-400 border flex items-strech justify-center p-2 rounded" + (selected && " border-purple bg-purple-100 ")}
      onClick={() => onClick(amount)}
      >
  €{amount}
</div>)
}


const TopUpComponent = () => {
    const x = useSession();
    const  router = useRouter();
    const [ amount, setAmount ] = useState<number>(0);
    const isTopUpButtonEnabled = amount > 0;

    const handleMovement = async () => {
        await createMovement({
            userId: x.data?.userId,
            amount,
            isCredit: true,
        });
        // x.update();
        router.push("/contribuiters");
        router.forward();
    }

    return (
        <form className="flex flex-col gap-4 w-full">
            <div className="flex flex-col gap-4">
                <h2 className="text-gray-900 text-sm font-bold">Top Up</h2>
                <div className="cursor-pointer grid grid-rows-2 grid-cols-2 place-items-center place-content-center gap-2 mb-4">
                    <SelectAmount amount={5} selected={amount === 5} onClick={setAmount}/>
                    <SelectAmount amount={10} selected={amount === 10} onClick={setAmount}/>
                    <SelectAmount amount={20} selected={amount === 20} onClick={setAmount}/>
                    <SelectAmount amount={30} selected={amount === 30} onClick={setAmount}/>
                </div>
                <input
                    type="number"
                    placeholder="Enter own amount"
                    className="rounded-lg text-sm py-2 px-4 text-black w-full border" 
                    value={amount}
                    onChange={(ev) => setAmount(Number(ev.target.value))}
                    />
            </div>
            <button
                disabled={!isTopUpButtonEnabled}
                onClick={async () => await handleMovement()}
                className="bg-white text-black rounded-3xl px-16 py-2 justify-center border border-gray-300 bg-gradient-to-r from-purple to-mint py-2 text-white">Top-Up</button>
        </form>
    )
};

export { TopUpComponent }