// import React from 'react';
// import { motion } from 'framer-motion';
// import { twMerge } from 'tailwind-merge'; // For smart class merging

// interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
//   variant?: 'primary' | 'outline';
//   size?: 'default' | 'large';
//   children: React.ReactNode;
//   className?: string;
// }

// const Button: React.FC<ButtonProps> = ({
//   variant = 'primary',
//   size = 'default',
//   children,
//   className,
//   ...props
// }) => {
//   const baseClasses = 'font-semibold rounded-md transition-all duration-300 ease-in-out';
//   const sizeClasses = {
//     default: 'px-6 py-3 text-base',
//     large: 'px-8 py-4 text-lg',
//   };
//   const variantClasses = {
//     primary: 'bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800',
//     outline: 'border border-blue-600 text-blue-600 hover:bg-blue-50 hover:text-blue-700 active:bg-blue-100',
//   };

//   return (
//     <motion.button
//       whileHover={{ scale: 1.02 }} // Slightly larger on hover
//       whileTap={{ scale: 0.98 }}   // Slightly smaller on click
//       className={twMerge(baseClasses, sizeClasses[size], variantClasses[variant], className)}
//       {...props}
//     >
//       {children}
//     </motion.button>
//   );
// };

// export default Button;



import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { twMerge } from 'tailwind-merge';

type MotionButtonProps = Omit<React.ComponentPropsWithoutRef<'button'>, 'onDrag'> & HTMLMotionProps<'button'>;

interface ButtonProps extends MotionButtonProps {
  variant?: 'primary' | 'outline';
  size?: 'default' | 'large';
  className?: string;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'default',
  children,
  className,
  ...props
}) => {
  const baseClasses = 'font-semibold rounded-md transition-all duration-300 ease-in-out';
  const sizeClasses = {
    default: 'px-6 py-3 text-base',
    large: 'px-8 py-4 text-lg',
  };
  const variantClasses = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800',
    outline: 'border border-blue-600 text-blue-600 hover:bg-blue-50 hover:text-blue-700 active:bg-blue-100',
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={twMerge(baseClasses, sizeClasses[size], variantClasses[variant], className)}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;
