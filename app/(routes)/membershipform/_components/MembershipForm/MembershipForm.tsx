/* eslint-disable */
"use client";

import { useEffect, useState } from "react";
import PersonalInformation from "./PersonalInformation";
import ChurchInfomation from "./ChurchInfomation";
import MoreAboutYou from "./MoreAboutYou";
import MembershipType from "./MembershipType";
import NextOfKin from "./NextOfKin";
import { SignatureSection } from "./SignatureSection";
import AddressInput from "./MemberAddress";
import { GetUserMembershipTypeDocument, GetUserMembershipTypeQuery, GetUserMembershipTypeQueryVariables } from "@/data/gql/graphql";
import { useUser } from "@/lib/utils";
import { useQuery } from "@apollo/client";
import LoadingSpinner from "@/app/_components/LoadingSpinner";

export default function SignupForm() {
    const user = useUser()
  const [section, setSection] = useState(1);
   const [previewUrl, setPreviewUrl] = useState<string | null>(null)
    const [profileID, setProfileID] = useState("");
    const [isMembership, setIsMembership] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
     const [input, setInput] = useState("");
     const {data, error, loading} = useQuery<GetUserMembershipTypeQuery, GetUserMembershipTypeQueryVariables>(GetUserMembershipTypeDocument, {variables: {where: {id: user?.id}}});



     useEffect(() => {  
      if(!!data?.user?.profile?.id) {
        setProfileID(data?.user?.profile?.id);

        //Set User Data
        setForm((prev: any) => ({
          ...prev,
          fullName: data.user.profile?.firstName || "",    
          surname: data.user.profile?.lastName || "",
          documentType: data.user.profile?.documentType || "South African ID",
          idNumber: data.user.profile?.idNumber ? data.user.profile?.idNumber.toString() : "",
          cell: data.user.profile?.cellNumber ? data.user.profile?.cellNumber.toString() : "",
          pastorsName: data.user.membership.church.pastorsName || "",
          churchNameAddress: data.user.membership.church.churchNameAndAddress || "",
          churchContact: data.user.membership.church.churchContactNumber ? data.user.membership.church.churchContactNumber.toString() : "",
          salvationTestimony: data.user.membership.church.salvationTestimony || "",
          corespondencePreference: data.user.membership.correspondencePreference || "",
          publishProfile: data.user.membership.publishProfile,
          profileInDirectory: data.user.membership.profileInDirectory,
          memberShipType: data.user.membership.memberShipType || "",
          dateOutsideRace: data.user.membership.wouldYouDateOutSideOfYourRace ? "yes" : "no",
          maritalStatus: data.user.membership.maritalStatus || "",
          kids: data.user.membership.kids || "",
          kinName: data.user.membership.nextOfKin?.name || "",
          kinRelation: data.user.membership.nextOfKin?.relationship || "",
          kinEmail: data.user.membership.nextOfKin?.email || "",
          kinCell: data.user.membership.nextOfKin?.cellNumber ? data.user.membership.nextOfKin?.cellNumber.toString() : "",
        }));      

       

        setPreviewUrl(data.user.profile?.idPhoto?.image?.publicUrlTransformed|| null); 
        //Address
        setInput(data.user.profile?.address?.fullAddress || "");  

      }

      if(!!data?.user?.membership?.id) {}
        setIsMembership(true);
     }, [data]);

   
const [form, setForm] = useState<any>({
  fullName: "",
  surname: "",
  documentType: "South African ID",
  idNumber: "",
  idPhoto:"",
  cell: "",
  kinName:"",
  kinRelation:"",
  kinCell:"",
  kinEmail:"",
  fullAddress: "",
  country: "",
  postalCode: "",
  dateOfsalvationTestimonySalvation: "",
  salvationTestimony: "",
  pastorsName:"",
  churchNameAddress:"",
  churchContact:"",
  correspondencePreference:"",
  publishProfile: "yes",
  profileInDirectory: "yes",
  membershipType:"Basic",
  maritalStatus:"",
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
  if (!/^[a-zA-Z\s,]{2,}$/.test(value))
    return "Name must be at least 2 characters and may only contain letters, spaces, and commas.";
  break;

      case "province":
        if (!value.trim()) return "This field is required.";
        break;
      case "idNumber":
 if (form.documentType === "South African ID") {
  if (!/^[0-9]{13}$/.test(value)) {
    return "ID number must be exactly 13 digits.";
  }

  const birthYearYY = parseInt(value.substring(0, 2), 10);
  const currentYear = new Date().getFullYear();
  const currentYY = currentYear % 100;

  // Determine century
  const birthYear =
    birthYearYY <= currentYY
      ? 2000 + birthYearYY
      : 1900 + birthYearYY;

  const age = currentYear - birthYear;

  if (age <= 24) {
    return "You must be 25 years or older to register.";
  }
}
 else if (form.documentType === "Passport Number") {
    if (!/^(?=.*\d)[A-Z0-9]{6,12}$/i.test(value)) return "Invalid passport number. Must be 6–12 letters/numbers, with at least one number.";
  
  }
  break;
     case "cell":
  if (!/^[678][0-9]{8}$/.test(value)) {
    return "Cellphone number must start with 6, 7, or 8 and be 9 digits long.";
  }
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
        case "fullAddress": 
      const trimmed = value.trim(); // ✅ IMPORTANT

  const startsWithValidNumber =
    /^(?:[A-Za-z]?\d+\s+|\b(?:Unit|Flat|Apartment|Suite|House|No\.?|Block)\s+\d+)/i.test(trimmed);

  if (!startsWithValidNumber) {
    return "Address must start with a street or unit number (e.g. 8 Swee Street, A340, Unit 5).";
  }

  // Must include a postal code (at least 4 digits)
  if (!/\b\d{4,}\b/.test(trimmed)) {
    return "Address must include a valid postal code (at least 4 digits).";
  }
  break;
      case "postalCode":
        if (!/^[A-Za-z0-9\- ]{4,10}$/.test(value)) {
    return "Postal code must be at least 4 characters.";
  }
  break;
  case "country":
      if (!value || value.trim() === "") {
    return "Country is required.";
  }
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

  if(loading) return <LoadingSpinner message="Loading... Please wait."/>

  return (
    <div className="max-w-xl mx-auto p-6 mt-10 bg-white rounded-2xl shadow">
      <h2 className="text-2xl font-bold mb-4">Membership Sign-Up</h2>
       
      <form className="space-y-4">
        {section === 1 && (
         <PersonalInformation profileID={profileID} setProfileID={setProfileID} form={form}  setForm= {setForm} previewUrl={previewUrl} setPreviewUrl={setPreviewUrl} errors={errors}  setErrors={setErrors} validateField={validateField} setSection={setSection}/>
        )}

        {section === 2 && (
        <AddressInput profileID={profileID} form={form}  setForm= {setForm} input={input} setInput={setInput} errors={errors}  setErrors={setErrors} validateField={validateField} setSection={setSection} />
        )}


        {section === 3 && (
        <ChurchInfomation isMembership={isMembership} form={form}  setForm= {setForm} errors={errors}  setErrors={setErrors} validateField={validateField} setSection={setSection} />
        )}

        {section === 4 && (
         <MembershipType isMembership={isMembership} form={form}  setForm= {setForm} errors={errors}  setErrors={setErrors} validateField={validateField} setSection={setSection}/>
        )}

        {section === 5 && (
        <MoreAboutYou isMembership={isMembership} form={form}  setForm= {setForm} errors={errors}  setErrors={setErrors} validateField={validateField} setSection={setSection}/>
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
 