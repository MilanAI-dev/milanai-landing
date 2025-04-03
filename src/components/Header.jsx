"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/Button";
import { cn } from "../lib/utils";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    // Close menu when pressing Escape
    const handleEscKey = (event) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEscKey);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscKey);
    };
  }, [isMenuOpen]);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="lg:mx-auto lg:container mx-5 flex h-16 items-center justify-between">
        <div className="flex items-center gap-2 font-bold text-2xl">
          <img src="/logo.png" className="rounded-full h-12 w-12" alt="Logo" />
        </div>

        <nav className="hidden md:flex gap-6">
          <a
            href="#features"
            className="text-sm font-medium hover:text-primary"
          >
            Features
          </a>
          <a href="#problem" className="text-sm font-medium hover:text-primary">
            Problem
          </a>
          <a
            href="#solution"
            className="text-sm font-medium hover:text-primary"
          >
            Solution
          </a>
          <a href="#team" className="text-sm font-medium hover:text-primary">
            Team
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <Button asChild variant="outline" className="hidden md:flex">
            <a href="#waitlist">Join Waitlist</a>
          </Button>
          <Button className="hidden md:flex">Learn More</Button>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className={cn(
          "fixed inset-0 top-16 z-50 bg-white md:hidden",
          "transform transition-transform duration-300 ease-in-out",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col p-6 space-y-6 bg-white">
          <nav className="flex flex-col space-y-6">
            <a
              href="#features"
              className="text-lg font-medium hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a
              href="#problem"
              className="text-lg font-medium hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Problem
            </a>
            <a
              href="#solution"
              className="text-lg font-medium hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Solution
            </a>
            <a
              href="#team"
              className="text-lg font-medium hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Team
            </a>
          </nav>
          <div className="flex flex-col space-y-4 pt-6 border-t">
            <Button asChild variant="outline" className="w-full">
              <a href="#waitlist" onClick={() => setIsMenuOpen(false)}>
                Join Waitlist
              </a>
            </Button>
            <Button className="w-full" onClick={() => setIsMenuOpen(false)}>
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
