import React from 'react';
import travelVideo from '../assets/videos/travel-animation.mp4';

function TravelCard() {
  return (
    // 2. Container ini akan mengambil 100% lebar dan tinggi dari kolom induknya
    <div className="w-full h-full">
      <video
        src={travelVideo}
        autoPlay
        loop
        muted
        playsInline
        // 3. Kelas ini memastikan video mengisi div container tanpa merusak rasio aspek
        className="w-full h-full object-cover"
      />
    </div>
  );
}

export default TravelCard;