"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { BuildingDialog } from "../Dialog";

export const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="pt-32 pb-16 animate-fade-up">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-gray-200 text-5xl font-bold mb-6">
            Professional Developer Tools for macOS
          </h1>
          <p className="text-xl text-text-secondary mb-8">
            Beautiful JSON formatting, cURL conversion, and more essential tools
            in one native macOS app.
          </p>
          <Button
            onClick={() => setIsOpen(true)}
            className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6 h-auto"
          >
            Download for macOS
          </Button>
        </div>
        <div className="mt-16 max-w-5xl mx-auto">
          <img
            src="https://images.unsplash.com/photo-1531297484001-80022131f5a1"
            alt="DevTools App Screenshot"
            className="w-full rounded-lg shadow-2xl"
          />
        </div>
      </div>
      <BuildingDialog isOpen={isOpen} handleOpenChange={setIsOpen} />
    </section>
  );
};
