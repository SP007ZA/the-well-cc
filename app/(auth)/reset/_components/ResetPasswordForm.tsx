/* eslint-disable */
"use client";

import React, { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useMutation } from "@apollo/client";
import {
  RedeemUserPasswordResetTokenDocument,
  RedeemUserPasswordResetTokenMutation,
  RedeemUserPasswordResetTokenMutationVariables,
} from "@/data/gql/graphql";
import LoadingSpinner from "@/app/_components/LoadingSpinner";
import { CheckCircle, Eye, EyeOff } from "lucide-react";

export default function ResetPasswordForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [redeemUserPasswordToken, { loading: redeemLoading }] = useMutation<
    RedeemUserPasswordResetTokenMutation,
    RedeemUserPasswordResetTokenMutationVariables
  >(RedeemUserPasswordResetTokenDocument);

  const handleReset = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!token) {
      setError("Invalid or missing token.");
      return;
    }

    if (!email || !email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    if (password !== confirm) {
      setError("Passwords do not match.");
      return;
    }

    setError("");

    redeemUserPasswordToken({ variables: { email, password, token } })
      .then(({ data }) => {

       const response = data?.redeemUserPasswordResetToken;
       console.log("Reset response:", response);

  if (!response) {
    setError("Invalid or expired token.");
    return;
  }

  if(response === null) {
    setError("Something went wrong. Please try again.");
    return;
  }             

  if (response.code === "FAILURE") {
    setError(response.message);
    return;
  }
        setLoading(true);
        setTimeout(() => {
          return (window.location.href = "/login");
        }, 5000);
      })
      .catch((err) => {
        setError(err?.message || "Something went wrong. Please try again.");
      });
  };

  if (loading)
    return (
      <LoadingSpinner message="Your password has been successfully changed. Please wait to be redirected to the login page..." />
    );

  return (
    <div className="min-h-screen bg-rose-50 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow border border-rose-200">
        {!success ? (
          <>
            <h2 className="text-2xl font-bold text-rose-700 mb-2">
              Reset Your Password
            </h2>
            <p className="text-sm text-gray-600 mb-6">
              Enter and confirm your new password.
            </p>

            <form onSubmit={handleReset} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-rose-700">
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="mt-1 w-full px-4 py-2 border border-rose-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                  placeholder="you@example.com"
                />
                {error && (
                  <p className="text-sm text-red-600 mt-1">{error}</p>
                )}
              </div>

              {/* New Password with eye */}
              <div className="relative">
                <label className="block text-sm font-medium text-rose-700">
                  New Password
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="mt-1 w-full px-4 py-2 pr-10 border border-rose-200 rounded-lg focus:ring-2 focus:ring-rose-500"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-12 transform -translate-y-1/2 text-gray-500"
                  tabIndex={-1}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>

              {/* Confirm Password with eye */}
              <div className="relative">
                <label className="block text-sm font-medium text-rose-700">
                  Confirm Password
                </label>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  value={confirm}
                  onChange={(e) => setConfirm(e.target.value)}
                  required
                  className="mt-1 w-full px-4 py-2 pr-10 border border-rose-200 rounded-lg focus:ring-2 focus:ring-rose-500"
                />
                <button
                  type="button"
                  onClick={() =>
                    setShowConfirmPassword(!showConfirmPassword)
                  }
                  className="absolute right-3 top-12 transform -translate-y-1/2 text-gray-500"
                  tabIndex={-1}
                >
                  {showConfirmPassword ? (
                    <EyeOff size={20} />
                  ) : (
                    <Eye size={20} />
                  )}
                </button>
              </div>

              {password !== confirm && error && (
                <p className="text-sm text-red-600">{error}</p>
              )}
  {/* ✅ OUTSIDE of the relative div! */}
{password && confirm && password === confirm && (
  <div className="flex items-center gap-1 text-green-600 text-sm mt-1">
    <CheckCircle size={16} /> Passwords match
  </div>
)}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-rose-600 hover:bg-rose-700 text-white font-semibold py-2 rounded-lg transition"
              >
                {loading ? "Resetting..." : "Reset Password"}
              </button>
            </form>
          </>
        ) : (
          <div className="text-center">
            <h2 className="text-2xl font-bold text-rose-700 mb-2">
              Password Reset Successful
            </h2>
            <p className="text-sm text-gray-700 mb-6">
              You can now log in with your new password.
            </p>
            <button
              onClick={() => router.push("/login")}
              className="bg-rose-600 hover:bg-rose-700 text-white px-6 py-2 rounded-lg"
            >
              Go to Login
          
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
