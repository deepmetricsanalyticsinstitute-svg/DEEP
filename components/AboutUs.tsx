import React from 'react';

export const AboutUs: React.FC = () => {
  return (
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-4xl font-bold text-gray-900 mb-6">About Deepmetrics Analytics Institute</h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
        At Deepmetrics, we are pioneers in leveraging cutting-edge analytics and artificial intelligence to empower businesses and organizations worldwide.
      </p>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="text-left">
          <h3 className="text-3xl font-semibold text-gray-800 mb-4">Our Mission</h3>
          <p className="text-lg text-gray-700 mb-8">
            Our mission is to unlock the full potential of data, transforming complex information into clear, actionable insights that drive strategic decision-making and sustainable growth for our clients. We strive to be at the forefront of analytical innovation.
          </p>

          <h3 className="text-3xl font-semibold text-gray-800 mb-4">Our Vision</h3>
          <p className="text-lg text-gray-700 mb-8">
            To be the leading global institute recognized for excellence in advanced analytics, fostering a data-driven world where intelligent insights are accessible and impactful for everyone.
          </p>

          <h3 className="text-3xl font-semibold text-gray-800 mb-4">Our Values</h3>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
            <li><strong>Innovation:</strong> Continuously exploring new methodologies and technologies.</li>
            <li><strong>Integrity:</strong> Upholding the highest ethical standards in data handling and analysis.</li>
            <li><strong>Excellence:</strong> Delivering superior quality and impactful solutions.</li>
            <li><strong>Collaboration:</strong> Partnering closely with clients to achieve shared success.</li>
            <li><strong>Impact:</strong> Creating measurable and positive change through our work.</li>
          </ul>
        </div>

        <div className="relative flex justify-center items-center h-80 md:h-[450px] rounded-lg overflow-hidden shadow-xl">
          <img
            src="https://picsum.photos/800/600?random=1"
            alt="Deepmetrics Team Working"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute inset-0 bg-blue-900 opacity-30"></div> {/* Dark overlay */}
          <p className="relative z-10 text-white text-3xl font-bold p-4 bg-black bg-opacity-40 rounded-lg">
            Driven by Data, Defined by Impact
          </p>
        </div>
      </div>
    </div>
  );
};
