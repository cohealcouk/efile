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
  const [torqueFilter, setTorqueFilter] = useState<string>('all');
  const [powerFilter, setPowerFilter] = useState<string>('all');
  const [dustFilter, setDustFilter] = useState<string>('all');
  const [sortColumn, setSortColumn] = useState<string>('rating');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');

  const handleSort = (column: string) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column);
      setSortDirection('desc');
    }
  };

  const getSortedProducts = (productsToSort: Product[]) => {
    return [...productsToSort].sort((a, b) => {
      let aValue: any;
      let bValue: any;

      switch (sortColumn) {
        case 'name':
          aValue = a.name.toLowerCase();
          bValue = b.name.toLowerCase();
          break;
        case 'rating':
          aValue = a.rating;
          bValue = b.rating;
          break;
        case 'torque':
          aValue = parseFloat(a.torque || '0');
          bValue = parseFloat(b.torque || '0');
          break;
        case 'rpm':
          aValue = parseInt(a.rpm?.replace(',', '') || '0');
          bValue = parseInt(b.rpm?.replace(',', '') || '0');
          break;
        case 'power':
          aValue = parseInt(a.power?.replace('W', '') || '0');
          bValue = parseInt(b.power?.replace('W', '') || '0');
          break;
        case 'price':
          aValue = parseFloat(a.price.replace('£', '').replace(',', ''));
          bValue = parseFloat(b.price.replace('£', '').replace(',', ''));
          break;
        default:
          aValue = a.name.toLowerCase();
          bValue = b.name.toLowerCase();
      }

      if (typeof aValue === 'string') {
        return sortDirection === 'asc' 
          ? aValue.localeCompare(bValue)
          : bValue.localeCompare(aValue);
      }

      return sortDirection === 'asc' ? aValue - bValue : bValue - aValue;
    });
  };

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
      name: 'Saeyang Marathon 3 + H35LSP',
      category: 'Professional E-File',
      rating: 4.4,
      torque: '4.2 Ncm',
      rpm: '28,000',
      power: '45W',
      dustExtractor: false,
      price: '£299.99',
      cohealUrl: 'https://coheal.co.uk/products/saeyang-marathon-3-champion-nail-drill-machine-white-h35lsp-gray',
      image: 'https://coheal.co.uk/cdn/shop/files/Saeyang-Marathon-3-Champion-Nail-Drill-Machine-White-H200_1200x1200.jpg?v=1698765432',
      pros: ['High torque', 'Standard grip', 'Reliable', 'Good value'],
      cons: ['Manual bur change', 'Basic features']
    },
    {
      name: 'Saeyang Marathon Cyclone Vac',
      category: 'E-File with Dust Extractor',
      rating: 4.9,
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
    },
    {
      name: 'Saeyang Marathon K35 Mini',
      category: 'Professional E-File',
      rating: 4.2,
      torque: '4.0 Ncm',
      rpm: '25,000',
      power: '35W',
      dustExtractor: false,
      price: '£259.99',
      cohealUrl: 'https://coheal.co.uk/products/saeyang-nail-drill-machine-marathon-k35-mini-white-h200',
      image: 'https://coheal.co.uk/cdn/shop/files/Saeyang-Marathon-3-Champion-Nail-Drill-Machine-White-H200_1200x1200.jpg?v=1698765432',
      pros: ['Compact', 'Lightweight', 'Good torque', 'Portable'],
      cons: ['Lower RPM', 'Basic features', 'Limited power']
    }
  ];

  const filteredProducts = getSortedProducts(
    products.filter(product => {
      const rpmMatch = rpmFilter === 'all' || 
        (rpmFilter === '0-20000' && parseInt(product.rpm?.replace(',', '') || '0') <= 20000) ||
        (rpmFilter === '20000-30000' && parseInt(product.rpm?.replace(',', '') || '0') > 20000 && parseInt(product.rpm?.replace(',', '') || '0') <= 30000) ||
        (rpmFilter === '30000+' && parseInt(product.rpm?.replace(',', '') || '0') > 30000);
      
      const torqueMatch = torqueFilter === 'all' || 
        (torqueFilter === '0-3.5' && parseFloat(product.torque || '0') <= 3.5) ||
        (torqueFilter === '3.5-4.0' && parseFloat(product.torque || '0') > 3.5 && parseFloat(product.torque || '0') <= 4.0) ||
        (torqueFilter === '4.0+' && parseFloat(product.torque || '0') > 4.0);
      
      const powerMatch = powerFilter === 'all' || 
        (powerFilter === '0-35W' && parseInt(product.power?.replace('W', '') || '0') <= 35) ||
        (powerFilter === '35W+' && parseInt(product.power?.replace('W', '') || '0') > 35);
      
      const dustMatch = dustFilter === 'all' || 
        (dustFilter === 'yes' && product.dustExtractor) ||
        (dustFilter === 'no' && !product.dustExtractor);
      
      return rpmMatch && torqueMatch && powerMatch && dustMatch;
    })
  );

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

        {/* Benchmark Comparison Table */}
        <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6 mb-8 overflow-x-auto">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">Benchmark Comparison</h2>
          <div className="min-w-full">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200">
                  <th 
                    className="text-left py-3 px-4 font-semibold text-slate-900 cursor-pointer hover:bg-slate-50 transition-colors"
                    onClick={() => handleSort('name')}
                  >
                    <div className="flex items-center">
                      Model
                      {sortColumn === 'name' && (
                        <span className="ml-2 text-blue-600">
                          {sortDirection === 'asc' ? '↑' : '↓'}
                        </span>
                      )}
                    </div>
                  </th>
                  <th 
                    className="text-center py-3 px-4 font-semibold text-slate-900 cursor-pointer hover:bg-slate-50 transition-colors"
                    onClick={() => handleSort('rating')}
                  >
                    <div className="flex items-center justify-center">
                      Rating
                      {sortColumn === 'rating' && (
                        <span className="ml-2 text-blue-600">
                          {sortDirection === 'asc' ? '↑' : '↓'}
                        </span>
                      )}
                    </div>
                  </th>
                  <th 
                    className="text-center py-3 px-4 font-semibold text-slate-900 cursor-pointer hover:bg-slate-50 transition-colors"
                    onClick={() => handleSort('torque')}
                  >
                    <div className="flex items-center justify-center">
                      Torque
                      {sortColumn === 'torque' && (
                        <span className="ml-2 text-blue-600">
                          {sortDirection === 'asc' ? '↑' : '↓'}
                        </span>
                      )}
                    </div>
                  </th>
                  <th 
                    className="text-center py-3 px-4 font-semibold text-slate-900 cursor-pointer hover:bg-slate-50 transition-colors"
                    onClick={() => handleSort('rpm')}
                  >
                    <div className="flex items-center justify-center">
                      RPM
                      {sortColumn === 'rpm' && (
                        <span className="ml-2 text-blue-600">
                          {sortDirection === 'asc' ? '↑' : '↓'}
                        </span>
                      )}
                    </div>
                  </th>
                  <th 
                    className="text-center py-3 px-4 font-semibold text-slate-900 cursor-pointer hover:bg-slate-50 transition-colors"
                    onClick={() => handleSort('power')}
                  >
                    <div className="flex items-center justify-center">
                      Power
                      {sortColumn === 'power' && (
                        <span className="ml-2 text-blue-600">
                          {sortDirection === 'asc' ? '↑' : '↓'}
                        </span>
                      )}
                    </div>
                  </th>
                  <th className="text-center py-3 px-4 font-semibold text-slate-900">
                    Dust Extractor
                  </th>
                  <th 
                    className="text-center py-3 px-4 font-semibold text-slate-900 cursor-pointer hover:bg-slate-50 transition-colors"
                    onClick={() => handleSort('price')}
                  >
                    <div className="flex items-center justify-center">
                      Price
                      {sortColumn === 'price' && (
                        <span className="ml-2 text-blue-600">
                          {sortDirection === 'asc' ? '↑' : '↓'}
                        </span>
                      )}
                    </div>
                  </th>
                  <th className="text-center py-3 px-4 font-semibold text-slate-900">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {getSortedProducts(products).map((product, index) => (
                  <tr key={index} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                    <td className="py-3 px-4">
                      <div>
                        <div className="font-medium text-slate-900">{product.name}</div>
                        <div className="text-xs text-slate-500">{product.category}</div>
                      </div>
                    </td>
                    <td className="text-center py-3 px-4">
                      <div className="flex items-center justify-center">
                        <span className="text-yellow-500">★</span>
                        <span className={`ml-1 font-semibold ${
                          product.rating >= 4.8 ? 'text-green-600' : 
                          product.rating >= 4.5 ? 'text-blue-600' : 
                          'text-slate-600'
                        }`}>{product.rating}</span>
                      </div>
                    </td>
                    <td className="text-center py-3 px-4">
                      <span className={`font-medium ${
                        parseFloat(product.torque || '0') >= 4.5 ? 'text-green-600' : 
                        parseFloat(product.torque || '0') >= 4.0 ? 'text-blue-600' : 
                        'text-slate-600'
                      }`}>
                        {product.torque || 'N/A'}
                      </span>
                    </td>
                    <td className="text-center py-3 px-4">
                      <span className={`font-medium ${
                        parseInt(product.rpm?.replace(',', '') || '0') >= 30000 ? 'text-green-600' : 
                        parseInt(product.rpm?.replace(',', '') || '0') >= 25000 ? 'text-blue-600' : 
                        'text-slate-600'
                      }`}>
                        {product.rpm || 'N/A'}
                      </span>
                    </td>
                    <td className="text-center py-3 px-4">
                      <span className={`font-medium ${
                        parseInt(product.power?.replace('W', '') || '0') >= 45 ? 'text-green-600' : 
                        parseInt(product.power?.replace('W', '') || '0') >= 35 ? 'text-blue-600' : 
                        'text-slate-600'
                      }`}>
                        {product.power || 'N/A'}
                      </span>
                    </td>
                    <td className="text-center py-3 px-4">
                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                        product.dustExtractor ? 'bg-green-100 text-green-800' : 'bg-slate-100 text-slate-600'
                      }`}>
                        {product.dustExtractor ? 'Built-in' : 'Separate'}
                      </span>
                    </td>
                    <td className="text-center py-3 px-4">
                      <span className="font-semibold text-blue-900">{product.price}</span>
                    </td>
                    <td className="text-center py-3 px-4">
                      <a 
                        href={product.cohealUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium"
                      >
                        View
                        <svg className="ml-1 w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {/* Legend */}
          <div className="mt-4 pt-4 border-t border-slate-200">
            <div className="flex flex-wrap gap-4 text-xs">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-600 rounded mr-2"></div>
                <span className="text-slate-600">Excellent (≥4.5 Ncm, ≥30,000 RPM, ≥45W)</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-blue-600 rounded mr-2"></div>
                <span className="text-slate-600">Good (≥4.0 Ncm, ≥25,000 RPM, ≥35W)</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-slate-600 rounded mr-2"></div>
                <span className="text-slate-600">Standard</span>
              </div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                RPM Range
              </label>
              <select 
                value={rpmFilter} 
                onChange={(e) => setRpmFilter(e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All RPM (0-40,000)</option>
                <option value="0-20000">0-20,000 RPM</option>
                <option value="20001-25000">20,001-25,000 RPM</option>
                <option value="25001-30000">25,001-30,000 RPM</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Torque Range
              </label>
              <select 
                value={torqueFilter} 
                onChange={(e) => setTorqueFilter(e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All Torque</option>
                <option value="3.5-3.9">3.5-3.9 Ncm</option>
                <option value="4.0-4.4">4.0-4.4 Ncm</option>
                <option value="4.5+">4.5+ Ncm</option>
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
                <option value="30W">30W</option>
                <option value="35W">35W</option>
                <option value="40W">40W</option>
                <option value="45W">45W</option>
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
              {/* Header */}
              <div className="p-6 border-b border-slate-100">
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
              </div>

              {/* Specs - Versus.com Style */}
              <div className="p-6 space-y-4">
                {/* Performance */}
                <div>
                  <h4 className="text-sm font-semibold text-slate-700 mb-2">Performance</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    {product.torque && (
                      <div className="flex justify-between">
                        <span className="text-slate-600">Torque</span>
                        <span className={`font-medium ${
                          parseFloat(product.torque) >= 4.5 ? 'text-green-600' : 
                          parseFloat(product.torque) >= 4.0 ? 'text-blue-600' : 
                          'text-slate-600'
                        }`}>{product.torque}</span>
                      </div>
                    )}
                    {product.rpm && (
                      <div className="flex justify-between">
                        <span className="text-slate-600">RPM</span>
                        <span className={`font-medium ${
                          parseInt(product.rpm.replace(',', '')) >= 30000 ? 'text-green-600' : 
                          parseInt(product.rpm.replace(',', '')) >= 25000 ? 'text-blue-600' : 
                          'text-slate-600'
                        }`}>{product.rpm}</span>
                      </div>
                    )}
                    {product.power && (
                      <div className="flex justify-between">
                        <span className="text-slate-600">Power</span>
                        <span className={`font-medium ${
                          parseInt(product.power.replace('W', '')) >= 45 ? 'text-green-600' : 
                          parseInt(product.power.replace('W', '')) >= 35 ? 'text-blue-600' : 
                          'text-slate-600'
                        }`}>{product.power}</span>
                      </div>
                    )}
                    {product.suction && (
                      <div className="flex justify-between">
                        <span className="text-slate-600">Suction</span>
                        <span className="font-medium">{product.suction}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Design */}
                <div>
                  <h4 className="text-sm font-semibold text-slate-700 mb-2">Design</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    {product.noise && (
                      <div className="flex justify-between">
                        <span className="text-slate-600">Noise</span>
                        <span className="font-medium">{product.noise}</span>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span className="text-slate-600">Dust Extractor</span>
                      <span className={`font-medium ${product.dustExtractor ? 'text-green-600' : 'text-slate-500'}`}>
                        {product.dustExtractor ? 'Built-in' : 'Separate'}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Price */}
                <div className="flex justify-between items-center pt-2 border-t border-slate-100">
                  <span className="text-sm text-slate-600">Price</span>
                  <span className="font-semibold text-blue-900">{product.price}</span>
                </div>

                {/* Pros/Cons */}
                <div className="space-y-2">
                  <div className="text-sm">
                    <span className="text-green-600">✓</span>
                    <span className="ml-1 text-slate-600">{product.pros.slice(0, 2).join(', ')}</span>
                  </div>
                  <div className="text-sm">
                    <span className="text-red-600">✗</span>
                    <span className="ml-1 text-slate-600">{product.cons.slice(0, 2).join(', ')}</span>
                  </div>
                </div>

                {/* CTA */}
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
