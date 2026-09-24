import React from 'react';
import Navbar from '@/components/Navbar';
import WaitlistHero from '@/components/WaitlistHero';
import CourseProblems from '@/components/CourseProblems';
import CourseSolution from '@/components/CourseSolution';
import AboutAgata from '@/components/AboutAgata';
import Testimonials from '@/components/Testimonials';
import WaitlistCTA from '@/components/WaitlistCTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <WaitlistHero />
      <CourseProblems />
      <CourseSolution />
      <AboutAgata />
      <Testimonials />
      <WaitlistCTA />
      <Footer />
    </main>
  );
}
