// src/pages/Admissions.js
import React from 'react';
import Navbar from '../components/Navbar';

function Admissions() {
  return (
    <div className="admissions">
      <Navbar />
      <header className="bg-blue-500 text-white text-center py-20">
        <h1 className="text-5xl font-bold">Admissions</h1>
      </header>
      <section className="container mx-auto py-10">
        <h2 className="text-3xl font-bold">Admission Process</h2>
        <p className="mt-4">Admission forms are available for download. Submit the completed form along with required documents at the school office.</p>
        <h2 className="text-3xl font-bold mt-8">Criteria</h2>
        <p className="mt-4">Admission is based on merit and availability of seats. Entrance tests may be conducted for certain grades.</p>
        <h2 className="text-3xl font-bold mt-8">Important Dates</h2>
        <ul className="list-disc ml-8 mt-4">
          <li>Admission Form Availability: March 1st</li>
          <li>Last Date for Submission: March 31st</li>
          <li>Entrance Test: April 15th</li>
          <li>Announcement of Results: April 30th</li>
        </ul>
      </section>
    </div>
  );
}

export default Admissions;
