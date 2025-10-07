"use client"
import React, { useState } from "react";

export default function SimpleInput() {
    const [text, setText] = useState("");
    return (
        <div>
            <div className='flex flex-col min-h-screen bg-[#FFD5D5] justify-center items-center gap-5'>
                <div className=' h-85 w-85 flex justify-center items-center rounded-2xl space-y-5'>
                    <input
                        type="text"
                        value={text}
                        onChange={(e) => setText(e.target.value)} 
                        className="px-4 py-2 rounded-lg bg-slate-800 text-white focus:ring-cyan-400"
                        placeholder="Ketik sesuatu..."
                    />
                </div>
            </div>
        </div>
    )
}
