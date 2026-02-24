export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-slate-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            E-File Professional Reviews
          </h1>
          <p className="text-xl text-slate-600 mb-8">
            Clinical Equipment Analysis for UK Nail Technicians
          </p>
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">
              Professional Equipment Reviews
            </h2>
            <p className="text-slate-600 mb-6">
              Expert technical analysis of Saeyang Marathon 3, dust extractors, and professional e-files for clinical use.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-2">Technical Specs</h3>
                <p className="text-blue-700 text-sm">Torque, RPM, Vibration Analysis</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-lg">
                <h3 className="font-semibold text-slate-900 mb-2">Expert Reviews</h3>
                <p className="text-slate-700 text-sm">Clinical Professional Analysis</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
