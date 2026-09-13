import React from 'react';
import { Link } from 'react-router-dom';

/**
 * SecondaryButton — Brand Design System
 * 
 * Rules:
 * - White background (#FFFFFF)
 * - Navy border (#0B1B3D)
 * - Navy text (#0B1B3D)
 * - Smooth 200-300ms transition
 */
export default function SecondaryButton({
  children,
  to,
  href,
  onClick,
  type = 'button',
  className = '',
  icon: Icon,
  iconPosition = 'right',
  disabled = false,
  target,
  rel,
  ...props
}) {
  const baseStyles = "inline-flex items-center justify-center font-medium text-sm sm:text-base px-6 py-3 rounded-button bg-white text-brand-navy border border-brand-navy/80 hover:border-brand-navy hover:bg-slate-50 transition-all duration-300 ease-out active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed shadow-subtle cursor-pointer group";

  const combinedClasses = `${baseStyles} ${className}`;

  const content = (
    <>
      {Icon && iconPosition === 'left' && (
        <Icon className="w-4 h-4 sm:w-5 sm:h-5 mr-2 transition-transform duration-300 group-hover:-translate-x-0.5" />
      )}
      <span>{children}</span>
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
