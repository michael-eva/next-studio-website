'use client';

import { useStripeCheckout } from '../hooks/useStripeCheckout';

export default function ClientSideActions() {
  const { loading, handleBuyAIAgent } = useStripeCheckout();

  return (
    <button
      onClick={handleBuyAIAgent}
      className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg text-center transition-colors disabled:opacity-60"
      disabled={loading}
    >
      {loading ? 'Redirecting...' : 'Get AI Recovery Agent'}
    </button>
  );
} 