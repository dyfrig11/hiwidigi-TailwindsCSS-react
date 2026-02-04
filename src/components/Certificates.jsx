import React from 'react';
import ossLogo from '../assets/images/oss-logo.png';
import pengayomanLogo from '../assets/images/pengayoman-logo.png';

// Data sertifikat dalam bentuk array agar mudah dikelola
const certificateData = [
  {
    logo: ossLogo,
    alt: 'Logo of OSS and Indonesian Ministry of Investment',
    title: 'Indonesian Ministry of Investment and Downstream Industry',
    idNumber: null, // Tidak ada ID Number untuk yang ini
  },
  {
    logo: pengayomanLogo,
    alt: 'Logo of Indonesian Ministry of Law',
    title: 'Indonesian Ministry of Law',
    idNumber: 'ID Number : AHU-007637.AH.01.30.Tahun 2025',
  },
];

function Certificates() {
  return (
    <section className="bg-white py-20 md:py-28 font-sans">
      <div className="container mx-auto px-6 lg:px-8">
        
        {/* Bagian Judul dan Deskripsi */}
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-sans">
            Our Certificates
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600 font-mono">
            We are proud to be certified to do business activities as a legal business entity by the Indonesian Ministry of Law.
          </p>
        </div>

        {/* Kontainer untuk Sertifikat */}
        <div className="mt-16 flex flex-col md:flex-row justify-center items-start gap-12 md:gap-16 font-sans">
          {certificateData.map((cert, index) => (
            <div key={index} className="flex flex-col items-center text-center max-w-sm mx-auto">
              {/* Gambar Logo */}
              <img 
                src={cert.logo} 
                alt={cert.alt}
                className="h-28 object-contain" // `object-contain` agar logo tidak terdistorsi
              />
              {/* Judul Sertifikat */}
              <h3 className="mt-6 text-2xl font-semibold text-gray-800">
                {cert.title}
              </h3>
              {/* ID Number (hanya tampil jika ada) */}
              {cert.idNumber && (
                <p className="mt-2 text-sm text-gray-500 font-mono">
                  {cert.idNumber}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certificates;