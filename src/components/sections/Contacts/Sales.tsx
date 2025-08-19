"use client"
import React, { useState } from 'react';
import { Mail, Phone, Building, Users, MessageSquare, User, CheckCircle } from 'lucide-react';

const Sales = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    workEmail: '',
    companyName: '',
    teamSize: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log('Form submitted:', formData);
    setIsLoading(false);
    setIsSubmitted(true);
    // Optionally reset form after a short delay
    setTimeout(() => {
      setFormData({
        firstName: '',
        workEmail: '',
        companyName: '',
        teamSize: '',
        message: '',
      });
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 font-inter text-gray-800 py-16 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Left Section: Hero Content */}
        <div className="lg:pr-10 animate-fade-in-up">
          <h1 className="text-5xl sm:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
            Unlock Your Potential with <span className="text-blue-600">DSV360 Sales</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-8">
            Ready to transform your sales process? Fill out the form to schedule a personalized demo and discover how DSV360 can empower your team.
          </p>
          <ul className="space-y-4 text-gray-700 text-lg">
            <li className="flex items-center">
              <CheckCircle className="text-green-500 mr-3 flex-shrink-0" size={24} />
              Personalized Demo & Consultation
            </li>
            <li className="flex items-center">
              <CheckCircle className="text-green-500 mr-3 flex-shrink-0" size={24} />
              Review Your Specific Requirements
            </li>
            <li className="flex items-center">
              <CheckCircle className="text-green-500 mr-3 flex-shrink-0" size={24} />
              Discuss Features & Tailored Pricing
            </li>
          </ul>
        </div>

        {/* Right Section: Contact Form */}
        <div className="bg-white p-8 sm:p-10 rounded-3xl shadow-2xl border border-gray-100 transform hover:shadow-3xl transition-all duration-300 animate-fade-in-right">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Schedule a Demo</h2>

          {isSubmitted ? (
            <div className="text-center py-10">
              <CheckCircle className="text-green-500 mx-auto mb-4" size={64} />
              <p className="text-xl font-semibold text-gray-700">Thank you for your submission!</p>
              <p className="text-md text-gray-500 mt-2">We'll be in touch shortly to schedule your personalized demo.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* First Name */}
              <div>
                <label htmlFor="firstName" className="sr-only">First Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First Name"
                    required
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-blue-500 focus:border-blue-500 transition duration-200 shadow-sm outline-none"
                  />
                </div>
              </div>

              {/* Work Email */}
              <div>
                <label htmlFor="workEmail" className="sr-only">Work Email</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="email"
                    name="workEmail"
                    id="workEmail"
                    value={formData.workEmail}
                    onChange={handleChange}
                    placeholder="Work Email"
                    required
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-blue-500 focus:border-blue-500 transition duration-200 shadow-sm outline-none"
                  />
                </div>
              </div>

              {/* Company Name */}
              <div>
                <label htmlFor="companyName" className="sr-only">Company Name</label>
                <div className="relative">
                  <Building className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="text"
                    name="companyName"
                    id="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    placeholder="Company Name"
                    required
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-blue-500 focus:border-blue-500 transition duration-200 shadow-sm outline-none"
                  />
                </div>
              </div>

              {/* Team Size */}
              <div>
                <label htmlFor="teamSize" className="sr-only">Team Size</label>
                <div className="relative">
                  <Users className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <select
                    name="teamSize"
                    id="teamSize"
                    value={formData.teamSize}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl bg-white focus:ring-blue-500 focus:border-blue-500 transition duration-200 shadow-sm appearance-none outline-none"
                  >
                    <option value="" disabled>Select Team Size</option>
                    <option value="1-10">1-10</option>
                    <option value="11-50">11-50</option>
                    <option value="51-200">51-200</option>
                    <option value="201-500">201-500</option>
                    <option value="500+">500+</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-700">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 6.757 7.586 5.343 9z"/></svg>
                  </div>
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="sr-only">Message</label>
                <div className="relative">
                  <MessageSquare className="absolute left-4 top-4 text-gray-400" size={20} />
                  <textarea
                    name="message"
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your needs..."
                    rows={4}
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-blue-500 focus:border-blue-500 transition duration-200 shadow-sm outline-none resize-y"
                  ></textarea>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-xl font-semibold text-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 flex items-center justify-center"
                disabled={isLoading}
              >
                {isLoading ? (
                  <svg className="animate-spin h-5 w-5 text-white mr-3" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                ) : (
                  'Schedule Your Demo'
                )}
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Tailwind CSS Custom Animations (add to your global CSS or a style block if this is a standalone HTML) */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap');

        .font-inter {
          font-family: 'Inter', sans-serif;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(20px); }
          to { opacity: 1; transform: translateX(0); }
        }

        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-fade-in-right {
          animation: fadeInRight 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Sales;
