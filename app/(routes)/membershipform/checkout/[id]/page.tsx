/* eslint-disable */
"use client";

import { ProfileDocument, ProfileQuery, ProfileQueryVariables } from '@/data/gql/graphql';
import { useQuery } from '@apollo/client';
import { useParams, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function MembershipCheckout() {
  const params = useParams();
  const searchParams = useSearchParams();
  const id = params?.id as string;
  const plan = searchParams.get("membershipType") || "Premium";

  const { data, loading, error } = useQuery<ProfileQuery, ProfileQueryVariables>(
    ProfileDocument,
    { variables: { where: { id } } }
  );

  const [isLoading, setIsLoading] = useState(false);

  const planDetails = {
    Premium: { name: "Premium", price: 80 },
    Platinum: { name: "Platinum", price: 600 },
  };

  const selectedPlan = planDetails[plan as keyof typeof planDetails] || planDetails.Premium;

  //value={data?.profile?.user?.email) ADD to email

  // Optional: you can log or handle errors/loading
  useEffect(() => {
    if (error) console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="bg-white shadow-lg rounded-2xl max-w-md w-full p-6 border border-rose-700">
        <h1 className="text-2xl font-bold text-rose-700 mb-2">Confirm Your Membership</h1>
        <p className="text-gray-600 mb-4">You're subscribing to:</p>

        <div className="bg-rose-100 border border-rose-300 rounded-xl p-4 mb-6">
          <h2 className="text-lg font-semibold text-rose-700">{selectedPlan.name}</h2>
          <p className="text-rose-600 text-sm">R{selectedPlan.price}.00</p>
        </div>

        <form
          action="https://sandbox.payfast.co.za/eng/process"
          method="post"
          onSubmit={() => setIsLoading(true)}
        >
          <input type="hidden" name="merchant_id" value="10023375" />
          <input type="hidden" name="merchant_key" value="04afueikmam8r" />
          <input
            type="hidden"
            name="return_url"
            value={`https://the-well-cc-x5jv-mzansionlinecvgmailcoms-projects.vercel.app/membershipform/checkout/success/${data?.profile?.user?.membership?.id}?membershipType=${selectedPlan.name}`}
          />
          <input
            type="hidden"
            name="cancel_url"
            value={`https://the-well-cc-x5jv-mzansionlinecvgmailcoms-projects.vercel.app/membershipform/checkout/cancel/${id}?membershipType=${selectedPlan.name}`}
          />
          <input type="hidden" name="name_first" value={data?.profile?.firstName || ''} />
          <input type="hidden" name="name_last" value={data?.profile?.lastName || ''} />
          <input type="hidden" name="email_address" value="mdfasdf@gmail.com" />
          <input
            type="hidden"
            name="cell_number"
            value={`0${data?.profile?.user?.membership?.cellNumber || ''}`}
          />
          <input type="hidden" name="amount" value={selectedPlan.price} />
          <input
            type="hidden"
            name="item_name"
            value={`The Well CC ${selectedPlan.name} Subscription`}
          />
          <input type="hidden" name="subscription_type" value="1" />
          <input type="hidden" name="billing_date" value="" />
          <input type="hidden" name="recurring_amount" value={selectedPlan.price} />
          <input
            type="hidden"
            name="frequency"
            value={selectedPlan.name === "Premium" ? "3" : "6"}
          />
          <input type="hidden" name="cycles" value="0" />
          <input type="hidden" name="subscription_notify_email" value="true" />
          <input type="hidden" name="subscription_notify_webhook" value="true" />
          <input type="hidden" name="subscription_notify_buyer" value="true" />

          <button
            disabled={isLoading || loading || !data}
            type="submit"
            className="w-full bg-rose-700 hover:bg-rose-800 text-white font-semibold py-2 rounded-xl transition-all"
          >
            {isLoading ? "Processing..." : "Proceed to Payment"}
          </button>
        </form>

        <p className="text-xs text-center text-gray-400 mt-4">
          You can cancel anytime from your dashboard.
        </p>
      </div>
    </div>
  );
}
