
import React from 'react';

interface SectionWrapperProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  bgColor?: string;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ children, id, className = "", bgColor = "bg-white" }) => {
  return (
    <section id={id} className={`py-16 md:py-24 px-4 md:px-8 ${bgColor} ${className}`}>
      <div className="max-w-5xl mx-auto">
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
