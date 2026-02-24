export default function BuyingGuide() {
  const buyingTips = [
    {
      title: "Torque Power",
      description: "Look for minimum 4.0 Ncm torque for professional use. Higher torque means better cutting power for thick acrylics and calluses.",
      importance: "Critical"
    },
    {
      title: "Vibration Control",
      description: "Choose devices with < 2.5 m/s² vibration. Lower vibration reduces hand fatigue and prevents White Finger Syndrome.",
      importance: "Critical"
    },
    {
      title: "RPM Range",
      description: "Professional e-files should offer 0-30,000 RPM range. Variable speed control is essential for different applications.",
      importance: "Important"
    },
    {
      title: "Build Quality",
      description: "Stainless steel or aluminum alloy construction with ergonomic grip. Check warranty period - minimum 2 years recommended.",
      importance: "Important"
    },
    {
      title: "Safety Certifications",
      description: "Ensure CE and UKCA certification for UK market. Look for electrical safety features and medical-grade standards.",
      importance: "Critical"
    },
    {
      title: "Noise Level",
      description: "Quiet operation (< 65 dB) is crucial for clinical environments. Consider noise for patient comfort in podiatry clinics.",
      importance: "Important"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Professional E-File Buying Guide
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Essential factors to consider when choosing professional nail equipment for clinical use
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {buyingTips.map((tip, index) => (
            <div key={index} className="bg-slate-50 rounded-lg p-6 border border-slate-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-slate-900">
                  {tip.title}
                </h3>
                <span className={`px-2 py-1 rounded text-xs font-medium ${
                  tip.importance === 'Critical' 
                    ? 'bg-red-100 text-red-800' 
                    : 'bg-blue-100 text-blue-800'
                }`}>
                  {tip.importance}
                </span>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                {tip.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-blue-50 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-blue-900 mb-4">
            Ready to Choose Your Professional E-File?
          </h3>
          <p className="text-blue-800 mb-6 max-w-2xl mx-auto">
            Browse our curated selection of clinically-approved e-files and dust extractors. 
            All products tested by UK healthcare professionals.
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
            <a 
              href="https://coheal.co.uk/collections/dust-extractors-ventilation"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-white text-blue-900 border border-blue-900 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors"
            >
              Shop Dust Extractors
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
