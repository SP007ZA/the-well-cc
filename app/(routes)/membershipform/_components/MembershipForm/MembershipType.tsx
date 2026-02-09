/* eslint-disable */
import { Button } from '@/components/ui/button'
import {  UpdateUserMembershipDocument, UpdateUserMembershipMutation, UpdateUserMembershipMutationVariables } from '@/data/gql/graphql';
import { useUser } from '@/lib/utils';
import { useMutation } from '@apollo/client';



const MembershipType = ({setForm, setErrors, form, setSection}:any) => {

  const user = useUser();

  const [updateMembership] = useMutation<UpdateUserMembershipMutation, UpdateUserMembershipMutationVariables>(UpdateUserMembershipDocument);

   const handleChange = (field: string, value: string | boolean) => {
    setForm({ ...form, [field]: value });
    setErrors((prev:any) => ({ ...prev, [field]: "" }));



  };

  
  const isFormValid =
    typeof form.publishProfile === 'boolean' &&
    typeof form.profileInDirectory === 'boolean' &&
    form.correspondencePreference?.trim();
    form.membershipType?.trim();

  
  //console.log("Membership Type Form:", form.memberShipType);

   const handleNext = () => {
    //Update Church Information
   
    updateMembership({variables: {where:{user:{id: user?.id}}, data:{memberShipType: form.membershipType, correspondencePreference: form.correspondencePreference, publishProfile: form.publishProfile, profileInDirectory: form.profileInDirectory}}}).then((response) => {
   

      setForm({ ...form,
        correspondencePreference: response.data?.updateMembership?.correspondencePreference || "",
        publishProfile: response.data?.updateMembership?.publishProfile || false,
        profileInDirectory: response.data?.updateMembership?.profileInDirectory || false,
        memberShipType: response.data?.updateMembership?.memberShipType || ""
      });

    }).catch((error) => {
      //console.error("Error updating Membership Information:", error);
    } );   
    
     setSection((prev:any) => prev + 1)

  }


const prev:any = () => setSection((prev:any) => prev - 1);

  return (
     <>
            <label className="block">Would you like your profile or special interests to be published on our Website for other singles to see?</label>
            <div className="flex gap-4">
              <label><input type="radio" name="publishProfile" value={form.publishProfile} checked={form.publishProfile === true}
            onChange={() => handleChange("publishProfile", true)} /> Yes</label>
              <label><input type="radio" name="publishProfile"     checked={form.publishProfile === false}
            onChange={() => handleChange("publishProfile", false)} value={form.publishProfile} /> No</label>
            </div>
            <label className="block mt-4">Would you like your name, profile, or special interest to be include in the Well's Directory?</label>
            <div className="flex gap-4">
              <label><input type="radio" name="profileInDirectory" checked={form.profileInDirectory === true}
            onChange={() => handleChange("profileInDirectory", true)} value={form.profileInDirectory} /> Yes</label>
              <label><input type="radio" name="profileInDirectory"  checked={form.profileInDirectory === false}
            onChange={() => handleChange("profileInDirectory", false)} value="no" />No</label>
            </div>
              <label className="block mt-4">Correspondence Preference:</label>
                       
                        <select name="correspondencePreference"  value={form.correspondencePreference || ""} onChange={(e) => handleChange("correspondencePreference", e.target.value)} className="w-full border p-2 rounded">
                           <option value="">-- Select Correspondence --</option>
                          <option value="email">Email</option>
                          <option value="whatsApp">WhatsApp</option>
                          <option value="both">Both</option>
                        </select>
            <label className="block mt-4">Membership Type:</label>
            <select name="membershipType" value={form.membershipType || ""} onChange={(e) => handleChange("membershipType", e.target.value)} className="w-full border p-2 rounded">
                <option value="">{form.membershipType || "Select Membership Type"}</option>
              <option value="Basic">Basic - FREE</option>
              <option value="Premium">Premium - R80 / month</option>
              <option value="Platinum">Platinum - R600 / year</option>
            </select>
            <div className="flex justify-between">
              <Button className="bg-rose-700 hover:bg-rose-800 text-white" type="button" onClick={prev}>Back</Button>
               <Button
          className="bg-rose-700 hover:bg-rose-800 text-white disabled:bg-gray-300 disabled:cursor-not-allowed disabled:opacity-70"
          type="button"
          onClick={handleNext}
          disabled={!isFormValid}
        >
          Next
        </Button>
            </div>
          </>
  )
}

export default MembershipType