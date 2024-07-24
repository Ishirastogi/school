// src/pages/Gallery.js
import React from 'react';
import Navbar from '../components/Navbar';

function Gallery() {
  return (
    <div className="gallery">
      <Navbar />
      <header className="bg-blue-500 text-white text-center py-20">
        <h1 className="text-5xl font-bold">Gallery</h1>
      </header>
      <section className="container mx-auto py-10">
        <h2 className="text-3xl font-bold">Photos</h2>
        <div className="mt-4 space-y-4">
          <img src="/path/to/sports_day.jpg" alt="Sports Day" className="w-full h-auto rounded-lg shadow-md" />
          <img src="/path/to/science_exhibition.jpg" alt="Science Exhibition" className="w-full h-auto rounded-lg shadow-md" />
          <img src="/path/to/cultural_fest.jpg" alt="Cultural Fest" className="w-full h-auto rounded-lg shadow-md" />
          <img src="/path/to/classroom.jpg" alt="Classroom" className="w-full h-auto rounded-lg shadow-md" />
          <img src="/path/to/library.jpg" alt="Library" className="w-full h-auto rounded-lg shadow-md" />
        </div>
        <h2 className="text-3xl font-bold mt-8">Videos</h2>
        <div className="mt-4 space-y-4">
          <video src="/path/to/school_tour.mp4" controls className="w-full h-auto rounded-lg shadow-md"></video>
          <video src="/path/to/annual_function.mp4" controls className="w-full h-auto rounded-lg shadow-md"></video>
        </div>
      </section>
    </div>
  );
}

export default Gallery;
