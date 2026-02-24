import Image from 'next/image';

export default function ProductSection() {
  const products = [
    {
      name: 'Saeyang Marathon 3',
      category: 'Professional E-File',
      rating: 4.5,
      torque: '4.5 Ncm',
      rpm: '30,000',
      image: 'https://coheal.co.uk/cdn/shop/files/Saeyang-Marathon-3-Champion-Nail-Drill-Machine-White-H200_1200x1200.jpg?v=1698765432',
      pros: ['High torque', 'Low vibration', 'Reliable'],
      cons: ['Price', 'Learning curve'],
      cohealUrl: 'https://coheal.co.uk/products/saeyang-marathon-3-champion-nail-drill-machine-white-h200'
    },
    {
      name: 'Saeyang Cyclone Vac',
      category: 'Dust Extractor',
      rating: 4.2,
      suction: 'Strong',
      noise: 'Quiet',
      image: 'https://coheal.co.uk/cdn/shop/files/Saeyang-Marathon-Cyclone-Vac-Podiatry-Nail-Drill-Machine_1200x1200.jpg?v=1698765433',
      pros: ['Powerful suction', 'Quiet operation', 'Compact'],
      cons: ['Filter replacement', 'Price'],
      cohealUrl: 'https://coheal.co.uk/products/saeyang-marathon-cyclone-vac-podiatry-nail-drill-machine-with-absorber-podoset'
    },
    {
      name: 'EXO Runner Up',
      category: 'E-File',
      rating: 4.0,
      torque: '4.0 Ncm',
      rpm: '25,000',
      image: 'https://coheal.co.uk/cdn/shop/files/EXO-Runner-Up-Nail-Drill-Black_1200x1200.jpg?v=1698765434',
      pros: ['Lightweight', 'Good power', 'Price'],
      cons: ['Battery life', 'Build quality'],
      cohealUrl: 'https://coheal.co.uk/products/exo-runner-up-nail-drill-black'
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
                
                <div className="bg-slate-100 rounded-lg h-32 mb-4 flex items-center justify-center relative overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
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
                    href={product.cohealUrl}
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
