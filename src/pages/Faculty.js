// src/pages/Faculty.js
import React from 'react';
import Navbar from '../components/Navbar';

function Faculty() {
  return (
    <div className="faculty">
      <Navbar />
      <header className="bg-blue-500 text-white text-center py-20">
        <h1 className="text-5xl font-bold">Our Faculty</h1>
      </header>
      <section className="container mx-auto py-10">
        <h2 className="text-3xl font-bold">Faculty Profiles</h2>
        <ul className="list-disc ml-8 mt-4 space-y-4">
          <li>John Doe: Principal, M.Ed, 20 years of experience in educational administration.</li>
          <li>Jane Smith: Vice Principal, M.Sc. in Physics, 15 years of teaching experience.</li>
          <li>Emily Johnson: English Teacher, M.A. in English, 10 years of teaching experience.</li>
          <li>Michael Brown: Mathematics Teacher, M.Sc. in Mathematics, 8 years of teaching experience.</li>
          <li>Sophia Davis: Science Teacher, M.Sc. in Chemistry, 12 years of teaching experience.</li>
          <li>David Wilson: Computer Science Teacher, B.Tech in Computer Science, 5 years of teaching experience.</li>
        </ul>
      </section>
    </div>
  );
}

export default Faculty;
