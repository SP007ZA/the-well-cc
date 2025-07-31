/* eslint-disable */
'use client'

import { useForm } from 'react-hook-form'
import { use, useEffect, useRef, useState } from 'react'
import { useMutation, useQuery } from '@apollo/client'
import { CompleteProfileDocument, CompleteProfileMutation, CompleteProfileMutationVariables, FindUserProfileIdDocument, FindUserProfileIdQuery, FindUserProfileIdQueryVariables, UpdateUserIsProfileDocument, UpdateUserIsProfileMutation, UpdateUserIsProfileMutationVariables } from '@/data/gql/graphql'
import LoadingSpinner from '@/app/_components/LoadingSpinner'
import ProtectedRoute from '@/app/(members)/dashboard/_components/ProtectedRoute'
import { useUser } from '@/lib/utils'




export default function CompleteProfileForm({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params) 
 const user = useUser()

    const [completeProfile] = useMutation<CompleteProfileMutation, CompleteProfileMutationVariables>(CompleteProfileDocument)
    const [updateisProfile] = useMutation<UpdateUserIsProfileMutation, UpdateUserIsProfileMutationVariables>(UpdateUserIsProfileDocument)

  const {data} = useQuery<FindUserProfileIdQuery, FindUserProfileIdQueryVariables>(FindUserProfileIdDocument, {variables: {where:{user:{id: {equals:id}}}}})

 const [profileId, setProfileId] = useState<any>()



     useEffect(()=>{
            
           if(user?.isMemberForm === true && user?.isProfile === true) {
               window.location.href = `/dashboard`
          }  else if(user?.isMemberForm === false) {
              window.location.href = '/membershipform'
          
          }
 if (data?.profiles.length > 0 ) {

    setProfileId(data?.profiles[0].id)

 }

      },[user?.id, data])

 

  const {
    register,
    handleSubmit,
    formState: { errors },
     setValue,
    
  } = useForm()

   const [selectedFiles, setSelectedFiles] = useState<File[]>([])

  const [submitting, setSubmitting] = useState(false)
  const [previews, setPreviews] = useState<string[]>([])
   const fileInputRef = useRef<HTMLInputElement>(null)

   const [redirectTimer, setRedirectTimer] = useState(false)
  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (!files) return

    const newFiles = Array.from(files)
    const newPreviews = newFiles.map((file) => URL.createObjectURL(file))

    setSelectedFiles((prev) => [...prev, ...newFiles])
    setPreviews((prev) => [...prev, ...newPreviews])

    setValue('photos', [...selectedFiles, ...newFiles]) // update form state
    e.target.value = '' // allow reselecting same files
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

  const triggerFileSelect = () => {
    fileInputRef.current?.click()
  }
  const onSubmit = async (data: any) => {
      //console.log('Form data:', data)
      const {bio, age, gender, education, occupation, interests, lookingFor, photos} = data
 setSubmitting(true)
      
   

    const images = photos.map((item) => {
      return {
        image: item
      }
    })

    //console.log(images)
    //console.log(photos)

    // TODO: Replace this with your API or Keystone mutation
    //await new Promise((r) => setTimeout(r, 1000))
      
  
   await completeProfile({variables: {where: {id: profileId},data:{bio, age: Number(age), gender, education, occupation, interests, lookingFor:lookingFor[0], photos: {create: images}}}}).then(async (response) => {
  console.log('Mutation successful:', response.data);
  await updateisProfile({variables:{where: {id: user.id}, data:{isProfile:true}}})

  // You can also redirect or show a success message here
setRedirectTimer(true)
 setTimeout(() => { 
  //setRedirectTimer(false)
    // Go To Membership dashboard Page
 window.location.href = `/dashboard`
}, 1500);


})
.catch((error) => {
  console.error('Mutation failed:', error);
  setSubmitting(false)
  // Handle error — e.g., show error message to user
});
    
   
    

    //alert('Profile submitted!')
    
  } 

  if(redirectTimer) return <><LoadingSpinner message={"Plase Wait To be Redirected To the Member Dashboard"}/></>

  return (
    <ProtectedRoute>
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-2xl mx-auto p-6 bg-white rounded-2xl shadow-md space-y-6"
    >
      <h2 className="text-2xl font-semibold text-rose-700">Complete Your Profile</h2>

      <div>
        <label className="block font-medium text-gray-700">Bio</label>
        <textarea
          {...register('bio', { required: true })}
          className="w-full mt-1 p-2 border rounded-md"
          rows={4}
          placeholder="Tell us something about yourself..."
        />
        {errors.bio && <p className="text-rose-700 text-sm">Bio is required.</p>}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block font-medium text-gray-700">Age</label>
          <input
            type="number"
            {...register('age', { required: true, min: 18 })}
            className="w-full mt-1 p-2 border rounded-md"
            placeholder="e.g. 25"
          />
          {errors.age && <p className="text-rose-700 text-sm">Age must be 18 or older.</p>}
        </div>

        <div>
          <label className="block font-medium text-gray-700">Gender</label>
          <select
            {...register('gender', { required: true })}
            className="w-full mt-1 p-2 border rounded-md"
          >
            <option value="">Select...</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          {errors.gender && <p className="text-rose-700 text-sm">Gender is required.</p>}
        </div>
      </div>

      <div>
        <label className="block font-medium text-gray-700">Education</label>
        <input
          {...register('education')}
          className="w-full mt-1 p-2 border rounded-md"
          placeholder="e.g. Bachelor's in Engineering"
        />
      </div>

      <div>
        <label className="block font-medium text-gray-700">Occupation</label>
        <input
          {...register('occupation')}
          className="w-full mt-1 p-2 border rounded-md"
          placeholder="e.g. Electrician"
        />
      </div>

      <div>
        <label className="block font-medium text-gray-700">Interests</label>
        <input
          {...register('interests')}
          className="w-full mt-1 p-2 border rounded-md"
          placeholder="e.g. Hiking, Bible Study, Tech"
        />
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

       <div>
          <input type="hidden" {...register('photos')} />

      <div>
        <label className="block font-medium text-gray-700 mb-2">Upload Photos</label>
        <div
          onClick={triggerFileSelect}
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
                  title="Remove"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="bg-rose-700 text-white px-6 py-2 rounded-xl hover:bg-rose-800 transition-all"
      >
        {submitting ? 'Submitting...' : 'Submit Profile'}
      </button>
    </form>
    </ProtectedRoute>
  )
}
