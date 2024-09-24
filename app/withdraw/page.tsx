'use client';

import { useSession } from "next-auth/react";
import { useState } from "react";
import { createMovement } from "../api/movements";
import { navigateToRoot } from "../actions";

const Withdraw = () => {
    const x = useSession();
    const [amount, setAmount] = useState<number>(0);
    const isWithdrawButtonEnabled = amount > 0;

    const handleMovement = async () => {
        await createMovement({
            userId: x.data?.userId,
            amount,
            isCredit: false,
        });
        navigateToRoot()
    }

    return (
        <div className="flex flex-col items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
            {/* <Header title="Balance" /> */}
            <div className="row-start-1 bg-gradient-to-r from-purple to-mint w-full text-white text-center pt-4 pb-2">Contribuiters</div>
            <form className="flex flex-col gap-4 w-full">
                <div className="flex flex-col gap-4">
                    <h2 className="text-gray-900 text-sm font-bold">Withdraw</h2>
                    <input
                        type="number"
                        placeholder="Enter the value to withdraw"
                        className="rounded-lg text-sm py-2 px-4 text-black w-full border"
                        value={amount}
                        onChange={(ev) => setAmount(Number(ev.target.value))}
                    />
                </div>
                <button
                    disabled={!isWithdrawButtonEnabled}
                    onClick={async () => await handleMovement()}
                    className="bg-white text-black rounded-3xl px-16 py-2 justify-center border border-gray-300 bg-gradient-to-r from-purple to-mint py-2 text-white">Withdraw</button>
            </form>
        </div>
    )
};

export default Withdraw