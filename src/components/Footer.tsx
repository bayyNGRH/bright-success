import { Facebook, Instagram, Twitter, Mail } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations";

export function Footer() {
    const { t } = useLanguage();

    return (
        <footer className="bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold">Bright Success Supply Chain Company</h3>
                        <p className="text-gray-400 leading-relaxed">{t(translations.footer.tagline)}</p>
                        <div className="flex space-x-4 pt-4">
                            <a
                                href="#"
                                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
                            >
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
                            >
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
                            >
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
                            >
                                <Mail className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4 text-lg">{t(translations.footer.quickLinks)}</h4>
                        <ul className="space-y-3">
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                    {t(translations.nav.home)}
                                </a>
                            </li>
                            <li>
                                <a href="#services" className="text-gray-400 hover:text-white transition-colors">
                                    {t(translations.nav.services)}
                                </a>
                            </li>
                            <li>
                                <a href="#about" className="text-gray-400 hover:text-white transition-colors">
                                    {t(translations.nav.about)}
                                </a>
                            </li>
                            <li>
                                <a href="#cases" className="text-gray-400 hover:text-white transition-colors">
                                    {t(translations.nav.cases)}
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4 text-lg">{t(translations.footer.support)}</h4>
                        <ul className="space-y-3">
                            <li>
                                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                                    {t(translations.nav.contact)}
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                    {t(translations.footer.privacy)}
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                    {t(translations.footer.terms)}
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4 text-lg">Newsletter</h4>
                        <p className="text-gray-400 mb-4">Subscribe to get special offers and updates.</p>
                        <div className="flex">
                            <input
                                type="email"
                                placeholder="Email"
                                className="flex-1 px-4 py-2 bg-gray-800 text-white rounded-l-full focus:outline-none focus:ring-2 focus:ring-gray-600"
                            />
                            <button className="px-6 py-2 bg-white text-gray-900 rounded-r-full hover:bg-gray-100 transition-colors font-medium">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8">
                    <p className="text-center text-gray-400">
                        © {new Date().getFullYear()} Bright Success Supply Chain Company.{" "}
                        {t(translations.footer.rights)}.
                    </p>
                </div>
            </div>
        </footer>
    );
}
