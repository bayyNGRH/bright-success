import { ArrowRight, Globe } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations";

export function Hero() {
    const { t } = useLanguage();

    return (
        <div className="relative pt-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center py-20 lg:py-32">
                    <div className="space-y-8 animate-fade-in">
                        <div className="space-y-4">
                            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gray-800 rounded-full border border-gray-700">
                                <Globe className="w-4 h-4 text-blue-400" />
                                <span className="text-sm text-gray-300">Bright Success Supply Chain</span>
                            </div>
                            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                                {t(translations.hero.title)}
                            </h1>
                        </div>
                        <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
                            {t(translations.hero.subtitle)}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <a
                                href="#contact"
                                className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all hover:scale-105 hover:shadow-xl group font-medium"
                            >
                                <span>{t(translations.hero.getStarted)}</span>
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a
                                href="#services"
                                className="inline-flex items-center justify-center px-8 py-4 bg-gray-800 text-white rounded-full border-2 border-gray-700 hover:bg-gray-700 transition-all hover:scale-105 hover:shadow-xl font-medium"
                            >
                                {t(translations.hero.learnMore)}
                            </a>
                        </div>

                        <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-700">
                            <div>
                                <div className="text-3xl font-bold text-blue-400">150+</div>
                                <p className="text-sm text-gray-400">Countries Served</p>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-blue-400">10K+</div>
                                <p className="text-sm text-gray-400">Happy Clients</p>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-blue-400">24/7</div>
                                <p className="text-sm text-gray-400">Support</p>
                            </div>
                        </div>
                    </div>

                    <div className="relative lg:h-[500px] h-[350px] hidden lg:block">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-3xl"></div>
                        <img
                            src="https://images.pexels.com/photos/4481467/pexels-photo-4481467.jpeg"
                            alt="Logistics"
                            className="w-full h-full object-cover rounded-3xl"
                        />
                    </div>
                </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
        </div>
    );
}
