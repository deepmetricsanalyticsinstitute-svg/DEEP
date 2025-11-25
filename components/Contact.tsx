import React, { useState } from 'react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear error for the field as user types
    if (errors[e.target.name]) {
      setErrors((prevErrors) => {
        const newErrors = { ...prevErrors };
        delete newErrors[e.target.name];
        return newErrors;
      });
    }
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name) newErrors.name = 'Name is required.';
    if (!formData.email) {
      newErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email address is invalid.';
    }
    if (!formData.message) newErrors.message = 'Message is required.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      // In a real application, you would send this data to a backend.
      // For this example, we'll simulate a successful submission.
      console.log('Form submitted:', formData);
      setStatus('success');
      setFormData({ name: '', email: '', message: '' }); // Clear form
      setTimeout(() => setStatus('idle'), 5000); // Reset status after 5 seconds
    } else {
      setStatus('error');
    }
  };

  return (
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-4xl font-bold text-gray-900 mb-6">Get in Touch</h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
        Have questions, project inquiries, or want to collaborate? Reach out to us using the form below, or find our contact details.
      </p>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">Send us a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-left text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500 ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                placeholder="Your Name"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1 text-left">{errors.name}</p>}
            </div>
            <div>
              <label htmlFor="email" className="block text-left text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500 ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                placeholder="you@example.com"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1 text-left">{errors.email}</p>}
            </div>
            <div>
              <label htmlFor="message" className="block text-left text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500 ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
                placeholder="Your Message"
              ></textarea>
              {errors.message && <p className="text-red-500 text-sm mt-1 text-left">{errors.message}</p>}
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-300 ease-in-out"
            >
              Send Message
            </button>
            {status === 'success' && (
              <p className="text-green-600 mt-4">Message sent successfully! We'll get back to you soon.</p>
            )}
            {status === 'error' && (
              <p className="text-red-600 mt-4">Please correct the errors in the form and try again.</p>
            )}
          </form>
        </div>

        {/* Contact Information */}
        <div className="bg-gradient-to-br from-blue-700 to-blue-900 p-8 rounded-lg shadow-lg text-white text-left flex flex-col justify-center">
          <h3 className="text-2xl font-semibold mb-6">Our Contact Details</h3>
          <div className="space-y-4">
            <p className="flex items-center text-lg">
              <svg className="w-6 h-6 mr-3 text-blue-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              123 Analytics Avenue, Dataville, CA 90210
            </p>
            <p className="flex items-center text-lg">
              <svg className="w-6 h-6 mr-3 text-blue-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +1 (123) 456-7890
            </p>
            <p className="flex items-center text-lg">
              <svg className="w-6 h-6 mr-3 text-blue-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              info@deepmetrics.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
