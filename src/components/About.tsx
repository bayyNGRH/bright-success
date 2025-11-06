import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations";
import { CheckCircle } from "lucide-react";

export function About() {
    const { t } = useLanguage();

    const visionPoints = {
        en: [
            "Leading innovator in global supply chain solutions",
            "Connecting businesses across continents seamlessly",
            "Creating value through efficiency and reliability",
        ],
        zh: ["全球供应链解决方案的领先创新者", "无缝连接各大洲的业务", "通过效率和可靠性创造价值"],
        id: [
            "Inovator terkemuka dalam solusi rantai pasokan global",
            "Menghubungkan bisnis lintas benua dengan mulus",
            "Menciptakan nilai melalui efisiensi dan keandalan",
        ],
    };

    const missionPoints = {
        en: [
            "Empower businesses with logistics solutions that scale",
            "Maintain highest standards of service quality and compliance",
            "Build lasting partnerships based on trust and transparency",
            "Invest in technology and talent for continuous improvement",
        ],
        zh: [
            "用可扩展的物流解决方案赋能企业",
            "保持最高的服务质量和合规标准",
            "建立基于信任和透明的长期伙伴关系",
            "投资技术和人才以实现持续改进",
        ],
        id: [
            "Memberdayakan bisnis dengan solusi logistik yang scalable",
            "Mempertahankan standar kualitas layanan dan kepatuhan tertinggi",
            "Membangun kemitraan jangka panjang berdasarkan kepercayaan dan transparansi",
            "Berinvestasi dalam teknologi dan talenta untuk peningkatan berkelanjutan",
        ],
    };

    return (
        <section id="about" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <img
                            src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg"
                            alt="Bright Success Team"
                            className="rounded-2xl shadow-xl"
                        />
                    </div>

                    <div className="space-y-12">
                        <div>
                            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t(translations.about.title)}</h2>
                            <p className="text-xl text-gray-600 leading-relaxed mb-6">
                                Since our founding, Bright Success Supply Chain Company has been committed to
                                revolutionizing the logistics industry through innovation, reliability, and
                                customer-centric solutions.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                                <div className="w-1 h-8 bg-blue-600 rounded mr-3"></div>
                                {t(translations.about.vision)}
                            </h3>
                            <ul className="space-y-3">
                                {visionPoints[useLanguage().language as keyof typeof visionPoints].map((point, idx) => (
                                    <li key={idx} className="flex items-start space-x-3">
                                        <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                                        <span className="text-gray-700">{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                                <div className="w-1 h-8 bg-blue-600 rounded mr-3"></div>
                                {t(translations.about.mission)}
                            </h3>
                            <ul className="space-y-3">
                                {missionPoints[useLanguage().language as keyof typeof missionPoints].map(
                                    (point, idx) => (
                                        <li key={idx} className="flex items-start space-x-3">
                                            <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                                            <span className="text-gray-700">{point}</span>
                                        </li>
                                    )
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
