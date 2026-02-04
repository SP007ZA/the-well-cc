/* eslint-disable */
import { Button } from '@/components/ui/button'
import { UpdateUserMembershipDocument, UpdateUserMembershipMutation, UpdateUserMembershipMutationVariables } from '@/data/gql/graphql';
import { useUser } from '@/lib/utils';
import { useMutation } from '@apollo/client';

const MoreAboutYou = ({form, setForm, setErrors, setSection}:any) => {
  const user = useUser();
    const [updateMembership] = useMutation<UpdateUserMembershipMutation, UpdateUserMembershipMutationVariables>(UpdateUserMembershipDocument);

  const handleChange = (field: string, value: string | boolean) => {
    setForm({ ...form, [field]: value });
    setErrors((prev:any) => ({ ...prev, [field]: "" }));

  };

     const handleNext = () => {
    //Update Church Information
    updateMembership({variables: {where:{user:{id: user?.id}}, data:{kids: form.kids, race: form.race, wouldYouDateOutSideOfYourRace: form.dateOutsideRace ==="yes" ? true : false, maritalStatus: form.maritalStatus}}}).then((response) => {
      //console.log("Membership Information Updated:", response.data);

      setForm({ ...form,
        kids: response.data?.updateMembership?.kids || "",
        race: response.data?.updateMembership?.race || "",      
        dateOutsideRace: response.data?.updateMembership?.wouldYouDateOutSideOfYourRace || "",
        maritalStatus: response.data?.updateMembership?.maritalStatus || ""
      });

    }).catch((error) => {
      //console.error("Error updating Membership Information:", error);
    } );   
    
     setSection((prev:any) => prev + 1)

  }

 
const prev:any = () => setSection((prev:any) => prev - 1);

const isFormValid =
  form?.maritalStatus?.trim() &&
  form?.kids?.trim() &&
  form?.race?.trim() &&
 form?.dateOutsideRace?.trim();


  return (
      <>
            <label className="block">Marital Status:</label>
      <div className="flex gap-4 flex-wrap">
        {["single", "single/never married", "divorced", "widowed"].map((status) => (
          <label key={status}>
            <input
              type="radio"
              name="maritalStatus"
              value={status}
              checked={form.maritalStatus === status}
              onChange={(e) => handleChange("maritalStatus", e.target.value)}
            />{" "}
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </label>
        ))}
      </div>
              <label className="block mt-4">Kids:</label>
      <div className="flex gap-4 flex-wrap">
        {["have kids", "do not have", "do not want", "maybe have"].map((option) => (
          <label key={option}>
            <input
              type="radio"
              name="kids"
              value={option}
              checked={form.kids === option}
              onChange={(e) => handleChange("kids", e.target.value)}
            />{" "}
            {option.charAt(0).toUpperCase() + option.slice(1)}
          </label>
        ))}
      </div>
             <label className="block mt-4">Race</label>
            <select name="race" value={form.race || ""} onChange={(e)=>handleChange("race",e.target.value)} className="w-full border p-2 rounded">
              <option value="">-- Select Race --</option>
              <option value="african">African</option>
              <option value="coloured">Coloured</option>
              <option value="indian/asian">Indian / Asian</option>
              <option value="white">White</option>
              <option value="other">Other</option>
            </select>
            <label className="block mt-4">Would you date outside your race?</label>
            <div className="flex gap-4">
               {["yes", "no"].map((option) => (
          <label key={option}>
            <input
              type="radio"
              name="dateOutsideRace"
              value={option}
              checked={form.dateOutsideRace === option}
              onChange={(e) => handleChange("dateOutsideRace", e.target.value)}
            />{" "}
          {option.charAt(0).toUpperCase() + option.slice(1)}
          </label>
        ))}
            </div>
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

export default MoreAboutYou