/* eslint-disable */
"use client";
import React, { useEffect } from 'react'
import SignupForm from './_components/MembershipForm/MembershipForm'
import ProtectedRoute from '@/app/(members)/dashboard/_components/ProtectedRoute'
import { useUser } from '@/lib/utils'

const Membership = () => {

    const user = useUser()

  useEffect(()=>{
        
       if(user?.isMemberForm === true && user?.isProfile === false) {
           window.location.href = `/complete-profile/${user?.id}`
      }  else if(user?.isMemberForm === true) {
          window.location.href = '/dashboard'
      
      }
  },[user?.id])
     
  return (
    <ProtectedRoute>
    <div><SignupForm/></div>
    </ProtectedRoute>
  )
}

export default Membership