
import Link from "next/link";
import { getLatestContribuiters } from "../api/movements";

const LatestContribuiters = async () => {
    const contribuiters = await getLatestContribuiters();

    return (
        <div className="flex flex-col items-center justify-items-center h-auto min-h-screen font-[family-name:var(--font-geist-sans)] bg-gradient-to-b from-purple to-mint pt-8">
            <main className="w-full h-full flex flex-col gap-8 row-start-2 items-center justify-between p-6 ">
                <div className="flex flex-col items-end justify-start w-full rounded gap-4 font-slim overflow-hidden max-h-3/4">
                    {contribuiters.map((c, i) => <p key={i} className="bg-pink rounded px-4 py-2 font-bold text-sm opacity-50 ">{c}</p>)}
                </div>
                <Link href={"/"}>
                    <button
                        className="text-sm bg-white text-purple rounded-3xl px-6 py-3 justify-center border border-gray-300 font-bold">Let&apos;s Eat!</button>
                </Link>
            </main>
        </div>
    );
};

export default LatestContribuiters; 