'use client';
import Navigation from '@/components/navigation';


const About = () => {
  return (
    <main className="w-full flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <Navigation />

      <div className="flex gap-4 items-center flex-col sm:flex-row">
        <a
          className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
          href="#"
          rel="noopener noreferrer"
          onClick={() => { alert('Hello world!'); }}
          >
          Hello About
        </a>
      </div>
    </main>
  );
}

export default About;