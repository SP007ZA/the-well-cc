/* eslint-disable */
"use client";

import React from 'react';

export default function SafetyTipsPage() {
  return (
    <div className="min-h-screen bg-rose-50 px-4 py-10 flex items-center justify-center">
      <div className="max-w-3xl w-full bg-white p-8 rounded-2xl shadow-md border border-rose-200">
        <h1 className="text-3xl font-bold text-rose-700 mb-4">Online Dating Safety Tips</h1>
        <p className="text-gray-700 mb-6">
          At <span className="font-semibold text-rose-600">Well CC</span>, your safety is our top priority.
          Here are some important tips to help you stay safe while making meaningful connections.
        </p>

        <ul className="space-y-5 text-gray-800 list-disc list-inside">
          <li>
            <strong className="text-rose-600">Protect Your Personal Info:</strong> Don’t share your home address,
            workplace, or financial information with someone you’ve just met online.
          </li>

          <li>
            <strong className="text-rose-600">Use In-App Messaging:</strong> Keep communication within the app
            until you feel confident in the person’s identity and intentions.
          </li>

          <li>
            <strong className="text-rose-600">Meet in Public Places:</strong> When meeting for the first time,
            always choose a public setting like a coffee shop or park. Avoid isolated areas.
          </li>

          <li>
            <strong className="text-rose-600">Tell a Friend or Family Member:</strong> Let someone know where
            you're going, who you're meeting, and when to expect you back.
          </li>

          <li>
            <strong className="text-rose-600">Trust Your Instincts:</strong> If something feels off, it probably is.
            You are never obligated to continue a conversation or meeting.
          </li>

          <li>
            <strong className="text-rose-600">Report Suspicious Behavior:</strong> If someone is harassing you or
            behaving inappropriately, report them immediately by sending an email to <span className="text-rose-600 underline">admin@thewellcc.co.za</span>
          </li>

          <li>
            <strong className="text-rose-600">Stay Sober & Alert:</strong> Avoid alcohol or anything that could
            impair your judgment when meeting someone for the first time.
          </li>
         
        </ul>

        <div className="mt-8 p-4 bg-rose-100 border border-rose-300 rounded-lg text-sm text-gray-700">
          If you ever feel unsafe or threatened, contact your local authorities / SAPS Dial 112 / 116 from your Mobile Phone / Toll Free: 0800222777
        </div>

        <div className="mt-10 text-center">
          <a
            href="/"
            className="inline-block bg-rose-600 hover:bg-rose-700 text-white font-medium px-6 py-3 rounded-lg transition"
          >
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}
