/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // 2. Tambahkan atau perbarui bagian fontFamily
      fontFamily: {
        // Daftarkan 'IBM Plex Mono' sebagai 'font-mono'
        'mono': ['"IBM Plex Mono"', 'monospace'],
        // Anda juga bisa mendaftarkannya sebagai font sans-serif utama
        'sans': ['"Montserrat"', 'sans-serif'], 
      },
    },
  },
  plugins: [],
}
