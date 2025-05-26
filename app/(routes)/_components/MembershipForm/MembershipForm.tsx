"use client";

import { useState } from "react";
import PersonalInformation from "./PersonalInformation";
import Address from "./Address";
import ChurchInfomation from "./ChurchInfomation";
import MoreAboutYou from "./MoreAboutYou";
import MembershipType from "./MembershipType";
import NextOfKin from "./NextOfKin";
import { SignatureSection } from "./SignatureSection";

export default function SignupForm() {
  const [section, setSection] = useState(1);
    const [date, setDate] = useState<"" | undefined>()

 const [form, setForm] = useState({
  fullName: "",
  surname: "",
  idNumber: "",
  cell: "",
  kinCell:"",
  kinEmail:"",
  street: "",
  suburb: "",
  city: "",
  province: "",
  postalCode: "",
  dateOfSalvation: date ? date : "",
  pastorsName:"",
  churchNameNAddress:"",
  churchContactNumber:"",
  correspondencePreference:"",
  publishProfile: "",
  profileInDirectory: "",
  membershipType:"",
  naritialStatus:"",
  kids:"",
  race:"",
  dateOutsideRace:""
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
      case "kinCell":
        if (!/^[0-9]{9}$/.test(value)) return "Enter a valid 9-digit cellphone number.";
        break;
      case "kinEmail":
        if (!value.includes("@")) return "Please enter a valid email.";
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
         <PersonalInformation form={form}  setForm= {setForm} errors={errors}  setErrors={setErrors} validateField={validateField} setSection={setSection}/>
        )}

        {section === 2 && (
         <Address form={form}  setForm= {setForm} errors={errors}  setErrors={setErrors} validateField={validateField} setSection={setSection}/>
        )}


        {section === 3 && (
        <ChurchInfomation form={form}  setForm= {setForm} errors={errors}  setErrors={setErrors} validateField={validateField} setSection={setSection} date={date} setDate={setDate}/>
        )}

        {section === 4 && (
         <MembershipType form={form}  setForm= {setForm} errors={errors}  setErrors={setErrors} validateField={validateField} setSection={setSection}/>
        )}

        {section === 5 && (
        <MoreAboutYou form={form}  setForm= {setForm} errors={errors}  setErrors={setErrors} validateField={validateField} setSection={setSection}/>
        )}

        {section === 6 && (
        <NextOfKin form={form}  setForm= {setForm} errors={errors}  setErrors={setErrors} validateField={validateField} setSection={setSection}/>
        )}

        {section === 7 && (
        <SignatureSection form={form}  setForm= {setForm} errors={errors}  setErrors={setErrors} validateField={validateField} setSection={setSection}/>
        )}
      </form>
    </div>
  );
}
 