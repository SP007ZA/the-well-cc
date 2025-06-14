
/* eslint-disable */
"use client";

import React from 'react';

export default function ReportConcernPage() {
    
  return (
    <div className="min-h-screen bg-rose-50 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-xl bg-white p-8 rounded-2xl shadow-lg border border-rose-200">
        <h2 className="text-3xl font-bold text-rose-700 mb-2">Report a Concern</h2>
        <p className="text-sm text-gray-600 mb-6">
          Please let us know if you’ve experienced something concerning. Your report will remain confidential and will help us maintain a safe and respectful community.
        </p>

        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-rose-700">Your Email (optional)</label>
            <input
              type="email"
              className="mt-1 w-full px-4 py-2 border border-rose-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-rose-700">Username of the person you're reporting</label>
            <input
              type="text"
              className="mt-1 w-full px-4 py-2 border border-rose-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
              placeholder="@username"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-rose-700">Reason for the report</label>
            <select
              className="mt-1 w-full px-4 py-2 border border-rose-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
              defaultValue=""
            >
              <option value="" disabled>Select a reason</option>
              <option value="harassment">Harassment or bullying</option>
              <option value="inappropriate">Inappropriate content</option>
              <option value="safety">Safety concern</option>
              <option value="fake">Fake profile or impersonation</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-rose-700">Additional Details</label>
            <textarea
              className="mt-1 w-full px-4 py-2 border border-rose-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
              rows={5}
              placeholder="Please provide more details..."
            />
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-rose-600 hover:bg-rose-700 text-white font-semibold px-6 py-2 rounded-lg transition duration-200"
            >
              Submit Report
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
