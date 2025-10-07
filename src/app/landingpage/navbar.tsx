import React from 'react'

export default function Navbar() {
    return (
        <div className="bg-slate-950 w-full px-10 ">
            <div className="flex justify-between items-center">
                {/* Judul kiri */}
                <div className="text-white text-4xl font-extrabold hover:text-[#FFD0EC] cursor-pointer transition">
                    Portofolio
                </div>

                {/* Menu kanan */}
                <div className="flex space-x-8">
                    <h1 className="text-white text-xl hover:text-[#FFD0EC] cursor-pointer transition">Home</h1>
                    <h1 className="text-white text-xl hover:text-[#FFD0EC] cursor-pointer transition">About</h1>
                    <h1 className="text-white text-xl hover:text-[#FFD0EC] cursor-pointer transition">Skills</h1>
                    <h1 className="text-white text-xl hover:text-[#FFD0EC] cursor-pointer transition">Portofolio</h1>
                    <h1 className="text-white text-xl hover:text-[#FFD0EC] cursor-pointer transition">Contact</h1>
                </div>
            </div>
        </div>
    )
}
