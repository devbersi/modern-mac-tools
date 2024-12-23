"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { BuildingDialog } from "../Dialog";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToTop = (): void => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-gray-800">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <h1 className="text-xl font-semibold">
            <a onClick={scrollToTop}>DevTools</a>
          </h1>
          <div className="hidden md:flex space-x-6">
            <a
              href="#features"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Features
            </a>
            <a
              href="#download"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Download
            </a>
          </div>
        </div>
        <Button
          onClick={() => setIsOpen(true)}
          className="bg-primary hover:bg-primary/90 text-white"
        >
          Download for macOS
        </Button>
      </div>
      <BuildingDialog isOpen={isOpen} handleOpenChange={setIsOpen} />
    </nav>
  );
};
