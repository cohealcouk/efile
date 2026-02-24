import { getAllArticles } from '@/lib/mdx';
import Link from 'next/link';

export default function ReviewsPage() {
  const articles = getAllArticles();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-slate-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Professional E-File Reviews
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            In-depth technical analysis and expert reviews of professional nail equipment
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <article key={index} className="bg-white rounded-lg shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-blue-900 bg-blue-50 px-2 py-1 rounded">
                    {article.frontmatter.brand}
                  </span>
                  <div className="flex items-center">
                    <span className="text-yellow-500">★</span>
                    <span className="ml-1 font-semibold">{article.frontmatter.rating}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  {article.frontmatter.title}
                </h3>
                
                <p className="text-slate-600 mb-4">
                  {article.frontmatter.description}
                </p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="text-sm text-slate-500">
                    <span>By {article.frontmatter.reviewer}</span>
                  </div>
                  <div className="text-sm font-medium text-blue-900">
                    £{article.frontmatter.price}
                  </div>
                </div>

                {article.frontmatter.torque && (
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span className="text-slate-600">Torque:</span>
                    <span className="font-medium">{article.frontmatter.torque}</span>
                  </div>
                )}

                {article.frontmatter.rpm && (
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span className="text-slate-600">RPM:</span>
                    <span className="font-medium">{article.frontmatter.rpm}</span>
                  </div>
                )}

                {article.frontmatter.suction && (
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span className="text-slate-600">Suction:</span>
                    <span className="font-medium">{article.frontmatter.suction}</span>
                  </div>
                )}

                {article.frontmatter.noise && (
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span className="text-slate-600">Noise:</span>
                    <span className="font-medium">{article.frontmatter.noise}</span>
                  </div>
                )}
                
                <div className="flex items-center justify-between">
                  <time className="text-sm text-slate-500">
                    {new Date(article.frontmatter.date).toLocaleDateString('en-GB', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </time>
                  
                  <div className="flex items-center gap-2">
                    <Link 
                      href={`/reviews/${article.slug}`}
                      className="text-blue-900 hover:text-blue-700 font-medium text-sm"
                    >
                      Read More →
                    </Link>
                    <a 
                      href="https://coheal.co.uk/collections/e-files-micromotors"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600 hover:text-green-700 font-medium text-sm"
                    >
                      Shop →
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {articles.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-600">No articles found.</p>
          </div>
        )}
      </div>
    </div>
  );
}
