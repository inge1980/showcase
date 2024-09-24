'use client';
import Navigation from '@/components/navigation';


const About = () => {
  return (
    <main className="w-full flex flex-col gap-8 row-start-2 items-center sm:items-start h-screen">
      <Navigation />

      <div className="flex gap-4 items-center flex-col sm:flex-row">
        <p className="px-6">
          Small project in its infancy, experimenting with hooks and stuff..
        </p>
      </div>
    </main>
  );
}

export default About;