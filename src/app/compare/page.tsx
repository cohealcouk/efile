'use client';

import { useState } from 'react';

interface Product {
  name: string;
  category: string;
  rating: number;
  torque?: string;
  rpm?: string;
  power?: string;
  suction?: string;
  noise?: string;
  dustExtractor: boolean;
  price: string;
  cohealUrl: string;
  image: string;
  pros: string[];
  cons: string[];
}

export default function ComparePage() {
  const [rpmFilter, setRpmFilter] = useState<string>('all');
  const [powerFilter, setPowerFilter] = useState<string>('all');
  const [dustFilter, setDustFilter] = useState<string>('all');

  const products: Product[] = [
    {
      name: 'Saeyang Marathon 3 Champion',
      category: 'Professional E-File',
      rating: 4.5,
      torque: '4.5 Ncm',
      rpm: '30,000',
      power: '45W',
      dustExtractor: false,
      price: '£289.99',
      cohealUrl: 'https://coheal.co.uk/products/saeyang-marathon-3-champion-nail-drill-machine-white-h200',
      image: 'https://coheal.co.uk/cdn/shop/files/Saeyang-Marathon-3-Champion-Nail-Drill-Machine-White-H200_1200x1200.jpg?v=1698765432',
      pros: ['High torque', 'Low vibration', 'Reliable', 'Professional grade'],
      cons: ['Price', 'Learning curve']
    },
    {
      name: 'Saeyang Marathon 3 + SH37LN',
      category: 'Professional E-File',
      rating: 4.6,
      torque: '4.5 Ncm',
      rpm: '30,000',
      power: '45W',
      dustExtractor: false,
      price: '£329.99',
      cohealUrl: 'https://coheal.co.uk/products/saeyang-marathon-3-champion-nail-drill-machine-white-sh37ln',
      image: 'https://coheal.co.uk/cdn/shop/files/Saeyang-Marathon-3-Champion-Nail-Drill-Machine-White-H200_1200x1200.jpg?v=1698765432',
      pros: ['High torque', 'Quick release', 'Enhanced grip', 'Professional'],
      cons: ['Higher price', 'Complex']
    },
    {
      name: 'Saeyang Marathon Cyclone Vac',
      category: 'E-File with Dust Extractor',
      rating: 4.3,
      torque: '4.2 Ncm',
      rpm: '28,000',
      power: '45W',
      suction: '85 CFM',
      noise: '62 dB',
      dustExtractor: true,
      price: '£449.99',
      cohealUrl: 'https://coheal.co.uk/products/saeyang-marathon-cyclone-vac-podiatry-nail-drill-machine-with-absorber-podoset',
      image: 'https://coheal.co.uk/cdn/shop/files/Saeyang-Marathon-Cyclone-Vac-Podiatry-Nail-Drill-Machine_1200x1200.jpg?v=1698765433',
      pros: ['Built-in dust extractor', 'Powerful suction', 'Quiet operation', 'All-in-one'],
      cons: ['Expensive', 'Heavy', 'Complex']
    },
    {
      name: 'EXO Runner Up',
      category: 'Budget E-File',
      rating: 4.0,
      torque: '4.0 Ncm',
      rpm: '25,000',
      power: '35W',
      dustExtractor: false,
      price: '£189.99',
      cohealUrl: 'https://coheal.co.uk/products/exo-runner-up-nail-drill-black',
      image: 'https://coheal.co.uk/cdn/shop/files/EXO-Runner-Up-Nail-Drill-Black_1200x1200.jpg?v=1698765434',
      pros: ['Affordable', 'Lightweight', 'Cordless', 'Good value'],
      cons: ['Lower torque', 'Battery life', 'Build quality']
    },
    {
      name: 'EXO Classic File + Dust Extractor',
      category: 'E-File with Dust Extractor',
      rating: 3.8,
      torque: '3.5 Ncm',
      rpm: '20,000',
      power: '30W',
      suction: '65 CFM',
      dustExtractor: true,
      price: '£299.99',
      cohealUrl: 'https://coheal.co.uk/products/exo-classic-file-new-edition-podiatry-nail-drill-with-dust-absorber',
      image: 'https://coheal.co.uk/cdn/shop/files/EXO-Runner-Up-Nail-Drill-Black_1200x1200.jpg?v=1698765434',
      pros: ['Built-in extractor', 'Affordable', 'Compact', 'Good suction'],
      cons: ['Lower power', 'Basic features', 'Noisy']
    },
    {
      name: 'Saeyang Marathon K38 Pro',
      category: 'Professional E-File',
      rating: 4.4,
      torque: '4.3 Ncm',
      rpm: '30,000',
      power: '40W',
      dustExtractor: false,
      price: '£349.99',
      cohealUrl: 'https://coheal.co.uk/products/saeyang-marathon-k38-pro-bs30-nail-drill-brushless',
      image: 'https://coheal.co.uk/cdn/shop/files/Saeyang-Marathon-3-Champion-Nail-Drill-Machine-White-H200_1200x1200.jpg?v=1698765432',
      pros: ['Portable', 'Brushless', 'Good torque', 'Professional'],
      cons: ['Price', 'Battery not included', 'Complex']
    }
  ];

  const filteredProducts = products.filter(product => {
    const rpmMatch = rpmFilter === 'all' || 
      (rpmFilter === '20000-25000' && product.rpm === '25,000') ||
      (rpmFilter === '28000-30000' && (product.rpm === '28,000' || product.rpm === '30,000'));

    const powerMatch = powerFilter === 'all' || 
      (powerFilter === '30-35W' && product.power === '30W' || product.power === '35W') ||
      (powerFilter === '40-45W' && (product.power === '40W' || product.power === '45W'));

    const dustMatch = dustFilter === 'all' || 
      (dustFilter === 'with-extractor' && product.dustExtractor) ||
      (dustFilter === 'without-extractor' && !product.dustExtractor);

    return rpmMatch && powerMatch && dustMatch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-slate-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Compare Professional E-Files
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Filter and compare technical specifications to find the perfect e-file for your needs
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                RPM Range
              </label>
              <select 
                value={rpmFilter} 
                onChange={(e) => setRpmFilter(e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All RPM</option>
                <option value="20000-25000">20,000 - 25,000 RPM</option>
                <option value="28000-30000">28,000 - 30,000 RPM</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Power Output
              </label>
              <select 
                value={powerFilter} 
                onChange={(e) => setPowerFilter(e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All Power</option>
                <option value="30-35W">30-35W</option>
                <option value="40-45W">40-45W</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Dust Extractor
              </label>
              <select 
                value={dustFilter} 
                onChange={(e) => setDustFilter(e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All Types</option>
                <option value="with-extractor">With Built-in Extractor</option>
                <option value="without-extractor">Without Extractor</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="mb-4 text-sm text-slate-600">
          Showing {filteredProducts.length} of {products.length} products
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
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

                <div className="bg-slate-100 rounded-lg h-32 mb-4 flex items-center justify-center relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="object-cover w-full h-full"
                  />
                </div>

                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {product.name}
                </h3>

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
                  {product.power && (
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-600">Power:</span>
                      <span className="font-medium">{product.power}</span>
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
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600">Dust Extractor:</span>
                    <span className={`font-medium ${product.dustExtractor ? 'text-green-600' : 'text-slate-500'}`}>
                      {product.dustExtractor ? 'Built-in' : 'Separate'}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm font-medium text-blue-900">
                    <span>Price:</span>
                    <span>{product.price}</span>
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="text-sm">
                    <span className="text-green-600">✓</span>
                    <span className="ml-1 text-slate-600">{product.pros.slice(0, 2).join(', ')}</span>
                  </div>
                  <div className="text-sm">
                    <span className="text-red-600">✗</span>
                    <span className="ml-1 text-slate-600">{product.cons.slice(0, 2).join(', ')}</span>
                  </div>
                </div>

                <a 
                  href={product.cohealUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-blue-900 text-white py-2 px-4 rounded-lg hover:bg-blue-800 transition-colors text-center"
                >
                  Check Availability at Coheal UK
                </a>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-600">No products match your filters. Try adjusting your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
}
