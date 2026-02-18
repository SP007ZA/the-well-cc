/* eslint-disable */
import LoadingSpinner from '@/app/_components/LoadingSpinner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { CreateChurchInfomationDocument, CreateChurchInfomationMutation, CreateChurchInfomationMutationVariables, CreateMembershipDocument, CreateMembershipMutation, CreateMembershipMutationVariables, CreateNextOfKinDocument, CreateNextOfKinMutation, CreateNextOfKinMutationVariables, CreateUserProfileDocument, CreateUserProfileMutation, CreateUserProfileMutationVariables, UpdateUserPersonalInformationDocument, UpdateUserPersonalInformationMutation, UpdateUserPersonalInformationMutationVariables } from '@/data/gql/graphql';
import { getAgeFromId, getGender, useUser } from '@/lib/utils';
import { useMutation } from '@apollo/client';
import { ImageIcon } from 'lucide-react';
import { useEffect, useState } from 'react';

const PersonalInformation = ({ form, setForm, previewUrl, setProfileID, setPreviewUrl, errors, validateField, setErrors, setSection, profileID }: any) => {
const user = useUser();
const [file, setFile] = useState<File | null>(null)
const [createProfile, {loading: createProfileLoading}] = useMutation<CreateUserProfileMutation, CreateUserProfileMutationVariables>(CreateUserProfileDocument) 
const [createMembership, {loading: createMembershipLoading}] = useMutation<CreateMembershipMutation, CreateMembershipMutationVariables>(CreateMembershipDocument);
const [createChurchInfomation, {loading: createChurchLoading}] = useMutation<CreateChurchInfomationMutation, CreateChurchInfomationMutationVariables>(CreateChurchInfomationDocument);  
const [createNextOfKin, {loading: createNextOfKinLoading}] = useMutation<CreateNextOfKinMutation, CreateNextOfKinMutationVariables>(CreateNextOfKinDocument);
const [updateProfile] = useMutation<UpdateUserPersonalInformationMutation, UpdateUserPersonalInformationMutationVariables>(UpdateUserPersonalInformationDocument);

//console.log("Is Profile ID:", profileID);

useEffect(() => {}, [form.documentType]);




  const handleChange = (field: string, value: string) => {
    setForm({ ...form, [field]: value });
    setErrors((prev: any) => ({ ...prev, [field]: "" }));
  };

  const handleBlur = (field: string) => {
    const error: any = validateField(field, form[field as keyof typeof form]);
    setErrors((prev: any) => ({ ...prev, [field]: error }));
  };

   const handleDocumentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
     if (!file) return;

     // Validate file type
const allowedTypes = [
  // Documents
  'application/pdf',
  // Images
  'image/jpeg',
  'image/png',
  'image/jpg',
  'image/webp',
  'image/gif',
];
  if (!allowedTypes.includes(file.type)) {
    alert('Only document files are allowed (PDF, Word, Png, Jpeg).');
    return;
  }

  // Optional: validate size
  if (file.size > 10 * 1024 * 1024) {
    alert('File too large. Maximum 10MB.');
    return;
  }

      setFile(file)
      setPreviewUrl(URL.createObjectURL(file))
      
  
  }

  const handleNext = () => {

    if(!!profileID) {
      //console.log("Profile exists");
        // Update Profile
        updateProfile({
        variables: { where:{ user:{ id:user?.id!}}, 
          data: {firstName: form.fullName, lastName: form.surname, documentType: form.documentType, age: form.documentType === "South African ID" ? getAgeFromId(form.idNumber) : 0, idNumber: parseFloat(form.idNumber), gender: form.documentType === "South African ID" ? getGender(form.idNumber) : "Male", cellNumber: parseInt(form.cell), user: {connect: {id: user?.id}}}, }
        }).then((response) => {
          //console.log("Profile Updated:", response.data);
        }).catch((error) => {
          //console.error("Error updating profile:", error); 
        });
    }

    // Update ID-Image => revisted later
    

    if(!!profileID === false) {
      //console.log("No Profile"); 
       // Create Profile 
      createProfile({
        variables: {
          data: {firstName: form.fullName, lastName: form.surname, documentType: form.documentType, age: form.documentType === "South African ID" ? getAgeFromId(form.idNumber) : 0, idNumber: parseFloat(form.idNumber), gender: form.documentType === "South African ID" ? getGender(form.idNumber) : "Male", cellNumber: parseInt(form.cell), address:{create:{fullAddress: form.fullAddress}}, idAttachment:{upload: file}, user: {connect: {id: user?.id}}}, }
        }).then((response) => {
          //onsole.log("Profile Created:", response.data);
            setProfileID(response.data?.createProfile?.id);
        // CreateMembership
        createMembership({
          variables:{
            data: {user: {connect: {id: user?.id}}}
          }
        }).then((response) => {
          //console.log("Membership Created:", response.data);
          //Create Church Information with Membership ID
          createChurchInfomation({
            variables:{
              data:{member:{connect:{id: response.data?.createMembership?.id}}}   
            }
            
          }).then((response) => {
            //console.log("Church Information Created:", response.data);    

          });

        //Create Next Of Kin with Membership ID
        createNextOfKin({
            variables:{
              data:{member:{connect:{id: response.data?.createMembership?.id}}}   
            }
            
          }).then((response) => {
            //console.log("Next Of Kin Created:", response.data);    

          });

          
        }).catch((error) => {
          //console.error("Error creating membership:", error); 
        });


        }).catch((error) => {
          //console.error("Error creating profile:", error); 
        }); 


    } 
  setSection((prev: any) => prev + 1);
  }

  

  const isFormValid =
    form.fullName &&
    form.surname &&
    form.idNumber &&
    form.cell &&
    previewUrl !== null &&
    !errors.fullName &&
    !errors.surname &&
    !errors.idNumber &&
    !errors.cell;


    if(createChurchLoading || createProfileLoading || createMembershipLoading || createNextOfKinLoading) {
      return <LoadingSpinner message="Loading..." />;
    } 

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
          className={`w-full border px-3 py-2 rounded ${errors.fullName ? "border-red-500" : "border-gray-300"}`}
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
          className={`w-full border px-3 py-2 rounded ${errors.surname ? "border-red-500" : "border-gray-300"}`}
        />
        {errors.surname && <p className="text-red-500 text-sm">{errors.surname}</p>}
      </div>

      <div className="mb-2">
        <label className="block font-medium mb-1">Select Document Type</label>
        <select
          value={form.documentType || "South African ID"}
          onChange={(e) => handleChange("documentType", e.target.value)}
          className="w-full border px-3 py-2 rounded border-gray-300"
        >
          <option value="South African ID">South African ID</option>
          <option value="Passport Number">Passport Number</option>
        </select>
      </div>

      <div>
        <label className="block font-medium mb-1">
          {form.documentType === "Passport Number" ? "Passport Number" : "South African ID"}
        </label>
        <input
          type="text"
          value={form.idNumber}
          onChange={(e) => handleChange("idNumber", e.target.value.toUpperCase())}
          onBlur={() => handleBlur("idNumber")}
          maxLength={form.documentType === "Passport Number" ? 9 : 13}
          className={`w-full border px-3 py-2 rounded ${errors.idNumber ? "border-red-500" : "border-gray-300"}`}
        />
        {errors.idNumber && <p className="text-red-500 text-xs mt-1">{errors.idNumber}</p>}
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
            className={`w-full pl-16 border px-3 py-2 rounded ${errors.cell ? "border-red-500" : "border-gray-300"}`}
          />
        </div>
        {errors.cell && <p className="text-red-500 text-sm mt-1">{errors.cell}</p>}
      </div>
       {/* Photo Upload */}
      <div className="space-y-2">
        {form.documentType === "South African ID" ? (
          <Label className="font-medium">Upload Copy Of South African ID Document</Label>
        ) : (
          <Label className="font-medium">Upload Copy Of Passport Document</Label>
        ) }
       <Input
  id="document"
  type="file"
  accept=".pdf,.doc,.docx,.xls,.xlsx,.txt,.jpg,.jpeg,.png,.webp,.gif"
  onChange={handleDocumentChange}
/>
       
      </div>

      <div className="flex justify-between mt-4">
        <Button
          className="bg-rose-700 hover:bg-rose-800 text-white disabled:bg-gray-300 disabled:cursor-not-allowed disabled:opacity-70"
          type="button"
          onClick={handleNext}
          disabled={!isFormValid || createProfileLoading || createMembershipLoading || createChurchLoading || createNextOfKinLoading}
        >
          Next
        </Button>
      </div>
    </>
  );
};

export default PersonalInformation;
