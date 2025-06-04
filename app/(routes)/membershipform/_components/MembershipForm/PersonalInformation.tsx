/* eslint-disable */
import { Button } from '@/components/ui/button';
import React from 'react'

const PersonalInformation = ({form, setForm,errors, validateField, setErrors, setSection}:any) => {
   

     const handleChange = (field: string, value: string) => {
    setForm({ ...form, [field]: value });
    setErrors((prev:any) => ({ ...prev, [field]: "" }));

  };

    const handleBlur = (field: string) => {
    const error:any = validateField(field, form[field as keyof typeof form]);
    setErrors((prev:any) => ({ ...prev, [field]: error }));
  };
const next:any = () => setSection((prev:any) => prev + 1);



  return (
    <>
           <div>
             <label className="block text-center font-medium mb-1">Personal Information</label>
        <label className="block font-medium mb-1">First Name</label>
        <input
          type="text"
          value={form.fullName}
          onChange={(e) => handleChange("fullName", e.target.value)}
          onBlur={() => handleBlur("fullName")}
          className={`w-full border px-3 py-2 rounded ${
            errors.fullName ? "border-red-500" : "border-gray-300"
          }`}
        />
        {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}
      </div>

      <div>
        <label className="block font-medium mb-1">Surname</label>
        <input
          type="text"
          value={form.surname}
          onChange={(e) => handleChange("surname", e.target.value)}
          onBlur={() => handleBlur("surname")}
          className={`w-full border px-3 py-2 rounded ${
            errors.surname ? "border-red-500" : "border-gray-300"
          }`}
        />
        {errors.surname && <p className="text-red-500 text-sm">{errors.surname}</p>}
      </div>

      <div>
        <label className="block font-medium mb-1">ID Number</label>
        <input
          type="text"
          value={form.idNumber}
          maxLength={13}
          inputMode="numeric"
          onChange={(e) => handleChange("idNumber", e.target.value)}
          onBlur={() => handleBlur("idNumber")}
          className={`w-full border px-3 py-2 rounded ${
            errors.idNumber ? "border-red-500" : "border-gray-300"
          }`}
        />
        {errors.idNumber && <p className="text-red-500 text-sm">{errors.idNumber}</p>}
      </div>

      <div>
        <label className="block font-medium mb-1">Cellphone Number</label>
        <div className="relative">
          <span className="absolute inset-y-0 left-3 flex items-center text-sm">🇿🇦 +27</span>
          <input
            type="tel"
            placeholder="Enter 9-digit number"
            maxLength={9}
            value={form.cell}
            onChange={(e) => handleChange("cell", e.target.value.replace(/\D/g, ""))}
            onBlur={() => handleBlur("cell")}
            className={`w-full pl-16 border px-3 py-2 rounded ${
              errors.cell ? "border-red-500" : "border-gray-300"
            }`}
          />
        </div>
        {errors.cell && <p className="text-red-500 text-sm mt-1">{errors.cell}</p>}
      </div>
            <div className="flex justify-between">
              <Button  className="bg-rose-700 hover:bg-rose-800 text-white" type="button" onClick={next}>Next</Button>
            </div>
          </>
  )
}

export default PersonalInformation