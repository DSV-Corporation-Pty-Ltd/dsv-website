// import React from 'react';
// import { twMerge } from 'tailwind-merge';

// interface CardProps {
//   children: React.ReactNode;
//   className?: string;
// }

// const Card: React.FC<CardProps> = ({ children, className }) => {
//   return (
//     <div className={twMerge(
//       "bg-white rounded-lg shadow-md p-6 border border-gray-100",
//       className
//     )}>
//       {children}
//     </div>
//   );
// };

// export default Card;


// import React from 'react';
// import { twMerge } from 'tailwind-merge';

// interface CardProps {
//   children: React.ReactNode;
//   className?: string;
// }

// const Card: React.FC<CardProps> = ({ children, className }) => {
//   return (
//     <div
//       className={twMerge(
//         "bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-6 border border-gray-200",
//         className
//       )}
//     >
//       {children}
//     </div>
//   );
// };

// export default Card;


import React from 'react';
import { twMerge } from 'tailwind-merge';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className }) => {
  return (
    <div className="relative group">
      {/* Animated gradient border layer */}
      <div className="absolute inset-0 rounded-2xl p-[2px] bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm animate-border" />

      {/* Main Card content */}
      <div
        className={twMerge(
          "relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border border-gray-200 group-hover:border-transparent z-10",
          className
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default Card;

