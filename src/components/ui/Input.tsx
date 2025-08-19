// src/components/ui/Input.tsx
import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion'; // Import HTMLMotionProps

// Define the base props for our Input component,
// omitting the problematic drag-related handlers from React's HTML attributes.
// Framer Motion has its own drag handlers which clash with React's native ones.
interface InputProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    'onDrag' | 'onDragEnd' | 'onDragEnter' | 'onDragExit' | 'onDragLeave' | 'onDragOver' | 'onDragStart' | 'onDrop'
  > {
  id: string;
  label: string;
  className?: string;
}

const Input: React.FC<InputProps> = ({ id, label, className, ...props }) => {
  return (
    <div className="relative">
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <motion.input
        id={id}
        name={id}
        // Cast props to a narrower type that includes only compatible properties
        // or ensure `InputProps` itself already omits the conflicting ones.
        // The `Omit` in InputProps already does this for us.
        {...(props as HTMLMotionProps<"input">)} // Explicitly cast if issues persist, though Omit should suffice.
        className={`
          mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400
          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
          transition-all duration-200 ease-in-out
          ${className || ''}
        `}
        whileFocus={{
          scale: 1.01,
          boxShadow: '0 0 0 3px rgba(59, 130, 246, 0.45)', // Focus ring like effect
        }}
      />
    </div>
  );
};

export default Input;