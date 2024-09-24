import Link from "next/link";
import { getLatestWithdrawals } from "../api/movements";

const LatestWithdrawals = async () => {
    const withdrawals = await getLatestWithdrawals();

    return (
        <div className="flex flex-col items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
            {/* <Header title="Balance" /> */}
            <div className="row-start-1 bg-gradient-to-r from-purple to-mint w-full text-white text-center pt-4 pb-2">Withdrawals</div>
            <main className="w-full bg-gray-100 h-full flex flex-col gap-8 row-start-2 items-center justify-between p-5">
                <div className="flex flex-col items-center justify-center min-h-44 bg-white w-full rounded gap-4 font-slim">
                    {withdrawals.map((c, i) => <p key={i}>{c}</p>)}
                    <Link href={"/"}>
                        <button
                            className="bg-white text-black rounded-3xl px-16 py-2 justify-center border border-gray-300 bg-gradient-to-r from-purple to-mint py-2 text-white">Back</button>
                    </Link>
                </div>
            </main>
        </div>
    );
};

export default LatestWithdrawals; 