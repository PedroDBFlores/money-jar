'use client'

import { useSession } from "next-auth/react";
import { useState } from "react";
import { createMovement } from "./api/movements";


const TopUpComponent = () => {
    const x = useSession();
    const [amount, setAmount] = useState<number>(0);
    const isTopUpButtonEnabled = amount > 0;

    const handleMovement = async () => {
        await createMovement({
            userId: x.data?.userId,
            amount,
            isCredit: true,
        });
    }

    return (
        <form className="flex flex-col gap-4 w-full">
            <div className="flex flex-col gap-4">
                <h2 className="text-gray-900 text-sm font-bold">Top Up</h2>
                <div className="cursor-pointer grid grid-rows-2 grid-cols-2 place-items-center place-content-center gap-2 mb-4">
                    <div onClick={() => setAmount(5)}
                        className="bg-white w-full w-1/2 text-gray-400 border flex items-strech justify-center p-2 rounded">
                        €5
                    </div>
                    <div onClick={() => setAmount(10)}
                        className="bg-white w-full w-1/2 text-gray-400 flex items-strech justify-center p-2 rounded">
                        €10
                    </div>
                    <div onClick={() => setAmount(20)}
                        className="bg-white w-full w-1/2 text-gray-400 flex items-strech justify-center p-2 rounded">
                        €20
                    </div>
                    <div onClick={() => setAmount(50)}
                        className="bg-white w-full w-1/2 text-gray-400 flex items-strech justify-center p-2 rounded">
                        €50
                    </div>
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
            {/* <div className="flex">
                <Link 
                    className="w-1/2 flex justify-center border border-gray-300 bg-white text-purple py-2" 
                    href="/">
                        Back
                </Link>
                <button className="w-1/2 flex justify-center border border-gray-300 bg-gradient-to-r from-purple to-mint py-2 text-white">Done</button>
            </div> */}
        </form>
    )
};

export { TopUpComponent }