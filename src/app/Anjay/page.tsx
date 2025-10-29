import React from "react";

const Input = ({
  label,
  name,
  type = "text",
  placeholder = "",
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) => {
  return (
    <div className="flex flex-col">
      <label className="text-sm font-medium mb-1 text-gray-900">{label}</label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className="px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-200 text-gray-400"
      />
    </div>
  );
};

export default function Registration() {
  return (
    <div className="min-h-900px bg-gray-50 py-20 px-4 sm:px-8 text-gray-900">
      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-lg p-6 sm:p-11">
        <h1 className="text-2xl sm:text-3xl font-semibold text-center mb-6">
          Formulir Pendaftaran Siswa Baru
        </h1>

        <form className="space-y-6 text-gray-800">
          <section className="border border-gray-300 p-4 rounded-md">
            <h2 className="text-lg font-bold mb-4 text-gray-800">Data Diri</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input label="NIS" name="nis" />
              <Input label="NISN" name="nisn" />
              <Input label="Email dari Sekolah" name="emailSekolah" type="email" />
              <Input label="Nama Lengkap (Sesuai Ijazah)" name="namaLengkap" />
              <div className="flex flex-col">
                <label className="text-sm mb-1 text-gray-900">Jenis Kelamin</label>
                <select className="px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-200 text-gray-400">
                  <option>Laki-laki</option>
                  <option>Perempuan</option>
                </select>
              </div>
              <Input label="Tempat Lahir" name="tempatLahir" />
              <Input label="Tanggal Lahir" name="tanggalLahir" type="date" />
              <Input label="Agama" name="agama" />
              <div className="md:col-span-2">
                <label className="text-sm font-medium mb-1 text-gray-900">Alamat</label>
                <textarea className="w-full p-3 border rounded-md h-20 resize-none focus:outline-none focus:ring-2 focus:ring-pink-200 text-gray-400" />
              </div>
              <Input label="Provinsi" name="provinsi" />
              <Input label="Kota/Kabupaten" name="kota" />
              <Input label="Kecamatan" name="kecamatan" />
              <Input label="No Whatsapp" name="noWhatsapp" type="tel" placeholder="08xxxxxxxx"/>
            </div>
          </section>
          <section className="border border-gray-300 p-4 rounded-md">
            <h2 className="text-lg font-bold mb-4 text-gray-800">Asal Sekolah</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input label="Nama Asal Sekolah" name="namaAsalSekolah" />
              <Input label="Provinsi Asal Sekolah" name="provAsalSekolah" />
              <Input label="Kota/Kabupaten Asal Sekolah" name="kotaAsalSekolah" />
              <Input label="Kecamatan Asal Sekolah" name="kecAsalSekolah" />
            </div>
          </section>
          <section className="border border-gray-300 p-4 rounded-md">
            <h2 className="text-lg font-bold mb-4 text-gray-900">Data Orang Tua / Wali</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h3 className="font-semibold text-gray-800">Ayah / Wali</h3>
                <Input label="Nama Ayah/Wali" name="namaAyah" />
                <Input label="Profesi Ayah/Wali" name="profesiAyah" />
                <Input label="No Whatsapp Ayah/Wali" name="waAyah" type="tel" />
                <Input label="Usia Ayah/Wali (Tahun)" name="usiaAyah" type="number" />
                <div>
                  <label className="text-sm font-medium mb-1 text-gray-900">
                    Alamat Ayah/Wali
                  </label>
                  <textarea className="w-full p-3 border rounded-md h-20 resize-none focus:outline-none focus:ring-2 focus:ring-pink-200 text-gray-400" />
                </div>
              </div>
              <div className="space-y-3">
                <h3 className="font-semibold text-gray-900">Ibu / Wali</h3>
                <Input label="Nama Ibu/Wali" name="namaIbu" />
                <Input label="Profesi Ibu/Wali" name="profesiIbu" />
                <Input label="No Whatsapp Ibu/Wali" name="waIbu" type="tel" />
                <Input label="Usia Ibu/Wali (Tahun)" name="usiaIbu" type="number" />
                <div>
                  <label className="text-sm font-medium mb-1 text-gray-900">
                    Alamat Ibu/Wali
                  </label>
                  <textarea className="w-full p-3 border rounded-md h-20 resize-none focus:outline-none focus:ring-2 focus:ring-pink-200 text-gray-400" />
                </div>
              </div>
            </div>
          </section>
          <div className="flex justify-end">
            <button type="submit" className="px-5 py-2 bg-pink-400 text-white rounded-md hover:bg-pink-500">
              Kirim
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}