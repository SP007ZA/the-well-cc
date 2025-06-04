/* eslint-disable */
import { Button } from '@/components/ui/button'
import React from 'react'

const MembershipType = ({setForm, setErrors, validateField, form, setSection}:any) => {

   const handleChange = (field: string, value: string | boolean) => {
    setForm({ ...form, [field]: value });
    setErrors((prev:any) => ({ ...prev, [field]: "" }));

  };


const next:any = () => setSection((prev:any) => prev + 1);
const prev:any = () => setSection((prev:any) => prev - 1);



  return (
     <>
            <label className="block">Would you like your profile or special interests to be published on our Website for other singles to see?</label>
            <div className="flex gap-4">
              <label><input type="radio" name="publishProfile" onChange={(e)=>handleChange("publishProfile",e.target.checked)} value="yes" /> Yes</label>
              <label><input type="radio" name="publishProfile" onChange={(e)=>handleChange("publishProfile",e.target.checked)} value="no" /> No</label>
            </div>
            <label className="block mt-4">Would you like your name, profile, or special interest to be include in the Well's Directory?</label>
            <div className="flex gap-4">
              <label><input type="radio" name="profileInDirectory" onChange={(e)=>handleChange("profileInDirectory",e.target.checked)} value="yes" /> Yes</label>
              <label><input type="radio" name="profileInDirectory" onChange={(e)=>handleChange("profileInDirectory",e.target.checked)} value="no" /> No</label>
            </div>
            <label className="block mt-4">Membership Type:</label>
            <select name="membershipType" onChange={(e) => handleChange("membershipType", e.target.value)} className="w-full border p-2 rounded">
              <option value="Basic">Basic - FREE</option>
              <option value="Premium">Premium - R80 / month</option>
              <option value="Platinum">Platinum - R600 / year</option>
            </select>
            <div className="flex justify-between">
              <Button className="bg-rose-700 hover:bg-rose-800 text-white" type="button" onClick={prev}>Back</Button>
              <Button className="bg-rose-700 hover:bg-rose-800 text-white" type="button" onClick={next}>Next</Button>
            </div>
          </>
  )
}

export default MembershipType