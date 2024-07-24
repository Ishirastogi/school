// src/pages/About.js
import React from 'react';
import Navbar from '../components/Navbar';

function About() {
  return (
    <div className="about">
      <Navbar />
      <header className="bg-blue-500 text-white text-center py-20">
        <h1 className="text-5xl font-bold">About Us</h1>
      </header>
      <section className="container mx-auto py-10">
        <h2 className="text-3xl font-bold">Our History</h2>
        <p className="mt-4">Founded in 1985, Springdale Public School has been dedicated to providing quality education and holistic development to students.</p>
        <h2 className="text-3xl font-bold mt-8">Our Vision</h2>
        <p className="mt-4">To create a learning environment that fosters academic excellence, critical thinking, and ethical values.</p>
        <h2 className="text-3xl font-bold mt-8">Our Mission</h2>
        <p className="mt-4">To empower students with the knowledge, skills, and values needed to thrive in a dynamic world.</p>
        <h2 className="text-3xl font-bold mt-8">Message from the Principal</h2>
        <p className="mt-4">At Springdale, we believe in nurturing the potential of every student and guiding them towards a successful future.</p>
      </section>
      <section className="container mx-auto py-10">
        <h2 className="text-3xl font-bold">Infrastructure and Facilities</h2>
        <ul className="list-disc ml-8 mt-4 space-y-2">
          <li>State-of-the-art science and computer labs</li>
          <li>Spacious and well-equipped classrooms</li>
          <li>Library with a vast collection of books and digital resources</li>
          <li>Sports facilities including a playground, gymnasium, and swimming pool</li>
        </ul>
      </section>
    </div>
  );
}

export default About;
