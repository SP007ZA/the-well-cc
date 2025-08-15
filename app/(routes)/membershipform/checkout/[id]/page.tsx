/* eslint-disable */

"use client";

import {useMutation, useQuery } from '@apollo/client';
import {
  ProfileDocument,
  ProfileQuery,
  ProfileQueryVariables,
  UpdateUserMembershipDocument,
  UpdateUserMembershipMutation,
  UpdateUserMembershipMutationVariables,
} from '@/data/gql/graphql';
import { useParams, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useUser } from '@/lib/utils';

export default function MembershipCheckout() {
  const params = useParams();
  const searchParams = useSearchParams();
  const id = params?.id as string;
  const planParam = searchParams.get("membershipType") || "Premium";
    const user = useUser()

  const { data, loading, error, refetch } = useQuery<
    ProfileQuery,
    ProfileQueryVariables
  >(ProfileDocument, { variables: { where: { id } } });

  const [updateMembership] = useMutation<UpdateUserMembershipMutation, UpdateUserMembershipMutationVariables>(UpdateUserMembershipDocument);
  const [isLoading, setIsLoading] = useState(false);

  const planDetails = {
    Basic: { name: "Basic", price:  0 },
    Premium: { name: "Premium", price: 80 },
    Platinum: { name: "Platinum", price: 600 },
  };

  const [selectedPlan, setSelectedPlan] = useState(
    planDetails[planParam as keyof typeof planDetails] || planDetails.Premium
  );

  useEffect(() => {
    if (error) console.error(error);
  }, [error]);

  // 🔄 Handle plan change & update backend
  const handlePlanChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newPlan = e.target.value.trim() as keyof typeof planDetails; // trim spaces!
  setSelectedPlan(planDetails[newPlan]);

   try {
      await updateMembership({
        //@ts-ignore
        variables: { where: {user: {id: data?.profile.user.id}}, data: {memberShipType: newPlan} },
      });
      // 🔃 Optionally refetch user profile
      await refetch();
    } catch (err) {
      console.error("Failed to update membership plan:", err);
    } 

    if(selectedPlan.name === "Basic") return window.location.href = `/complete-profile/${user?.id}`
  };  

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="bg-white shadow-lg rounded-2xl max-w-md w-full p-6 border border-rose-700">
        <h1 className="text-2xl font-bold text-rose-700 mb-2">
          Confirm Your Membership
        </h1>
        <p className="text-gray-600 mb-2">You're subscribing to:</p>

        <select
          value={selectedPlan.name}
          onChange={handlePlanChange}
          className="mb-4 border border-rose-300 rounded px-4 py-2 focus:ring-rose-600 focus:border-rose-600"
        >
          {Object.keys(planDetails).map((key) => (
            <option key={key} value={planDetails[key].name}>

              
              {planDetails[key].name} - R{planDetails[key].price}.00
            </option>
          ))}
        </select>

        <div className="bg-rose-100 border border-rose-300 rounded-xl p-4 mb-6">
          <h2 className="text-lg font-semibold text-rose-700">
            {selectedPlan.name}
          </h2>
          {selectedPlan.name === "Basic" ? <p>Free Membership</p> : selectedPlan.name == 'Platinum' ? <p className="text-rose-600 text-sm">R{selectedPlan.price}.00 / year</p> : <p className="text-rose-600 text-sm">R{selectedPlan.price}.00 / month</p> }
        </div>

        <form
          action="https://www.payfast.co.za/eng/process"
          method="post"
          onSubmit={() => setIsLoading(true)}
        >
          <input type="hidden" name="merchant_id" value={30391073} />
          <input type="hidden" name="merchant_key" value="6x4meqntny3of" />
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
          <input
            type="hidden"
            name="name_first"
            value={data?.profile?.firstName || ""}
          />
          <input
            type="hidden"
            name="name_last"
            value={data?.profile?.lastName || ""}
          />
          <input
            type="hidden"
            name="email_address"
            value={data?.profile?.user?.email || ""}
          />
          <input
            type="hidden"
            name="cell_number"
            value={`0${data?.profile?.user?.membership?.cellNumber || ""}`}
          />
          <input type="hidden" name="amount" value={selectedPlan.price} />
          <input
            type="hidden"
            name="item_name"
            value={`The Well CC ${selectedPlan.name} Subscription`}
          />
          <input type="hidden" name="subscription_type" value="1" />
          <input type="hidden" name="billing_date" value="" />
          <input
            type="hidden"
            name="recurring_amount"
            value={selectedPlan.price}
          />
          <input
            type="hidden"
            name="frequency"
            value={selectedPlan.name === "Premium" ? "3" : "6"}
          />
          <input type="hidden" name="cycles" value="0" />
          <input
            type="hidden"
            name="subscription_notify_email"
            value="true"
          />
          <input
            type="hidden"
            name="subscription_notify_webhook"
            value="true"
          />
          <input
            type="hidden"
            name="subscription_notify_buyer"
            value="true"
          />
          {selectedPlan.name === "Basic" ? (<button 
            disabled={isLoading || loading || !data}
            type='button'
            onClick={() => handlePlanChange}
            className="w-full bg-rose-700 hover:bg-rose-800 text-white font-semibold py-2 rounded-xl transition-all"
          >
            {isLoading ? "Loading..." : "Proceed to complete your profile"}
          </button>) : (<button 
            disabled={isLoading || loading || !data}
            type="submit"
            className="w-full bg-rose-700 hover:bg-rose-800 text-white font-semibold py-2 rounded-xl transition-all"
          >
            {isLoading ? "Processing..." : "Proceed to Payment"}
          </button>) } 

          
        </form>

        <p className="text-xs text-center text-gray-400 mt-4">
          You can cancel anytime from your dashboard.
        </p>
      </div>
    </div>
  );
}
