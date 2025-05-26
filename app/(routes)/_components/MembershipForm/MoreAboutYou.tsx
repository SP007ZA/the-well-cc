import { Button } from '@/components/ui/button'
import React from 'react'

const MoreAboutYou = ({form, setForm,errors, validateField, setErrors, setSection}:any) => {

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
            <label className="block">Marital Status:</label>
            <div className="flex gap-4 flex-wrap">
              <label><input type="radio" name="status" value="single" /> Single</label>
              <label><input type="radio" name="status" value="divorced" /> Divorced</label>
              <label><input type="radio" name="status" value="widowed" /> Widowed</label>
            </div>
            <label className="block mt-4">Kids:</label>
            <div className="flex gap-4 flex-wrap">
              <label><input type="radio" name="kids" value="have" /> Have Kids</label>
              <label><input type="radio" name="kids" value="none" /> Do Not Have</label>
              <label><input type="radio" name="kids" value="dontWant" /> Do Not Want</label>
            </div>
             <label className="block mt-4">Race</label>
            <select name="raceType" className="w-full border p-2 rounded">
              <option value="african">African</option>
              <option value="coloured">Coloured</option>
              <option value="indian/asian">Indian / Asian</option>
              <option value="white">White</option>
              <option value="other">Other</option>
            </select>
            <label className="block mt-4">Would you date outside your race?</label>
            <div className="flex gap-4">
              <label><input type="radio" name="interracial" value="yes" /> Yes</label>
              <label><input type="radio" name="interracial" value="no" /> No</label>
            </div>
            <div className="flex justify-between">
              <Button className="bg-rose-700 hover:bg-rose-800 text-white" type="button" onClick={prev}>Back</Button>
              <Button  className="bg-rose-700 hover:bg-rose-800 text-white" type="button" onClick={next}>Next</Button>
            </div>
          </>
  )
}

export default MoreAboutYou