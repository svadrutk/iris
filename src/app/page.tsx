"use client"
import React, { useState, useEffect, useCallback } from 'react';
import Image from "next/image";
import Link from "next/link";

const MobileMenu = ({ isOpen, onClose }) => {
  return (
    <div 
      className={`fixed inset-0 bg-white z-50 transform ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      } transition-transform duration-300 ease-in-out flex flex-col`}
    >
      <div className="flex justify-between items-center p-4">
        <Link
          href="/"
          className="text-3xl font-bold tracking-[0.3em] flex items-center"
          style={{
            fontFamily: "var(--font-kumar-one)",
            lineHeight: "normal",
          }}
          onClick={onClose}
        >
          <span className="text-red-500">I</span>
          <span className="text-green-500">R</span>
          <span className="text-blue-500">I</span>
          <span className="text-pink-500">S</span>
        </Link>
        <button 
          onClick={onClose}
          className="text-2xl"
        >
          ✕
        </button>
      </div>
      <div className="flex-grow flex flex-col justify-center items-center">
        <div className="flex flex-col space-y-4 text-2xl items-center font-bold">
          <Link href="/education" className="hover:italic" onClick={onClose}>Education</Link>
          <Link href="/networking" className="hover:italic" onClick={onClose}>Networking</Link>
          <Link href="/enrichment" className="hover:italic" onClick={onClose}>Enrichment</Link>
          <Link href="/about" className="hover:italic" onClick={onClose}>About</Link>
          <Link href="/calendar" className="hover:italic" onClick={onClose}>Calendar</Link>
          <Link href="/contact" className="hover:italic" onClick={onClose}>Contact</Link>
        </div>
      </div>
    </div>
  );
};

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className="relative flex flex-col sm:flex-row justify-between items-center w-full py-2 sm:py-4 px-4 sm:px-8 sticky top-0 z-10">
        <div className="w-full sm:w-auto flex justify-between sm:justify-start items-center mb-2 sm:mb-0 align-middle">
          <Link
            href="/"
            className="text-3xl sm:text-4xl font-bold tracking-[0.3em] sm:tracking-[0.5em] flex items-center leading-none"
            style={{
              fontFamily: "var(--font-kumar-one)",
              lineHeight: "normal",
            }}
          >
            <span className="text-red-500">I</span>
            <span className="text-green-500">R</span>
            <span className="text-blue-500">I</span>
            <span className="text-pink-500">S</span>
          </Link>
          <button className="sm:hidden text-2xl" onClick={toggleMobileMenu}>
            ☰
          </button>
        </div>
        <div className="hidden sm:flex w-full sm:w-auto flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-10 text-lg sm:text-xl items-center font-bold">
          <Link href="/education" className="hover:italic">Education</Link>
          <Link href="/networking" className="hover:italic">Networking</Link>
          <Link href="/enrichment" className="hover:italic">Enrichment</Link>
          <Link href="/about" className="hover:italic">About</Link>
          <Link href="/calendar" className="hover:italic">Calendar</Link>
          <Link href="/contact" className="hover:italic">Contact</Link>
        </div>
      </nav>
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  );
};



const TypewriterText = ({ text, onComplete, className }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  const typeNextCharacter = useCallback(() => {
    if (currentIndex < text.length) {
      setDisplayText((prevText) => prevText + text[currentIndex]);
      setCurrentIndex((prevIndex) => prevIndex + 1);
    } else {
      onComplete();
    }
  }, [currentIndex, text, onComplete]);

  useEffect(() => {
    const typingInterval = setInterval(typeNextCharacter, 25); // Adjust typing speed here
    return () => clearInterval(typingInterval);
  }, [typeNextCharacter]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500); // Cursor blink speed
    return () => clearInterval(cursorInterval);
  }, []);
  const formatText = (text) => {
    const lgbtqiaIndex = text.indexOf('LGBTQIA+');
    if (lgbtqiaIndex === -1) return <span>{text}</span>;

    return (
      <>
        {text.slice(0, lgbtqiaIndex)}
        <span className="rainbow-text">LGBTQIA+</span>
        {text.slice(lgbtqiaIndex + 9)}
      </>
    );
  };

  return (
    <span className={className}>
      {formatText(displayText)}
      <span className={`text-black ${showCursor ? 'opacity-100' : 'opacity-0'}`}>_</span>
    </span>
  );
};



export default function Home() {
  const [firstTextComplete, setFirstTextComplete] = useState(false);
  const [secondTextComplete, setSecondTextComplete] = useState(false);
  const [showImage, setShowImage] = useState(false);

  const handleFirstTextComplete = () => {
    setFirstTextComplete(true);
    setTimeout(() => setShowImage(true), 500); // Delay image appearance
  };

  const handleSecondTextComplete = () => {
    setSecondTextComplete(true);
  };

  return (
    <div
      className="flex flex-col min-h-screen overflow-hidden"
      style={{ fontFamily: "var(--font-space-mono)" }}
    >
      <Navbar />
      <div className="flex flex-col lg:flex-row flex-grow p-4 sm:p-8" style={{ fontFamily: "var(--font-space-mono)" }}>
        <div className="flex-1 flex items-center justify-center mb-8 lg:mb-0">
          <div className="text-left max-w-2xl">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-left min-h-[12rem] sm:min-h-[16rem] md:min-h-[20rem] lg:min-h-[24rem]">
              <TypewriterText
                text="Welcome to the website of the LGBTQIA+  student syndicate for the School of Computer, Data, and Information Sciences at UW-Madison."
                onComplete={handleFirstTextComplete}
                className="inline-block"
              />
            </h1>
            <h2 className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-4 transition-opacity duration-500 ${firstTextComplete ? 'opacity-100' : 'opacity-0'}`} style={{ fontFamily: "var(--font-space-mono-italic)"}}>
              {firstTextComplete && (
                <TypewriterText 
                  text="Have a cool idea for this club? Fill out the form here."
                  onComplete={handleSecondTextComplete}
                  className="inline-block"
                />
              )}
            </h2>
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <div className={`transition-opacity duration-500 ${showImage ? 'opacity-100' : 'opacity-0'}`}>
            <Image
              src="/iris.png"
              alt="Description"
              width={500}
              height={800}
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}