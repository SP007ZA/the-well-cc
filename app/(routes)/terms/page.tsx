"use client";

import React from "react";

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-rose-50 px-6 py-10">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow border border-rose-200">
        <h1 className="text-3xl font-bold text-rose-700 mb-4">Privacy & POPIA Consent Statement</h1>
        <p className="text-sm text-gray-600 mb-8">
          This statement describes how <strong>The Well Christian Club</strong> processes your personal information in accordance with the Protection of Personal Information Act (POPIA).
        </p>

        <section className="space-y-6 text-sm text-gray-800">
          <div>
            <h2 className="text-lg font-semibold text-rose-700">1. Consent & Declaration</h2>
            <p>
              By using our services, you consent to The Well Christian Club processing your personal information
              in line with this Privacy Statement. This includes storage, use, and sharing in compliance with
              applicable South African data protection laws.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-rose-700">2. Information We Collect</h2>
            <ul className="list-disc list-inside">
              <li>Your full name</li>
              <li>Email address and phone number</li>
              <li>Educational and profile info</li>
              <li>Profile images or videos</li>
              <li>Banking details for refunds/payments (if applicable)</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-rose-700">3. Purpose of Use</h2>
            <p>
              Your personal information may be used for:
            </p>
            <ul className="list-disc list-inside">
              <li>Managing your profile and membership</li>
              <li>Customer service and support</li>
              <li>Partner and supplier onboarding</li>
              <li>Legal compliance and reporting</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-rose-700">4. Sharing of Information</h2>
            <p>
              Your personal data may be shared with:
            </p>
            <ul className="list-disc list-inside">
              <li>Accredited third-party partners</li>
              <li>Educational or regulatory bodies (if relevant)</li>
              <li>Suppliers and service providers (where necessary)</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-rose-700">5. Your Rights</h2>
            <ul className="list-disc list-inside">
              <li>Request access to your personal information</li>
              <li>Request correction or deletion of data</li>
              <li>Object to processing or direct marketing</li>
              <li>Lodge a complaint with the Information Regulator: <a href="mailto:complaints.IR@justice.gov.za" className="text-rose-600 underline">complaints.IR@justice.gov.za</a></li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-rose-700">6. Security Measures</h2>
            <p>
              We implement secure data encryption, access restrictions, and other technical and organizational
              safeguards to protect your personal information from unauthorized access or misuse.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-rose-700">7. Retention & Return</h2>
            <p>
              Your data is kept only as long as needed for our purposes, after which it is securely deleted or anonymized.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-rose-700">8. Contact</h2>
            <p>
              For questions or concerns regarding this privacy statement, please contact us at our offices:
              <br />
              Regus Office Park, 222 Smit Street, Braamfontein, Johannesburg, 2017
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
