import React from 'react';
import { twMerge } from 'tailwind-merge';

interface SectionHeadingProps {
  title: string;
subtitle?: string | React.ReactNode;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  className,
  titleClassName = '',
  subtitleClassName ='',
}) => {
  return (
    <div className={twMerge("text-center mb-12", className)}>
      <h2 className={twMerge("text-4xl font-bold text-gray-900 mb-4", titleClassName)}>
        {title}
      </h2>
      {subtitle && (
        <p className={twMerge("text-lg text-gray-600 max-w-2xl mx-auto", subtitleClassName)}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;