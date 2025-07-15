"use client";

import { useState } from "react";

export const useStripeCheckout = () => {
  const [loading, setLoading] = useState(false);

  const handleBuyAIAgent = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/stripe/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          cancelUrl: window.location.href, // Pass current page URL as cancel URL
        }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        alert("Failed to start checkout. Please try again.");
      }
    } catch (err) {
      alert("Error connecting to payment gateway.");
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    handleBuyAIAgent,
  };
};
