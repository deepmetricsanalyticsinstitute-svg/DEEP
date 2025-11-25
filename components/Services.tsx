import React from 'react';

// Using a simple object for icons as SVG directly in TSX.
// In a real app, these might be actual SVG components or imported icons.
const serviceIcons = {
  dataScience: (
    <svg className="h-10 w-10 text-blue-600 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 10v2M19 10v2M3 6h18M3 18h18M11 4h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V5a1 1 0 011-1zm-7 10h2v2H7v-2zm-7-4h2v2H7v-2zm14 4h2v2h-2v-2zm0-4h2v2h-2v-2z" />
    </svg>
  ),
  predictiveAnalytics: (
    <svg className="h-10 w-10 text-green-600 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  machineLearning: (
    <svg className="h-10 w-10 text-purple-600 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  businessIntelligence: (
    <svg className="h-10 w-10 text-orange-600 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 13v-1m4 1v-1m4 1v-1M4 14V8a2 2 0 012-2h12a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2zm2-1h12M4 6v8l7 7h9a2 2 0 002-2v-8a2 2 0 00-2-2H6a2 2 0 00-2 2z" />
    </svg>
  ),
  customAIDevelopment: (
    <svg className="h-10 w-10 text-red-600 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  ),
};

export const Services: React.FC = () => {
  const services = [
    {
      name: 'Data Science Consulting',
      description: 'Expert guidance through complex data challenges, from strategy to implementation of robust data solutions.',
      icon: serviceIcons.dataScience,
    },
    {
      name: 'Predictive Analytics',
      description: 'Leverage historical data to forecast future trends, mitigate risks, and optimize business operations.',
      icon: serviceIcons.predictiveAnalytics,
    },
    {
      name: 'Machine Learning Solutions',
      description: 'Develop and deploy bespoke ML models for automation, personalization, and advanced decision-making.',
      icon: serviceIcons.machineLearning,
    },
    {
      name: 'Business Intelligence & Reporting',
      description: 'Transform raw data into intuitive dashboards and reports that provide a clear view of business performance.',
      icon: serviceIcons.businessIntelligence,
    },
    {
      name: 'Custom AI Development',
      description: 'Build tailored AI systems, including natural language processing and computer vision, to meet unique needs.',
      icon: serviceIcons.customAIDevelopment,
    },
  ];

  return (
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Services</h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
        We provide a comprehensive suite of analytical services designed to help organizations thrive in a data-driven world.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:-translate-y-1"
          >
            <div className="flex justify-center">{service.icon}</div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">{service.name}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
