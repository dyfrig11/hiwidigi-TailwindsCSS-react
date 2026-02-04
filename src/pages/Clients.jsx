import React from 'react';
import Footer from '../components/Footer';

// 1. Definisikan data klien di dalam sebuah array agar mudah dikelola
const clientData = [
  {
    name: 'Tuturkami',
    description: 'Dozens of projects involving web development, design, hosting, and more! all powered by our HiwiCloud platform to deliver seamless, high-performance digital experiences.',
    url: 'https://tuturkami.hiwidigi.com/',
  },
  {
    name: 'Berkala Photobooth',
    description: 'Dozens of projects helping create designs, company profile websites, photobooth results, and various other digital products. all supported by our HiwiCloud platform',
    url: 'https://berkala.hiwidigi.com/',
  },
  {
    name: 'Refathya',
    description: 'Dozens of projects covering web development, e-commerce, and detailed product showcases. all powered by our HiwiCloud platform.',
    url: 'https://refathya.hiwidigi.com/',
  },
  {
    name: 'Albaspice',
    description: 'Dozens of projects covering web development, e-commerce, and detailed product showcases. all powered by our HiwiCloud platform.',
    url: 'https://albaspice.hiwidigi.com/',
  },
  // {
  //   name: 'Indonesia Express Frankfurt(tbc)',
  //   description: 'We’re proud to partner with, providing a royalty system and ERP solutions to support efficient management, transparency, and sustainable growth.',
  // },
  {
    name: 'Kopi Et Manokwari',
    description: 'We worked from the early days of the service and onwards to design and develop products for their app and main website.',
  },
  // {
  //   name: 'Forza Napoli Munich(tbc)',
  //   description: 'We worked closely with Forza Napoli to build, providing a royalty system and ERP solutions to support efficient management, transparency, and sustainable growth',
  // },
  {
    name: 'Invorka Technologies',
    description: 'We collaborate with leading B2B software developers in Indonesia to deliver efficient, secure, and integrated digital solutions :D empowering businesses to transform, grow through reliable technology, & Marketing their items.',
  },
  {
    name: 'Abdination Indonesia',
    description: 'We’ve done multi project engagements with the product, marketing and brand teams across multiple platforms & made partnership.',
  },
  {
    name: 'Future Youth Scholarship',
    description: 'We’re proud to partner with Future Youth Scholarship :D working together to empower young talents through education, innovation, and real opportunities for growth.',
  },
  {
    name: 'Laboran Mengabdi',
    description: 'We’re proud to partner with Labora Mengabdi :D joining forces to create meaningful impact through community development, innovation, and sustainable collaboration.',
  },
  // {
  //   name: 'Netflix',
  //   description: 'We’ve done multi project engagements with the Netflix product, marketing and brand teams across multiple platforms.',
  // },
];


function Clients() {
  return (
    <main className="font-sans bg-white">
      <div className="container mx-auto px-6 lg:px-8 py-20 md:py-32">
        
        {/* === BAGIAN JUDUL === */}
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
            Clients && Partners,
          </h1>
          <p className="text-5xl md:text-6xl text-gray-400">
            Some of them.
          </p>
        </div>

        {/* === BAGIAN GRID KLIEN === */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {/* 2. Gunakan .map() untuk merender setiap klien dari array data */}
          {clientData.map((client) => (
            <div key={client.name}>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {client.url ? (
                  <a 
                    href={client.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:underline transition-colors"
                  >
                    {client.name}
                  </a>
                ) : (
                  client.name
                )}
              </h3>
              <p className="text-base text-gray-600 leading-relaxed">
                {client.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default Clients;