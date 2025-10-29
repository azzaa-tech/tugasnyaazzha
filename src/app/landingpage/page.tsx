import React from 'react'
import Navbar from './navbar'
import Name from './name/page'

import Image from 'next/image'

function page() {
    return (
        <div className='bg-gradient-to-b from-slate-950 via-slate-800 to-slate-400 h-auto w-full px-20 py-8 space-y-5 '>
            <Navbar />
            <Name />

            {/* Kontainer Flex untuk Teks & Foto */}
            <div className="flex flex-col md:flex-row items-center justify-between px-10 py-15 gap-10">

                {/* Bagian Teks */}
                <div className="flex-1">
                    <div className="text-2xl font-light text-[#FFD0EC]">Hello, It's Me</div>
                    <div className="text-7xl font-bold text-[#ffffff]">Salsabila Al-Zahir</div>
                    <div className="text-2xl font-light text-[#FFD0EC]">And I am a Computer Science Student</div>

                    {/* Deskripsi */}
                    <div className="text-xl font-light mt-10 text-[#FFD0EC]">
                        I am a Computer Science Student
                    </div>

                    {/* Lingkaran Icon */}
                    <div className="flex gap-3 mt-10">
                        <div className="bg-[#001931] h-12 w-12 rounded-full border-2 border-[#FFD0EC] hover:bg-[#FFD0EC] hover:text-[#001931]"></div>
                        <div className="bg-[#001931] h-12 w-12 rounded-full border-2 border-[#FFD0EC] hover:bg-[#FFD0EC] hover:text-[#001931]"></div>
                        <div className="bg-[#001931] h-12 w-12 rounded-full border-2 border-[#FFD0EC] hover:bg-[#FFD0EC] hover:text-[#001931]"></div>
                        <div className="bg-[#001931] h-12 w-12 rounded-full border-2 border-[#FFD0EC] hover:bg-[#FFD0EC] hover:text-[#001931]"></div>
                    </div>

                    {/* Tombol */}
                    <button className="mt-8 px-6 py-3 bg-[#FFD0EC] text-[#092135] font-bold rounded-full shadow-lg hover:bg-[#001931] hover:text-[#ffffff] transition">
                        More About Me
                    </button>
                </div>

                {/* Bagian Foto */}
                <div className="flex-1 flex justify-center md:justify-end">
                    <div className="relative w-130 h-130">
                        {/* Glow Effect */}
                        <div className="absolute -inset-2 bg-indigo-400 rounded-full blur-2xl opacity-60 animate-pulse"></div>

                        {/* Foto Profil */}
                        <div className="relative w-130 h-130 rounded-full overflow-hidden border-4 border-indigo-400">
                            <img
                                src="/assest/hi.jpg"
                                alt="Avatar"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/*About*/}

            {/* Bagian Foto */}
            <div className='flex gap-4 py-3 px-6 mt-50'>
                <div className="flex-1 flex justify-start md:justify-start px-10 py-5">
                    <div className="relative w-90 h-90">
                        {/* Glow Effect */}
                        <div className="absolute -inset-4 bg-indigo-400 rounded-full blur-3xl opacity-60 animate-pulse"></div>

                        {/* Foto Profil */}
                        <div className="relative w-90 h-90 rounded-full overflow-hidden border-4 border-indigo-400">
                            <img
                                src="/assest/hal.jpg"
                                alt="Avatar"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>

                {/*tulisan*/}

                <div className="flex-2 py-10 px-10 mt-10 md:text-left">
                    <h2 className="text-4xl font-bold text-[#FFD0EC] mb-2">
                        About<span className="text-white"> Me</span>
                    </h2>
                    <h3 className="text-2xl font-light text-[#FFD0EC] mb-4">
                        Salsabila Al-Zahir
                    </h3>
                    <p className="text-gray-300 text-xl">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <div className=' py-10'>
                        <button className="mt-5 px-6 py-3 bg-[#FFD0EC] text-[#092135] font-bold rounded-full shadow-lg hover:bg-[#001931] hover:text-[#ffffff] transition">
                            More About Me
                        </button>
                    </div>
                </div>
            </div>

            {/*services*/}
            <div className='flex flex-col justify-center items-center gap-25 mt-30'>
                <h2 className="text-5xl font-semibold text-center text-[#FFD0EC] mb-2 mt-20">
                    My <span className='text-5xl font-light text-center text-[#ffffff]'>Services ⋆.𐙚 ̊</span>
                </h2>

                <div className='grid md:grid-cols-3 gap-10 md:px-20 '>
                    <div className="bg-[#02142a] h-auto w-97 px-5 rounded-xl p-5 space-y-5 border-2 border-[#FFD0EC] 
                shadow-[0_0_25px_#FFD0EC] hover:shadow-[0_0_45px_#FFD0EC] transition duration-300">
                        <div className="text-cyan-400 text-3xl mb-4">⎘</div>
                        <h3 className="text-xl font-semibold text-white mb-4">UI/UX Design</h3>
                        <p className="text-gray-300 mb-6">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <button className="mt-5 px-6 py-3 bg-[#FFD0EC] text-[#092135] font-bold rounded-full shadow-lg 
                       hover:bg-[#001931] hover:text-[#ffffff] transition">
                            Contact Me
                        </button>
                    </div>

                    <div className="bg-[#02142a] h-auto w-97 px-5 rounded-xl p-5 space-y-5 border-2 border-[#FFD0EC] 
                shadow-[0_0_25px_#FFD0EC] hover:shadow-[0_0_45px_#FFD0EC] transition duration-300">
                        <div className="text-cyan-400 text-3xl mb-4">⎘</div>
                        <h3 className="text-xl font-semibold text-white mb-4">Lyrics</h3>
                        <div className="text-gray-300 mb-6">
                            But heaven denied
                            Destiny decried
                            Something beautiful died
                            Too soon
                            <div className="text-gray-300 mb-6">
                                But I'm lettin' go
                                I'm givin' up the ghost
                                But don't get me wrong
                                I'll always love you, that's why I wrote you this very last song
                                I guess this is where we say goodbye
                                I know I'll be alright
                                Someday, I'll be fine
                                But just not tonight</div>
                            Ooh
                        </div>
                        <button className="mt-10 px-6 py-3 bg-[#FFD0EC] text-[#092135] font-bold rounded-full shadow-lg 
                       hover:bg-[#001931] hover:text-[#ffffff] transition">
                            Contact Me
                        </button>
                    </div>

                    <div className="bg-[#02142a] h-auto w-97 px-5 rounded-xl p-5 space-y-5 border-2 border-[#FFD0EC] 
                shadow-[0_0_25px_#FFD0EC] hover:shadow-[0_0_45px_#FFD0EC] transition duration-300">
                        <div className="text-cyan-400 text-3xl mb-4">⎘</div>
                        <h3 className="text-xl font-semibold text-white mb-4">UI/UX Design</h3>
                        <p className="text-gray-300 mb-6">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <button className="mt-5 px-6 py-3 bg-[#FFD0EC] text-[#092135] font-bold rounded-full shadow-lg 
                       hover:bg-[#001931] hover:text-[#ffffff] transition">
                            Contact Me
                        </button>
                    </div>
                </div>
            </div>

            {/* skills */}
            <div className="mt-30 px-10">
                <h2 className="text-5xl font-semibold text-center text-[#FFD0EC] mb-10 mt-20">
                    My <span className="text-5xl font-light text-white">Skills ᯓᡣ𐭩</span>
                </h2>

                <div className="flex flex-col md:flex-row justify-between gap-12">
                    {/* Left side - coding skills */}
                    <div className="flex-1 space-y-6">
                        {/* HTML */}
                        <div>
                            <div className="flex justify-between mb-1">
                                <span>HTML</span>
                                <span>90%</span>
                            </div>
                            <div className="w-full bg-gray-700 rounded-full h-2">
                                <div className="bg-cyan-400 h-2 rounded-full w-[90%]"></div>
                            </div>
                        </div>

                        {/* CSS */}
                        <div>
                            <div className="flex justify-between mb-1">
                                <span>CSS</span>
                                <span>60%</span>
                            </div>
                            <div className="w-full bg-gray-700 rounded-full h-2">
                                <div className="bg-cyan-400 h-2 rounded-full w-[60%]"></div>
                            </div>
                        </div>

                        {/* Javascript */}
                        <div>
                            <div className="flex justify-between mb-1">
                                <span>Javascript</span>
                                <span>45%</span>
                            </div>
                            <div className="w-full bg-gray-700 rounded-full h-2">
                                <div className="bg-cyan-400 h-2 rounded-full w-[45%]"></div>
                            </div>
                        </div>

                        {/* Python */}
                        <div>
                            <div className="flex justify-between mb-1">
                                <span>Python</span>
                                <span>50%</span>
                            </div>
                            <div className="w-full bg-gray-700 rounded-full h-2">
                                <div className="bg-cyan-400 h-2 rounded-full w-[50%]"></div>
                            </div>
                        </div>

                        {/* React */}
                        <div>
                            <div className="flex justify-between mb-1">
                                <span>React</span>
                                <span>75%</span>
                            </div>
                            <div className="w-full bg-gray-700 rounded-full h-2">
                                <div className="bg-cyan-400 h-2 rounded-full w-[75%]"></div>
                            </div>
                        </div>
                    </div>

                    {/* Right side - soft skills */}
                    <div className="flex-1 grid grid-cols-2 gap-5 py-5 px-4 justify-items-center">
                        {/* Creativity */}
                        <div className="flex flex-col items-center">
                            <div className="relative w-24 h-24 rounded-full border-8 border-gray-600 flex items-center justify-center">
                                <div className="absolute w-24 h-24 rounded-full border-8 border-cyan-400 border-r-transparent border-b-transparent rotate-[324deg]"></div>
                                <span className="absolute text-white font-bold">90%</span>
                            </div>
                            <p className="mt-2 text-[#FFD0EC]">Creativity</p>
                        </div>

                        {/* Communication */}
                        <div className="flex flex-col items-center">
                            <div className="relative w-24 h-24 rounded-full border-8 border-gray-600 flex items-center justify-center">
                                <div className="absolute w-24 h-24 rounded-full border-8 border-cyan-400 border-r-transparent border-b-transparent rotate-[288deg]"></div>
                                <span className="absolute text-white font-bold">80%</span>
                            </div>
                            <p className="mt-2 text-[#FFD0EC]">Communication</p>
                        </div>

                        {/* Problem Solve */}
                        <div className="flex flex-col items-center">
                            <div className="relative w-24 h-24 rounded-full border-8 border-gray-600 flex items-center justify-center">
                                <div className="absolute w-24 h-24 rounded-full border-8 border-cyan-400 border-r-transparent border-b-transparent rotate-[270deg]"></div>
                                <span className="absolute text-white font-bold">75%</span>
                            </div>
                            <p className="mt-2 text-[#FFD0EC]">Problem Solve</p>
                        </div>

                        {/* Teamwork */}
                        <div className="flex flex-col items-center">
                            <div className="relative w-24 h-24 rounded-full border-8 border-gray-600 flex items-center justify-center">
                                <div className="absolute w-24 h-24 rounded-full border-8 border-cyan-400 border-r-transparent border-b-transparent rotate-[180deg]"></div>
                                <span className="absolute text-white font-bold">85%</span>
                            </div>
                            <p className="mt-2 text-[#FFD0EC]">Teamwork</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* latest project */}
            <div className='flex flex-col justify-center items-center gap-25 mt-20'>
                <h2 className="text-5xl font-semibold text-center text-[#FFD0EC]  mt-20">
                    My <span className='text-5xl font-light text-center text-[#ffffff]'>Services ⋆.𐙚 ̊</span>
                </h2>

                {/* Grid 3x3 */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-5">
                    <div className='bg-white/10 h-97 w-97 px-5 rounded-l p-5 space-y-5'>
                        <h3 className='font-semibold text-white text-m'>Top 3 penggangu Hati dan jantung</h3>
                        <h3 className='font-light text-white text-m text-center text-xs'>Belum ada yang mengisi</h3>
                    </div>

                    <div className='bg-white/10 h-97 w-97 px-5 rounded-l p-5 space-y-5'>
                        <h3 className='font-semibold text-white text-m'>Top 3 penggangu Hati dan jantung</h3>
                        <h3 className='font-light text-white text-m text-center text-xs'>Belum ada yang mengisi</h3>
                    </div>

                    <div className='bg-white/10 h-97 w-97 px-5 rounded-l p-5 space-y-5'>
                        <h3 className='font-semibold text-white text-m'>Top 3 penggangu Hati dan jantung</h3>
                        <h3 className='font-light text-white text-m text-center text-xs'>Belum ada yang mengisi</h3>
                    </div>

                    <div className='bg-white/10 h-97 w-97 px-5 rounded-l p-5 space-y-5'>
                        <h3 className='font-semibold text-white text-m'>Top 3 penggangu Hati dan jantung</h3>
                        <h3 className='font-light text-white text-m text-center text-xs'>Belum ada yang mengisi</h3>
                    </div>

                    <div className='bg-white/10 h-97 w-97 px-5 rounded-l p-5 space-y-5'>
                        <h3 className='font-semibold text-white text-m'>Top 3 penggangu Hati dan jantung</h3>
                        <h3 className='font-light text-white text-m text-center text-xs'>Belum ada yang mengisi</h3>
                    </div>

                    <div className='bg-white/10 h-97 w-97 px-5 rounded-l p-5 space-y-5'>
                        <h3 className='font-semibold text-white text-m'>Top 3 penggangu Hati dan jantung</h3>
                        <h3 className='font-light text-white text-m text-center text-xs'>Belum ada yang mengisi</h3>
                    </div>

                    <div className='bg-white/10 h-97 w-97 px-5 rounded-l p-5 space-y-5'>
                        <h3 className='font-semibold text-white text-m'>Top 3 penggangu Hati dan jantung</h3>
                        <h3 className='font-light text-white text-m text-center text-xs'>Belum ada yang mengisi</h3>
                    </div>

                    <div className='bg-white/10 h-97 w-97 px-5 rounded-l p-5 space-y-5'>
                        <h3 className='font-semibold text-white text-m'>Top 3 penggangu Hati dan jantung</h3>
                        <h3 className='font-light text-white text-m text-center text-xs'>Belum ada yang mengisi</h3>
                    </div>

                    <div className='bg-white/10 h-97 w-97 px-5 rounded-l p-5 space-y-5'>
                        <h3 className='font-semibold text-white text-m'>Top 3 penggangu Hati dan jantung</h3>
                        <h3 className='font-light text-white text-m text-center text-xs'>Belum ada yang mengisi</h3>
                    </div>
                </div>
            </div>


            {/* contact us */}

            {/* Bagian Foto */}
            <div className='flex gap-4 py-3 px-6 mt-50'>
                {/* tulisan di kiri */}
                <div className="flex-2 py-10 px-10 mt-10 md:text-left">
                    <h2 className="text-4xl font-bold text-[#FFD0EC] mb-2">
                        About<span className="text-white"> Me</span>
                    </h2>
                    <h3 className="text-2xl font-light text-[#FFD0EC] mb-4">
                        Salsabila Al-Zahir
                    </h3>
                    <p className="text-gray-300 text-xl">
                        Azza adalah pribadi yang ceria, penuh semangat, dan selalu antusias mencoba hal-hal baru.
                        Ia mudah beradaptasi, punya rasa ingin tahu yang besar, serta berusaha konsisten dalam mencapai tujuan.
                        Dengan sikap ramah dan energinya yang positif, Azza mampu membawa suasana jadi lebih hidup di sekitarnya.
                    </p>
                    <div className='py-10'>
                        <button className="mt-5 px-6 py-3 bg-[#FFD0EC] text-[#092135] font-bold rounded-full shadow-lg hover:bg-[#001931] hover:text-[#ffffff] transition">
                            More About Me
                        </button>
                    </div>
                </div>

                {/* foto di kanan */}
                <div className="flex-1 flex justify-center md:justify-end px-10 py-5">
                    <div className="relative w-90 h-90">
                        {/* Glow Effect */}
                        <div className="absolute -inset-4 bg-indigo-400 rounded-full blur-3xl opacity-60 animate-pulse"></div>

                        {/* Foto Profil */}
                        <div className="relative w-90 h-90 rounded-full overflow-hidden border-4 border-indigo-400">
                            <img
                                src="/assest/hal.jpg"
                                alt="Avatar"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default page
