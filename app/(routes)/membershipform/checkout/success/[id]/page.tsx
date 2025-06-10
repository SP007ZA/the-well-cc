/* eslint-disable */
"use client";

import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "next/navigation";
import Link from "next/link";
import { CheckCircle } from "lucide-react";
import { useMutation } from "@apollo/client";
import {
  UpdateMembershipDocument,
  UpdateMembershipMutation,
  UpdateMembershipMutationVariables,
} from "@/data/gql/graphql";

export default function MembershipSuccessPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const id = params?.id as string;
  const plan = searchParams.get("membershipType");

 

  const [updateSubscriptionPayment, { data, loading, error }] = useMutation<
    UpdateMembershipMutation,
    UpdateMembershipMutationVariables
  >(UpdateMembershipDocument);

  const [hasUpdated, setHasUpdated] = useState(false);


  useEffect(() => {
    if (id && !hasUpdated) {
      updateSubscriptionPayment({
        variables: {
          where: { id },
          data: { hasPaidSubscription: true },
        },
      })
        .then(() => {
          setHasUpdated(true);
        })
        .catch((err) => {
          console.error("Failed to update subscription:", err);
        });
    }
  }, [id, updateSubscriptionPayment, hasUpdated]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-6 py-12">
      <CheckCircle className="text-rose-600 w-20 h-20 mb-6" />
      <h1 className="text-3xl font-bold text-gray-800 mb-4">
        Subscription Payment Successful!
      </h1>
      <p className="text-lg text-gray-600 text-center max-w-md mb-4">
        Thank you for subscribing to our platform! Your {plan} membership was processed successfully.
      </p>
      {data?.updateMembership?.user?.email && (
        <p className="text-md text-gray-700 text-center max-w-md mb-6">
          💌 A confirmation email has been sent to{" "}
          <strong>{data?.updateMembership.user.email}</strong>. Please check your inbox (and spam folder).
        </p>
      )}
      {error && (
        <p className="text-red-600 text-sm mb-4">
          ❌ Error updating membership. Please contact support.
        </p>
      )}
      <Link
        href={`/complete-profile/${data?.updateMembership.user.profile.id}`}
        className="mt-4 inline-block bg-rose-600 text-white px-6 py-3 rounded-xl shadow hover:bg-rose-700 transition"
      >
        Go To Member Dashboard
      </Link>
    </div>
  );
}
