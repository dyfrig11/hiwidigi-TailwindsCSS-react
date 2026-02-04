import React from 'react';
import haskelImage from '../assets/images/haskel.jpg';
import dyfrigImage from '../assets/images/dyfrig.jpg';
import dhilahImage from '../assets/images/dhilah.jpg';
import althafImage from '../assets/images/althaf.jpg';

// Data untuk tim agar mudah dikelola
const teamMembers = {
  leader: {
    name: 'Haskel Nisai',
    title: 'Founder, CEO and CTO of\nPT. Hiwi Digital Internasional',
    imageUrl: haskelImage, // Ganti dengan path gambar Anda
  },
  staff: [
    { 
      name: 'Dyfrig Nicholas', 
      title: 'Chief Design Officer',
      imageUrl: dyfrigImage, // Ganti dengan path gambar Anda
    },
    { 
      name: 'Yusila Husni Fadhilah', 
      title: 'Chief Marketing Officer',
      imageUrl: dhilahImage // Ganti dengan path gambar Anda
    },
    { 
      name: 'Althaf Ardhiea Regita', 
      title: 'Chief Administrative Officer',
      imageUrl: althafImage // Ganti dengan path gambar Anda
    },
    // { 
    //   name: 'Dyfrig Nicholas', 
    //   title: 'Chief Design Officer',
    //   imageUrl: dyfrigImage, // Ganti dengan path gambar Anda
    // },
    // { 
    //   name: 'Dhillah', 
    //   title: 'Chief Marketing Officer',
    //   imageUrl: 'https://picsum.photos/id/238/200' // Ganti dengan path gambar Anda
    // },
    // { 
    //   name: 'Althaf', 
    //   title: 'Chief Administrative Officer',
    //   imageUrl: 'https://picsum.photos/id/239/200' // Ganti dengan path gambar Anda
    // },
  ],
};

function AboutSection() {
  return (
    <section className="bg-white py-20 md:py-32 font-mono">
      <div className="container mx-auto px-6 lg:px-8">
        
        {/* === BAGIAN 1: ABOUT US === */}
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">About us</h2>
          <p className="mt-8 text-base md:text-lg text-gray-600 leading-relaxed">
            The term "Hiwi," short for "Hilfswissenschaftler," holds a special
            significance for us, symbolizing the essence of research assistance and
            support in academia. Just as <strong className="text-gray-800">Hisis contribute to the discovery and development of new knowledge</strong>, we strive to embody that spirit in the
            <strong className="text-gray-800"> realm of information technology</strong>. Our ethos of providing simple,
            efficient, and professional IT solutions reflects our commitment to
            assisting our clients in navigating the complexities of technology. We
            believe that, much like a research assistant, our role is to <strong className="text-gray-800">simplify
            processes, enhance productivity, and empower organizations with the
            tools they need to succeed.</strong> By drawing inspiration from the
            collaborative nature of research, we aim to foster innovation and drive
            success for every client we serve.
          </p>
        </div>

        {/* === BAGIAN 2: OUR VALUES === */}
        <div className="mt-24 md:mt-32">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center">Our Values</h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
            {/* Kolom Visi */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-800">Vision</h3>
              <p className="mt-4 text-gray-600">
                Helping MSMEs and aspiring communities grow and expand by providing digital and IT solutions.
              </p>
            </div>
            {/* Kolom Misi (mengambil 2 slot grid) */}
            <div className="md:col-span-2">
              <h3 className="text-2xl font-semibold text-gray-800">Mission</h3>
              <ul className="mt-4 list-disc pl-5 space-y-3 text-gray-600">
                <li>Bringing international B2B companies with market segment of MSMEs into the Indonesian and ASEAN market</li>
                <li>Developing digital environment to leverage business activities and help growth of MSMEs</li>
                <li>Providing digital solutions for MSMEs, aspiring communities and organizations</li>
                <li>Helping MSMEs in remote locations to connect with the advantages of smart city/IoT local based digitalized solution</li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* === BAGIAN 3: OUR TEAM === */}
        <div className="mt-24 md:mt-32">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Our Core</h2>
            <p className="mt-4 text-lg text-gray-600">Connect with people behind Hiwidigi</p>
          </div>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
            {/* Profil Utama */}
            <div className="md:col-span-1">
              <img 
                src={teamMembers.leader.imageUrl} 
                alt={teamMembers.leader.name}
                className="w-full h-auto object-cover rounded-xl shadow-lg"
              />
              <h3 className="mt-6 text-2xl font-bold text-gray-900">{teamMembers.leader.name}</h3>
              {/* whitespace-pre-line digunakan agar '\n' di string title berfungsi sebagai line break */}
              <p className="mt-1 text-gray-500 whitespace-pre-line">{teamMembers.leader.title}</p>
            </div>
            {/* Daftar Tim Lainnya */}
            <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 mt-8 md:mt-0">
            {teamMembers.staff.map((member) => (
                // ✅ Gunakan flexbox untuk menata gambar dan teks
                <div key={member.name} className="flex items-center gap-x-5">
                <img 
                    src={member.imageUrl} 
                    alt={member.name}
                    className="w-24 h-24 md:w-28 md:h-28 rounded-xl object-cover shadow-sm"
                />
                <div>
                    <h4 className="text-xl font-semibold text-gray-800">{member.name}</h4>
                    <p className="text-gray-600">{member.title}</p>
                </div>
                </div>
            ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default AboutSection;