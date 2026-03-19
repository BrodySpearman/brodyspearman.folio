'use client';
import Image from "next/image";
import styles from "./initLoad.module.css";
import { useState, useEffect } from "react";
import Terminal from "./components/terminal/terminal";



export default function Home() {

  return (
    <div className="flex flex-col max-h-screen min-h-screen bg-zinc-50 dark:bg-black">
      <main className="mt-auto">
        <Terminal />
      </main>
    </div>
  );
}
