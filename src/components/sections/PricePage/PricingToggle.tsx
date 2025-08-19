
"use client"

// import React, { useState } from 'react';

// Define types for better type safety
// interface Feature {
//   id: number;
//   text: string;
// }

// interface PricingPlan {
//   id: number;
//   name: string;
//   monthlyPrice: number;
//   yearlyPrice: number;
//   features: Feature[];
//   buttonText: string;
//   isPopular: boolean;
//   buttonColor: string;
// }

// PricingToggle Component
// interface PricingToggleProps {
//   isYearly: boolean;
//   onToggle: (isYearly: boolean) => void;
// }

// const PricingToggle: React.FC<PricingToggleProps> = ({ isYearly, onToggle }) => {
//   return (
//     <div className="flex items-center justify-center mb-12">
//       <span className={`text-lg font-medium ${!isYearly ? 'text-blue-600' : 'text-gray-500'}`}>Monthly</span>
//       <label htmlFor="price-toggle" className="flex items-center cursor-pointer mx-4">
//         <div className="relative">
//           <input
//             type="checkbox"
//             id="price-toggle"
//             className="sr-only"
//             checked={isYearly}
//             onChange={() => onToggle(!isYearly)}
//           />
//           <div className="block bg-gray-300 w-14 h-8 rounded-full"></div>
//           <div
//             className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition-transform duration-300 ease-in-out ${
//               isYearly ? 'translate-x-full bg-blue-600' : ''
//             }`}
//           ></div>
//         </div>
//       </label>
//       <span className={`text-lg font-medium ${isYearly ? 'text-blue-600' : 'text-gray-500'}`}>Yearly</span>
//       <span className="ml-3 px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
//         Save 20%
//       </span>
//     </div>
//   );
// };

// FeatureList Component
// interface FeatureListProps {
//   features: Feature[];
// }

// const FeatureList: React.FC<FeatureListProps> = ({ features }) => {
//   return (
//     <ul className="space-y-3 text-gray-600 mb-8">
//       {features.map((feature) => (
//         <li key={feature.id} className="flex items-center">
//           <svg
//             className="w-5 h-5 text-green-500 mr-2"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
//           </svg>
//           {feature.text}
//         </li>
//       ))}
//     </ul>
//   );
// };

// PricingCard Component
// interface PricingCardProps {
//   plan: PricingPlan;
//   isYearly: boolean;
// }

// const PricingCard: React.FC<PricingCardProps> = ({ plan, isYearly }) => {
//   const price = isYearly ? plan.yearlyPrice : plan.monthlyPrice;

//   return (
//     <div
//       className={`relative bg-white rounded-xl shadow-lg p-8 transform hover:scale-105 transition-transform duration-300 ease-in-out
//         ${plan.isPopular ? 'border-4 border-blue-600' : 'border border-gray-200'}`}
//     >
//       {plan.isPopular && (
//         <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-semibold px-4 py-1 rounded-bl-lg rounded-tr-xl">
//           Most Popular
//         </div>
//       )}
//       <h3 className="text-2xl font-bold text-gray-800 mb-4">{plan.name}</h3>
//       <div className="text-5xl font-extrabold text-gray-900 mb-6">
//         ${price}
//         <span className="text-xl font-medium text-gray-500">/{isYearly ? 'year' : 'month'}</span>
//       </div>
//       <FeatureList features={plan.features} />
//       <button
//         className={`w-full py-3 rounded-lg text-white font-semibold text-lg transition-all duration-300 ease-in-out
//           ${plan.buttonColor} hover:opacity-90 shadow-md hover:shadow-lg`}
//       >
//         {plan.buttonText}
//       </button>
//     </div>
//   );
// };

// FAQItem Component
// interface FAQItemProps {
//   question: string;
//   answer: string;
// }

// const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className="border-b border-gray-200 py-4">
//       <button
//         className="flex justify-between items-center w-full text-left text-lg font-medium text-gray-800"
//         onClick={() => setIsOpen(!isOpen)}
//       >
//         {question}
//         <svg
//           className={`w-6 h-6 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
//         </svg>
//       </button>
//       {isOpen && <p className="mt-2 text-gray-600">{answer}</p>}
//     </div>
//   );
// };

// Main PricingPage Component
// const PricingPage: React.FC = () => {
//   const [isYearly, setIsYearly] = useState(false);

//   const pricingPlans: PricingPlan[] = [
//     {
//       id: 1,
//       name: 'Free',
//       monthlyPrice: 0,
//       yearlyPrice: 0,
//       features: [
//         { id: 1, text: 'Up to 5 projects' },
//         { id: 2, text: 'Basic task management' },
//         { id: 3, text: 'Limited storage (1GB)' },
//         { id: 4, text: 'Community support' },
//       ],
//       buttonText: 'Get Started Free',
//       isPopular: false,
//       buttonColor: 'bg-gray-700',
//     },
//     {
//       id: 2,
//       name: 'Pro',
//       monthlyPrice: 29,
//       yearlyPrice: 279, // $29 * 12 = $348. 20% off: $348 * 0.8 = $278.4, rounded to 279
//       features: [
//         { id: 1, text: 'Unlimited projects' },
//         { id: 2, text: 'Advanced task management' },
//         { id: 3, text: 'Priority support' },
//         { id: 4, text: 'Unlimited storage' },
//         { id: 5, text: 'Customizable workflows' },
//         { id: 6, text: 'Reporting & analytics' },
//       ],
//       buttonText: 'Start 14-Day Free Trial',
//       isPopular: true,
//       buttonColor: 'bg-blue-600',
//     },
//     {
//       id: 3,
//       name: 'Enterprise',
//       monthlyPrice: 99, // Placeholder, usually custom pricing
//       yearlyPrice: 999, // Placeholder
//       features: [
//         { id: 1, text: 'All Pro features' },
//         { id: 2, text: 'Dedicated account manager' },
//         { id: 3, text: 'SLA & Uptime guarantee' },
//         { id: 4, text: 'On-premise deployment' },
//         { id: 5, text: 'Custom integrations' },
//         { id: 6, text: 'Advanced security' },
//       ],
//       buttonText: 'Contact Sales',
//       isPopular: false,
//       buttonColor: 'bg-green-600',
//     },
//   ];

//   const faqs = [
//     {
//       question: 'What is dsv360?',
//       answer: 'dsv360 is a comprehensive platform designed to streamline your project management, team collaboration, and workflow automation needs. It helps businesses of all sizes to manage their tasks efficiently and achieve their goals.',
//     },
//     {
//       question: 'Can I change my plan later?',
//       answer: 'Yes, you can upgrade or downgrade your plan at any time from your account settings. Changes will be prorated.',
//     },
//     {
//       question: 'Do you offer a free trial?',
//       answer: 'Yes, the Pro plan comes with a 14-day free trial. You can start using it without providing credit card details.',
//     },
//     {
//       question: 'What payment methods do you accept?',
//       answer: 'We accept all major credit cards, including Visa, MasterCard, American Express, and Discover. We also support PayPal.',
//     },
//     {
//       question: 'Is my data secure?',
//       answer: 'Absolutely. We prioritize your data security with end-to-end encryption, regular backups, and compliance with industry standards like GDPR and SOC2.',
//     },
//   ];

//   return (
//     <div className="font-sans antialiased bg-gray-50 min-h-screen py-16 relative overflow-hidden">
//       {/* Global Styles for Font and Background Animation */}
//       <style jsx global>{`
//         @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
//         body {
//           font-family: 'Inter', sans-serif;
//         }

//         @keyframes gradient-animation {
//           0% {
//             background-position: 0% 50%;
//           }
//           50% {
//             background-position: 100% 50%;
//           }
//           100% {
//             background-position: 0% 50%;
//           }
//         }

//         .animated-gradient {
//           background: linear-gradient(
//             -45deg,
//             #e0f2f7, /* Light Blue */
//             #e3f2fd, /* Lighter Blue */
//             #cfd8dc, /* Light Gray Blue */
//             #e0f7fa /* Cyan Light */
//           );
//           background-size: 400% 400%;
//           animation: gradient-animation 15s ease infinite;
//         }

//         @keyframes bubble-float {
//           0% {
//             transform: translateY(0) translateX(0) scale(0.5);
//             opacity: 0;
//           }
//           25% {
//             opacity: 1;
//           }
//           100% {
//             transform: translateY(-100vh) translateX(var(--bubble-x-offset)) scale(var(--bubble-scale));
//             opacity: 0;
//           }
//         }

//         .bubble {
//           position: absolute;
//           background: rgba(0, 0, 0, 0.2); /* Darker color for bubbles */
//           border-radius: 50%;
//           pointer-events: none;
//           animation: bubble-float linear infinite;
//         }

//         .bubble:nth-child(1) {
//           width: 20px;
//           height: 20px;
//           left: 10%;
//           animation-duration: 15s;
//           animation-delay: 0s;
//           --bubble-x-offset: 20px;
//           --bubble-scale: 1.2;
//         }
//         .bubble:nth-child(2) {
//           width: 40px;
//           height: 40px;
//           left: 25%;
//           animation-duration: 20s;
//           animation-delay: 2s;
//           --bubble-x-offset: -30px;
//           --bubble-scale: 0.8;
//         }
//         .bubble:nth-child(3) {
//           width: 30px;
//           height: 30px;
//           left: 50%;
//           animation-duration: 18s;
//           animation-delay: 4s;
//           --bubble-x-offset: 10px;
//           --bubble-scale: 1.5;
//         }
//         .bubble:nth-child(4) {
//           width: 25px;
//           height: 25px;
//           left: 70%;
//           animation-duration: 17s;
//           animation-delay: 6s;
//           --bubble-x-offset: -50px;
//           --bubble-scale: 0.7;
//         }
//         .bubble:nth-child(5) {
//           width: 35px;
//           height: 35px;
//           left: 85%;
//           animation-duration: 22s;
//           animation-delay: 8s;
//           --bubble-x-offset: 40px;
//           --bubble-scale: 1.1;
//         }
//         .bubble:nth-child(6) {
//           width: 22px;
//           height: 22px;
//           left: 15%;
//           animation-duration: 16s;
//           animation-delay: 1s;
//           --bubble-x-offset: -10px;
//           --bubble-scale: 0.9;
//         }
//         .bubble:nth-child(7) {
//           width: 45px;
//           height: 45px;
//           left: 40%;
//           animation-duration: 25s;
//           animation-delay: 3s;
//           --bubble-x-offset: 60px;
//           --bubble-scale: 1.3;
//         }
//         .bubble:nth-child(8) {
//           width: 28px;
//           height: 28px;
//           left: 60%;
//           animation-duration: 19s;
//           animation-delay: 5s;
//           --bubble-x-offset: -20px;
//           --bubble-scale: 1.0;
//         }
//         .bubble:nth-child(9) {
//           width: 38px;
//           height: 38px;
//           left: 90%;
//           animation-duration: 21s;
//           animation-delay: 7s;
//           --bubble-x-offset: 30px;
//           --bubble-scale: 1.4;
//         }
//         .bubble:nth-child(10) {
//           width: 32px;
//           height: 32px;
//           left: 5%;
//           animation-duration: 14s;
//           animation-delay: 9s;
//           --bubble-x-offset: -40px;
//           --bubble-scale: 0.6;
//         }
//       `}</style>

//       {/* Animated Background Layer */}
//       <div className="animated-gradient absolute inset-0 z-0 opacity-60"></div>

//       {/* Bubble Animation Layer */}
//       <div className="absolute inset-0 z-0 overflow-hidden">
//         {[...Array(10)].map((_, i) => (
//           <div key={i} className="bubble"></div>
//         ))}
//       </div>

//       {/* Main Content Container */}
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
//         {/* Hero Section */}
//         <div className="text-center mb-16">
//           <h1 className="text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
//             Simple, Transparent Pricing
//           </h1>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Choose the plan that fits your needs. No hidden fees, no surprises.
//             Start with a free trial and scale as you grow.
//           </p>
//         </div>

//         {/* Pricing Toggle */}
//         <PricingToggle isYearly={isYearly} onToggle={setIsYearly} />

//         {/* Pricing Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
//           {pricingPlans.map((plan) => (
//             <PricingCard key={plan.id} plan={plan} isYearly={isYearly} />
//           ))}
//         </div>

//         {/* FAQ Section */}
//         <div className="max-w-4xl mx-auto mb-20">
//           <h2 className="text-4xl font-bold text-gray-900 text-center mb-10">
//             Frequently Asked Questions
//           </h2>
//           <div className="bg-white rounded-xl shadow-lg p-8">
//             {faqs.map((faq, index) => (
//               <FAQItem key={index} question={faq.question} answer={faq.answer} />
//             ))}
//           </div>
//         </div>

//         {/* Call to Action at the Bottom */}
//         <div className="text-center bg-blue-600 text-white rounded-xl p-12 shadow-lg max-w-5xl mx-auto">
//           <h2 className="text-4xl font-bold mb-4">Ready to get started with dsv360?</h2>
//           <p className="text-xl mb-8">
//             Join thousands of teams who are already boosting their productivity.
//           </p>
//           <button className="bg-white text-blue-600 font-bold py-4 px-8 rounded-full text-lg hover:bg-blue-50 transition-colors duration-300 shadow-lg">
//             Start Your Free Trial Today
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PricingPage;




import React, { useState } from 'react';

// Define types for better type safety
interface Feature {
  id: number;
  text: string;
}

interface PricingPlan {
  id: number;
  name: string;
  monthlyPrice: number;
  yearlyPrice: number;
  features: Feature[];
  buttonText: string;
  isPopular: boolean;
  buttonColor: string;
}

// PricingToggle Component
interface PricingToggleProps {
  isYearly: boolean;
  onToggle: (isYearly: boolean) => void;
}

const PricingToggle: React.FC<PricingToggleProps> = ({ isYearly, onToggle }) => {
  return (
    <div className="flex items-center justify-center mb-12">
      <span className={`text-lg font-medium ${!isYearly ? 'text-blue-600' : 'text-gray-500'}`}>Monthly</span>
      <label htmlFor="price-toggle" className="flex items-center cursor-pointer mx-4">
        <div className="relative">
          <input
            type="checkbox"
            id="price-toggle"
            className="sr-only"
            checked={isYearly}
            onChange={() => onToggle(!isYearly)}
          />
          <div className="block bg-gray-300 w-14 h-8 rounded-full"></div>
          <div
            className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition-transform duration-300 ease-in-out ${
              isYearly ? 'translate-x-full bg-blue-600' : ''
            }`}
          ></div>
        </div>
      </label>
      <span className={`text-lg font-medium ${isYearly ? 'text-blue-600' : 'text-gray-500'}`}>Yearly</span>
      <span className="ml-3 px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
        Save 20%
      </span>
    </div>
  );
};

// FeatureList Component
interface FeatureListProps {
  features: Feature[];
}

const FeatureList: React.FC<FeatureListProps> = ({ features }) => {
  return (
    <ul className="space-y-3 text-gray-600 mb-8">
      {features.map((feature) => (
        <li key={feature.id} className="flex items-center">
          <svg
            className="w-5 h-5 text-green-500 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
          {feature.text}
        </li>
      ))}
    </ul>
  );
};

// PricingCard Component
interface PricingCardProps {
  plan: PricingPlan;
  isYearly: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({ plan, isYearly }) => {
  const price = isYearly ? plan.yearlyPrice : plan.monthlyPrice;

  return (
    <div
      className={`relative bg-white rounded-xl shadow-lg p-8 transform hover:scale-105 transition-transform duration-300 ease-in-out
        ${plan.isPopular ? 'border-4 border-blue-600' : 'border border-gray-200'}`}
    >
      {plan.isPopular && (
       <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-semibold px-4 py-1 rounded-bl-lg">
  Most Popular
</div>

      )}
      <h3 className="text-2xl font-bold text-gray-800 mb-4">{plan.name}</h3>
      <div className="text-5xl font-extrabold text-gray-900 mb-6">
        ${price}
        <span className="text-xl font-medium text-gray-500">/{isYearly ? 'year' : 'month'}</span>
      </div>
      <FeatureList features={plan.features} />
      <button
        className={`w-full py-3 rounded-lg text-white font-semibold text-lg transition-all duration-300 ease-in-out
          ${plan.buttonColor} hover:opacity-90 shadow-md hover:shadow-lg`}
      >
        {plan.buttonText}
      </button>
    </div>
  );
};

// FAQItem Component
interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex justify-between items-center w-full text-left text-lg font-medium text-gray-800"
        onClick={() => setIsOpen(!isOpen)}
      >
        {question}
        <svg
          className={`w-6 h-6 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      {isOpen && <p className="mt-2 text-gray-600">{answer}</p>}
    </div>
  );
};

// Main PricingPage Component
const PricingPage: React.FC = () => {
  const [isYearly, setIsYearly] = useState(false);

  const pricingPlans: PricingPlan[] = [
    {
      id: 1,
      name: 'Free',
      monthlyPrice: 0,
      yearlyPrice: 0,
      features: [
        { id: 1, text: 'Up to 5 projects' },
        { id: 2, text: 'Basic task management' },
        { id: 3, text: 'Limited storage (1GB)' },
        { id: 4, text: 'Community support' },
      ],
      buttonText: 'Get Started Free',
      isPopular: false,
      buttonColor: 'bg-gray-700',
    },
    {
      id: 2,
      name: 'Pro',
      monthlyPrice: 29,
      yearlyPrice: 279, // $29 * 12 = $348. 20% off: $348 * 0.8 = $278.4, rounded to 279
      features: [
        { id: 1, text: 'Unlimited projects' },
        { id: 2, text: 'Advanced task management' },
        { id: 3, text: 'Priority support' },
        { id: 4, text: 'Unlimited storage' },
        { id: 5, text: 'Customizable workflows' },
        { id: 6, text: 'Reporting & analytics' },
      ],
      buttonText: 'Start 14-Day Free Trial',
      isPopular: true,
      buttonColor: 'bg-blue-600',
    },
    {
      id: 3,
      name: 'Enterprise',
      monthlyPrice: 99, // Placeholder, usually custom pricing
      yearlyPrice: 999, // Placeholder
      features: [
        { id: 1, text: 'All Pro features' },
        { id: 2, text: 'Dedicated account manager' },
        { id: 3, text: 'SLA & Uptime guarantee' },
        { id: 4, text: 'On-premise deployment' },
        { id: 5, text: 'Custom integrations' },
        { id: 6, text: 'Advanced security' },
      ],
      buttonText: 'Contact Sales',
      isPopular: false,
      buttonColor: 'bg-green-600',
    },
  ];

  const faqs = [
    {
      question: 'What is dsv360?',
      answer: 'dsv360 is a comprehensive platform designed to streamline your project management, team collaboration, and workflow automation needs. It helps businesses of all sizes to manage their tasks efficiently and achieve their goals.',
    },
    {
      question: 'Can I change my plan later?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time from your account settings. Changes will be prorated.',
    },
    {
      question: 'Do you offer a free trial?',
      answer: 'Yes, the Pro plan comes with a 14-day free trial. You can start using it without providing credit card details.',
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, including Visa, MasterCard, American Express, and Discover. We also support PayPal.',
    },
    {
      question: 'Is my data secure?',
      answer: 'Absolutely. We prioritize your data security with end-to-end encryption, regular backups, and compliance with industry standards like GDPR and SOC2.',
    },
  ];

  return (
    <div className="font-sans antialiased bg-gray-50 min-h-screen py-16 relative overflow-hidden">
      {/* Global Styles for Font and Background Animation */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
        body {
          font-family: 'Inter', sans-serif;
        }

        @keyframes gradient-animation {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .animated-gradient {
          background: linear-gradient(
            -45deg,
            #e0f2f7, /* Light Blue */
            #e3f2fd, /* Lighter Blue */
            #cfd8dc, /* Light Gray Blue */
            #e0f7fa /* Cyan Light */
          );
          background-size: 400% 400%;
          animation: gradient-animation 15s ease infinite;
        }

        @keyframes bubble-float {
          0% {
            transform: translate(var(--initial-x), var(--initial-y)) scale(0.5);
            opacity: 0;
          }
          25% {
            opacity: 1;
          }
          100% {
            transform: translate(var(--final-x), var(--final-y)) scale(var(--bubble-scale));
            opacity: 0;
          }
        }

       .bubble {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  opacity: 0;
  animation: bubble-float linear infinite;
  animation-fill-mode: forwards; /* Prevent initial flash */
  will-change: transform, opacity;
}


        /* Assigning specific dark colors and varied movement parameters to each bubble */
        .bubble:nth-child(1) {
          background-color: #8B0000; /* Dark Red */
          width: 20px;
          height: 20px;
          --initial-x: 10vw;
          --initial-y: 80vh;
          --final-x: 90vw;
          --final-y: -20vh;
          animation-duration: 15s;
          animation-delay: 0s;
          --bubble-scale: 1.2;
        }
        .bubble:nth-child(2) {
          background-color: #00008B; /* Dark Blue */
          width: 40px;
          height: 40px;
          --initial-x: 25vw;
          --initial-y: 90vh;
          --final-x: -10vw;
          --final-y: -10vh;
          animation-duration: 20s;
          animation-delay: 2s;
          --bubble-scale: 0.8;
        }
        .bubble:nth-child(3) {
          background-color: #006400; /* Dark Green */
          width: 30px;
          height: 30px;
          --initial-x: 50vw;
          --initial-y: 70vh;
          --final-x: 70vw;
          --final-y: -30vh;
          animation-duration: 18s;
          animation-delay: 4s;
          --bubble-scale: 1.5;
        }
        .bubble:nth-child(4) {
          background-color: #4B0082; /* Indigo/Dark Purple */
          width: 25px;
          height: 25px;
          --initial-x: 70vw;
          --initial-y: 95vh;
          --final-x: 10vw;
          --final-y: -5vh;
          animation-duration: 17s;
          animation-delay: 6s;
          --bubble-scale: 0.7;
        }
        .bubble:nth-child(5) {
          background-color: #DAA520; /* Goldenrod/Dark Yellow */
          width: 35px;
          height: 35px;
          --initial-x: 85vw;
          --initial-y: 85vh;
          --final-x: 20vw;
          --final-y: -25vh;
          animation-duration: 22s;
          animation-delay: 8s;
          --bubble-scale: 1.1;
        }
        .bubble:nth-child(6) {
          background-color: #8B4513; /* Saddle Brown */
          width: 22px;
          height: 22px;
          --initial-x: 15vw;
          --initial-y: 75vh;
          --final-x: 80vw;
          --final-y: -15vh;
          animation-duration: 16s;
          animation-delay: 1s;
          --bubble-scale: 0.9;
        }
        .bubble:nth-child(7) {
          background-color: #2F4F4F; /* Dark Slate Gray */
          width: 45px;
          height: 45px;
          --initial-x: 40vw;
          --initial-y: 90vh;
          --final-x: 0vw;
          --final-y: -40vh;
          animation-duration: 25s;
          animation-delay: 3s;
          --bubble-scale: 1.3;
        }
        .bubble:nth-child(8) {
          background-color: #556B2F; /* Dark Olive Green */
          width: 28px;
          height: 28px;
          --initial-x: 60vw;
          --initial-y: 80vh;
          --final-x: 30vw;
          --final-y: -10vh;
          animation-duration: 19s;
          animation-delay: 5s;
          --bubble-scale: 1.0;
        }
        .bubble:nth-child(9) {
          background-color: #6A5ACD; /* Slate Blue */
          width: 38px;
          height: 38px;
          --initial-x: 90vw;
          --initial-y: 70vh;
          --final-x: 5vw;
          --final-y: -35vh;
          animation-duration: 21s;
          animation-delay: 7s;
          --bubble-scale: 1.4;
        }
        .bubble:nth-child(10) {
          background-color: #B22222; /* Firebrick */
          width: 32px;
          height: 32px;
          --initial-x: 5vw;
          --initial-y: 95vh;
          --final-x: 75vw;
          --final-y: -5vh;
          animation-duration: 14s;
          animation-delay: 9s;
          --bubble-scale: 0.6;
        }
      `}</style>

      {/* Animated Background Layer */}
      <div className="animated-gradient absolute inset-0 z-0 opacity-60"></div>

      {/* Bubble Animation Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="bubble"></div>
        ))}
      </div>

      {/* Main Content Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the plan that fits your needs. No hidden fees, no surprises.
            Start with a free trial and scale as you grow.
          </p>
        </div>

        {/* Pricing Toggle */}
        <PricingToggle isYearly={isYearly} onToggle={setIsYearly} />

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {pricingPlans.map((plan) => (
            <PricingCard key={plan.id} plan={plan} isYearly={isYearly} />
          ))}
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto mb-20">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-10">
            Frequently Asked Questions
          </h2>
          <div className="bg-white rounded-xl shadow-lg p-8">
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>

        {/* Call to Action at the Bottom */}
        <div className="text-center bg-blue-600 text-white rounded-xl p-12 shadow-lg max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">Ready to get started with dsv360?</h2>
          <p className="text-xl mb-8">
            Join thousands of teams who are already boosting their productivity.
          </p>
          <button className="bg-white text-blue-600 font-bold py-4 px-8 rounded-full text-lg hover:bg-blue-50 transition-colors duration-300 shadow-lg">
            Start Your Free Trial Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
