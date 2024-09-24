import Link from "next/link";
import Header from "./ui/header";

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-purple to-mint grid grid-rows-[2px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 font-[family-name:var(--font-geist-sans)]">
      <Header title="Lunch Queen" />
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        
        <div className="grid grid-rows-1">
          <p className="grid-rows-1 text-3xl">€ 59.50 </p>
          <p className="text-sm"> Money Jar Balance</p>
        </div>
        <Link className="bg-white text-black rounded-3xl px-16 py-2" href={"topup"}> Top Up </Link>


      
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <p className="italic">The Designer Should Decide</p>
      </footer>
    </div>
  );
}
