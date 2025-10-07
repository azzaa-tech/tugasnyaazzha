"use client"
import React, { useState } from 'react'

export default function Pencet() {
    const [input, setInput] = useState("");

    // fungsi menambahkan karakter ke input
    const handleClick = (value) => {
        setInput((prev) => prev + value);
    };

    // fungsi menghapus input
    const handleClear = () => {
        setInput("");
    };

    // fungsi menghitung hasil ekspresi
    const handleEqual = () => {
        try {
            let expr = input
                .replace(/π/g, Math.PI)
                .replace(/e/g, Math.E)
                .replace(/√/g, "Math.sqrt")
                .replace(/sin/g, "Math.sin")
                .replace(/cos/g, "Math.cos")
                .replace(/tan/g, "Math.tan")
                .replace(/log/g, "Math.log10")
                .replace(/In/g, "Math.log")
                .replace(/x/g, "*")
                .replace(/\^/g, "**");

            const result = eval(expr);
            setInput(String(result));
        } catch (err) {
            setInput("Error");
        }
    };

    return (
        <div className='bg-slate-900 h-400 w-full px-30 py-8 space-y-5'>
            <h3 className='font-extrabold text-2xl text-white'>Math solve</h3>

            <div className='bg-white/10 h-auto w-150 px-5 rounded-l p-5 space-y-5'>
                {/* layar hasil */}
                <div className='bg-white/15 h-20 w-auto border-1 border-white rounded-b-xl opacity-50 flex items-center justify-end pr-4 text-white text-2xl'>
                    {input || "0"}
                </div>

                {/* baris 1 */}
                <div className='flex'>
                    <div onClick={() => handleClick("Rad")} className='bg-white/10 h-15 w-40 hover:bg-white/20 border-1 opacity-50 rounded-3xl cursor-pointer'>
                        <h1 className='text-center text-white text-xl mt-4'>Rad | Dag</h1>
                    </div>

                    <div onClick={() => handleClick("!")} className='bg-white/10 h-15 w-20 hover:bg-white/20 border-1 opacity-50 rounded-3xl ml-3 cursor-pointer'>
                        <h1 className='text-center text-white text-xl mt-4'>x!</h1>
                    </div>

                    <div onClick={() => handleClick("(")} className='bg-white/10 h-15 w-20 hover:bg-white/20 border-1 opacity-50 rounded-3xl ml-3 cursor-pointer'>
                        <h1 className='text-center text-white text-xl mt-4'>(</h1>
                    </div>

                    <div onClick={() => handleClick(")")} className='bg-white/10 h-15 w-20 hover:bg-white/20 border-1 opacity-50 rounded-3xl ml-3 cursor-pointer'>
                        <h1 className='text-center text-white text-xl mt-4'>)</h1>
                    </div>

                    <div onClick={() => handleClick("%")} className='bg-white/10 h-15 w-20 hover:bg-white/20 border-1 opacity-50 rounded-3xl ml-3 cursor-pointer'>
                        <h1 className='text-center text-white text-xl mt-4'>%</h1>
                    </div>

                    <div onClick={handleClear} className='bg-white/10 h-15 w-20 hover:bg-red-500/40 border-1 opacity-50 rounded-3xl ml-3 cursor-pointer'>
                        <h1 className='text-center text-white text-xl mt-4'>AC</h1>
                    </div>
                </div>

                {/* baris 2 */}
                <div className='flex'>
                    <div onClick={() => handleClick("Inv")} className='bg-white/10 h-15 w-20 hover:bg-white/20 border-1 opacity-50 rounded-3xl ml-3 cursor-pointer'>
                        <h1 className='text-center text-white text-xl mt-4'>Inv</h1>
                    </div>

                    <div onClick={() => handleClick("sin(")} className='bg-white/10 h-15 w-20 hover:bg-white/20 border-1 opacity-50 rounded-3xl ml-3 cursor-pointer'>
                        <h1 className='text-center text-white text-xl mt-4'>sin</h1>
                    </div>

                    <div onClick={() => handleClick("In(")} className='bg-white/10 h-15 w-20 hover:bg-white/20 border-1 opacity-50 rounded-3xl ml-3 cursor-pointer'>
                        <h1 className='text-center text-white text-xl mt-4'>In</h1>
                    </div>

                    <div onClick={() => handleClick("7")} className='bg-white/10 h-15 w-20 hover:bg-white/20 border-1 opacity-50 rounded-3xl ml-3 cursor-pointer'>
                        <h1 className='text-center text-white text-xl mt-4'>7</h1>
                    </div>

                    <div onClick={() => handleClick("8")} className='bg-white/10 h-15 w-20 hover:bg-white/20 border-1 opacity-50 rounded-3xl ml-3 cursor-pointer'>
                        <h1 className='text-center text-white text-xl mt-4'>8</h1>
                    </div>

                    <div onClick={() => handleClick("9")} className='bg-white/10 h-15 w-20 hover:bg-white/20 border-1 opacity-50 rounded-3xl ml-3 cursor-pointer'>
                        <h1 className='text-center text-white text-xl mt-4'>9</h1>
                    </div>

                    <div onClick={() => handleClick("/")} className='bg-white/10 h-15 w-20 hover:bg-white/20 border-1 opacity-50 rounded-3xl ml-3 cursor-pointer'>
                        <h1 className='text-center text-white text-xl mt-4'>/</h1>
                    </div>
                </div>

                {/* baris 3 */}
                <div className='flex'>
                    <div onClick={() => handleClick("π")} className='bg-white/10 h-15 w-20 hover:bg-white/20 border-1 opacity-50 rounded-3xl ml-3 cursor-pointer'>
                        <h1 className='text-center text-white text-xl mt-4'>TT</h1>
                    </div>

                    <div onClick={() => handleClick("cos(")} className='bg-white/10 h-15 w-20 hover:bg-white/20 border-1 opacity-50 rounded-3xl ml-3 cursor-pointer'>
                        <h1 className='text-center text-white text-xl mt-4'>cos</h1>
                    </div>

                    <div onClick={() => handleClick("log(")} className='bg-white/10 h-15 w-20 hover:bg-white/20 border-1 opacity-50 rounded-3xl ml-3 cursor-pointer'>
                        <h1 className='text-center text-white text-xl mt-4'>log</h1>
                    </div>

                    <div onClick={() => handleClick("4")} className='bg-white/10 h-15 w-20 hover:bg-white/20 border-1 opacity-50 rounded-3xl ml-3 cursor-pointer'>
                        <h1 className='text-center text-white text-xl mt-4'>4</h1>
                    </div>

                    <div onClick={() => handleClick("5")} className='bg-white/10 h-15 w-20 hover:bg-white/20 border-1 opacity-50 rounded-3xl ml-3 cursor-pointer'>
                        <h1 className='text-center text-white text-xl mt-4'>5</h1>
                    </div>

                    <div onClick={() => handleClick("6")} className='bg-white/10 h-15 w-20 hover:bg-white/20 border-1 opacity-50 rounded-3xl ml-3 cursor-pointer'>
                        <h1 className='text-center text-white text-xl mt-4'>6</h1>
                    </div>

                    <div onClick={() => handleClick("*")} className='bg-white/10 h-15 w-20 hover:bg-white/20 border-1 opacity-50 rounded-3xl ml-3 cursor-pointer'>
                        <h1 className='text-center text-white text-xl mt-4'>x</h1>
                    </div>
                </div>

                {/* baris 4 */}
                <div className='flex'>
                    <div onClick={() => handleClick("e")} className='bg-white/10 h-15 w-20 hover:bg-white/20 border-1 opacity-50 rounded-3xl ml-3 cursor-pointer'>
                        <h1 className='text-center text-white text-xl mt-4'>e</h1>
                    </div>

                    <div onClick={() => handleClick("tan(")} className='bg-white/10 h-15 w-20 hover:bg-white/20 border-1 opacity-50 rounded-3xl ml-3 cursor-pointer'>
                        <h1 className='text-center text-white text-xl mt-4'>tan</h1>
                    </div>

                    <div onClick={() => handleClick("√(")} className='bg-white/10 h-15 w-20 hover:bg-white/20 border-1 opacity-50 rounded-3xl ml-3 cursor-pointer'>
                        <h1 className='text-center text-white text-xl mt-4'>√</h1>
                    </div>

                    <div onClick={() => handleClick("1")} className='bg-white/10 h-15 w-20 hover:bg-white/20 border-1 opacity-50 rounded-3xl ml-3 cursor-pointer'>
                        <h1 className='text-center text-white text-xl mt-4'>1</h1>
                    </div>

                    <div onClick={() => handleClick("2")} className='bg-white/10 h-15 w-20 hover:bg-white/20 border-1 opacity-50 rounded-3xl ml-3 cursor-pointer'>
                        <h1 className='text-center text-white text-xl mt-4'>2</h1>
                    </div>

                    <div onClick={() => handleClick("3")} className='bg-white/10 h-15 w-20 hover:bg-white/20 border-1 opacity-50 rounded-3xl ml-3 cursor-pointer'>
                        <h1 className='text-center text-white text-xl mt-4'>3</h1>
                    </div>

                    <div onClick={() => handleClick("-")} className='bg-white/10 h-15 w-20 hover:bg-white/20 border-1 opacity-50 rounded-3xl ml-3 cursor-pointer'>
                        <h1 className='text-center text-white text-xl mt-4'>-</h1>
                    </div>
                </div>

                {/* baris 5 */}
                <div className='flex'>
                    <div onClick={() => handleClick("Ans")} className='bg-white/10 h-15 w-20 hover:bg-white/20 border-1 opacity-50 rounded-3xl ml-3 cursor-pointer'>
                        <h1 className='text-center text-white text-xl mt-4'>Ans</h1>
                    </div>

                    <div onClick={() => handleClick("EXP")} className='bg-white/10 h-15 w-20 hover:bg-white/20 border-1 opacity-50 rounded-3xl ml-3 cursor-pointer'>
                        <h1 className='text-center text-white text-xl mt-4'>EXP</h1>
                    </div>

                    <div onClick={() => handleClick("^")} className='bg-white/10 h-15 w-20 hover:bg-white/20 border-1 opacity-50 rounded-3xl ml-3 cursor-pointer'>
                        <h1 className='text-center text-white text-xl mt-4'>X<span className='text-xs'>y</span></h1>
                    </div>

                    <div onClick={() => handleClick("0")} className='bg-white/10 h-15 w-20 hover:bg-white/20 border-1 opacity-50 rounded-3xl ml-3 cursor-pointer'>
                        <h1 className='text-center text-white text-xl mt-4'>0</h1>
                    </div>

                    <div onClick={() => handleClick(".")} className='bg-white/10 h-15 w-20 hover:bg-white/20 border-1 opacity-50 rounded-3xl ml-3 cursor-pointer'>
                        <h1 className='text-center text-white text-xl mt-4'>.</h1>
                    </div>

                    <div onClick={handleEqual} className='bg-white/10 h-15 w-20 hover:bg-green-500/50 border-1 opacity-50 rounded-3xl ml-3 cursor-pointer'>
                        <h1 className='text-center text-white text-xl mt-4'>=</h1>
                    </div>

                    <div onClick={() => handleClick("+")} className='bg-white/10 h-15 w-20 hover:bg-white/20 border-1 opacity-50 rounded-3xl ml-3 cursor-pointer'>
                        <h1 className='text-center text-white text-xl mt-4'>+</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}
