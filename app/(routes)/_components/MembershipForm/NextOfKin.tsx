import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React from 'react'

const NextOfKin = ({form, setForm,errors, validateField, setErrors, setSection}:any) => {

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
            <h3 className="font-semibold">Next of Kin (for emergencies)</h3>
            <Input placeholder="Name" name="kinName" />
            <Input placeholder="Relationship" name="kinRelation" />
             <div>
        <label className="block font-medium mb-1">Cellphone Number</label>
        <div className="relative">
          <span className="absolute inset-y-0 left-3 flex items-center text-sm">🇿🇦 +27</span>
          <input
            type="tel"
            placeholder="Enter 9-digit number"
            maxLength={9}
            value={form.kinCell}
            onChange={(e) => handleChange("kinCell", e.target.value.replace(/\D/g, ""))}
            onBlur={() => handleBlur("kinCell")}
            className={`w-full pl-16 border px-3 py-2 rounded ${
              errors.kinCell ? "border-red-500" : "border-gray-300"
            }`}
          />
        </div>
        {errors.kinCell && <p className="text-red-500 text-sm mt-1">{errors.kinCell}</p>}
      </div>
            <Input placeholder="Email Address" className={errors.kinEmail ? "border-red-500" : ""} onBlur={() => handleBlur("kinEmail")} name="kinEmail" type="email" />
             {errors.kinEmail && <p className="text-red-500 text-xs mt-1">{errors.kinEmail}</p>}
            <div className="flex justify-between">
              <Button className="bg-rose-700 hover:bg-rose-800 text-white" type="button" onClick={prev}>Back</Button>
               <Button  className="bg-rose-700 hover:bg-rose-800 text-white" type="button" onClick={next}>Next</Button>
            
            </div>
          </>
  )
}

export default NextOfKin