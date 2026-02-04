import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import featureImage from '../assets/images/Streaxy.png'; // Ganti dengan path gambar Anda

// Ikon panah untuk tombol
const ArrowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
  </svg>
);

// 2. Data untuk setiap panel/dot
const featurePanels = [
  {
    title: 'Event Trigger — Every Action Counts',
    description: 'Every user action or event can serve as a trigger  adding XP, unlocking missions, or activating other in-app rewards.',
  },
  {
    title: 'Points System — Earn. Collect. Redeem.',
    description: 'Each purchase grants points that can be redeemed for free items, discount vouchers, or mystery boxes  encouraging continuous engagement.',
  },
  {
    title: 'Streaks — Consistency Pays Off',
    description: 'Consecutive daily visits boost point multipliers and help users reach higher Membership Tiers  rewarding consistency and loyalty.',
  },
  {
    title: 'Missions — Play the Journey',
    description: 'A set of activities or events to be completed within a specific timeframe. Completing missions grants rewards like points, free items, vouchers, or mystery boxes.',
  },
  {
    title: 'Campaigns — Seasonal Boosts, Strategic Impact',
    description: 'Seasonal reward modifiers that influence mission and redemption prizes. Campaigns help manage product stock and align with company strategies.',
  },
];

function FeatureShowcase() {
  // 3. State untuk melacak dot/panel yang aktif
  const [activeIndex, setActiveIndex] = useState(0);
  // State untuk efek transisi fade
  const [isFading, setIsFading] = useState(false);

  // 4. Fungsi untuk menangani klik dot
  const handleDotClick = (index) => {
    if (index === activeIndex) return; // Jangan lakukan apa-apa jika dot yang sama diklik

    setIsFading(true); // Mulai fade-out
    // Tunggu transisi selesai, baru ganti teks dan fade-in
    setTimeout(() => {
      setActiveIndex(index);
      setIsFading(false);
    }, 300); // Durasi ini harus cocok dengan 'duration-300'
  };

  return (
    <section className="bg-gray-100 py-16 md:py-24 font-sans">
      <div className="container mx-auto px-6 lg:px-8">
        
        {/* Judul Utama Section */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">
          Introducing
        </h1>

        {/* Kartu Fitur Utama */}
        <div className="flex flex-col md:flex-row rounded-2xl shadow-xl overflow-hidden">

          {/* Kolom Kiri: Teks Konten */}
          <div className="w-full md:w-2/5 bg-white p-8 lg:p-12 flex flex-col">
            {/* Bagian Atas Teks (Tidak berubah) */}
            <div>
              <div className="flex items-center">
                <span className="text-black font-semibold">histreaxy</span>
                <span className="ml-2 bg-blue-100 text-blue-800 text-xs font-bold px-2 py-0.5 rounded-full">
                  Coming Soon
                </span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-4 leading-tight">
                Play. Earn. Engage. Repeat.
              </h2>
              <Link 
                to="/learnmore" // <-- Tentukan path tujuannya
                className="bg-gray-900 text-white rounded-full w-14 h-14 flex items-center justify-center mt-8 transition-transform hover:scale-110"
              >
                <ArrowIcon />
              </Link>
            </div>

            {/* 5. Bagian Bawah Teks (Sekarang Dinamis) */}
            <div className="mt-16 md:mt-auto pt-8">
              {/* Wrapper untuk efek transisi */}
              <div 
                className={`transition-opacity duration-300 ${isFading ? 'opacity-0' : 'opacity-100'}`}
              >
                <h3 className="text-lg font-semibold text-gray-800">
                  {featurePanels[activeIndex].title}
                </h3>
                <p className="text-lg text-gray-600 mt-2">
                  {featurePanels[activeIndex].description}
                </p>
              </div>

              {/* 6. Pagination Dots (Sekarang Interaktif) */}
              <div className="flex space-x-2 mt-8">
                {featurePanels.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleDotClick(index)}
                    aria-label={`Show feature ${index + 1}`}
                    className={`
                      w-2.5 h-2.5 rounded-full transition-colors duration-200
                      ${activeIndex === index ? 'bg-gray-800' : 'bg-gray-300 hover:bg-gray-500'}
                    `}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Kolom Kanan: Gambar Fitur */}
          <div className="w-full md:w-3/5">
            <img 
              src={featureImage} 
              alt="Feature showcase"
              className="w-full h-full object-cover"
            />
          </div>
          
        </div>
      </div>
    </section>
  );
}

export default FeatureShowcase;