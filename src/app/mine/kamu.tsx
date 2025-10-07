import React from 'react'

export default function page() {
    return (
        <div className='bg-white flex justify-center items-center h-screen gap-5'>

            <div className='bg-amber-50 shadow-2xl rounded-xl h-125 w-85 items-center justify-center flex flex-col gap-5'>
                <h1 className='text-black text-center font-bold text-xl'>Aplikasi perhitungan diskon</h1>
                <div className='bg-white shadow border-2 rounded-xl h-10 w-70'> </div>
                <div className='bg-white shadow border-2 rounded-xl h-10 w-70'> </div>
                <div className='bg-white shadow border-2 rounded-xl h-10 w-70'> </div>
                <div className='bg-white shadow border-2 rounded-xl h-10 w-70'> </div>
                <div className='bg-blue-600 shadow border-2 rounded-l h-10 w-70 flex items-center justify-center'>Hitung</div>
                <div className='bg-amber-950 shadow border-2 rounded-l h-10 w-70 flex items-center justify-center'>Bersih</div>
            </div>

            <div className='bg-amber-50 shadow-2xl rounded-xl h-125 w-85 items-center justify-center flex flex-col gap-5'>
                <h1 className='text-black text-center font-bold text-xl'>Aplikasi perhitungan diskon</h1>
                <div className='bg-white shadow border-2 rounded-xl h-10 w-70'> </div>
                <div className='bg-white shadow border-2 rounded-xl h-10 w-70'> </div>
                <div className='bg-white shadow border-2 rounded-xl h-10 w-70'> </div>
                <div className='bg-white shadow border-2 rounded-xl h-10 w-70'> </div>
                <div className='bg-blue-600 shadow border-2 rounded-l h-10 w-70 flex items-center justify-center '>Hitung</div>
                <div className='bg-amber-950 shadow border-2 rounded-l h-10 w-70 flex items-center justify-center'>Bersih</div>
            </div>

            
                <div className="bg-amber-50 shadow-md rounded-xl p-8 w-96 text-center">
                    <h1 className="text-2xl font-bold mb-6 text-black">
                        Aplikasi Perhitungan Diskon
                    </h1>

                    <div className="text-center text-black  space-y-2 mb-6">
                        <p>
                            <span className="font-semibold text-black">Nama Barang:</span> Susu Dancow
                        </p>
                        <p>
                            <span className="font-semibold text-black">Kategori Barang:</span> Minuman
                        </p>
                        <p>
                            <span className="font-semibold text-black">Nilai Diskon:</span> 600.00
                        </p>
                        <p>
                            <span className="font-semibold text-black">Total Harga:</span > 5400.00
                        </p>
                    </div>

                    <button className="bg-orange-500 text-white font-semibold py-2 px-6 rounded-md hover:bg-orange-600 transition-all">
                        Kembali
                    </button>
                </div>


        </div>
    )
}

