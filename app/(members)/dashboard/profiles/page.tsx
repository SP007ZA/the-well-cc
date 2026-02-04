/* eslint-disable */
'use client'

import React, { useEffect, useMemo, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useLazyQuery, useQuery } from '@apollo/client'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  GetMemberUsersDocument,
  GetMemberUsersQuery,
  GetMemberUsersQueryVariables,
  GetUserMembershipTypeDocument,
  GetUserMembershipTypeQuery,
  GetUserMembershipTypeQueryVariables,
  UsersCountDocument,
  // If you have it, import a UsersCountDocument (optional)
} from '@/data/gql/graphql'
import { extractLocation, useUser } from '@/lib/utils'
import ProtectedRoute from '../_components/ProtectedRoute'

const PAGE_SIZE = 5

const Profiles = () => {
  const { id } = useUser()

  // Current user's membership type
  const { data: membershipTypeData } = useQuery<
    GetUserMembershipTypeQuery,
    GetUserMembershipTypeQueryVariables
  >(GetUserMembershipTypeDocument, { variables: { where: { id } } })

  const [page, setPage] = useState(1)

  const whereFilter: GetMemberUsersQueryVariables['where'] = useMemo(
    () => ({
      id: { not: { equals: id } }, // Exclude current user
      profile: { publishProfile: { equals: true } },
      isProfile: { equals: true },
    }),
    [id]
  )

  const variables = useMemo(
    () => ({
      where: whereFilter,
      take: PAGE_SIZE,
      skip: (page - 1) * PAGE_SIZE,
    }),
    [whereFilter, page]
  )

  const [fetchUsers, { data, loading, error }] = useLazyQuery<
    GetMemberUsersQuery,
    GetMemberUsersQueryVariables
  >(GetMemberUsersDocument, {
    fetchPolicy: 'cache-and-network',
  })

  useEffect(() => {
    fetchUsers({ variables })
  }, [fetchUsers, variables])

  // Optional: if you have a usersCount query, enable this block and compute totalPages
   const { data: countData } = useQuery(UsersCountDocument, { variables: { where: whereFilter } })
   const totalCount = countData?.usersCount ?? 0
   const totalPages = Math.max(1, Math.ceil(totalCount / PAGE_SIZE))

  const users = data?.users ?? []
  const hasPrev = page > 1
  // If you don’t have total count, assume “has next” when we got a full page
  const hasNext = users.length === PAGE_SIZE

  const [memberProfiles, setMemberProfiles] = useState<any[]>([])

  useEffect(() => {
    if (!loading) {
      const profiles =
        users
          .filter((u) => u.profile)
          .map((u) => ({
            id: u.profile!.id,
            name: `${u.profile?.firstName ?? ''} ${u.profile?.lastName ?? ''}`.trim(),
            photo: u.profile?.profilePicture?.publicUrlTransformed ?? '',
            location: extractLocation(u.profile?.address ?? null).city ?? '',
            bio: u.profile?.bio ?? '',
          })) ?? []
      setMemberProfiles(profiles)
    }
  }, [users, loading])

  // Check if current user is Basic
  const isBasic = useMemo(() => {
    const mt =
      (membershipTypeData as any)?.user?.membership?.memberShipType ??
      (membershipTypeData as any)?.profile?.user?.membership?.memberShipType ??
      (membershipTypeData as any)?.membership?.memberShipType ??
      ''
    return String(mt).toLowerCase() === 'basic'
  }, [membershipTypeData])

  return (
     <ProtectedRoute>
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between gap-3">
        <h1 className="text-2xl font-bold text-rose-700">Member Profiles</h1>
        {/* If you have total pages, show Page X of Y */}
        {<span className="text-xs text-gray-500">
          Page {page} / {totalPages}
        </span> }
      </div>

      <p className="text-muted-foreground text-sm">
        Browse profiles of fellow members.
      </p>

      {/* Upgrade banner */}
      {isBasic && (
        <div className="rounded-lg border border-amber-300 bg-amber-50 p-4 text-amber-900">
          <p className="text-sm">
            🔒 You’re on a <b>Basic</b> plan. Profile photos are blurred and you
            can’t view details. Upgrade to view member profiles clearly and chat
            privately with members on WhatsApp.{' '}
            <Link
              href={`/dashboard/upgrade/${membershipTypeData?.user?.profile?.id ?? ''}`}
              className="font-semibold underline text-amber-900 hover:text-amber-700"
            >
              Upgrade your subscription
            </Link>
            .
          </p>
        </div>
      )}

      {/* Error state */}
      {error && (
        <p className="text-red-600 text-sm">
          Failed to load profiles. Please try again.
        </p>
      )}

      {/* Loading skeletons */}
      {loading && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: PAGE_SIZE }).map((_, i) => (
            <div key={i} className="animate-pulse rounded-lg border p-4">
              <div className="w-full h-48 bg-gray-200 rounded mb-3" />
              <div className="h-4 bg-gray-200 rounded w-2/3 mb-2" />
              <div className="h-3 bg-gray-200 rounded w-1/2" />
            </div>
          ))}
        </div>
      )}

      {/* Profiles grid */}
      {!loading && memberProfiles.length === 0 && (
        <p className="text-gray-600">No profiles found.</p>
      )}

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {memberProfiles.map((member) => {
          const CardInner = (
            <Card
              key={member.id}
              className={`overflow-hidden border shadow-sm relative ${
                isBasic ? 'cursor-not-allowed' : 'cursor-pointer'
              }`}
            >
              <div className="relative">
                {member.photo ? (
                  <>
                    <Image
                      src={member.photo}
                      alt={member.name}
                      width={500}
                      height={300}
                      className={`w-full h-48 object-cover ${
                        isBasic ? 'blur-sm md:blur-md select-none' : ''
                      }`}
                      draggable={false}
                    />
                    {isBasic && (
                      <div className="absolute inset-0 grid place-items-center">
                        <div className="rounded bg-black/40 px-2 py-0.5 text-xs text-white">
                          Upgrade to view
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <div className="w-full h-48 grid place-items-center bg-gray-100 text-gray-400">
                    No photo
                  </div>
                )}
              </div>

              <CardContent className="p-4 space-y-2">
                <h3 className="text-lg font-semibold text-rose-800">{member.name}</h3>
                {member.location && (
                  <Badge variant="outline" className="text-xs">
                    {member.location}
                  </Badge>
                )}
                {member.bio && (
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {member.bio}
                  </p>
                )}
              </CardContent>
            </Card>
          )

          return isBasic ? (
            // Not clickable for Basic
            <div key={member.id}>{CardInner}</div>
          ) : (
            // Clickable for others
            <Link key={member.id} href={`/dashboard/profiles/${member.id}`}>
              {CardInner}
            </Link>
          )
        })}
      </div>

      {/* Pagination controls */}
      <div className="mt-6 flex items-center justify-between gap-2">
        <button
          className="px-4 py-2 rounded border bg-white text-gray-700 disabled:opacity-50"
          disabled={!hasPrev || loading}
          onClick={() => setPage((p) => Math.max(1, p - 1))}
        >
          ← Prev
        </button>

        {/* Mobile-friendly page info (without total count) */}
        <span className="text-sm text-gray-600">
          Showing {(variables.skip ?? 0) + 1}–
          {(variables.skip ?? 0) + users.length} (5 per page)
        </span>

        <button
          className="px-4 py-2 rounded border bg-white text-gray-700 disabled:opacity-50"
          disabled={!hasNext || loading}
          onClick={() => setPage((p) => p + 1)}
        >
          Next →
        </button>
      </div>
    </div>
    </ProtectedRoute>
  )
}

export default Profiles
