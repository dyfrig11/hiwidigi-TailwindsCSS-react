import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';

// Data untuk link kontak
const contactLinks = [
  { name: 'Email', url: 'mailto:admin@hiwidigi.com' },
  { name: 'Instagram', url: 'https://www.instagram.com/hiwidigi/' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/company/hiwidigi/' },
];

// Daftar sapaan dalam berbagai bahasa
const greetings = [
  'halo :D', 'hello :-D', 'bonjour =D', 'hola ^_^', '你好 c:', '안녕하세요 :]', 'こんにちは (*^▽^*)', 'hallo :)', 'Здравствуйте :))', 'नमस्ते 8)'
];

function Contact() {
  // State untuk menyimpan indeks sapaan saat ini
  const [greetingIndex, setGreetingIndex] = useState(0);
  // State untuk mengontrol visibilitas (untuk efek fade)
  const [isVisible, setIsVisible] = useState(true);

  // useEffect untuk menjalankan timer
  useEffect(() => {
    // Ganti sapaan setiap 3 detik (3000 milidetik)
    const intervalId = setInterval(() => {
      // 1. Mulai transisi fade-out
      setIsVisible(false);

      // 2. Tunggu transisi selesai (500ms), lalu ganti teks dan fade-in
      setTimeout(() => {
        setGreetingIndex((currentIndex) => (currentIndex + 1) % greetings.length);
        setIsVisible(true);
      }, 500); // Durasi ini harus cocok dengan 'duration-500' di bawah

    }, 1000);

    // Fungsi cleanup untuk menghentikan interval saat komponen dibongkar
    return () => clearInterval(intervalId);
  }, []); // [] berarti efek ini hanya berjalan sekali saat komponen dimuat

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-white font-sans p-4">
      
      <h1 className="w-full text-center text-[25vw] break-all font-sans text-gray-200 leading-none">
        Contact.
      </h1>
      {/* <h2 className="w-full text-center text-[25vw] break-all font-sans text-gray-200 leading-none">
        :D
      </h2> */}
      
      {/* Teks sapaan yang dinamis */}
      <p className={`
        text-2xl md:text-3xl text-gray-500
        transition-opacity duration-500
        ${isVisible ? 'opacity-100' : 'opacity-0'}
      `}>
        {greetings[greetingIndex]}
      </p>

      {/* Kontainer untuk link sosial media */}
      <div className="flex items-center space-x-6 mt-8">
        {contactLinks.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl font-bold text-gray-800 underline hover:no-underline hover:text-gray-500 transition-colors"
          >
            {link.name}.
          </a>
        ))}
      </div>
    </main>
  );
}

export default Contact;