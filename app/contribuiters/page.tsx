import { getLatestContribuiters } from "../api/movements";

const LatestContribuiters = async () => {
    const contribuiters = await getLatestContribuiters();

    return (
        <div className="flex flex-col items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
            {/* <Header title="Balance" /> */}
            <div className="row-start-1 bg-gradient-to-r from-purple to-mint w-full text-white text-center pt-4 pb-2">Contribuiters</div>
            <main className="w-full bg-gray-100 h-full flex flex-col gap-8 row-start-2 items-center justify-between p-5">
                <div className="flex flex-col items-center justify-center min-h-44 bg-white w-full rounded gap-4 font-slim">
                    {contribuiters.map((c, i) => <p key={i}>{c}</p>)}
                </div>
            </main>
        </div>
    );
};

export default LatestContribuiters; 