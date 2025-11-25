import React from 'react';

export const Research: React.FC = () => {
  const researchAreas = [
    {
      title: 'AI Ethics & Explainability',
      description: 'Developing frameworks and tools for transparent, fair, and accountable AI systems.',
      image: 'https://picsum.photos/400/250?random=2',
    },
    {
      title: 'Big Data Monetization Strategies',
      description: 'Researching innovative approaches for businesses to extract maximum value from their vast datasets.',
      image: 'https://picsum.photos/400/250?random=3',
    },
    {
      title: 'Quantum Machine Learning',
      description: 'Exploring the intersection of quantum computing and machine learning for enhanced computational power.',
      image: 'https://picsum.photos/400/250?random=4',
    },
    {
      title: 'Financial Risk Modeling with AI',
      description: 'Advanced methodologies for predicting and managing financial risks using cutting-edge AI techniques.',
      image: 'https://picsum.photos/400/250?random=5',
    },
  ];

  return (
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-4xl font-bold text-gray-900 mb-6">Cutting-Edge Research</h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
        Our dedicated research team is constantly pushing the boundaries of data science and AI, contributing to academic advancement and practical applications.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {researchAreas.map((area, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:-translate-y-1"
          >
            <img src={area.image} alt={area.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">{area.title}</h3>
              <p className="text-gray-600">{area.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <a
          href="#"
          className="rounded-md bg-blue-600 px-6 py-3 text-lg font-semibold text-white shadow-md hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition duration-300 ease-in-out"
        >
          View All Publications
        </a>
      </div>
    </div>
  );
};
