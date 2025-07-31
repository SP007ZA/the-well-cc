/* eslint-disable */
'use client';

import { useEffect } from 'react';
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
    }  else if(!user?.isEmailVerified)    {
          window.location.href = '/activate/invalidlogin'
      } else if(user?.isMemberForm === false) {
          window.location.href = '/membershipform'
      }  else if(user?.isProfile === false) {
          window.location.href = `/complete-profile/${user?.id}`
      
      } 

  }, [data]);

  if (loading) return <LoadingSpinner message={"Checking authentication..."} />

  return <>{children}</>;
}

