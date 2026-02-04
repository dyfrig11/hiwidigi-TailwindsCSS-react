import React, { useState } from 'react';

// (Komponen FormInput tetap sama)
const FormInput = ({ label, helperText, type = 'text', id, isRequired = false }) => {
  const InputComponent = type === 'textarea' ? 'textarea' : 'input';
  
  return (
    <div>
      <label htmlFor={id} className="text-base font-semibold text-gray-900">
        {label}
        {isRequired && <span className="text-red-500">*</span>}
      </label>
      {helperText && (
        <p className="text-sm text-gray-500 mt-1">
          {helperText}
        </p>
      )}
      <InputComponent 
        type={type}
        id={id}
        name={id}
        placeholder="Your answer"
        className="w-full border border-gray-300 rounded-md p-3 mt-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        rows={type === 'textarea' ? 5 : undefined}
      />
    </div>
  );
};

// --- KOMPONEN DROPDOWN (Ditambahkan 'value' dan 'onChange') ---
const FormSelect = ({ label, id, isRequired = false, options, value, onChange }) => {
  return (
    <div>
      <label htmlFor={id} className="text-base font-semibold text-gray-900">
        {label}
        {isRequired && <span className="text-red-500">*</span>}
      </label>
      <select 
        id={id}
        name={id}
        className="w-full border border-gray-300 rounded-md p-3 mt-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
        value={value} // Ditambahkan untuk mengontrol nilai
        onChange={onChange} // Ditambahkan untuk menangani perubahan
        required={isRequired} // Menambahkan validasi HTML5
      >
        <option value="" disabled>Please select</option>
        {options.map((option) => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
    </div>
  );
};

// --- Opsi untuk Dropdown ---
const companySizeOptions = [
  "1-50",
  "51-250",
  "251-1000",
  "> 1000"
];

const locationOptions = [ // Diubah nama variabel agar lebih jelas
  "Indonesia",
  "Europe",
  "Others"
];

// Opsi Omzet Default (USD)
const omzetScaleOptionsUSD = [
  "< USD 20k",
  "USD 20k - 160k",
  "USD 160k - 3.2M",
  "USD 3.2M - 32M",
  "> USD 32M"
];

// Opsi Omzet Indonesia (IDR)
const omzetScaleOptionsIND = [
  "< Rp 300 Juta",
  "Rp 300 Juta - Rp 2,5 Miliar",
  "Rp 2,5 Miliar - Rp 50 Miliar", // Menambahkan rentang ini
  "Rp 50 Miliar - Rp 500 Miliar",
  "> Rp 500 Miliar"
];

// Opsi Omzet Eropa (EUR)
const omzetScaleOptionsEUR = [
  "< €900.000",
  "€900.000 - €10.000.000",
  "€10.000.000 - €50.000.000",
  "> €50.000.000"
];


function LearnMore() {
  const [formType, setFormType] = useState('company'); // 'company' or 'dreamer'
  // 1. State untuk menyimpan lokasi yang dipilih
  const [selectedLocation, setSelectedLocation] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Form submitted for: ${formType}`);
    // Anda bisa mengakses nilai lokasi dari 'selectedLocation' di sini
    console.log('Selected Location:', selectedLocation); 
  };

  // 2. Fungsi untuk menangani perubahan lokasi
  const handleLocationChange = (event) => {
    setSelectedLocation(event.target.value);
  };

  // 3. Fungsi untuk mendapatkan opsi omzet yang sesuai
  const getOmzetOptions = () => {
    switch (selectedLocation) {
      case 'Indonesia':
        return omzetScaleOptionsIND;
      case 'Europe':
        return omzetScaleOptionsEUR;
      default: // Termasuk 'Others' atau jika belum dipilih
        return omzetScaleOptionsUSD;
    }
  };

  return (
    <main className="bg-white py-20 md:py-32 font-sans">
      <div className="container mx-auto px-6 lg:px-8 max-w-3xl">
        
        {/* --- Bagian Header --- */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Why histreaxy?
          </h1>
          <p className="text-lg text-gray-600 mt-4">

            Unlike traditional loyalty systems, Hiannals doesn’t just track points — it builds stories.
            Every action, mission, and streak becomes part of a living journey that grows with your customers.
            It’s not about transactions — it’s about connection, progress, and play.
          </p>
          <p className="text-lg text-gray-600 mt-2">
            Sign up for updates and we'll be in touch!
          </p>
        </div>

        {/* --- Tombol Pilihan Tipe Formulir --- */}
        <div className="mt-12 flex items-center gap-4">
           {/* ... (Tombol 'I have a company' dan 'I'm a dreamer') ... */}
           <button
            type="button"
            onClick={() => { setFormType('company'); setSelectedLocation(''); }} // Reset lokasi saat ganti form
            className={`py-2 px-6 rounded-md font-semibold transition-colors ${
              formType === 'company'
                ? 'bg-gray-900 text-white'
                : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
            }`}
          >
            I have a company
          </button>
          <button
            type="button"
            onClick={() => { setFormType('dreamer'); setSelectedLocation(''); }} // Reset lokasi saat ganti form
            className={`py-2 px-6 rounded-md font-semibold transition-colors ${
              formType === 'dreamer'
                ? 'bg-gray-900 text-white'
                : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
            }`}
          >
            I'm a dreamer
          </button>
        </div>

        {/* --- Formulir 1: UNTUK COMPANY --- */}
        {formType === 'company' && (
          <form onSubmit={handleSubmit} className="mt-8 space-y-8">
            {/* ... (Input Name, Position, Email, Company) ... */}
             <FormInput 
              label="Name"
              id="name"
              isRequired={true}
            />
            <FormInput 
              label="Position"
              id="position"
              helperText="Your job title at the company."
            />
            <FormInput 
              label="Email"
              id="email"
              type="email"
              helperText="This should be the email associated with the company."
              isRequired={true}
            />
            <FormInput 
              label="Company"
              id="company"
            />
            <FormSelect
              label="Company Size Scale"
              id="company_size"
              options={companySizeOptions}
              isRequired={true}
            />
            {/* 4. Dropdown Lokasi */}
            <FormSelect 
              label="Location"
              id="location" // ID diubah agar unik
              options={locationOptions}
              value={selectedLocation} // Kaitkan dengan state
              onChange={handleLocationChange} // Panggil handler saat berubah
              isRequired={true} // Sebaiknya wajib diisi
            />
            {/* 5. Dropdown Omzet dengan Opsi Dinamis */}
            <FormSelect
              label="Scale Omzet (Est. Annual Turnover)"
              id="omzet_scale"
              options={getOmzetOptions()} // Gunakan fungsi untuk mendapatkan opsi
              isRequired={true}
            />
            {/* ... (Input Prospect dan Tombol Submit) ... */}
            <FormInput 
              label="What do you want to build? or What prospect do u hoping for?"
              id="prospect"
              type="textarea"
            />
            <div>
              <button 
                type="submit"
                className="bg-gray-900 text-white font-semibold py-2 px-6 rounded-md hover:bg-gray-700 transition-colors"
              >
                Submit
              </button>
            </div>
          </form>
        )}

        {/* --- Formulir 2: UNTUK DREAMER --- */}
        {formType === 'dreamer' && (
          <form onSubmit={handleSubmit} className="mt-8 space-y-8">
            {/* ... (Input Name, Email) ... */}
            <FormInput 
              label="Name"
              id="dreamer_name"
              isRequired={true}
            />
            <FormInput 
              label="Email"
              id="dreamer_email"
              type="email"
              isRequired={true}
            />
            <FormSelect
              label="Company Target Scale"
              id="dreamer_company_size"
              options={companySizeOptions}
              isRequired={true}
            />
            {/* 4. Dropdown Lokasi */}
            <FormSelect
              label="Location"
              id="dreamer_location" // ID unik
              options={locationOptions}
              value={selectedLocation} // Kaitkan dengan state
              onChange={handleLocationChange} // Panggil handler
              isRequired={true}
            />
            {/* 5. Dropdown Omzet dengan Opsi Dinamis */}
            <FormSelect
              label="Target Annual Turnover"
              id="dreamer_omzet_scale"
              options={getOmzetOptions()} // Gunakan fungsi untuk mendapatkan opsi
              isRequired={true}
            />
             {/* ... (Tombol Submit) ... */}
             <FormInput 
              label="What do you want to build? or What prospect do u hoping for?"
              id="dreamer_prospect"
              type="textarea"
            />
            <div>
              <button 
                type="submit"
                className="bg-gray-900 text-white font-semibold py-2 px-6 rounded-md hover:bg-gray-700 transition-colors"
              >
                Submit
              </button>
            </div>
          </form>
        )}

      </div>
    </main>
  );
}

export default LearnMore;