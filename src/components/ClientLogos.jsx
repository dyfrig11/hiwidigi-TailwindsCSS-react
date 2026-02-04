import React from 'react';

// Data untuk setiap baris logo
const row1 = [
  // "Indonesia Express Frankfurt",
  "Kopi Et Manokwari",
  //  "Forza Napoli Munich", 
  "Berkala Photobooth",
   //"Invorka Technologies",
    "Abdination Indonesia",
];
const row2 = [
  // "Indonesia Express Frankfurt",
  "Kopi Et Manokwari",  "Labora Mengabdi",
  //  "Forza Napoli Munich",
   "Berkala Photobooth"
];
const row3 = ["Kopi Et Manokwari", 
   "Future Youth Scholarship",
  // "Forza Napoli Munich", "Indonesia Express Frankfurt", //"Labora Mengabdi"
];

// Komponen kecil yang bisa dipakai ulang untuk setiap baris marquee
const MarqueeRow = ({ logos, duration = 60, reverse = false }) => {
  // Kita duplikasi array logonya agar animasinya terlihat seamless (tanpa putus)
  const extendedLogos = [...logos, ...logos];

  return (
    <div
      className="flex"
      style={{
        animation: `marquee ${duration}s linear infinite`,
        animationDirection: reverse ? 'reverse' : 'normal',
      }}
    >
      {extendedLogos.map((logo, index) => (
        <div key={index} className="flex items-center shrink-0 mx-4">
          <span className="text-sm mx-2">◦</span>
          <span className="font-serif text-3xl md:text-4xl text-gray-800">{logo}</span>
        </div>
      ))}
    </div>
  );
};

function ClientLogos() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto">
        {/* Optional: Tambahkan judul jika perlu */}
        {/* <h2 className="text-center text-2xl font-semibold text-gray-600 mb-12">
          Proudly working with the world’s best
        </h2> */}
        
        {/* Viewport untuk marquee, 'overflow-hidden' menyembunyikan bagian yang bergerak keluar layar */}
        <div className="relative flex flex-col gap-y-6 overflow-hidden">
          <MarqueeRow logos={row1} duration={40} />
          <MarqueeRow logos={row2} duration={30} reverse={true} />
          <MarqueeRow logos={row3} duration={35} />
          
          {/* Efek gradien di sisi kiri dan kanan agar terlihat memudar */}
          <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-white to-transparent"></div>
          <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-white to-transparent"></div>
        </div>
      </div>
    </section>
  );
}

export default ClientLogos;