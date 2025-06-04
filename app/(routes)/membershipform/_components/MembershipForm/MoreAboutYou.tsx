/* eslint-disable */
import { Button } from '@/components/ui/button'
import React from 'react'

const MoreAboutYou = ({form, setForm, validateField, setErrors, setSection}:any) => {

  const handleChange = (field: string, value: string | boolean) => {
    setForm({ ...form, [field]: value });
    setErrors((prev:any) => ({ ...prev, [field]: "" }));

  };

 
const next:any = () => setSection((prev:any) => prev + 1);
const prev:any = () => setSection((prev:any) => prev - 1);



  return (
      <>
            <label className="block">Marital Status:</label>
            <div className="flex gap-4 flex-wrap">
              <label><input type="radio" name="maritialStatus" onChange={(e)=>handleChange("maritialStatus",e.target.value)} value="single" /> Single</label>
              <label><input type="radio" name="maritialStatus" onChange={(e)=>handleChange("maritialStatus",e.target.value)} value="divorced" /> Divorced</label>
              <label><input type="radio" name="maritialStatus" onChange={(e)=>handleChange("maritialStatus",e.target.value)} value="widowed" /> Widowed</label>
            </div>
            <label className="block mt-4">Kids:</label>
            <div className="flex gap-4 flex-wrap">
              <label><input type="radio" name="kids" onChange={(e)=>handleChange("kids",e.target.value)} value="have kids" /> Have kids</label>
              <label><input type="radio" name="kids" onChange={(e)=>handleChange("kids",e.target.value)} value="do not have" /> Do Not Have</label>
              <label><input type="radio" name="kids" onChange={(e)=>handleChange("kids",e.target.value)} value="do not want" /> Do Not Want</label>
            </div>
             <label className="block mt-4">Race</label>
            <select name="race" onChange={(e)=>handleChange("race",e.target.value)} className="w-full border p-2 rounded">
              <option value="african">African</option>
              <option value="coloured">Coloured</option>
              <option value="indian/asian">Indian / Asian</option>
              <option value="white">White</option>
              <option value="other">Other</option>
            </select>
            <label className="block mt-4">Would you date outside your race?</label>
            <div className="flex gap-4">
              <label><input type="radio" name="dateOutsideRace" onChange={(e)=>handleChange("dateOutsideRace",e.target.checked)} value="yes" /> Yes</label>
              <label><input type="radio" name="dateOutsideRace" onChange={(e)=>handleChange("dateOutsideRace",e.target.checked)} value="no" /> No</label>
            </div>
            <div className="flex justify-between">
              <Button className="bg-rose-700 hover:bg-rose-800 text-white" type="button" onClick={prev}>Back</Button>
              <Button  className="bg-rose-700 hover:bg-rose-800 text-white" type="button" onClick={next}>Next</Button>
            </div>
          </>
  )
}

export default MoreAboutYou