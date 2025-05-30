import { Button } from '@/components/ui/button'
import React from 'react'

const MembershipType = ({form, setForm,errors, validateField, setErrors, setSection}:any) => {

    const handleChange = (field: string, value: string) => {
    setForm({ ...form, [field]: value });
    setErrors((prev:any) => ({ ...prev, [field]: "" }));

  };

    const handleBlur = (field: string) => {
    const error = validateField(field, form[field as keyof typeof form]);
    setErrors((prev:any) => ({ ...prev, [field]: error }));

  };
const next = () => setSection((prev:any) => prev + 1);
const prev = () => setSection((prev:any) => prev - 1);

  return (
     <>
            <label className="block">Would you like your profile or special interests to be published on our Website for other singles to see?</label>
            <div className="flex gap-4">
              <label><input type="radio" name="publish" value="yes" /> Yes</label>
              <label><input type="radio" name="publish" value="no" /> No</label>
            </div>
            <label className="block mt-4">Would you like your name, profile, or special interest to be include in the Well&aposs Directory?</label>
            <div className="flex gap-4">
              <label><input type="radio" name="directory" value="yes" /> Yes</label>
              <label><input type="radio" name="directory" value="no" /> No</label>
            </div>
            <label className="block mt-4">Membership Type:</label>
            <select name="membershipType" className="w-full border p-2 rounded">
              <option value="basic">Basic - FREE</option>
              <option value="premium">Premium - R80 / month</option>
              <option value="platinum">Platinum - R550 / year</option>
            </select>
            <div className="flex justify-between">
              <Button className="bg-rose-700 hover:bg-rose-800 text-white" type="button" onClick={prev}>Back</Button>
              <Button className="bg-rose-700 hover:bg-rose-800 text-white" type="button" onClick={next}>Next</Button>
            </div>
          </>
  )
}

export default MembershipType