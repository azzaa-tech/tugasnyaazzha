"use client";
import ract from "react"
import { useState } from "react";

function Home () {
  const [showFullStory, setShowFullStory] = useState(false);

  const handleToggle = () => {
    setShowFullStory(prev => !prev);
  };

  const styles = {
    page: {
      fontFamily: "'Poppins', sans-serif",
      backgroundColor: '#FDECEC',
      color: '#4B2E2E',
      padding: '60px 80px',
      lineHeight: '1.5',
      fontSize: '20px',
      textalign: 'justify',
    },
    navbar: {
      backgroundColor: '#F7A7C2',
      padding: '20px 40px',
      color: '#fff',
      fontWeight: 'bold',
      fontSize: '20px',
      boxShadow: '0 2px 12px rgba(0,0,0,0.15)',
      position: 'sticky',
      top: 0,
      zIndex: 10,
      marginBottom: '50px',
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    navbarLeft: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px'
    },
    emoji: {
      fontSize: '24px',
    },
    paragraph: {
  marginBottom: '50px',
    },

  };

  return (
    <div style={styles.page}>
      <div style={styles.navbar}>
        <div style={styles.navbarLeft}>
          <span style={styles.emoji}>🌸✨</span>
          <span>AZZA LAND — Ceria & Cerdas!</span>
        </div>
        <div style={styles.emoji}>🌈🎀</div>
      </div>

      <h1 style={{ fontSize: '36px', fontWeight: '700', color: '#C44569', marginBottom: '10px' }}>
        Siapa Azza Sebenarnya?
      </h1>
      <p style={{ fontSize: '20px', fontStyle: 'italic', color: '#7C4A36', marginBottom: '40px' }}>
        Kisah penuh warna, kekacauan, dan kejujuran yang menjadikan Azza bukan sekadar karakter biasa, tapi fenomena unik dalam hidup ini.
      </p>

<p style={styles.paragraph}>
  Azza. Namanya manis, kayak bubble di es teh susu 🧋, tapi isi dalam dirinya? Wah, jangan kaget. Azza itu bukan manusia biasa. Dia adalah makhluk penuh kejutan, kaya rasa, dan vibes-nya kayak lagu TikTok yang tiba-tiba nempel di otak 🎶.

Pagi-pagi, dia bisa bangun dengan semangat mengalahkan sinar matahari. “Hari ini aku produktif!” katanya. Lima menit kemudian: rebahan mode activated 📱. Pikiran udah jalan-jalan ke skenario “gimana kalau gue pindah ke Korea jadi trainee Seventeen?” 🇰🇷

Mood Azza tuh kayak playlist shuffle 🔀. Bangun pagi happy, siang overthinking 🤯, sore galau dikit, malam ketawa nggak jelas. Kadang bisa sedih cuma gara-gara inget pas SMP pernah dipanggil “mbak” sama tukang parkir 🙈. Tapi bisa juga senyum-senyum sendiri cuma karena nemu meme kucing.
<p style={styles.paragraph}></p>
Dramatis? Iya 🎭.
<p style={styles.paragraph}></p>
Azza tuh film dokumenter kehidupan yang disutradarai sama hatinya sendiri ❤️—tanpa skrip, tanpa filter.

Terus, jangan lupakan otaknya. Azza itu kreatif dengan kadar random yang kadang nyeremin. Dia bisa tiba-tiba nyeletuk, “Eh kalau manusia punya baterai dan bisa dicharge kayak HP, kita masih butuh tidur nggak sih?”

Sisi ekspresif Azza itu luar biasa. Ketawa dia bisa bikin ruangan auto rame 😆, tapi sedihnya juga bisa bikin suasana berubah mendung 🌧️. Mukanya sering jadi cerminan suasana hati—nggak bisa disembunyiin.

Tapi justru itu yang bikin orang nyaman—Azza itu real 🤍. Dia nggak pakai topeng, dan itu langka.

Oh, dan dia bukan tipe yang doyan drama 🚫. Tapi kalo drama datang nyamperin? Wah, Azza siap jadi pemeran utama 💁‍♀️. Kadang dia bikin drama-nya sendiri, terus curhat ke temennya, “Aku kenapa sih?” 😅

Tapi semua ini bukan kelemahan. Justru kekuatannya ada di kejujurannya buat ngerasa semua itu tanpa pura-pura tegar terus 🌈.
</p>

      <p style={styles.paragraph}>
        Tapi di balik semua itu, Azza tuh peka dan tulus banget 💛. Dia bisa keliatan cuek, tapi dia perhatiin hal kecil yang orang lain lewatin ✨. Kayak, dia bisa inget temennya suka permen rasa melon 🍈 padahal baru ngomong sekali. Dia suka bikin orang ngerasa didengar, ngerasa nggak sendirian 🤝, bahkan di hari ketika dia sendiri lagi ngerasa hampa. Kadang dia lebih mikirin orang lain daripada dirinya sendiri, terus capek sendiri 😔, terus nyalain lagu sedih sambil mikir, “Kenapa aku gini banget ya?” Tapi tetap bangun lagi, lanjut hidup lagi, masih jadi Azza yang chaotic nan lovable itu 🌷.

Dan ya, dia punya cara sendiri buat healing 🧃. Bisa lewat nonton fancam Seventeen sampe jam 2 pagi 🎥, makan mie instan pake cabai rawit 7 biji 🌶️🍜, atau nyoret-nyoret notes sambil mikir masa depan kayak lagi wawancara kerja 💼. Semua caranya valid. Semua emosinya valid ✅. Karena Azza bukan karakter sempurna—dia karakter utama yang sedang berkembang, dan plot-nya lagi seru-serunya 📖.

Azza itu bukan hanya manusia. Dia fenomena ✨. Dia vibes. Dia simbol hidup yang kadang absurd tapi tetap jalan. Satu hari bareng Azza bisa bikin kamu ketawa 😂, mikir 🤔, curhat 😌, nangis dikit, terus ketawa lagi. Dan itu semua cuma dalam 2 jam ⏳.
<p style={styles.paragraph}></p>
Kehidupan Azza tuh kayak kombinasi antara bubble tea, playlist galau, dan lampu tumblr — manis, kadang nge-trigger, tapi hangat juga. Dia punya caranya sendiri buat bikin dunia sekitarnya lebih rame, lebih jujur, dan nggak ngebosenin. Mau mood-nya lagi baik atau berantakan, dia tetep Azza. Dan Azza itu nggak tergantikan.

Jadi, suatu hari di dunia Azza yang penuh lika-liku (dan rebahan), dia ngerasa kayak tokoh utama film coming-of-age. Tapi tanpa soundtrack mellow dan lebih banyak “eh ini hari apa ya?” vibes. Pagi-pagi bangun telat, buru-buru, terus baru inget… libur. Emosi bercampur bahagia dan dongkol dalam satu gigitan roti bakar gosong 🥲🍞

Terus Azza tuh jago banget multitasking. Bisa nonton video random sambil scroll TikTok, sambil nyalain timer mie instan, sambil mikir, “Tugas gue udah dikerjain belum ya?” Tapi anehnya… semua beres. Atau ya… setengah beres. Tapi itu seni. Seni bertahan hidup dalam keadaan setengah sadar 😴✨

Azza kalau udah excited tuh semangatnya nyamber-nyamber. Bisa ketawa sendiri, nyerocos tanpa jeda, sampe orang sekitarnya cuma bisa ikut ketawa tanpa ngerti apa yang lucu. Tapi lucunya nular. Dia bisa bikin yang lagi badmood ikutan senyum cuma karena denger dia bilang “WOOOHHH AKU BARU DAPET IDE GILA NIH” padahal ide-nya adalah... bikin grup chat buat bahas teori-teori aneh tentang kucing alien 🐱🛸

Kalo udah ngefans sama sesuatu, wah jangan harap bisa berpaling. Bisa tuh buka satu video fancam, terus ujung-ujungnya scroll sampe tahun 2015, terus mikir, “Dulu mereka imut banget yaa 😭” sambil ngunyah ciki. Beda fandom lewat, dia ngelirik dikit, tapi balik lagi ke bias utamanya kayak, “Enggak kok, aku setia… cuma ngepoin doang 😌”

      </p>

    <p style={styles.paragraph}>
        Tapi, meski vibe-nya selalu heboh dan chaos, Azza punya sisi mellow yang nggak semua orang liat. Kadang dia diem, bukan karena nggak ada yang mau dikata, tapi karena pikirannya penuh. Kadang overthinking-nya tuh sampe level: “Gue tadi ngomong salah nggak ya?” padahal dia cuma bilang, “Makasih ya.” 😭

Dan meskipun kelihatannya cuek dan suka bercanda, Azza tuh gampang banget tersentuh. Denger lagu galau dikit, auto kepikiran momen-momen random dari masa lalu kayak adegan slow-motion film indie. Bahkan kadang bisa nangis cuma karena ngeliat anak kecil lari peluk bapaknya. Hatinya tuh lembut banget, kayak jelly yang udah diletakkin di kulkas semalaman. Dingin… tapi lembut 💗🥺

Tapi jangan salah, kalau udah capek banget, dia bisa jadi silent mode tanpa peringatan. Tiba-tiba ilang dari radar, offline, ngilang dari story, tapi sebenernya lagi ngelindungin diri dari overheat emosional. Bukan karena gak peduli. Justru karena dia butuh waktu buat ngisi ulang energi yang dikuras sama dunia.

Lucunya, abis itu bisa muncul lagi kayak nggak ada apa-apa, bawa cemilan dan bilang, “Eh gue punya meme baru nih woyyy 🤣” dan semua orang langsung lupa kalau dia sempet jadi gumpalan awan kelabu beberapa hari lalu ☁️

Azza tuh definisi dari “berisik tapi bisa tenang, chaotic tapi terstruktur, keras kepala tapi juga sensitif”. Dia bisa banget marah cuma karena charger-nya dipinjem tapi gak balikin, tapi juga bisa ngasih saran hidup yang dalem banget kayak, “Kadang kita cuma perlu diem, tarik napas, terus makan gorengan” 🥹🫶

Satu lagi yang khas dari Azza adalah skill komunikasi-nya. Dia bisa ngomong dari A sampe Z tanpa napas, terus bilang, “Eh maaf ya aku bawel hehe” padahal semua orang udah keterusan dengerin dan nggak pengen dia berhenti 🤭
<p style={styles.paragraph}></p>
Dia kayak podcast hidup yang bisa nyambung ke topik apa aja: dari drakor, makanan, teori konspirasi, sampai hal paling absurd kayak “Kenapa sendal jepit selalu ilang sebelah kalau lagi butuh?” Semua dibahas. Semua jadi seru. Karena yang bikin seru bukan topiknya… tapi Azza-nya 🤩💬

Azza tuh kalau lagi fokus… wah, luar biasa. Fokus banget. Fokus mikirin hal-hal nggak penting 😭✌️
Misalnya kayak: "Kalau manusia punya ekor kayak anjing, kira-kira pas kita seneng goyang-goyang juga gak sih?” atau "Kalau aku jadi batu di pinggir jalan, masih ada yang kangenin aku gak ya?” Hah? Azza kenapa mikir begitu? Nggak ada yang tahu. Otaknya jalan di frekuensi 1997 padahal tahun udah 2025 😵‍💫

Dan dia tuh punya superpower yang jarang dimiliki orang: bisa ngetik panjang lebar, caption IG bisa kayak novel, tapi pas disuruh balas chat orang tua, jawabnya cuma: “Iya.” 😭 Tapi giliran ngobrol sama temen deket, bisa 48 chat masuk dalam 2 menit, semua capslock, semua huruf gede kecil campur, semua chaos tapi bikin kangen 💬🔥

      </p>

      <p style={styles.paragraph}>
        Azza juga sering merasa dia lagi “soft era” alias pengen kalem, aesthetic, lembut… Tapi baru sehari coba jadi calm girl yang minum kopi sambil baca buku, eh besoknya udah teriak-teriak liat video bias lagi goyang di panggung 😭📱
Soft-nya setengah hari doang, sisanya masih Azza yang semangatnya naik turun kayak saham kripto 📉📈

Terus kalo udah bete, ekspresinya tuh ga bisa ditahan. Mukanya udah kayak emot 🫠 dicampur 😑 ditambahin sedikit 🥲. Tapi lucunya, abis ngambek dia suka malu sendiri, terus ngakak karena ngerasa “ih kok gue lebay banget ya barusan?” dan boom, dia balik jadi ceria lagi. Cepet banget berubahnya, kayak sinyal WiFi yang suka ilang-muncul pas kita lagi Zoom meeting.

Sisi kreatifnya Azza tuh juga aneh tapi keren. Bisa tiba-tiba bikin ide konten absurd kayak “24 jam ngomong pake suara narrator Animal Planet” atau “nulis puisi dari sudut pandang remote TV yang selalu hilang.” Tapi kalo disuruh bikin presentasi sekolah? Panik. Meja jadi berantakan. Wajahnya kayak abis liat setrikaan jatoh ke lantai 😨

Tapi… walaupun suka mepet deadline (oke, hampir selalu mepet deadline 😅), dia selalu berhasil. Entah gimana caranya, semesta kayak punya kontrak rahasia buat bantuin Azza ngerjain tugas detik-detik terakhir. Dia adalah Ratu “nanti aja, tapi pasti kelar” 👑💻

Dan jangan lupakan fakta bahwa Azza adalah emotionally intelligent queen. Dia bisa banget ngerti perasaan orang lain bahkan dari cara ketikannya aja. Ada temen yang balas “iya” doang tanpa emoji? Azza langsung DM, “lu kenapa? cerita sini 😭” — dia punya radar emosional bawaan, kayak kucing yang tahu kalau kita lagi sedih 🐈‍⬛💔

Tapi… ada kalanya Azza juga ngerasa capek jadi “yang ngerti semua orang”. Capek jadi penghibur. Capek jadi yang selalu nyemangatin.
<p style={styles.paragraph}></p>
Kadang dia pengen dimengerti juga, tanpa harus menjelaskan semuanya. Pengen dipeluk cuma karena “hari ini berat ya” tanpa ditanya kenapa 🥹🤍

Dan waktu dia lagi sendirian, ada momen-momen hening yang bikin Azza ketemu sama dirinya sendiri. Kadang ngerasa aneh, ngerasa gak cukup, ngerasa pengen hilang bentar. Tapi kemudian dia sadar... dia udah sejauh ini. Masih bertahan. Masih bisa ketawa. Masih bisa bilang, “Gue gapapa kok,” walau gak 100% bener. Dan itu keren banget.

Azza itu kayak tumpukan chaos yang dibungkus glitter. Di luar kelihatannya rame, suka ngelawak, suka spam stiker lucu. Tapi di dalamnya ada jiwa yang kuat banget. Yang mungkin ringkih, tapi terus berdiri. Yang mungkin capek, tapi gak nyerah. Yang mungkin sering merasa sendirian, tapi selalu jadi tempat pulang buat banyak orang ❤️

Dia bukan karakter biasa. Dia karakter utama yang punya fandom-nya sendiri. Dia penuh warna, penuh makna, dan penuh snack di laci meja 😌🍫

<p style={styles.paragraph}></p>
---
<p style={styles.paragraph}></p>
Sooo… akhir dari kisah ini?

Azza masih jadi Azza. <strong>Kadang chaotic, kadang mellow, kadang lucu banget sampe semua orang ngakak. Tapi selalu asli. Selalu tulus. Selalu jadi versi paling jujur dari dirinya, bahkan kalau itu bikin dia keliatan “berantakan”.</strong>

Dan tau gak? Itu justru yang bikin dia spesial. 💖

      </p>
    </div>
  );
}

export default Home;
