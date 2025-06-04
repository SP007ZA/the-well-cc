/* eslint-disable */
import { Button } from '@/components/ui/button';
import React from 'react'

const Address = ({form, setForm,errors, validateField, setErrors, setSection}:any) => {

     const handleChange = (field: string, value: string) => {
    setForm({ ...form, [field]: value });
    setErrors((prev:any) => ({ ...prev, [field]: "" }));

  };

    const handleBlur = (field: string) => {
    const error = validateField(field, form[field as keyof typeof form]);
    setErrors((prev:any) => ({ ...prev, [field]: error }));

  };


const next:any = () => setSection((prev:any) => prev + 1);
const prev:any = () => {setSection((prev:any) => prev - 1); setErrors({})};
  return (
    <>
      <div>
        <label className="block font-semibold text-center mb-2">Address</label>
        <div className="space-y-4">
          {[
            { label: "Street", key: "street" },
            { label: "Suburb", key: "suburb" },
            { label: "City", key: "city" },
            { label: "Province", key: "province" },
            { label: "Postal Code", key: "postalCode" },
          ].map(({ label, key }) => {
            if(label === "Province") {
              return <div key={key}>
                   <label className="block mt-4">Province</label>
            <select name="province" onChange={(e) =>handleChange("province",e.target.value,)}className="w-full border p-2 rounded">
              <option value="gauteng">Gauteng</option>
              <option value="mpumalanga">Mpumalanga</option>
              <option value="limpopo">Limpopo</option>
              <option value="north-west">North West</option>
              <option value="kwazulu-natal">Kwazulu Natal</option>
              <option value="free-state">Free State</option>
              <option value="eastern-cape">Eastern Cape</option>
              <option value="Western Cape">Western Cape</option>
              <option value="northern-cape">Northern Cape</option>
             
           
            </select>
                 </div>
            } else {
              return  <div key={key}>
                 <label className="block font-medium mb-1">{label}</label>
              <input
                type="text"
                placeholder={label}
                value={form[key as keyof typeof form]}
                onChange={(e) => handleChange(key, e.target.value)}
                onBlur={() => handleBlur(key)}
                className={`w-full border px-3 py-2 rounded ${
                  errors[key] ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors[key] && <p className="text-red-500 text-sm">{errors[key]}</p>}
            </div>
            }

           
})}
        </div>
      </div>
           <div className="flex justify-between">
              <Button className="bg-rose-700 hover:bg-rose-800 text-white" type="button" onClick={prev}>Back</Button>
              <Button className="bg-rose-700 hover:bg-rose-800 text-white" type="button" onClick={next}>Next</Button>
            </div>
          </>
  )
}

export default Address