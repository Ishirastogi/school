// src/pages/Gallery.js
import React from "react";
import Navbar from "../components/Navbar";

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
          <img
            src="https://www.pmspublicschool.org/images/cultural%20event/gallery2.jpg"
            alt="Sports Day"
            width="360"
            height="215"
            className="rounded-lg shadow-md"
          />
          <img
            src="https://www.pmspublicschool.org/images/cultural%20event/gallery2.jpg"
            alt="Science Exhibition"
            width="360"
            height="215"
            className="rounded-lg shadow-md"
          />
          <img
            src="https://www.pmspublicschool.org/images/cultural%20event/gallery2.jpg"
            alt="Cultural Fest"
            width="360"
            height="215"
            className="rounded-lg shadow-md"
          />
          <img
            src="https://www.pmspublicschool.org/images/cultural%20event/gallery2.jpg"
            alt="Classroom"
            width="360"
            height="215"
            className="rounded-lg shadow-md"
          />
          <img
            src="https://www.pmspublicschool.org/images/cultural%20event/gallery2.jpg"
            alt="Library"
            width="360"
            height="215"
            className="rounded-lg shadow-md"
          />
        </div>
        <h2 className="text-3xl font-bold mt-8">Videos</h2>
        <div className="mt-4 space-y-4">
          <iframe
            title="Video1"
            width="360"
            height="215"
            src="https://www.youtube.com/embed/95Ite9fsrJk"
            className="rounded-lg shadow-md"
            allow="autoplay; encrypted-media"
            allowFullScreen=""
          ></iframe>
          <iframe
            title="Video2"
            width="360"
            height="215"
            className="rounded-lg shadow-md"
            src="https://www.youtube.com/embed/95Ite9fsrJk"
            allow="autoplay; encrypted-media"
            allowFullScreen=""
          ></iframe>
        </div>
      </section>
    </div>
  );
}

export default Gallery;
