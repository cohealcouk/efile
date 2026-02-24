import { getAllArticles, getArticleBySlug } from '@/lib/mdx';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface ArticlePageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const articles = getAllArticles();
  
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const article = getArticleBySlug(params.slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-slate-100">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <Link href="/reviews" className="text-blue-900 hover:text-blue-700">
              ← Back to Reviews
            </Link>
          </nav>

          {/* Article Header */}
          <header className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <span className="text-sm font-medium text-blue-900 bg-blue-50 px-3 py-1 rounded">
                {article.frontmatter.brand}
              </span>
              <div className="flex items-center">
                <span className="text-yellow-500">★</span>
                <span className="ml-1 font-semibold">{article.frontmatter.rating}</span>
              </div>
            </div>
            
            <h1 className="text-4xl font-bold text-slate-900 mb-4">
              {article.frontmatter.title}
            </h1>
            
            <p className="text-xl text-slate-600 mb-6">
              {article.frontmatter.description}
            </p>
            
            <div className="flex items-center justify-between text-sm text-slate-500">
              <div>
                By {article.frontmatter.reviewer} • Reviewed by {article.frontmatter.author}
              </div>
              <div>
                {new Date(article.frontmatter.date).toLocaleDateString('en-GB', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </div>
            </div>

            {/* Technical Specs */}
            <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6 mt-8">
              <h2 className="text-xl font-semibold text-slate-900 mb-4">Technical Specifications</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {article.frontmatter.torque && (
                  <div>
                    <div className="text-sm text-slate-600">Torque</div>
                    <div className="font-semibold">{article.frontmatter.torque}</div>
                  </div>
                )}
                {article.frontmatter.rpm && (
                  <div>
                    <div className="text-sm text-slate-600">RPM</div>
                    <div className="font-semibold">{article.frontmatter.rpm}</div>
                  </div>
                )}
                {article.frontmatter.power && (
                  <div>
                    <div className="text-sm text-slate-600">Power</div>
                    <div className="font-semibold">{article.frontmatter.power}</div>
                  </div>
                )}
                {article.frontmatter.price && (
                  <div>
                    <div className="text-sm text-slate-600">Price</div>
                    <div className="font-semibold text-blue-900">{article.frontmatter.price}</div>
                  </div>
                )}
              </div>
            </div>
          </header>

          {/* Article Content */}
          <article className="bg-white rounded-lg shadow-sm border border-slate-200 p-8 mb-8">
            <div 
              className="prose prose-slate max-w-none"
              dangerouslySetInnerHTML={{ __html: article.content.replace(/\n/g, '<br />') }}
            />
          </article>

          {/* CTA Section */}
          <div className="bg-blue-50 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">
              Ready to Upgrade Your Equipment?
            </h2>
            <p className="text-blue-700 mb-6">
              Find the perfect e-file for your professional needs at Coheal UK
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://coheal.co.uk/collections/e-files-micromotors"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition-colors"
              >
                Shop E-Files at Coheal UK
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
              <Link 
                href="/compare"
                className="inline-flex items-center bg-white text-blue-900 border border-blue-900 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors"
              >
                Compare Products
              </Link>
            </div>
          </div>

          {/* Related Articles */}
          <div className="mt-12">
            <h2 className="text-2xl font-semibold text-slate-900 mb-6">Related Reviews</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {getAllArticles()
                .filter(a => a.slug !== article.slug)
                .slice(0, 2)
                .map((relatedArticle) => (
                  <Link 
                    key={relatedArticle.slug}
                    href={`/reviews/${relatedArticle.slug}`}
                    className="bg-white rounded-lg shadow-sm border border-slate-200 p-6 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-blue-900 bg-blue-50 px-2 py-1 rounded">
                        {relatedArticle.frontmatter.brand}
                      </span>
                      <div className="flex items-center">
                        <span className="text-yellow-500">★</span>
                        <span className="ml-1 font-semibold">{relatedArticle.frontmatter.rating}</span>
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">
                      {relatedArticle.frontmatter.title}
                    </h3>
                    <p className="text-slate-600 text-sm">
                      {relatedArticle.frontmatter.description}
                    </p>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
