import Image from 'next/image';

export default function ProductSection() {
  const products = [
    {
      name: 'Saeyang Marathon 3',
      category: 'Professional E-File',
      rating: 4.5,
      torque: '4.5 Ncm',
      rpm: '30,000',
      image: '/api/placeholder/200/150',
      pros: ['High torque', 'Low vibration', 'Reliable'],
      cons: ['Price', 'Learning curve']
    },
    {
      name: 'Saeyang Cyclone Vac',
      category: 'Dust Extractor',
      rating: 4.2,
      suction: 'Strong',
      noise: 'Quiet',
      image: '/api/placeholder/200/150',
      pros: ['Powerful suction', 'Quiet operation', 'Compact'],
      cons: ['Filter replacement', 'Price']
    },
    {
      name: 'EXO Runner Up',
      category: 'E-File',
      rating: 4.0,
      torque: '4.0 Ncm',
      rpm: '25,000',
      image: '/api/placeholder/200/150',
      pros: ['Lightweight', 'Good power', 'Price'],
      cons: ['Battery life', 'Build quality']
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Professional Equipment Comparison
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Compare technical specifications and performance metrics of leading e-files and dust extractors
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className="bg-white border border-slate-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-blue-900 bg-blue-50 px-2 py-1 rounded">
                    {product.category}
                  </span>
                  <div className="flex items-center">
                    <span className="text-yellow-500">★</span>
                    <span className="ml-1 font-semibold">{product.rating}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  {product.name}
                </h3>
                
                <div className="bg-slate-100 rounded-lg h-32 mb-4 flex items-center justify-center">
                  <span className="text-slate-400">Product Image</span>
                </div>
                
                <div className="space-y-2 mb-4">
                  {product.torque && (
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-600">Torque:</span>
                      <span className="font-medium">{product.torque}</span>
                    </div>
                  )}
                  {product.rpm && (
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-600">RPM:</span>
                      <span className="font-medium">{product.rpm}</span>
                    </div>
                  )}
                  {product.suction && (
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-600">Suction:</span>
                      <span className="font-medium">{product.suction}</span>
                    </div>
                  )}
                  {product.noise && (
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-600">Noise:</span>
                      <span className="font-medium">{product.noise}</span>
                    </div>
                  )}
                </div>
                
                <div className="space-y-2">
                  <div className="text-sm">
                    <span className="text-green-600">✓</span>
                    <span className="ml-1 text-slate-600">{product.pros.join(', ')}</span>
                  </div>
                  <div className="text-sm">
                    <span className="text-red-600">✗</span>
                    <span className="ml-1 text-slate-600">{product.cons.join(', ')}</span>
                  </div>
                </div>
                
                <button className="w-full mt-4 bg-blue-900 text-white py-2 px-4 rounded-lg hover:bg-blue-800 transition-colors">
                  <a 
                    href="https://coheal.co.uk/collections/e-files-micromotors"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center"
                  >
                    Check Availability at Coheal UK
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
