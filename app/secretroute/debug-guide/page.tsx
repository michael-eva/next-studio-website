import { EnhancedTroubleshootingTips, PremiumTeaser } from '@/app/components/TroubleshootingGuideData';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function DebugGuide() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-8">
        <Link
          href="/secretroute"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </Link>
      </div>
      <EnhancedTroubleshootingTips />
      <PremiumTeaser />
    </div>
  );
}