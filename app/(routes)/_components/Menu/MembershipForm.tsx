"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function SignupForm() {
  const [section, setSection] = useState(1);

 const [form, setForm] = useState({
  fullName: "",
  surname: "",
  idNumber: "",
  cell: "",
  street: "",
  suburb: "",
  city: "",
  province: "",
  postalCode: "",
});

 const [errors, setErrors] = useState<Record<string, string>>({});

 /*const requiredFieldsFilled = Object.values(form).every((value) => value.trim() !== ""); */
/*const hasErrors = Object.values(errors).some((e) => e !== "") || !requiredFieldsFilled; */

  const handleChange = (field: string, value: string) => {
    setForm({ ...form, [field]: value });
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };


   const validateField = (field: string, value: string): string => {
    switch (field) {
      case "fullName":
      case "surname":
      case "street":
      case "suburb":
      case "city":
      case "province":
        if (!value.trim()) return "This field is required.";
        break;
      case "idNumber":
        if (!/^[0-9]{13}$/.test(value)) return "ID number must be exactly 13 digits.";
        break;
      case "cell":
        if (!/^[0-9]{9}$/.test(value)) return "Enter a valid 9-digit cellphone number.";
        break;
      case "postalCode":
        if (!/^[0-9]{4,6}$/.test(value)) return "Enter a valid postal code.";
        break;
    }
    return "";
  };

    const handleBlur = (field: string) => {
    const error = validateField(field, form[field as keyof typeof form]);
    setErrors((prev) => ({ ...prev, [field]: error }));
  };

  /*  const validateAll = () => {
    const newErrors: Record<string, string> = {};
    for (const key in form) {
      const error = validateField(key, form[key as keyof typeof form]);
      if (error) newErrors[key] = error;
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateAll()) {
      console.log("Submitted:", form);
    }
  }; */
  const next = () => setSection((prev) => prev + 1);
  const prev = () => setSection((prev) => prev - 1);

  return (
    <div className="max-w-xl mx-auto p-6 mt-10 bg-white rounded-2xl shadow">
      <h2 className="text-2xl font-bold mb-4">Membership Sign-Up</h2>
      <form className="space-y-4">
        {section === 1 && (
          <>
           <div>
        <label className="block font-medium mb-1">Full Name</label>
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

      <div>
        <label className="block font-semibold mb-2">Address</label>

        <div className="space-y-4">
          {[
            { label: "Street", key: "street" },
            { label: "Suburb", key: "suburb" },
            { label: "City", key: "city" },
            { label: "Province", key: "province" },
            { label: "Postal Code", key: "postalCode" },
          ].map(({ label, key }) => (
            <div key={key}>
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
          ))}
        </div>
      </div>
            <div className="flex justify-between">
              <Button   className="bg-rose-700 hover:bg-rose-800 text-white" type="button" onClick={next}>Next</Button>
            </div>
          </>
        )}

        {section === 2 && (
          <>
            <Input placeholder="Date of Salvation" name="salvationDate" />
            <Input placeholder="Pastor's Name" name="pastorName" />
            <Textarea placeholder="Church Name & Address" name="church" />
            <Input placeholder="Church Contact Number" name="churchContact" />
            <label className="block mt-4">Correspondence Preference:</label>
            <div className="flex gap-4">
              <label><input type="checkbox" name="correspondence" value="email" /> Email</label>
              <label><input type="checkbox" name="correspondence" value="whatsapp" /> WhatsApp</label>
            </div>
            <div className="flex justify-between">
              <Button className="bg-rose-700 hover:bg-rose-800 text-white" type="button" onClick={prev}>Back</Button>
              <Button className="bg-rose-700 hover:bg-rose-800 text-white" type="button" onClick={next}>Next</Button>
            </div>
          </>
        )}

        {section === 3 && (
          <>
            <label className="block">Would you like your profile or special interests to be published on our Website for other singles to see?</label>
            <div className="flex gap-4">
              <label><input type="radio" name="publish" value="yes" /> Yes</label>
              <label><input type="radio" name="publish" value="no" /> No</label>
            </div>
            <label className="block mt-4">Would you like your name, profile, or special interest to be include in the Well&#39s Directory?</label>
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
        )}

        {section === 4 && (
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
        )}

        {section === 5 && (
          <>
            <h3 className="font-semibold">Next of Kin (for emergencies)</h3>
            <Input placeholder="Name" name="kinName" />
            <Input placeholder="Relationship" name="kinRelation" />
            <Input placeholder="Contact Number" name="kinContact" />
            <Input placeholder="Email Address" name="kinEmail" type="email" />
            <span className=" italic text-md  text-rose-700">By signing this form I declare with my mouth that Jesus Christ is the Son of the living God, who died on the cross for my sins and the sins of the world, and that GOD raised Him from the dead on the third day. Romans 10:9-10</span>
            <div className="flex justify-between">
              <Button className="bg-rose-700 hover:bg-rose-800 text-white" type="button" onClick={prev}>Back</Button>
              <Button className="bg-rose-700 hover:bg-rose-800 text-white" type="submit">Submit</Button>
            </div>
          </>
        )}
      </form>
    </div>
  );
}
 