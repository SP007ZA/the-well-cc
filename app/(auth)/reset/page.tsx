/* eslint-disable */
"use client";

import React, { Suspense } from "react";
import ResetPasswordForm from "./_components/ResetPasswordForm";

export default function ResetPage() {
  return (
    <div className="min-h-screen bg-rose-50 flex items-center justify-center">
      <Suspense fallback={<div>Loading reset form...</div>}>
        <ResetPasswordForm />
      </Suspense>
    </div>
  );
}
