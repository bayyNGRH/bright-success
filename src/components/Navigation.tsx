import { Menu, X, Globe } from "lucide-react";
import { useState } from "react";
import { useLanguage, Language } from "../contexts/LanguageContext";
import { translations } from "../translations";

export function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLangOpen, setIsLangOpen] = useState(false);
    const { language, setLanguage, t } = useLanguage();

    const languages: { code: Language; name: string; flag: string }[] = [
        { code: "en", name: "English", flag: "🇬🇧" },
        { code: "zh", name: "中文", flag: "🇨🇳" },
        { code: "id", name: "Indonesia", flag: "🇮🇩" },
    ];

    return (
        <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-md z-50 border-b border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center space-x-8">
                        <a href="/" className="text-2xl font-bold text-white tracking-tight">
                            Bright Success Supply Chain Company
                        </a>

                        <div className="hidden md:flex space-x-6">
                            <a href="#" className="text-gray-300 hover:text-white transition-colors">
                                {t(translations.nav.home)}
                            </a>
                            <a href="#services" className="text-gray-300 hover:text-white transition-colors">
                                {t(translations.nav.services)}
                            </a>
                            <a href="#about" className="text-gray-300 hover:text-white transition-colors">
                                {t(translations.nav.about)}
                            </a>
                            <a href="#cases" className="text-gray-300 hover:text-white transition-colors">
                                {t(translations.nav.cases)}
                            </a>
                            <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
                                {t(translations.nav.contact)}
                            </a>
                        </div>
                    </div>

                    <div className="flex items-center space-x-4">
                        <div className="relative">
                            <button
                                onClick={() => setIsLangOpen(!isLangOpen)}
                                className="p-2 hover:bg-gray-800 rounded-full transition-colors flex items-center space-x-1"
                            >
                                <Globe className="w-5 h-5 text-gray-300" />
                            </button>

                            {isLangOpen && (
                                <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-lg shadow-lg border border-gray-700 py-2">
                                    {languages.map((lang) => (
                                        <button
                                            key={lang.code}
                                            onClick={() => {
                                                setLanguage(lang.code);
                                                setIsLangOpen(false);
                                            }}
                                            className={`w-full px-4 py-2 text-left hover:bg-gray-700 transition-colors flex items-center space-x-2 ${
                                                language === lang.code ? "bg-gray-700 text-white" : "text-gray-300"
                                            }`}
                                        >
                                            <span className="text-xl">{lang.flag}</span>
                                            <span>{lang.name}</span>
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        <button
                            className="md:hidden p-2 hover:bg-gray-800 rounded-full transition-colors"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? (
                                <X className="w-5 h-5 text-gray-300" />
                            ) : (
                                <Menu className="w-5 h-5 text-gray-300" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {isMenuOpen && (
                <div className="md:hidden bg-gray-800 border-t border-gray-700">
                    <div className="px-4 py-4 space-y-3">
                        <a href="#" className="block py-2 text-gray-300 hover:text-white">
                            {t(translations.nav.home)}
                        </a>
                        <a href="#services" className="block py-2 text-gray-300 hover:text-white">
                            {t(translations.nav.services)}
                        </a>
                        <a href="#about" className="block py-2 text-gray-300 hover:text-white">
                            {t(translations.nav.about)}
                        </a>
                        <a href="#cases" className="block py-2 text-gray-300 hover:text-white">
                            {t(translations.nav.cases)}
                        </a>
                        <a href="#contact" className="block py-2 text-gray-300 hover:text-white">
                            {t(translations.nav.contact)}
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
}
