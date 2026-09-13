import React from 'react';
import { Link } from 'react-router-dom';

/**
 * PrimaryButton — Brand Design System
 * 
 * Rules:
 * - Navy background (#0B1B3D)
 * - White text (#FFFFFF)
 * - Magenta hover/accent treatment (border-brand-magenta, magenta glow, subtle accent)
 * - Smooth 200-300ms transition
 */
export default function PrimaryButton({
  children,
  to,
  href,
  onClick,
  type = 'button',
  className = '',
  icon: Icon,
  iconPosition = 'right',
  disabled = false,
  variant = 'primary', // 'primary' (navy with magenta hover) | 'magenta'
  target,
  rel,
  ...props
}) {
  const baseStyles = "inline-flex items-center justify-center font-medium text-sm sm:text-base px-6 py-3 rounded-button transition-all duration-300 ease-out active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer relative overflow-hidden group shadow-subtle";

  const variants = {
    // Exact spec: Navy background, White text, Magenta hover/accent treatment
    primary: "bg-brand-navy text-white border border-brand-navy/60 hover:border-brand-magenta hover:bg-brand-navy-light hover:shadow-subtle",
    // Accent magenta button option
    magenta: "bg-brand-magenta text-white border border-brand-magenta hover:bg-[#A40C54] hover:shadow-subtle"
  };

  const selectedVariant = variants[variant] || variants.primary;
  const combinedClasses = `${baseStyles} ${selectedVariant} ${className}`;

  const content = (
    <>
      {/* Subtle bottom magenta accent line on hover */}
      <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-brand-magenta transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left" />

      {Icon && iconPosition === 'left' && (
        <Icon className="w-4 h-4 sm:w-5 sm:h-5 mr-2 transition-transform duration-300 group-hover:-translate-x-0.5" />
      )}
      <span className="relative z-10">{children}</span>
      {Icon && iconPosition === 'right' && (
        <Icon className="w-4 h-4 sm:w-5 sm:h-5 ml-2 transition-transform duration-300 group-hover:translate-x-0.5" />
      )}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={combinedClasses} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a 
        href={href} 
        target={target || "_blank"} 
        rel={rel || "noopener noreferrer"} 
        className={combinedClasses} 
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClasses}
      {...props}
    >
      {content}
    </button>
  );
}
