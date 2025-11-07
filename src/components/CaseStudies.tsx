import { useEffect, useState } from 'react';
import { supabase, CaseStudy } from '../lib/supabase';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';
import { ChevronDown } from 'lucide-react';

export function CaseStudies() {
  const [cases, setCases] = useState<CaseStudy[]>([]);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const { language, t } = useLanguage();

  useEffect(() => {
    async function fetchCases() {
      if (!supabase) {
        console.warn('Supabase not configured. Case studies will not be loaded.');
        setLoading(false);
        return;
      }

      try {
        const { data, error } = await supabase
          .from('case_studies')
          .select('*')
          .order('created_at', { ascending: false });

        if (error) {
          console.error('Error fetching case studies:', error);
        } else {
          setCases(data || []);
        }
      } catch (err) {
        console.error('Error fetching case studies:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchCases();
  }, []);

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="space-y-4">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="animate-pulse bg-gray-100 h-40 rounded-2xl"></div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <section id="cases" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t(translations.cases.title)}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t(translations.cases.subtitle)}
          </p>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-6"></div>
        </div>

        <div className="space-y-4">
          {cases.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">Case studies will be displayed here once configured.</p>
            </div>
          ) : (
            cases.map((caseStudy) => {
            const title = caseStudy[`title_${language}` as keyof CaseStudy] as string;
            const description = caseStudy[`description_${language}` as keyof CaseStudy] as string;
            const challenge = caseStudy[`challenge_${language}` as keyof CaseStudy] as string;
            const solution = caseStudy[`solution_${language}` as keyof CaseStudy] as string;
            const result = caseStudy[`result_${language}` as keyof CaseStudy] as string;
            const isExpanded = expandedId === caseStudy.id;

            return (
              <div key={caseStudy.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all">
                <button
                  onClick={() => setExpandedId(isExpanded ? null : caseStudy.id)}
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
                      isExpanded ? 'rotate-180' : ''
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
          }))}
        </div>
      </div>
    </section>
  );
}
