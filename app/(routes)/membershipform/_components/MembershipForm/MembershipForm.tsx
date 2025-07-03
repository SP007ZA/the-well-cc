/* eslint-disable */
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
    const [isOpen, setIsOpen] = useState(false);

 const [form, setForm] = useState<any>({
  fullName: "",
  surname: "",
  idNumber: "",
  cell: "",
  kinName:"",
  kinRelation:"",
  kinCell:"",
  kinEmail:"",
  street: "",
  suburb: "",
  city: "",
  province: "",
  postalCode: "",
  dateOfSalvation: date,
  pastorsName:"",
  churchNameAddress:"",
  churchContact:"",
  correspondencePreference:"",
  publishProfile: "yes",
  profileInDirectory: "yes",
  membershipType:"",
  maritialStatus:"",
  kids:"",
  race:"",
  dateOutsideRace:"",

  
});

 const [errors, setErrors] = useState<Record<string, string>>({});

 /*const requiredFieldsFilled = Object.values(form).every((value) => value.trim() !== ""); */
/*const hasErrors = Object.values(errors).some((e) => e !== "") || !requiredFieldsFilled; */

 /* const handleChange = (field: string, value: string) => {
    setForm({ ...form, [field]: value });
    setErrors((prev) => ({ ...prev, [field]: "" }));
  }; */


   const validateField = (field: string, value: string): string => {
    switch (field) {
      case "fullName":
      if (!/^[a-zA-Z\s]{2,}$/.test(value)) return "Name must be at least 2 letters and only contain alphabets.";
      break;
      case "surname":
         if (!/^[a-zA-Z\s]{2,}$/.test(value)) return "Name must be at least 2 letters and only contain alphabets.";
      break;
      case "street":
         break;
      case "suburb":
         if (!/^[a-zA-Z\s]{2,}$/.test(value)) return "Name must be at least 2 letters and only contain alphabets.";
      break;
      case "city":
         if (!/^[a-zA-Z\s]{2,}$/.test(value)) return "Name must be at least 2 letters and only contain alphabets.";
      break;
      case "pastorsName":
         if (!/^[a-zA-Z\s]{2,}$/.test(value)) return "Name must be at least 2 letters and only contain alphabets.";
      break;
      case "churchNameAddress":
         if (!/^[a-zA-Z\s]{2,}$/.test(value)) return "Name must be at least 2 letters and only contain alphabets.";
      break;
      case "province":
        if (!value.trim()) return "This field is required.";
        break;
      case "idNumber":
  if (form.documentType === "id") {
    if (!/^[0-9]{13}$/.test(value)) return "ID number must be exactly 13 digits.";
  } else if (form.documentType === "passport") {
    if (!/^(?=.*\d)[A-Z0-9]{6,12}$/i.test(value)) return "Invalid passport number. Must be 6–12 letters/numbers, with at least one number.";
  
  }
  break;
      case "cell":
     if (!/^[1-9][0-9]{8}$/.test(value)) return "Enter a valid 9-digit cellphone number (no leading 0)."; 
     break;
      case "kinCell":
      if (!/^[1-9][0-9]{8}$/.test(value)) return "Enter a valid 9-digit cellphone number (no leading 0)."; 
        break;
      case "churchContact":
        if (!/^[0-9]{9}$/.test(value)) return "Enter a valid 9-digit contact number.";
        break;
          case "kinName":
      if (!/^[a-zA-Z\s]{2,}$/.test(value)) return "Name must be at least 2 letters and only contain alphabets.";
      break;  case "kinRelation":
      if (!/^[a-zA-Z\s]{2,}$/.test(value)) return "Relationship must be at least 2 letters and only contain alphabets.";
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

   /* const handleBlur = (field: string) => {
    const error = validateField(field, form[field as keyof typeof form]);
    setErrors((prev) => ({ ...prev, [field]: error }));
  }; */

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
 /* const next = () => setSection((prev) => prev + 1);
  const prev = () => setSection((prev) => prev - 1); */

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
        <SignatureSection isOpen={isOpen} setIsOpen={setIsOpen}  form={form}  setForm= {setForm} errors={errors}  setErrors={setErrors} validateField={validateField} setSection={setSection}/>
        )}
      </form>
    </div>
  );
}
 