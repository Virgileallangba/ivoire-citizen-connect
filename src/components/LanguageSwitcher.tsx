
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Globe } from "lucide-react";
import { Language } from "@/types";

const LanguageSwitcher = () => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>("fr");

  const languages: { key: Language; label: string }[] = [
    { key: "fr", label: "Français" },
    { key: "dioula", label: "Dioula" },
    { key: "baoule", label: "Baoulé" },
  ];

  const handleLanguageChange = (lang: Language) => {
    setCurrentLanguage(lang);
    // In a real app, this would update the app's language context
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="flex items-center gap-1">
          <Globe className="h-4 w-4" />
          <span className="text-sm hidden sm:inline-block">
            {languages.find((l) => l.key === currentLanguage)?.label}
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.key}
            onClick={() => handleLanguageChange(lang.key)}
            className={currentLanguage === lang.key ? "bg-muted" : ""}
          >
            {lang.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;
