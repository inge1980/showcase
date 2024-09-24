'use client';
import Navigation from '@/components/navigation';
import React, { useState } from 'react';
import Card from '@/components/card';
import { useTheme } from "@/context/themecontext";

const Hooks = () => {
  const { theme, toggleTheme } = useTheme();
  const [backgroundColor, setBackgroundColor] = useState('cyan');
  return (
    <div className="block align-top items-baseline justify-items-center min-h-screen pb-20 font-[family-name:var(--font-geist-sans)]">
      <main className={"w-full flex flex-col row-start-2 bg-" + backgroundColor + "-800 items-center sm:items-start"}>
        <Navigation />

        <div className="grid grid-cols-4 gap-4 flex items-start mx-3 py-3">
          <Card title="Alert" desc="Click to se an alert" button="Alert click" clickHandler={() => alert('Click alert')} />
          <Card title="Console.log" desc="Seemingly no action, but it is hidden" button="Nothing..?" clickHandler={() => console.log('Hidden from plain view, but developers know..')} />
          <Card title="useState" desc={`Toggle page color only.. (${backgroundColor})`} button="Toggle!" clickHandler={() => { setBackgroundColor(backgroundColor === 'cyan' ? 'amber' : 'cyan'); }} />
          <Card title="useContext" desc={`and useLayoutEffect Toggle theme color: ${theme === "light" ? "light" : "dark"}`} button="Toggle!" clickHandler={() => { toggleTheme(); }} />
        </div>
      </main>
    </div>
  );
}

export default Hooks;