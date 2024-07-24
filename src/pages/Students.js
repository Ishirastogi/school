// src/pages/Students.js
import React from 'react';
import Navbar from '../components/Navbar';

function Students() {
  return (
    <div className="students">
      <Navbar />
      <header className="bg-blue-500 text-white text-center py-20">
        <h1 className="text-5xl font-bold">Student Life</h1>
      </header>
      <section className="container mx-auto py-10">
        <h2 className="text-3xl font-bold">Extracurricular Activities</h2>
        <p className="mt-4">Music, Dance, Drama, Art, Sports, Robotics, Debate Club, Science Club</p>
        <h2 className="text-3xl font-bold mt-8">Clubs and Societies</h2>
        <p className="mt-4">Literary Society, Environmental Club, Astronomy Club, Coding Club</p>
        <h2 className="text-3xl font-bold mt-8">Achievements</h2>
        <ul className="list-disc ml-8 mt-4">
          <li>John Smith - National Level Math Olympiad Winner</li>
          <li>Sarah Lee - Gold Medalist in State Swimming Championship</li>
          <li>Tech Innovators Club - Winners of Inter-School Robotics Competition</li>
        </ul>
        <h2 className="text-3xl font-bold mt-8">Student Council</h2>
        <ul className="list-disc ml-8 mt-4">
          <li>President: Amy Parker, Grade 12</li>
          <li>Vice President: Rajiv Mehta, Grade 11</li>
          <li>Secretary: Lisa Wong, Grade 10</li>
        </ul>
      </section>
    </div>
  );
}

export default Students;
