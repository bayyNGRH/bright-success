import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations";
import { Package, Truck, Globe, Warehouse, Shield, Clock } from "lucide-react";

const services = [
    {
        icon: Package,
        name: {
            en: "Freight Forwarding",
            zh: "货运代理",
            id: "Forwarding Kargo",
        },
        description: {
            en: "Comprehensive freight solutions for air, sea, and land transportation",
            zh: "全面的空运、海运和陆运货运解决方案",
            id: "Solusi kargo komprehensif untuk transportasi udara, laut, dan darat",
        },
        features: {
            en: ["Global network", "Real-time tracking", "Customs clearance", "Insurance options"],
            zh: ["全球网络", "实时跟踪", "清关服务", "保险选项"],
            id: ["Jaringan global", "Pelacakan real-time", "Bea cukai", "Opsi asuransi"],
        },
    },
    {
        icon: Warehouse,
        name: {
            en: "Warehouse Management",
            zh: "仓储管理",
            id: "Manajemen Gudang",
        },
        description: {
            en: "State-of-the-art warehousing with inventory management and distribution",
            zh: "最先进的仓储设施，配备库存管理和配送服务",
            id: "Gudang canggih dengan manajemen inventaris dan distribusi",
        },
        features: {
            en: ["24/7 access", "Climate control", "Security systems", "Inventory tracking"],
            zh: ["24/7 访问", "气候控制", "安全系统", "库存跟踪"],
            id: ["Akses 24/7", "Kontrol iklim", "Sistem keamanan", "Pelacakan inventaris"],
        },
    },
    {
        icon: Truck,
        name: {
            en: "Last Mile Delivery",
            zh: "最后一公里配送",
            id: "Pengiriman Mil Terakhir",
        },
        description: {
            en: "Efficient last-mile delivery solutions for businesses and consumers",
            zh: "为企业和消费者提供高效的最后一公里配送解决方案",
            id: "Solusi pengiriman mil terakhir yang efisien untuk bisnis dan konsumen",
        },
        features: {
            en: ["Fast delivery", "Route optimization", "Delivery tracking", "Flexible scheduling"],
            zh: ["快速配送", "路线优化", "配送跟踪", "灵活调度"],
            id: ["Pengiriman cepat", "Optimasi rute", "Pelacakan pengiriman", "Penjadwalan fleksibel"],
        },
    },
    {
        icon: Globe,
        name: {
            en: "International Shipping",
            zh: "国际运输",
            id: "Pengiriman Internasional",
        },
        description: {
            en: "Seamless international shipping with customs and compliance support",
            zh: "无缝国际运输，提供海关和合规支持",
            id: "Pengiriman internasional tanpa hambatan dengan dukungan bea cukai dan kepatuhan",
        },
        features: {
            en: ["Multi-country routes", "Documentation support", "Compliance assistance", "Fast transit"],
            zh: ["多国路线", "文件支持", "合规协助", "快速中转"],
            id: ["Rute multi-negara", "Dukungan dokumentasi", "Bantuan kepatuhan", "Transit cepat"],
        },
    },
    {
        icon: Shield,
        name: {
            en: "Supply Chain Security",
            zh: "供应链安全",
            id: "Keamanan Rantai Pasokan",
        },
        description: {
            en: "Advanced security measures to protect your supply chain",
            zh: "先进的安保措施，保护您的供应链",
            id: "Langkah keamanan canggih untuk melindungi rantai pasokan Anda",
        },
        features: {
            en: ["Risk assessment", "Security protocols", "Monitoring systems", "Incident response"],
            zh: ["风险评估", "安全协议", "监控系统", "事件响应"],
            id: ["Penilaian risiko", "Protokol keamanan", "Sistem pemantauan", "Respons insiden"],
        },
    },
    {
        icon: Clock,
        name: {
            en: "Express Logistics",
            zh: "快速物流",
            id: "Logistik Ekspres",
        },
        description: {
            en: "Priority express shipping for time-sensitive deliveries",
            zh: "为时间敏感的货物提供优先快速运输服务",
            id: "Pengiriman ekspres prioritas untuk pengiriman yang sensitif waktu",
        },
        features: {
            en: ["Same-day delivery", "Priority handling", "Dedicated support", "Guaranteed delivery"],
            zh: ["当日送达", "优先处理", "专属支持", "保证送达"],
            id: ["Pengiriman hari yang sama", "Penanganan prioritas", "Dukungan khusus", "Pengiriman terjamin"],
        },
    },
];

export function Services() {
    const { language, t } = useLanguage();

    return (
        <section id="services" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">{t(translations.services.title)}</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">{t(translations.services.subtitle)}</p>
                    <div className="w-20 h-1 bg-blue-600 mx-auto mt-6"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, idx) => {
                        const Icon = service.icon;
                        const name = service.name[language];
                        const description = service.description[language];
                        const features = service.features[language];

                        return (
                            <div
                                key={idx}
                                className="group p-8 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-gray-200"
                            >
                                <div className="mb-6 p-4 bg-blue-100 rounded-xl w-fit group-hover:bg-blue-600 group-hover:text-white transition-all">
                                    <Icon className="w-8 h-8 text-blue-600 group-hover:text-white" />
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
                    })}
                </div>
            </div>
        </section>
    );
}
