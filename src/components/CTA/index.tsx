"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { BuildingDialog } from "../Dialog";

export const CTA = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="download" className="py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Streamline Your Development?
        </h2>
        <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
          Download now and experience the perfect combination of power and
          simplicity in your development workflow.
        </p>
        <Button
          onClick={() => setIsOpen(true)}
          className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6 h-auto"
        >
          Download for macOS
        </Button>
      </div>
      <BuildingDialog isOpen={isOpen} handleOpenChange={setIsOpen} />
    </section>
  );
};
