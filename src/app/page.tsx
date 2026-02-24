import Header from '@/components/Header';
import ProductSection from '@/components/ProductSection';
import ArticlesSection from '@/components/ArticlesSection';
import BuyingGuide from '@/components/BuyingGuide';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-slate-100">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">
              Professional E-File Reviews
            </h1>
            <p className="text-xl text-slate-600 mb-8">
              Find the Perfect E-File for Your Nail Business
            </p>
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
              <h2 className="text-2xl font-semibold text-slate-800 mb-4">
                Why Choose Professional E-Files?
              </h2>
              <p className="text-slate-600 mb-6">
                Professional e-files provide superior power, reliability, and efficiency for nail technicians. 
                We help you choose the right equipment based on real performance, not marketing claims.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-900 mb-2">Save Time</h3>
                  <p className="text-blue-700 text-sm">Work faster with better torque and power</p>
                </div>
                <div className="bg-slate-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-slate-900 mb-2">Better Results</h3>
                  <p className="text-slate-700 text-sm">Consistent performance for perfect nails</p>
                </div>
              </div>
              <div className="mt-6">
                <a 
                  href="https://coheal.co.uk/collections/e-files-micromotors"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition-colors"
                >
                  Shop Professional E-Files at Coheal UK
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProductSection />
      <ArticlesSection />
      <BuyingGuide />
      <Footer />
    </div>
  );
}
