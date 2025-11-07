import { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations";
import { ChevronDown } from "lucide-react";

const caseStudies = [
    {
        industry: "E-Commerce",
        title: {
            en: "Global E-Commerce Expansion",
            zh: "全球电商扩张",
            id: "Ekspansi E-Commerce Global",
        },
        description: {
            en: "Helped a major e-commerce platform expand to 15 new countries in 6 months",
            zh: "帮助一家大型电商平台在6个月内扩展到15个新国家",
            id: "Membantu platform e-commerce besar berekspansi ke 15 negara baru dalam 6 bulan",
        },
        challenge: {
            en: "The client needed to establish logistics infrastructure in multiple countries simultaneously while maintaining delivery speed and cost efficiency.",
            zh: "客户需要同时在多个国家建立物流基础设施，同时保持配送速度和成本效率。",
            id: "Klien perlu membangun infrastruktur logistik di beberapa negara secara bersamaan sambil mempertahankan kecepatan pengiriman dan efisiensi biaya.",
        },
        solution: {
            en: "We implemented a hub-and-spoke model with strategic warehouse locations and integrated local delivery partners for last-mile service.",
            zh: "我们实施了中心辐射模式，选择战略性仓库位置，并整合本地配送合作伙伴提供最后一公里服务。",
            id: "Kami menerapkan model hub-and-spoke dengan lokasi gudang strategis dan mengintegrasikan mitra pengiriman lokal untuk layanan mil terakhir.",
        },
        result: {
            en: "Achieved 98% on-time delivery rate, reduced shipping costs by 25%, and cut average delivery time from 12 days to 4 days.",
            zh: "实现了98%的准时送达率，运输成本降低25%，平均配送时间从12天缩短至4天。",
            id: "Mencapai tingkat pengiriman tepat waktu 98%, mengurangi biaya pengiriman sebesar 25%, dan memotong waktu pengiriman rata-rata dari 12 hari menjadi 4 hari.",
        },
        image_url: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg",
    },
    {
        industry: "Manufacturing",
        title: {
            en: "Just-In-Time Manufacturing Supply Chain",
            zh: "准时制制造供应链",
            id: "Rantai Pasokan Manufaktur Just-In-Time",
        },
        description: {
            en: "Optimized supply chain for automotive manufacturer requiring precise inventory management",
            zh: "为需要精确库存管理的汽车制造商优化供应链",
            id: "Mengoptimalkan rantai pasokan untuk produsen otomotif yang memerlukan manajemen inventaris yang tepat",
        },
        challenge: {
            en: "The manufacturer needed to reduce inventory holding costs while ensuring zero stockouts to maintain production schedules.",
            zh: "制造商需要在确保零缺货以维持生产计划的同时降低库存持有成本。",
            id: "Produsen perlu mengurangi biaya penyimpanan inventaris sambil memastikan tidak ada kekurangan stok untuk mempertahankan jadwal produksi.",
        },
        solution: {
            en: "Developed a predictive analytics system with real-time inventory tracking and automated reordering based on production forecasts.",
            zh: "开发了预测分析系统，配备实时库存跟踪和基于生产预测的自动补货功能。",
            id: "Mengembangkan sistem analitik prediktif dengan pelacakan inventaris real-time dan pemesanan ulang otomatis berdasarkan perkiraan produksi.",
        },
        result: {
            en: "Reduced inventory costs by 40%, eliminated stockouts, and improved production efficiency by 18%.",
            zh: "库存成本降低40%，消除了缺货情况，生产效率提高18%。",
            id: "Mengurangi biaya inventaris sebesar 40%, menghilangkan kekurangan stok, dan meningkatkan efisiensi produksi sebesar 18%.",
        },
        image_url: "https://images.pexels.com/photos/4481467/pexels-photo-4481467.jpeg",
    },
    {
        industry: "Healthcare",
        title: {
            en: "Pharmaceutical Cold Chain Management",
            zh: "药品冷链管理",
            id: "Manajemen Rantai Dingin Farmasi",
        },
        description: {
            en: "Ensured temperature-controlled logistics for critical pharmaceutical shipments",
            zh: "确保关键药品运输的温度控制物流",
            id: "Memastikan logistik terkontrol suhu untuk pengiriman farmasi kritis",
        },
        challenge: {
            en: "Transporting temperature-sensitive vaccines and medications across multiple countries while maintaining strict temperature controls and regulatory compliance.",
            zh: "在多个国家之间运输对温度敏感的疫苗和药物，同时保持严格的温度控制和监管合规性。",
            id: "Mengangkut vaksin dan obat-obatan yang sensitif suhu melintasi beberapa negara sambil mempertahankan kontrol suhu yang ketat dan kepatuhan peraturan.",
        },
        solution: {
            en: "Implemented specialized cold chain infrastructure with IoT temperature monitoring, backup systems, and compliance documentation automation.",
            zh: "实施了专门的冷链基础设施，配备物联网温度监控、备用系统和合规文件自动化。",
            id: "Menerapkan infrastruktur rantai dingin khusus dengan pemantauan suhu IoT, sistem cadangan, dan otomatisasi dokumentasi kepatuhan.",
        },
        result: {
            en: "Maintained 100% temperature compliance, reduced spoilage by 95%, and achieved full regulatory approval in all target markets.",
            zh: "保持了100%的温度合规性，将损耗减少95%，并在所有目标市场获得完全监管批准。",
            id: "Mempertahankan kepatuhan suhu 100%, mengurangi pembusukan sebesar 95%, dan mencapai persetujuan peraturan penuh di semua pasar target.",
        },
        image_url: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg",
    },
];

export function CaseStudies() {
    const [expandedId, setExpandedId] = useState<number | null>(null);
    const { language, t } = useLanguage();

    return (
        <section id="cases" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">{t(translations.cases.title)}</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">{t(translations.cases.subtitle)}</p>
                    <div className="w-20 h-1 bg-blue-600 mx-auto mt-6"></div>
                </div>

                <div className="space-y-4">
                    {caseStudies.map((caseStudy, idx) => {
                        const title = caseStudy.title[language];
                        const description = caseStudy.description[language];
                        const challenge = caseStudy.challenge[language];
                        const solution = caseStudy.solution[language];
                        const result = caseStudy.result[language];
                        const isExpanded = expandedId === idx;

                        return (
                            <div
                                key={idx}
                                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all"
                            >
                                <button
                                    onClick={() => setExpandedId(isExpanded ? null : idx)}
                                    className="w-full p-6 text-left hover:bg-gray-50 transition-colors flex items-start justify-between"
                                >
                                    <div className="flex-1">
                                        <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full mb-3">
                                            {caseStudy.industry}
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
                                        <p className="text-gray-600">{description}</p>
                                    </div>
                                    <ChevronDown
                                        className={`w-6 h-6 text-gray-400 flex-shrink-0 ml-4 transition-transform ${
                                            isExpanded ? "rotate-180" : ""
                                        }`}
                                    />
                                </button>

                                {isExpanded && (
                                    <div className="px-6 pb-6 bg-gradient-to-br from-gray-50 to-white border-t border-gray-100 space-y-6 animate-fade-in">
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div>
                                                <h4 className="font-semibold text-gray-900 mb-3 text-lg">
                                                    {t(translations.cases.challenge)}
                                                </h4>
                                                <p className="text-gray-700 leading-relaxed">{challenge}</p>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-gray-900 mb-3 text-lg">
                                                    {t(translations.cases.solution)}
                                                </h4>
                                                <p className="text-gray-700 leading-relaxed">{solution}</p>
                                            </div>
                                        </div>

                                        <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 rounded-xl text-white">
                                            <h4 className="font-semibold mb-2 text-lg">{t(translations.cases.result)}</h4>
                                            <p className="text-blue-100">{result}</p>
                                        </div>

                                        <div className="relative h-64 rounded-xl overflow-hidden">
                                            <img
                                                src={caseStudy.image_url}
                                                alt={title}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
