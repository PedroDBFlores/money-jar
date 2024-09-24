import React from "react";
import Header from "../ui/header";
import Link from "next/link";

export default function LoginPage(){
  return (
    <>
        <Header title="Top-Up" gradient={true}/>
        <form className="bg-gray-200 grow flex flex-col gap-4">
            <div className="flex flex-col p-6 gap-4">
                <h2 className="text-black">Choose Amount</h2>
                <div className="cursor-pointer grid grid-rows-2 grid-cols-2 place-items-center place-content-center gap-2 mb-4">
                    <div 
                        className="bg-white w-full w-1/2 text-gray-400 flex items-strech justify-center p-4 rounded">
                        5
                    </div>
                    <div 
                        className="bg-white w-full w-1/2 text-gray-400 flex items-strech justify-center p-4 rounded">
                        10
                    </div>
                    <div 
                        className="bg-white w-full w-1/2 text-gray-400 flex items-strech justify-center p-4 rounded">
                        20
                    </div>
                    <div 
                        className="bg-white w-full w-1/2 text-gray-400 flex items-strech justify-center p-4 rounded">
                        50
                    </div>
                </div>
                <input 
                    type="number"
                    placeholder="Enter own amount"
                    className="rounded-lg text-sm py-2 px-4 text-black w-full"/>
            </div>
            <div className="flex">
                <Link 
                    className="w-1/2 flex justify-center border border-gray-300 bg-white text-purple py-2" 
                    href="/">
                        Back
                </Link>
                <button className="w-1/2 flex justify-center border border-gray-300 bg-gradient-to-r from-purple to-mint py-2 text-white">Done</button>
            </div>
        </form>
    </>
  );
}