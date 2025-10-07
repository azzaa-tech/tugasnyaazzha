"use client";
import React from "react";

export default function PendaftaranSiswaBaru() {
  return (
    <div className="max-w-5xl mx-auto p-8">
      <h1 className="text-2xl font-bold text-center mb-6">
        Formulir Pendaftaran Siswa Baru
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-gray-50 p-6 rounded-lg shadow">
        {/* Data Diri */}
        <h2 className="col-span-2 text-lg font-semibold text-black">Data Diri</h2>

        <div className="border p-2 rounded text-gray-500">NIS</div>
        <div className="border p-2 rounded text-gray-500">NISN</div>
        <div className="border p-2 rounded text-gray-500">Email dari Sekolah</div>
        <div className="border p-2 rounded text-gray-500">Nama Lengkap (Sesuai Ijazah)</div>
        <div className="border p-2 rounded text-gray-500">Jenis Kelamin</div>
        <div className="border p-2 rounded text-gray-500">Tempat Lahir</div>
        <div className="border p-2 rounded text-gray-500">Tanggal Lahir</div>
        <div className="border p-2 rounded text-gray-500">Agama</div>
        <div className="border p-2 rounded col-span-2 text-gray-500">Alamat</div>
        <div className="border p-2 rounded text-gray-500">Provinsi</div>
        <div className="border p-2 rounded text-gray-500">Kota/Kabupaten</div>
        <div className="border p-2 rounded text-gray-500">Kecamatan</div>
        <div className="border p-2 rounded text-gray-500">No Whatsapp</div>

        {/* Asal Sekolah */}
        <h2 className="col-span-2 text-lg text-black font-semibold mt-4">Asal Sekolah</h2>
        <div className="border p-2 rounded text-gray-500">Nama Asal Sekolah</div>
        <div className="border p-2 rounded text-gray-500">Provinsi Asal Sekolah</div>
        <div className="border p-2 rounded text-gray-500">Kota/Kabupaten Asal Sekolah</div>
        <div className="border p-2 rounded text-gray-500">Kecamatan Asal Sekolah</div>

        {/* Orang Tua / Wali */}
        <h2 className="col-span-2 text-lg text-black font-semibold mt-4">Data Orang Tua / Wali</h2>
        <div className="border p-2 rounded text-gray-500">Nama Ayah/Wali</div>
        <div className="border p-2 rounded text-gray-500">Nama Ibu/Wali</div>
        <div className="border p-2 rounded text-gray-500">Profesi Ayah/Wali</div>
        <div className="border p-2 rounded text-gray-500">Profesi Ibu/Wali</div>
        <div className="border p-2 rounded text-gray-500">No Whatsapp Ayah/Wali</div>
        <div className="border p-2 rounded text-gray-500">No Whatsapp Ibu/Wali</div>
        <div className="border p-2 rounded text-gray-500">Usia Ayah/Wali (Tahun)</div>
        <div className="border p-2 rounded text-gray-500">Usia Ibu/Wali (Tahun)</div>
        <div className="border p-2 rounded text-gray-500">Alamat Ayah/Wali</div>
        <div className="border p-2 rounded text-gray-500">Alamat Ibu/Wali</div>

        {/* Submit */}
        <div className="col-span-2 bg-blue-600 text-white text-center py-2 rounded hover:bg-blue-700 cursor-pointer">
          Kirim Data
        </div>
      </div>
    </div>
  );
}
