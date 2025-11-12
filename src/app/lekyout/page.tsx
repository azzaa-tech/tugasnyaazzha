"use client";
import Image from "next/image";

export default function Page() {
  return (
    <div className="font-[Poppins] bg-pink-100 text-gray-800 m-0 p-0">
      {/* HEADER */}
      <header className="relative bg-cover bg-center bg-no-repeat flex items-center h-[130px] overflow-hidden px-8 py-4">
        <Image
          src="/assest/logowish.png"
          alt="banner"
          width={70}
          height={70}
          className="rounded-full border-4 border-pink-300 mr-4 shadow-[0_0_8px_rgba(255,182,193,0.5)]"
        />
        <h1 className="text-[22px] text-pink-500 font-bold tracking-wide">NCT WISH</h1>
      </header>

      {/* NAVBAR */}
      <nav className="bg-pink-300 text-center py-3">
        <a href="#" className="text-white mx-4 font-semibold hover:text-pink-700 transition-colors">
          Beranda
        </a>
        <a href="#" className="text-white mx-4 font-semibold hover:text-pink-700 transition-colors">
          Materi
        </a>
        <a href="#" className="text-white mx-4 font-semibold hover:text-pink-700 transition-colors">
          Blog
        </a>
        <a href="#" className="text-white mx-4 font-semibold hover:text-pink-700 transition-colors">
          Registrasi
        </a>
      </nav>

      {/* MAIN */}
      <main className="flex flex-col items-center">
        {/* INFO TERBARU */}
        <section className="flex bg-white rounded-2xl shadow-[0_4px_12px_rgba(255,182,193,0.3)] p-8 w-4/5 mt-8 gap-6">
          <div className="info-kiri">
            <div className="w-[250px] h-[160px] bg-pink-200 rounded-xl"></div>
          </div>
          <div className="flex-1">
            <h2 className="text-pink-500 text-lg font-semibold mb-2">
              Update Materi Bahasa Indonesia Kelas 2A
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
              et dolore magna aliqua. Ut enim ad minim veniam.
            </p>
            <div className="mt-3 flex space-x-1">
              <span className="w-2.5 h-2.5 bg-gray-300 rounded-full"></span>
              <span className="w-2.5 h-2.5 bg-gray-300 rounded-full"></span>
              <span className="w-2.5 h-2.5 bg-gray-300 rounded-full"></span>
              <span className="w-2.5 h-2.5 bg-gray-300 rounded-full"></span>
              <span className="w-2.5 h-2.5 bg-pink-400 rounded-full"></span>
            </div>
          </div>
        </section>

        {/* KONTEN BAWAH */}
        <section className="flex w-4/5 mt-8 gap-6">
          {/* PEMBELAJARAN */}
          <div className="flex-3 flex-1">
            <h3 className="text-pink-500 text-lg font-semibold mb-4">Pembelajaran</h3>
            <div className="flex gap-4">
              <div className="bg-white rounded-xl shadow-[0_3px_10px_rgba(255,182,193,0.3)] p-3 text-center w-1/3">
                <div className="w-full h-[120px] bg-pink-200 rounded-lg mb-2"></div>
                <p className="font-medium text-gray-700">Bahasa Indonesia Kelas 2A</p>
              </div>
              <div className="bg-white rounded-xl shadow-[0_3px_10px_rgba(255,182,193,0.3)] p-3 text-center w-1/3">
                <div className="w-full h-[120px] bg-pink-200 rounded-lg mb-2"></div>
                <p className="font-medium text-gray-700">Tematik Kelas 2A</p>
              </div>
              <div className="bg-white rounded-xl shadow-[0_3px_10px_rgba(255,182,193,0.3)] p-3 text-center w-1/3">
                <div className="w-full h-[120px] bg-pink-200 rounded-lg mb-2"></div>
                <p className="font-medium text-gray-700">Matematika Kelas 5A</p>
              </div>
            </div>
          </div>

          {/* POPULER */}
          <aside className="bg-white rounded-xl p-5 shadow-[0_3px_10px_rgba(255,182,193,0.3)] w-[30%] h-fit">
            <h3 className="text-pink-500 text-lg font-semibold mb-3">Populer</h3>
            <ul className="list-none p-0 mb-3 text-gray-700">
              <li className="mb-2">Bahasa Indonesia Kelas 4B</li>
              <li className="mb-2">Tematik Kelas 5A</li>
              <li className="mb-2">Bahasa Inggris Kelas 2A</li>
              <li className="mb-2">Matematika Kelas 5A</li>
              <li className="mb-2">IPAS Kelas 2A</li>
              <li>Geografi Kelas 6B</li>
            </ul>
            <div className="flex mt-3">
              <input
                type="text"
                placeholder="Cari Materi"
                className="flex-1 border border-gray-300 rounded-l-md px-3 py-1 text-sm focus:outline-none"
              />
              <button className="bg-pink-400 text-white px-3 rounded-r-md">🔍</button>
            </div>
          </aside>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="mt-10 bg-white flex justify-between px-12 py-3 text-sm text-gray-600">
        <p>Copyright 2025</p>
        <p>12:30 WIB</p>
      </footer>
    </div>
  );
}
