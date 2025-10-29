import React from 'react'

export default function page() {
    return (
        <div>
            <header className="bg-[#00D8B6] w-full h-20 flex items-center shadow-md">
                <div className="flex justify-between items-center w-full mx-5">
                    {/* Judul kiri */}
                    <div className="text-white text-4xl font-extrabold hover:text-[#FFF7E9] cursor-pointer transition">
                        NCT WISH
                    </div>

                    {/* Menu kanan */}
                    <div className="flex space-x-8">
                        <h1 className="text-white text-xl hover:text-[#FFF7E9] cursor-pointer transition">Home</h1>
                        <h1 className="text-white text-xl hover:text-[#FFF7E9] cursor-pointer transition">About</h1>
                        <h1 className="text-white text-xl hover:text-[#FFF7E9] cursor-pointer transition">Members</h1>
                        <h1 className="text-white text-xl hover:text-[#FFF7E9] cursor-pointer transition">Discography</h1>
                        <h1 className="text-white text-xl hover:text-[#FFF7E9] cursor-pointer transition">News</h1>
                        <h1 className="text-white text-xl hover:text-[#FFF7E9] cursor-pointer transition">Contact</h1>
                    </div>
                </div>
            </header>
        </div>
    )
}
