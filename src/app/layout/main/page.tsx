import React from 'react'

export default function page() {
  return (
    <div>
      <main className="flex flex-col gap-6">
          <div className="text-left text-[#006A5B]">
            <h1 className="text-5xl font-extrabold mb-1">NCT WISH News</h1>
            <h2 className="text-2xl font-semibold">Fresh Energy of the New Generation</h2>
          </div>

          {/* Main Content */}
          <section className="bg-white text-left text-gray-800 p-10 rounded-2xl shadow-md leading-relaxed">
            {/* Headline Image */}
            <div className="mb-10">
              <img
                src="/assest/nctwish.jpg"
                alt="NCT WISH Group"
                className="w-full h-[350px] object-cover rounded-t-2xl"
              />
              <div className="text-center bg-white py-4 rounded-b-2xl">
                <p className="text-sm text-gray-600">Kpop Profiles</p>
                <p className="text-lg font-semibold text-gray-800">
                  NCT WISH Members Profile (Updated!) - Kpop Profiles
                </p>
              </div>
            </div>

            <div className="text-justify">
              <h3 className="text-xl font-bold text-[#00A389] mb-4">NCT WISH</h3>

              {/* Paragraf Berita */}
              <p className="text-sm text-gray-700 mb-6">
                <b>Seoul, 29 Oktober 2025</b> — Grup rookie asal SM Entertainment, <b>NCT WISH</b>, kembali mencuri perhatian publik dengan pesona segar dan semangat muda yang mereka bawa ke panggung musik K-Pop.
                Setelah resmi debut pada Februari 2024, grup beranggotakan enam orang ini — <b>Sion, Ryo, Yushi, Riku, Jaehee</b>, dan <b>Sakuya</b> — terus menunjukkan perkembangan pesat dalam karier mereka.
                Dalam waktu singkat, NCT WISH berhasil membangun basis penggemar yang solid, baik di Korea maupun Jepang.
                Lagu debut mereka, <i>“WISH”</i>, menampilkan gaya cerah dan penuh harapan, mencerminkan karakter mereka sebagai generasi baru proyek global NCT.
              </p>

              <p className="text-sm text-gray-700 mb-6">
                <b>NCT WISH</b> dibentuk melalui program survival show berjudul <i>NCT Universe: LASTART</i>,
                yang bertujuan untuk memilih anggota baru bagi sub-unit ini.
                Sebelum debut resmi, mereka dikenal dengan nama sementara <b>"NCT New Team"</b>.
                Pada <b>Oktober 2023</b>, mereka merilis lagu pra-debut berjudul <i>"Hands Up"</i>,
                yang berhasil menarik perhatian publik dan membangun antusiasme penggemar terhadap debut mereka.
                Lagu tersebut menampilkan semangat muda, energi cerah, serta potensi besar yang dimiliki para anggota.
              </p>

              <p className="text-sm text-gray-700 mb-6">
                Debut resmi <b>NCT WISH</b> dilakukan pada <b>28 Februari 2024</b> dengan single <i>"WISH"</i>,
                yang dirilis dalam dua versi bahasa — <b>Jepang</b> dan <b>Korea</b>.
                Lagu ini pertama kali dibawakan dalam konser <b>SMTOWN LIVE 2024 SMCU PALACE @TOKYO</b> di <b>Tokyo Dome</b>,
                dan penampilan mereka mendapat sambutan hangat dari penggemar serta media.
                Sejak itu, <b>NCT WISH</b> terus berkembang sebagai unit baru yang membawa warna cerah dan harapan baru
                bagi proyek global <b>NCT</b> di dunia K-Pop.
              </p>

              <p className="text-sm text-gray-700 mb-6">
                Konsep utama <b>"Young"</b> menekankan pada <b>energi positif</b> dan <b>semangat remaja</b>.
                <b>NCT WISH</b> ingin menjadi representasi dari <i>harapan</i> dan <i>impian generasi muda</i>,
                menjadikan musik mereka sebagai sarana untuk mengekspresikan perasaan dan pengalaman masa muda
                yang penuh dengan <b>kegembiraan</b> dan <b>rasa ingin tahu</b>.
              </p>

              <p className="text-sm text-gray-700 mb-6">
                Sementara itu, konsep <b>"Pure"</b> menggambarkan <b>keaslian</b> dan <b>ketulusan</b>
                dalam setiap karya musik <b>NCT WISH</b>.
                Mereka ingin menyampaikan pesan yang jujur melalui lirik dan melodi yang menyentuh hati,
                menciptakan suasana yang hangat dan penuh makna.
              </p>

              <p className="text-sm text-gray-700 mb-6">
                Secara keseluruhan, perpaduan antara konsep <b>"Young"</b> dan <b>"Pure"</b> menjadi identitas kuat bagi <b>NCT WISH</b>.
                Kombinasi ini menggambarkan semangat muda yang membara sekaligus ketulusan dalam berkarya,
                memberikan <b>inspirasi</b> kepada para pendengar untuk terus mengejar impian mereka dengan hati yang bersih
                dan tekad yang tulus.
              </p>
            </div>



            {/* Headline */}
            <h4 className="text-lg font-semibold text-[#00A389] mb-3">✨ Headline Berita ✨</h4>
            <p className="text-sm mb-6">
              “NCT WISH siap memperluas jangkauan global dengan energi muda yang menginspirasi, menghubungkan penggemar dari Korea hingga Jepang.”
            </p>
          </section>
        </main>
    </div>
  )
}
