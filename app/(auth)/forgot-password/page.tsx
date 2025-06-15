/* eslint-disable */
"use client";
import { SendUserPasswordResetLinkDocument, SendUserPasswordResetLinkMutation, SendUserPasswordResetLinkMutationVariables } from "@/data/gql/graphql";
import { useMutation } from "@apollo/client";
import React, { useState } from "react";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const [sendUserPasswordResetLink] = useMutation<SendUserPasswordResetLinkMutation, SendUserPasswordResetLinkMutationVariables>(SendUserPasswordResetLinkDocument)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // TODO: Trigger actual forgot password mutation / API call here
   
sendUserPasswordResetLink({variables:{email:email}}).then(data => {
setSubmitted(true);
})
    
  };

  return (
    <div className="min-h-screen bg-rose-50 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-md border border-rose-200">
        {!submitted ? (
          <>
            <h2 className="text-2xl font-bold text-rose-700 mb-4">Forgot Password</h2>
            <p className="text-sm text-gray-600 mb-6">
              Enter your email address and we’ll send you a link to reset your password.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-rose-700">Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="mt-1 w-full px-4 py-2 border border-rose-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                  placeholder="you@example.com"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-rose-600 hover:bg-rose-700 text-white font-semibold py-2 rounded-lg transition duration-200"
              >
                Send Reset Link
              </button>
            </form>
          </>
        ) : (
          <>
            <h2 className="text-2xl font-bold text-rose-700 mb-4">Check Your Email</h2>
            <p className="text-sm text-gray-700">
              If an account exists for <span className="font-semibold">{email}</span>, a password reset link has been sent.
              Please check your inbox.
            </p>

            <button
              onClick={() => setSubmitted(false)}
              className="mt-6 w-full bg-rose-100 text-rose-700 hover:bg-rose-200 font-semibold py-2 rounded-lg transition"
            >
              Go Back
            </button>
          </>
        )}
      </div>
    </div>
  );
}
