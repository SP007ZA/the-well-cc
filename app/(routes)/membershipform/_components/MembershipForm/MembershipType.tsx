/* eslint-disable */
import { Button } from '@/components/ui/button'
import React from 'react'

const MembershipType = ({setForm, setErrors, form, setSection}:any) => {

   const handleChange = (field: string, value: string | boolean) => {
    setForm({ ...form, [field]: value });
    setErrors((prev:any) => ({ ...prev, [field]: "" }));

  };


const next:any = () => setSection((prev:any) => prev + 1);
const prev:any = () => setSection((prev:any) => prev - 1);

  const isFormValid =
    typeof form.publishProfile === 'boolean' &&
    typeof form.profileInDirectory === 'boolean' &&
    form.correspondencePreference?.trim();
    form.membershipType?.trim();



  return (
     <>
            <label className="block">Would you like your profile or special interests to be published on our Website for other singles to see?</label>
            <div className="flex gap-4">
              <label><input type="radio" name="publishProfile"  checked={form.publishProfile === true}
            onChange={() => handleChange("publishProfile", true)} value="yes" /> Yes</label>
              <label><input type="radio" name="publishProfile"    checked={form.publishProfile === false}
            onChange={() => handleChange("publishProfile", false)} value="no" /> No</label>
            </div>
            <label className="block mt-4">Would you like your name, profile, or special interest to be include in the Well's Directory?</label>
            <div className="flex gap-4">
              <label><input type="radio" name="profileInDirectory" checked={form.profileInDirectory === true}
            onChange={() => handleChange("profileInDirectory", true)} value="yes" /> Yes</label>
              <label><input type="radio" name="profileInDirectory"  checked={form.profileInDirectory === false}
            onChange={() => handleChange("profileInDirectory", false)} value="no" /> No</label>
            </div>
              <label className="block mt-4">Correspondence Preference:</label>
                       
                        <select name="correspondencePreference"  value={form.correspondencePreference || ""} onChange={(e) => handleChange("correspondencePreference", e.target.value)} className="w-full border p-2 rounded">
                           <option value="">-- Select Correspondence --</option>
                          <option value="email">Email</option>
                          <option value="whatsApp">WhatsApp</option>
                          <option value="both">Both</option>
                        </select>
            <label className="block mt-4">Membership Type:</label>
            <select name="membershipType" value={form.membershipType || ""} onChange={(e) => handleChange("membershipType", e.target.value)} className="w-full border p-2 rounded">
                <option value="">-- Select Membership --</option>
              <option value="Basic">Basic - FREE</option>
              <option value="Premium">Premium - R80 / month</option>
              <option value="Platinum">Platinum - R600 / year</option>
            </select>
            <div className="flex justify-between">
              <Button className="bg-rose-700 hover:bg-rose-800 text-white" type="button" onClick={prev}>Back</Button>
               <Button
          className="bg-rose-700 hover:bg-rose-800 text-white disabled:bg-gray-300 disabled:cursor-not-allowed disabled:opacity-70"
          type="button"
          onClick={next}
          disabled={!isFormValid}
        >
          Next
        </Button>
            </div>
          </>
  )
}

export default MembershipType