import { useEffect, useState } from "react";
import { supabase, Service } from "../lib/supabase";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations";
import * as Icons from "lucide-react";

type IconName = keyof typeof Icons;

export function Services() {
    const [services, setServices] = useState<Service[]>([]);
    const [loading, setLoading] = useState(true);
    const { language, t } = useLanguage();

    useEffect(() => {
        async function fetchServices() {
            if (!supabase) {
                console.warn("Supabase not configured. Services will not be loaded.");
                setLoading(false);
                return;
            }

            try {
                const { data, error } = await supabase.from("services").select("*").order("order");

                if (error) {
                    console.error("Error fetching services:", error);
                } else {
                    setServices(data || []);
                }
            } catch (err) {
                console.error("Error fetching services:", err);
            } finally {
                setLoading(false);
            }
        }

        fetchServices();
    }, []);

    const getIcon = (iconName: string) => {
        const Icon = Icons[iconName as IconName] as any;
        return Icon ? <Icon className="w-8 h-8" /> : null;
    };

    if (loading) {
        return (
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[...Array(6)].map((_, i) => (
                        <div key={i} className="animate-pulse bg-gray-100 h-72 rounded-2xl"></div>
                    ))}
                </div>
            </div>
        );
    }

    return (
        <section id="services" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">{t(translations.services.title)}</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">{t(translations.services.subtitle)}</p>
                    <div className="w-20 h-1 bg-blue-600 mx-auto mt-6"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.length === 0 ? (
                        <div className="col-span-full text-center py-12">
                            <p className="text-gray-500 text-lg">Services will be displayed here once configured.</p>
                        </div>
                    ) : (
                        services.map((service) => {
                            const name = service[`name_${language}` as keyof Service] as string;
                            const description = service[`description_${language}` as keyof Service] as string;
                            const features = service[`features_${language}` as keyof Service] as string[];

                            return (
                                <div
                                    key={service.id}
                                    className="group p-8 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-gray-200"
                                >
                                    <div className="mb-6 p-4 bg-blue-100 rounded-xl w-fit group-hover:bg-blue-600 group-hover:text-white transition-all">
                                        <div className="text-blue-600 group-hover:text-white">
                                            {getIcon(service.icon)}
                                        </div>
                                    </div>

                                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                                        {name}
                                    </h3>

                                    <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>

                                    <ul className="space-y-3">
                                        {features.map((feature, idx) => (
                                            <li key={idx} className="flex items-start space-x-3">
                                                <div className="mt-1 p-1 bg-blue-600 rounded-full">
                                                    <svg
                                                        className="w-3 h-3 text-white"
                                                        fill="currentColor"
                                                        viewBox="0 0 20 20"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                </div>
                                                <span className="text-gray-700">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            );
                        })
                    )}
                </div>
            </div>
        </section>
    );
}
