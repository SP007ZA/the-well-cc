/* eslint-disable */
'use client'

import { useForm } from 'react-hook-form'
import { useEffect, useRef, useState } from 'react'
import { useQuery, useMutation } from '@apollo/client'
import { PencilIcon } from 'lucide-react'
import {
  GetUserProfileDocument,
  GetUserProfileQuery,
  GetUserProfileQueryVariables,
  CompleteProfileMutation,
  CompleteProfileMutationVariables,
  CompleteProfileDocument,
} from '@/data/gql/graphql'
import LoadingSpinner from '@/app/_components/LoadingSpinner'
import { Card } from '@/components/ui/card'
import { useUser } from '@/lib/utils'
import ProtectedRoute from '../_components/ProtectedRoute'

export default function EditProfileForm() {
  const [submitting, setSubmitting] = useState(false)
  const [previews, setPreviews] = useState<string[]>([])
  const [profilePreview, setProfilePreview] = useState<string | null>(null)
  const [profileFile, setProfileFile] = useState<File | null>(null)
    const profileInputRef = useRef<HTMLInputElement>(null)
  const [selectedFiles, setSelectedFiles] = useState<File[]>([])
  const fileInputRef = useRef<HTMLInputElement>(null)
  const user = useUser()

  const {
    register,
    handleSubmit,
    setValue,
    formState: {  },
  } = useForm()

  // Load current user data
  const { data: userData, loading: loadingUser } = useQuery<GetUserProfileQuery, GetUserProfileQueryVariables>(
    GetUserProfileDocument,
    {
      variables:{ where: { id: user?.id}},
    }
  )

  //const [updateProfile] = useMutation<UpdateProfileMutation, UpdateProfileMutationVariables>(UpdateProfileDocument)
   const [updateProfile] = useMutation<CompleteProfileMutation, CompleteProfileMutationVariables>(CompleteProfileDocument)

  useEffect(() => {
    if (userData?.user) {
      const { id, bio, age, gender, education, occupation, interests, lookingFor, photos, profilePicture } = userData.user.profile

      setValue('id', id || '')
      setValue('bio', bio || '')
      setValue('age', age || '')
      setValue('gender', gender || '')
      setValue('education', education || '')
      setValue('occupation', occupation || '')
      setValue('interests', interests || '')
      setValue('lookingFor', [lookingFor])
      setProfilePreview(profilePicture.publicUrlTransformed)
      setPreviews((photos || []).map((p) => p.image.publicUrlTransformed))
    }
  }, [userData, setValue])

  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const file = e.target.files?.[0]
  if (file) {
    setProfileFile(file)
    setProfilePreview(URL.createObjectURL(file))
  }
}

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (!files) return

    const newFiles = Array.from(files)
    const newPreviews = newFiles.map((file) => URL.createObjectURL(file))

    setSelectedFiles((prev) => [...prev, ...newFiles])
    setPreviews((prev) => [...prev, ...newPreviews])
    setValue('photos', [...selectedFiles, ...newFiles])
    e.target.value = ''
  }

  const removePhoto = (index: number) => {
    const updatedFiles = [...selectedFiles]
    const updatedPreviews = [...previews]

    updatedFiles.splice(index, 1)
    updatedPreviews.splice(index, 1)

    setSelectedFiles(updatedFiles)
    setPreviews(updatedPreviews)
    setValue('photos', updatedFiles)
  }



  const onSubmit = async (formData: any) => {
    const { id, bio, age, gender, education, occupation, interests, lookingFor, photos } = formData

    setSubmitting(true)

    const newImages = selectedFiles.map((file) => ({ image: file }))

  

      //console.log({profileFile})

    updateProfile({
      variables: {
        where: { id },
        data: {
          bio,
          age: Number(age),
          gender,
          education,
          occupation,
          interests,
          lookingFor: lookingFor[0],
          profilePicture: profileFile,
          photos: { create: newImages },
        
        },
      },
    })
      .then(() => {
        alert('Profile updated!')
        setSubmitting(false)
      })
      .catch((error) => {
        console.error('Update failed:', error)
        setSubmitting(false)
      }) 
  } 

  if (loadingUser) return <LoadingSpinner message="Loading profile..." />

  return (
    <ProtectedRoute>
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-2xl mx-auto p-6 bg-white rounded-2xl shadow-md space-y-6"
    >
        <Card className="p-4 border border-rose-200 shadow-md">
      <h2 className="text-2xl font-semibold text-rose-700">Edit Your Profile</h2>

     <div className="flex justify-center">
  <div className="relative w-48 h-48 mb-6">
    <img
      src={profilePreview || '/default-avatar.png'}
      alt="Profile"
      className="w-48 h-48 object-cover rounded-full border-4 border-white shadow-md"
    />
    <button
      type="button"
      className="absolute bottom-2 right-2 bg-white p-2 rounded-full shadow hover:bg-gray-100"
      onClick={() => profileInputRef.current?.click()}
    >
      <PencilIcon className="h-6 w-6 text-rose-700" />
    </button>
    <input
      type="file"
      accept="image/*"
      ref={profileInputRef}
      onChange={handleProfileChange}
      className="hidden"
    />
  </div>
</div>



      <div>
        <label className="block font-medium text-gray-700">Bio</label>
        <textarea {...register('bio')} className="w-full mt-1 p-2 border rounded-md" rows={4} />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block font-medium text-gray-700">Age</label>
          <input type="number" {...register('age')} className="w-full mt-1 p-2 border rounded-md" />
        </div>
        <div>
          <label className="block font-medium text-gray-700">Gender</label>
          <select {...register('gender')} className="w-full mt-1 p-2 border rounded-md">
            <option value="">Select...</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block font-medium text-gray-700">Education</label>
        <input {...register('education')} className="w-full mt-1 p-2 border rounded-md" />
      </div>

      <div>
        <label className="block font-medium text-gray-700">Occupation</label>
        <input {...register('occupation')} className="w-full mt-1 p-2 border rounded-md" />
      </div>

      <div>
        <label className="block font-medium text-gray-700">Interests</label>
        <input {...register('interests')} className="w-full mt-1 p-2 border rounded-md" />
      </div>

      <div>
        <label className="block font-medium text-gray-700">Looking For</label>
        <div className="flex gap-4 mt-2">
          <label className="inline-flex items-center">
            <input type="checkbox" value="Friendship" {...register('lookingFor')} />
            <span className="ml-2">Friendship</span>
          </label>
          <label className="inline-flex items-center">
            <input type="checkbox" value="Dating" {...register('lookingFor')} />
            <span className="ml-2">Dating</span>
          </label>
          <label className="inline-flex items-center">
            <input type="checkbox" value="Marriage" {...register('lookingFor')} />
            <span className="ml-2">Marriage</span>
          </label>
        </div>
      </div>

      <input type="hidden" {...register('photos')} />

      <div>
        <label className="block font-medium text-gray-700 mb-2">Upload Photos</label>
        <div
          onClick={() => fileInputRef.current?.click()}
          className="cursor-pointer inline-block bg-rose-700 text-white px-4 py-2 rounded-lg hover:bg-rose-800 transition"
        >
          Select Images
        </div>
        <input
          type="file"
          multiple
          accept="image/*"
          onChange={handlePhotoChange}
          ref={fileInputRef}
          className="hidden"
        />
        {previews.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-4">
            {previews.map((src, index) => (
              <div key={index} className="relative">
                <img
                  src={src}
                  alt={`Preview ${index}`}
                  className="w-24 h-24 object-cover rounded-lg border border-rose-700"
                />
                <button
                  type="button"
                  onClick={() => removePhoto(index)}
                  className="absolute top-1 right-1 bg-white text-rose-700 border border-rose-700 rounded-full w-6 h-6 text-sm flex items-center justify-center hover:bg-rose-100"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="bg-rose-700 text-white px-6 py-2 rounded-xl hover:bg-rose-800 transition-all"
      >
        {submitting ? 'Saving...' : 'Save Changes'}
      </button>
      </Card>
    </form>
    </ProtectedRoute>
  )
}
