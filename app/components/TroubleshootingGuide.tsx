import React from 'react';
import type { ReactNode } from 'react';

interface Tip {
  title: string;
  description: string;
}

interface TroubleshootingGuideProps {
  genericTips: Tip[];
  tipIcons: Array<() => ReactNode>;
}

const TroubleshootingGuide: React.FC<TroubleshootingGuideProps> = ({ genericTips, tipIcons }) => (
  <div className="border-t border-gray-200 p-6 bg-gradient-to-r from-blue-50 to-indigo-50">
    <div className="mb-8 px-4 py-3 bg-blue-50 rounded-xl border border-blue-100 text-blue-900 text-base">
      <strong>Note:</strong> Every no-code/AI app platform works a bit differently, with unique workflows and quirks. However, the steps below are universal best practices - start here before diving into platform-specific troubleshooting. These tips are designed to be easy to scan at a glance, with more detail available if you want to read further.
    </div>
    <div className="grid md:grid-cols-2 gap-8">
      {genericTips.map((tip, index) => (
        <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex items-start gap-4 transition-all hover:shadow-md">
          <div className="flex-shrink-0 mt-1">
            {tipIcons[index]()}
          </div>
          <div>
            <div className="font-semibold text-gray-900 text-base mb-1">{tip.title}</div>
            <div className="text-gray-600 text-sm leading-relaxed">{tip.description}</div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default TroubleshootingGuide; 