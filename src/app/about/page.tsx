export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-slate-100">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">
              About E-File Reviews
            </h1>
            <p className="text-lg text-slate-600">
              Professional technical analysis and expert reviews for UK nail technicians
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                Our Mission
              </h2>
              <p className="text-slate-600 mb-4">
                We provide comprehensive, unbiased technical analysis of professional e-files and nail equipment. Our mission is to help UK nail technicians make informed decisions based on real performance data rather than marketing claims.
              </p>
              <p className="text-slate-600">
                Through rigorous testing and expert evaluation, we bridge the gap between technical specifications and real-world performance, ensuring you get the right equipment for your professional needs.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                Our Testing Methodology
              </h2>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start">
                  <span className="text-blue-900 mr-2">•</span>
                  Laboratory-grade torque and RPM testing
                </li>
                <li className="flex items-start">
                  <span className="text-blue-900 mr-2">•</span>
                  Vibration analysis with professional equipment
                </li>
                <li className="flex items-start">
                  <span className="text-blue-900 mr-2">•</span>
                  Real-world material removal testing
                </li>
                <li className="flex items-start">
                  <span className="text-blue-900 mr-2">•</span>
                  Long-term reliability assessment
                </li>
                <li className="flex items-start">
                  <span className="text-blue-900 mr-2">•</span>
                  Clinical safety evaluation
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-8 mb-16">
            <h2 className="text-2xl font-semibold text-slate-900 mb-6">
              Our Expert Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">
                  Dr. James Thompson, PhD
                </h3>
                <p className="text-slate-600 mb-2">
                  Clinical Equipment Specialist
                </p>
                <p className="text-slate-600 text-sm">
                  With over 15 years of experience in clinical equipment evaluation, Dr. Thompson brings scientific rigor to our testing methodology. His expertise in biomechanics and equipment safety ensures our reviews meet the highest professional standards.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">
                  Sarah Mitchell
                </h3>
                <p className="text-slate-600 mb-2">
                  Senior Nail Technician & Reviewer
                </p>
                <p className="text-slate-600 text-sm">
                  A practicing nail technician with 10+ years of experience, Sarah provides practical insights into how equipment performs in real salon environments. Her expertise spans both traditional and advanced nail technologies.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 rounded-lg p-8 mb-16">
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">
              Why Trust Our Reviews?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-semibold text-blue-800 mb-2">
                  Independent Testing
                </h3>
                <p className="text-blue-700 text-sm">
                  We purchase all products independently and conduct our own testing without manufacturer influence.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-blue-800 mb-2">
                  Technical Expertise
                </h3>
                <p className="text-blue-700 text-sm">
                  Our team combines clinical knowledge with technical expertise to provide comprehensive analysis.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-blue-800 mb-2">
                  Real-World Focus
                </h3>
                <p className="text-blue-700 text-sm">
                  We test equipment in conditions that reflect actual professional use, not just laboratory settings.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              Get in Touch
            </h2>
            <p className="text-slate-600 mb-6">
              Have questions about our reviews or want to suggest products for testing?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:reviews@efilereviews.co.uk"
                className="inline-flex items-center bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition-colors"
              >
                Contact Us
              </a>
              <a 
                href="https://coheal.co.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-white text-blue-900 border border-blue-900 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors"
              >
                Shop at Coheal UK
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
