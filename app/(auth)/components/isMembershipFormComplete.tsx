/* eslint-disable */
'use client';

import { useEffect } from 'react';

import { useUser } from '@/lib/utils';

export default function IsMembershipFormComplete({ children }: { children: React.ReactNode }) {
   
 const  user =  useUser()

  useEffect(() => {
    if (!!user?.id && user?.isMemberForm == false) {
       window.location.href = '/membershipform'
    }  
    
  }, [user]);

 
  return <>{children}</>;
}

