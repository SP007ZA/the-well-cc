/* eslint-disable */
'use client';

import { use, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GetUserAuthDocument, GetUserAuthQuery, GetUserAuthQueryVariables } from '@/data/gql/graphql';
import LoadingSpinner from '@/app/_components/LoadingSpinner';
import { useUser } from '@/lib/utils';

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
   const { data, loading } = useQuery<GetUserAuthQuery, GetUserAuthQueryVariables>(GetUserAuthDocument)
 const  user =  useUser()

  useEffect(() => {
    if (data?.authenticatedItem === null) {
       window.location.href = '/login'
    }  

  }, [data, user?.id]);

  if (loading) return <LoadingSpinner message={"Checking authentication..."} />

  return <>{children}</>;
}

