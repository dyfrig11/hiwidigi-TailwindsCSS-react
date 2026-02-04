import React from 'react';

const footerLinks = [
//   {
//     title: 'Careers',
//     links: [
//       { name: 'Job opportunities', url: '#' },
//       { name: 'Our people', url: '#' },
//       { name: 'Working at AKQA', url: '#' }, // Teks disesuaikan dengan gambar
//       { name: 'Qualities we look for', url: '#' },
//     ],
//   },
  {
    title: 'Partners',
    links: [
      { name: 'Berkala Photobooth', url: 'https://berkala.hiwidigi.com/' },
      { name: 'Invorka Technologies', url: '#' },
      { name: 'Abdination', url: 'https://www.abdinationindonesia.com/' },
      { name: 'Laboran Mengabdi', url: 'https://www.instagram.com/laboranmengabdi.id/' },
      { name: 'Future Youth Scholarship', url: 'https://www.instagram.com/futureyouthscholarship/' },
    ],
  },
//   {
//     title: 'About',
//     links: [
//       { name: 'News', url: '#' },
//       { name: 'Studios', url: '#' },
//       { name: 'Sustainability', url: '#' },
//       { name: 'Privacy Policy', url: '#' },
//     ],
//   },
];

function Footer() {
  return (
    // Kontainer footer utama dengan warna latar gelap
    <footer className="bg-gray-900 text-gray-400 font-sans">
      <div className="container mx-auto px-6 lg:px-8 py-20">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {footerLinks.map((column) => (
            <div key={column.title}>
              {/* Judul Kolom */}
              <h3 className="text-base font-bold text-white tracking-wide mb-5">
                {column.title}
              </h3>
              
              {/* Daftar Link */}
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.url}
                      className="text-sm hover:text-white hover:underline transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>
      </div>
    </footer>
  );
}

export default Footer;