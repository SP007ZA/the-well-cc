/* eslint-disable */
'use client';

import { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GetUserAuthDocument, GetUserAuthQuery, GetUserAuthQueryVariables } from '@/data/gql/graphql';
import LoadingSpinner from '@/app/_components/LoadingSpinner';

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
   const { data, loading } = useQuery<GetUserAuthQuery, GetUserAuthQueryVariables>(GetUserAuthDocument)

  useEffect(() => {
    if (data?.authenticatedItem === null) {
       window.location.href = '/login'
    }

    if(data?.authenticatedItem?.isEmailVerified === false) {
      window.location.href = '/activate/invalidlogin'
    }

  }, [data]);

  if (loading) return <LoadingSpinner message={"Checking authentication..."} />

  return <>{children}</>;
}

