import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">E-File Reviews</h3>
            <p className="text-slate-400 text-sm">
              Professional technical analysis and expert reviews of e-files and nail equipment for UK clinical professionals.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Reviews</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="/reviews/saeyang-marathon-3" className="hover:text-white transition-colors">
                  Saeyang Marathon 3
                </Link>
              </li>
              <li>
                <Link href="/reviews/saeyang-cyclone-vac" className="hover:text-white transition-colors">
                  Cyclone Vac
                </Link>
              </li>
              <li>
                <Link href="/reviews/exo-runner-up" className="hover:text-white transition-colors">
                  EXO Runner Up
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="hover:text-white transition-colors">
                  All Reviews
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Compare</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="/compare/saeyang-handpieces" className="hover:text-white transition-colors">
                  Handpiece Comparison
                </Link>
              </li>
              <li>
                <Link href="/compare/e-files" className="hover:text-white transition-colors">
                  E-File Comparison
                </Link>
              </li>
              <li>
                <Link href="/compare/dust-extractors" className="hover:text-white transition-colors">
                  Dust Extractors
                </Link>
              </li>
              <li>
                <Link href="/compare" className="hover:text-white transition-colors">
                  All Comparisons
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">About</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  Our Testing Lab
                </Link>
              </li>
              <li>
                <Link href="/about/methodology" className="hover:text-white transition-colors">
                  Testing Methodology
                </Link>
              </li>
              <li>
                <Link href="/about/contact" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/about/disclaimer" className="hover:text-white transition-colors">
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-slate-400 mb-4 md:mb-0">
              &copy; 2024 E-File Reviews. Professional equipment analysis for UK nail technicians.
            </p>
            <div className="flex items-center gap-4">
              <a 
                href="https://coheal.co.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors"
              >
                Shop at Coheal UK
              </a>
              <span className="text-slate-600 text-sm">|</span>
              <a 
                href="https://coheal.co.uk/collections/e-files-micromotors"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors"
              >
                E-Files
              </a>
              <span className="text-slate-600 text-sm">|</span>
              <a 
                href="https://coheal.co.uk/collections/dust-extractors-ventilation"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors"
              >
                Dust Extractors
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
