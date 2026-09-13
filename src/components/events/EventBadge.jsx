import React from 'react';

export default function EventBadge({ 
  category, 
  status, 
  variant = 'category', // 'category' | 'status'
  className = '' 
}) {
  if (variant === 'status') {
    const isLive = status?.toLowerCase().includes('open') || status?.toLowerCase().includes('live');
    const isUpcoming = status?.toLowerCase().includes('soon') || status?.toLowerCase().includes('upcoming') || status?.toLowerCase().includes('announced');

    const statusClasses = isLive
      ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
      : isUpcoming
      ? 'bg-amber-50 text-amber-800 border-amber-200'
      : 'bg-slate-100 text-slate-700 border-slate-200';

    return (
      <span className={`inline-flex items-center text-xs font-semibold px-2.5 py-0.5 rounded-full border ${statusClasses} ${className}`}>
        <span className={`w-1.5 h-1.5 rounded-full mr-1.5 ${isLive ? 'bg-emerald-500 animate-pulse' : isUpcoming ? 'bg-amber-500' : 'bg-slate-400'}`} />
        {status || 'Announcing Soon'}
      </span>
    );
  }

  // Category badge styles
  const cat = (category || '').toLowerCase();
  let badgeStyle = 'bg-slate-100 text-slate-700 border-slate-200';

  if (cat.includes('technical') && !cat.includes('non')) {
    badgeStyle = 'bg-brand-navy/10 text-brand-navy border-brand-navy/20';
  } else if (cat.includes('non-technical') || cat.includes('non tech')) {
    badgeStyle = 'bg-brand-magenta/10 text-brand-magenta border-brand-magenta/20';
  } else if (cat.includes('workshop') || cat.includes('special')) {
    badgeStyle = 'bg-blue-50 text-blue-700 border-blue-200';
  }

  return (
    <span className={`inline-flex items-center text-xs font-semibold px-2.5 py-1 rounded-md border ${badgeStyle} tracking-wide ${className}`}>
      {category}
    </span>
  );
}
