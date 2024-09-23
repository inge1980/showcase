'use client';
import Navbar from '@/components/navbar';
import React, { useState } from 'react';
import Card from '@/components/card';
import { useTheme } from "@/context/themecontext";

const Hooks = () => {
  const { theme, toggleTheme } = useTheme();
  const [backgroundColor, setBackgroundColor] = useState('cyan');
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-baseline justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className={"w-full flex flex-col row-start-2 bg-" + backgroundColor + "-800 items-center sm:items-start"}>
        <Navbar />

        <div className="grid grid-cols-4 gap-4 flex items-start mx-3 py-3">
          <Card title="Alert" desc="Click, and see what happens.." button="Alert click" clickHandler={() => alert('testing click')} />
          <Card title="Not a thing" desc="Just an empty button" button="Nothing.."/>
          <Card title="useState" desc={`Toggle page color only.. (${backgroundColor})`} button="Toggle!" clickHandler={() => { setBackgroundColor(backgroundColor === 'cyan' ? 'amber' : 'cyan'); }} />
          <Card title="useContext" desc={`Toggle theme color.. (${theme === "light" ? "light" : "dark"})`} button="Toggle!" clickHandler={() => { toggleTheme(); }} />
        </div>
      </main>
    </div>
  );
}

export default Hooks;