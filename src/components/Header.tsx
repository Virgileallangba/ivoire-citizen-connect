
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X } from "lucide-react";
import LanguageSwitcher from './LanguageSwitcher';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 bg-ivoire-orange rounded-md flex items-center justify-center">
            <span className="font-bold text-white">IC</span>
          </div>
          <span className="font-montserrat font-bold text-xl hidden sm:block">
            Ivoire<span className="text-ivoire-orange">Census</span>
          </span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="#fonctionnalites" className="text-sm font-medium hover:text-ivoire-orange transition-colors">
            Fonctionnalités
          </a>
          <a href="#demo" className="text-sm font-medium hover:text-ivoire-orange transition-colors">
            Démo
          </a>
          <a href="#avantages" className="text-sm font-medium hover:text-ivoire-orange transition-colors">
            Avantages
          </a>
          <a href="#roadmap" className="text-sm font-medium hover:text-ivoire-orange transition-colors">
            Roadmap
          </a>
          <div className="ml-4">
            <LanguageSwitcher />
          </div>
          <Button className="btn-primary">Connexion</Button>
        </nav>

        {/* Mobile menu button */}
        <div className="flex items-center gap-4 md:hidden">
          <LanguageSwitcher />
          <button
            onClick={toggleMenu}
            className="inline-flex items-center justify-center rounded-md p-1"
          >
            <span className="sr-only">Open main menu</span>
            {isMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute w-full bg-background border-b border-border z-50">
          <div className="px-6 py-4 space-y-3">
            <a
              href="#fonctionnalites"
              className="block text-base font-medium hover:text-ivoire-orange transition-colors"
              onClick={toggleMenu}
            >
              Fonctionnalités
            </a>
            <a
              href="#demo"
              className="block text-base font-medium hover:text-ivoire-orange transition-colors"
              onClick={toggleMenu}
            >
              Démo
            </a>
            <a
              href="#avantages"
              className="block text-base font-medium hover:text-ivoire-orange transition-colors"
              onClick={toggleMenu}
            >
              Avantages
            </a>
            <a
              href="#roadmap"
              className="block text-base font-medium hover:text-ivoire-orange transition-colors"
              onClick={toggleMenu}
            >
              Roadmap
            </a>
            <div className="pt-2">
              <Button className="btn-primary w-full">Connexion</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
