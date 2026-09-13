import React from 'react';
import { CheckCircle2, AlertCircle } from 'lucide-react';

export default function EventRuleList({
  rules = [],
  title = "Rules & Guidelines",
  emptyText = "Detailed rules and judging criteria will be updated here upon official announcement.",
  className = ""
}) {
  return (
    <div className={`bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 ${className}`}>
      <div className="flex items-center gap-2 mb-6">
        <h3 className="text-xl font-bold text-slate-900 tracking-tight">{title}</h3>
      </div>

      {rules && rules.length > 0 ? (
        <ul className="space-y-3.5">
          {rules.map((rule, idx) => (
            <li key={idx} className="flex items-start text-sm sm:text-base text-slate-700 leading-relaxed">
              <CheckCircle2 className="w-5 h-5 text-brand-navy flex-shrink-0 mr-3 mt-0.5" />
              <span>{rule}</span>
            </li>
          ))}
        </ul>
      ) : (
        <div className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200 text-slate-600 text-sm">
          <AlertCircle className="w-5 h-5 text-slate-400 flex-shrink-0" />
          <span>{emptyText}</span>
        </div>
      )}
    </div>
  );
}
