/* eslint-disable */
import React from 'react'
import SignupForm from './_components/MembershipForm/MembershipForm'
import ProtectedRoute from '@/app/(members)/dashboard/_components/ProtectedRoute'

const Membership = () => {
  return (
    <ProtectedRoute>
    <div><SignupForm/></div>
    </ProtectedRoute>
  )
}

export default Membership