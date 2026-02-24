export default function ArticlesSection() {
  const articles = [
    {
      title: 'Saeyang Marathon 3 Champion Review',
      excerpt: 'Comprehensive technical analysis of the industry standard e-file with torque safety and vibration control.',
      category: 'E-File Review',
      date: '2024-02-24',
      readTime: '8 min',
      slug: 'saeyang-marathon-3-champion'
    },
    {
      title: 'Saeyang H35LSP vs SH37LN Comparison',
      excerpt: 'Head-to-head technical comparison of Saeyang handpieces with detailed performance metrics.',
      category: 'Comparison',
      date: '2024-02-23',
      readTime: '6 min',
      slug: 'saeyang-h35lsp-vs-sh37ln'
    },
    {
      title: 'Saeyang Cyclone Vac Podiatry Review',
      excerpt: 'Professional dust extractor analysis with suction power and noise level measurements.',
      category: 'Equipment Review',
      date: '2024-02-22',
      readTime: '7 min',
      slug: 'saeyang-cyclone-vac'
    },
    {
      title: 'EXO Runner Up Technical Review',
      excerpt: 'Budget-friendly e-file analysis with torque specifications and clinical suitability assessment.',
      category: 'E-File Review',
      date: '2024-02-21',
      readTime: '5 min',
      slug: 'exo-runner-up'
    }
  ];

  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Latest Professional Reviews
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            In-depth technical analysis and expert reviews of professional nail equipment
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {articles.map((article, index) => (
            <article key={index} className="bg-white rounded-lg shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-blue-900 bg-blue-50 px-2 py-1 rounded">
                    {article.category}
                  </span>
                  <div className="flex items-center text-sm text-slate-500">
                    <span>{article.readTime}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  {article.title}
                </h3>
                
                <p className="text-slate-600 mb-4">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <time className="text-sm text-slate-500">
                    {new Date(article.date).toLocaleDateString('en-GB', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </time>
                  
                  <a 
                    href={`/reviews/${article.slug}`}
                    className="text-blue-900 hover:text-blue-700 font-medium text-sm"
                  >
                    Read More →
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="/reviews"
            className="inline-flex items-center bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition-colors"
          >
            View All Reviews
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
