// src/pages/Home.js
import React from 'react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      <Navbar />
      <header className="bg-blue-500 text-white text-center py-20">
        <h1 className="text-5xl font-bold">Welcome to Springdale Public School</h1>
        <p className="mt-4">Where we nurture young minds for a brighter future.</p>
      </header>
      <section className="container mx-auto py-10">
        <h2 className="text-3xl font-bold">Key Highlights</h2>
        <div className="mt-4 space-y-4">
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            Annual Sports Day - Celebrating Excellence in Sports
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            Science Exhibition - Showcasing Student Innovations
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            Cultural Fest - Embracing Diversity and Creativity
          </div>
        </div>
      </section>
      <section className="container mx-auto py-10">
        <h2 className="text-3xl font-bold">Quick Links</h2>
        <div className="mt-4 space-y-2">
          <Link to="/about" className="block text-blue-600">About Us</Link>
          <Link to="/academics" className="block text-blue-600">Academics</Link>
          <Link to="/admissions" className="block text-blue-600">Admissions</Link>
          <Link to="/faculty" className="block text-blue-600">Faculty</Link>
          <Link to="/students" className="block text-blue-600">Students</Link>
          <Link to="/gallery" className="block text-blue-600">Gallery</Link>
          <Link to="/contact" className="block text-blue-600">Contact Us</Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
