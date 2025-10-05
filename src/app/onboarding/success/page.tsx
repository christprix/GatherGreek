"use client";

import React from "react";

export default function OnboardingSuccess() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-green-100 px-4">
      <div className="max-w-md w-full bg-white shadow-xl rounded-2xl p-8 text-center">
        <div className="flex justify-center mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-20 w-20 text-green-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          🎉 Onboarding Complete!
        </h1>

        <p className="text-lg text-gray-700 mb-6">
          Thank you for submitting your details. Your Stripe account is now set
          up and ready to receive payments.
        </p>

        <div className="border-t border-gray-200 my-6" />

        <p className="text-gray-600 mb-6">
          You can now create events, sell tickets, and manage your payouts.
          Welcome to <strong>MeetAndGreek</strong>!
        </p>

        <a
          href="/dashboard"
          className="inline-block px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow hover:bg-green-700 transition-colors"
        >
          Go to Dashboard
        </a>

        <div className="mt-6 text-sm text-gray-500">
          <p>
            This app uses Stripe Connect for onboarding.{" "}
            <a
              href="https://docs.stripe.com/connect/onboarding/quickstart?connect-onboarding-surface=hosted"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              View Stripe docs
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
