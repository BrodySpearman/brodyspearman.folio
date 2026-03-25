'use client';
import Image from "next/image";
import styles from "./initLoad.module.css";
import { useState, useEffect } from "react";
import Terminal from "./components/terminal/terminal";
import Logo from "./components/logo/logo";
import InfoPage from "./components/info-page/info-page";

export default function Home() {
  const [pageState, setPageState] = useState('landing');

  useEffect(() => {
    if (pageState !== 'landing') return;

    const keyListener = (e: KeyboardEvent) => {
      if (e.code === 'Space') {
        e.preventDefault();
        setPageState('info-page');
      };
    };

    window.addEventListener('keydown', keyListener);
    return () => {
      window.removeEventListener('keydown', keyListener);
    }
  }, [pageState]);


  return pageState === 'info-page' ? (
    <div className="flex flex-col max-h-screen min-h-screen bg-zinc-50 dark:bg-black">
      <main>
        <InfoPage pageState={pageState} />
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

