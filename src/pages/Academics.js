// src/pages/Academics.js
import React from 'react';
import Navbar from '../components/Navbar';

function Academics() {
  return (
    <div className="academics">
      <Navbar />
      <header className="bg-blue-500 text-white text-center py-20">
        <h1 className="text-5xl font-bold">Academics</h1>
      </header>
      <section className="container mx-auto py-10">
        <h2 className="text-3xl font-bold">Curriculum</h2>
        <p className="mt-4">Primary (Grades 1-5): English, Mathematics, Science, Social Studies, Art, Physical Education</p>
        <p className="mt-4">Secondary (Grades 6-10): English, Mathematics, Science (Physics, Chemistry, Biology), Social Studies, Computer Science, Physical Education, Art</p>
        <p className="mt-4">Senior Secondary (Grades 11-12):</p>
        <ul className="list-disc ml-8 mt-4">
          <li>Science Stream: Physics, Chemistry, Biology, Mathematics, Computer Science, English</li>
          <li>Commerce Stream: Accountancy, Business Studies, Economics, Mathematics, English</li>
        </ul>
        <h2 className="text-3xl font-bold mt-8">Teaching Methodologies</h2>
        <p className="mt-4">We use a blend of traditional and modern teaching techniques to cater to different learning styles.</p>
        <h2 className="text-3xl font-bold mt-8">Educational Resources</h2>
        <p className="mt-4">Digital classrooms, interactive learning modules, and access to online educational platforms.</p>
      </section>
    </div>
  );
}

export default Academics;
