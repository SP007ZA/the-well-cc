/* eslint-disable */
"use client"
import React, { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import {
  useLazyQuery,
  useMutation,
  useQuery
} from "@apollo/client";

import { useParams } from "next/navigation";
import { ActivateUserDocument, ActivateUserMutation, ActivateUserMutationVariables, CreateActivateTokenDocument, CreateActivateTokenMutation, CreateActivateTokenMutationVariables, FindUserByEmailDocument, FindUserByEmailQueryVariables, FindUserByTokenDocument, FindUserByTokenQuery, FindUserByTokenQueryVariables, UpdateActivateTokenDocument, UpdateActivateTokenMutation, UpdateActivateTokenMutationVariables } from "@/data/gql/graphql";

export default function ActivateUser() {
  
  const [isVerified, setVerified] = useState(false);
      const params = useParams();
    const tokenId = params?.id as string;
  const [open, setOpen] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [activateUser] = useMutation<ActivateUserMutation, ActivateUserMutationVariables>(ActivateUserDocument)
  const [updateToken] = useMutation<UpdateActivateTokenMutation, UpdateActivateTokenMutationVariables>(UpdateActivateTokenDocument)
const [resendToken] = useMutation<CreateActivateTokenMutation, CreateActivateTokenMutationVariables>(CreateActivateTokenDocument)
 const [findUserByEmail] = useLazyQuery<FindUserByEmailQueryVariables, FindUserByEmailQueryVariables>(FindUserByEmailDocument, {fetchPolicy: 'network-only'})

const queryVariables = useMemo(() => ({
  Date: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
  token: tokenId
}), [tokenId]);


  const {data, loading} = useQuery<FindUserByTokenQuery, FindUserByTokenQueryVariables>(FindUserByTokenDocument, {variables: queryVariables})



  useEffect(() => {
  if (!data || isVerified || loading) return;

  if (data.users.length > 0) {
    const userId = data.users[0].id;
    const tokenId = data.users[0].activateToken[0].id;

    activateUser({ variables: { userId, data: { isEmailVerified: true } } })
      .then(() => {
        return updateToken({
          variables: { tokenId, data: { activatedAt: new Date() } },
        });
      })
      .then(() => {
        setVerified(true);
        // Use router.push for SPA transition (no full reload)
        setTimeout(() => {
          window.location.href = '/login'; // or use router.push('/login')
        }, 4000);
      })
      .catch((err) => console.error("Activation error:", err));
  }
}, [data, loading]); 

console.log(tokenId)
    const onSubmit = async (formData: any) => {
   const res = await findUserByEmail({ variables: { email: formData.email } });


      //@ts-ignore
    if (res?.data?.user && !res.data.user.isVerified) {
      await resendToken({
        variables: {
          data: {
            user: {
              //@ts-ignore
              connect: { id: res.data.user.id },
            },
          },
        },
      });
      setOpen(true);
    } 

    reset({ email: "" });
  }; 

  return (
    <div className="min-h-screen bg-rose-50 flex flex-col items-center justify-center px-4 py-10">
      {isVerified ? (
        <div className="text-center bg-white p-8 rounded-xl shadow-md border border-rose-200">
          <h2 className="text-xl text-rose-700 font-bold mb-2">🎉 Account Activated</h2>
          <p className="text-gray-600">Redirecting to login page...</p>
        </div>
      ) : (
        <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md border border-rose-200">
          <h2 className="text-xl font-semibold text-rose-700 mb-4">⚠️ Invalid or Expired Token</h2>
          <p className="text-sm text-gray-600 mb-6">Enter your email below to receive a new activation link.</p>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-rose-700">Email Address</label>
              <input
                type="email"
                {...register("email", { required: "Email address is required" })}
                className="mt-1 block w-full border border-rose-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-rose-500"
              />
              {errors.email && (
                <p className="text-xs text-red-600 mt-1">{errors.root.message}</p>
              )}
            </div>
            <button
              type="submit"
              className="w-full bg-rose-600 hover:bg-rose-700 text-white py-2 rounded-lg font-semibold"
            >
              Re-send Activation Email
            </button>
          </form>

          {open && (
            <div className="mt-6 bg-green-100 border border-green-300 text-green-700 px-4 py-3 rounded-lg">
              ✅ An email has been sent. Please click the activation link to verify your account.
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// 👇 Server-side logic to get user/token info from URL
  /* export async function getServerSideProps({ query }: any) {
  const { token } = query;

  console.log(token)

  const { data } = await client.query({
    query: gql`
      query FindUser($Date: DateTime, $token: String) {
        users(
          where: {
            activateToken: {
              some: {
                AND: [
                  { activatedAt: null }
                  { createdAt: { gt: $Date } }
                  { token: { equals: $token } }
                ]
              }
            }
          }
        ) {
          id
          activateToken(where: { token: { equals: $token } }) {
            id
          }
        }
      }
    `,
    variables: {
      Date: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
      token,
    },
  });

  return {
    props: {
      userId: data.users.length > 0 ? data.users[0].id : null,
      tokenId: data.users.length > 0 ? data.users[0].activateToken[0].id : null,
    },
  };
} */
