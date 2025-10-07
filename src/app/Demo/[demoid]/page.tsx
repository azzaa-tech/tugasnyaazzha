import Image from 'next/image'
// import Colum from '../Colum/Navbar'
// import Login from '../Login/page'
import ReactPlayer from "react-player"

export default function Page({ params }) {
    const { demoid } = params;

    return (
        <div className='bg-slate-900 h-auto w-full px-30 py-8 space-y-5'>
            {/* <Colum /> */}
            {/* <Login /> */}
            <div className="h-auto w-auto space-y-5">
                <h3 className="font-bold text-white text-2xl ml-2">Dasbor Monitoring Jaringan
                    <div className='font-extralight text-gray-500 text-sm mt-1'>Status koneksi internet dan perangkat lokal secara real-time</div>
                </h3>
            </div>

            {/*atas dulu & dll*/}
            <div className=' space-y-5'>
                <div className='bg-white/10 h-15 rounded-[5px] flex gap-5 items-center'>
                    <h3 className='font-bold text-white text-l pl-2'>Rentang IP Lokal (CDIR) </h3>
                    < div className='bg-white/15 rounded-l h-12 w-60 pl-4 flex items-center'>
                        <h3 className='font-light text-white text-l'>192.168.0.0/21</h3>
                    </div>
                    < div className='bg-blue-800 rounded-[5px] h-12 w-60 pl-4 flex items-center justify-center'>
                        <h3 className='text-white text-l font-bold'>🔍︎ Mulai scan lokal</h3>
                    </div>
                </div>
            </div>
            {/* kotak -kotak ndkk tauu */}
            <div className='gap-5 flex'>
                <div className='bg-[#013602] h-20 w-90 px-5 rounded-[5px] flex items-center gap-2'>
                    <h1 className='text-white bg-white/10 p-1 text-center rounded-full text-3xl'>⚡</h1>
                    <div>
                        <h3 className='font-light text-white/30 text-m'>Status</h3>
                        <h3 className='font-bold text-green-600 text-xl'>Online</h3>
                    </div>
                </div>
                <div className='bg-white/10 h-20 w-90 px-5 rounded-[5px] flex items-center gap-2'>
                    <h1 className='text-white bg-white/10 p-1 text-center rounded-full text-3xl'>👩🏼‍⚕️</h1>
                    <div>
                        <h3 className='font-light text-white text-m'>Buckburner</h3>
                        <h3 className='font-bold text-white text-xl'>Nope</h3>
                    </div>
                </div>
                <div className='bg-white/10 h-20 w-90 px-5 rounded-5[px] flex items-center gap-2'>
                    <h1 className='text-white bg-white/10 p-1 text-center rounded-full text-3xl'>🛡️</h1>
                    <div>
                        <h3 className='font-light text-white text-m'>Love bombing</h3>
                        <h3 className='font-bold text-white text-xl'>100%</h3>
                    </div>
                </div>
                <div className='bg-white/10 h-20 w-90 px-5 rounded-[5px] flex items-center gap-2'>
                    <h1 className='text-white bg-white/10 p-1 text-center rounded-full text-3xl'>🫶🏻</h1>
                    <div>
                        <h3 className='font-light text-white text-m'>Falling in love</h3>
                        <h3 className='font-bold text-white text-xl'>15 ms</h3>
                    </div>
                </div>
            </div>


            {/* chart */}
            <div className='flex gap-5'>
                <div className='bg-white/10 h-auto w-220 rounded-[5px] '>
                    {/* <Image src='/assest/svt.jpg' alt='image ' width={900} height={900} className='w-full h-full object-cover overflow-hidden rounded-1'></Image> */}
                    <video
                        width="600"
                        height="400"
                        controls
                        autoPlay
                        loop
                        muted
                        className="rounded-lg shadow-lg w-full"
                    >
                        <source src='/assest/jumbo.mp4' type="video/mp4" />
                        Browser Anda tidak mendukung video.
                    </video>

                </div>
                <div className='bg-white/10 h-auto w-97 px-5 rounded-l p-5 space-y-5 '>
                    <h3 className='font-semibold text-white text-m'>Top 3 penggangu Hati dan jantung </h3>
                    <ul>
                        <li className="text-black ">note {demoid}</li>
                        <li className="text-black text-m text-center  ">Note saya nasi goreng {demoid}</li>
                        <li className="text-black text-m text-center ">Note saya cinta mie ayam {demoid} </li>
                        <p className="text-black text-m text-center ">ini catatan dari note asli {demoid} </p>
                    </ul>
                </div>
            </div>
            <div className='bg-white/10 w-full h-20 rounded-[5px]'>
            </div>
        </div>
    )
}
