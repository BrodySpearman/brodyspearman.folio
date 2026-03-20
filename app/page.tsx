'use client';
import Image from "next/image";
import styles from "./initLoad.module.css";
import { useState, useEffect } from "react";
import Terminal from "./components/terminal/terminal";
import Logo from "./components/logo/logo";




export default function Home() {
  const [pageState, setPageState] = useState('landing');

  useEffect(() => {
    const keyListener = (e: KeyboardEvent) => {
      if (e.code === 'Space') { setPageState('info-page'); }
    };

    window.addEventListener('keydown', keyListener);
    return () => {
      window.removeEventListener('keydown', keyListener);
    }
  }, []);


  return pageState === 'info-page' ? (
    <div className="flex flex-col max-h-screen min-h-screen bg-zinc-50 dark:bg-black">
      <main className="mt-auto">
        <div className="fixed top-0 right-0 mr-5">
          <Logo />
        </div>
        <div>Hello!</div>
      </main>
    </div>
  ) : (
    <div className="flex flex-col max-h-screen min-h-screen bg-zinc-50 dark:bg-black">
      <main className="mt-auto">
        <div className="fixed top-0 right-0 mr-5">
          <Logo />
        </div>
        <Terminal />
      </main>
    </div>
  )
}

