/* eslint-disable */
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { UpdateChurchInfomationDocument, UpdateChurchInfomationMutation, UpdateChurchInfomationMutationVariables } from '@/data/gql/graphql'
import { useMutation } from '@apollo/client'
import { useUser } from '@/lib/utils'


const ChurchInfomation = ({form, setForm,errors, validateField, setErrors, setSection,}:any) => {
const user = useUser();
  const [updateChurchInfo, {loading}] = useMutation<UpdateChurchInfomationMutation, UpdateChurchInfomationMutationVariables>(UpdateChurchInfomationDocument );


           const handleChange = (field: string, value: string | boolean) => {
           
    setForm({ ...form, [field]: value });
    setErrors((prev:any) => ({ ...prev, [field]: "" }));

  };

    const handleBlur = (field: string) => {
    const error:any = validateField(field, form[field as keyof typeof form]);
    setErrors((prev:any) => ({ ...prev, [field]: error }));

  };

 const handleNext = () => {
    //Update Church Information
    updateChurchInfo({variables: {where:{member:{user:{id: user?.id}}}, data:{pastorsName: form.pastorsName, churchNameAndAddress: form.churchNameAddress, churchContactNumber: parseInt(form.churchContact), salvationTestimony: form.salvationTestimony}}}).then((response) => {
      console.log("Church Information Updated:", response.data);

      setForm({ ...form,
        pastorsName: response.data?.updateChurchInfomation?.pastorsName || "",
        churchNameAddress: response.data?.updateChurchInfomation?.churchNameAndAddress || "",
        churchContact: response.data?.updateChurchInfomation?.churchContactNumber ? response.data?.updateChurchInfomation?.churchContactNumber.toString() : "",
        salvationTestimony: response.data?.updateChurchInfomation?.salvationTestimony || ""
      });

    }).catch((error) => {
      console.error("Error updating Church Information:", error);
    } );   
    
     setSection((prev:any) => prev + 1)

  }


const prev:any = () => {setSection((prev:any) => prev - 1); setErrors({})};

  return (
     <>
     <label className="block font-semibold text-center mb-2">Church Information</label>
       <label className="block font-medium mb-1">Pastor's Name</label>
            <Input placeholder="Pastor's Name" name="pastorsName" className={errors.pastorsName ? "border-red-500" : ""} value={form.pastorsName} onChange={(e) => handleChange("pastorsName", e.target.value)} onBlur={() => handleBlur("pastorsName")}  />
              {errors.pastorsName && <p className="text-red-500 text-sm mt-1">{errors.pastorsName}</p>}
            <label className="block font-medium mb-1">Church Name & Address</label>
            <Textarea placeholder="Church Name & Address" name="churchNameAddress" className={errors.churchNameAddress ? "border-red-500" : ""} value={form.churchNameAddress} onChange={(e) => handleChange("churchNameAddress", e.target.value)} onBlur={() => handleBlur("churchNameAddress")}  />
                {errors.churchNameAddress && <p className="text-red-500 text-sm mt-1">{errors.churchNameAddress}</p>}
            <label className="block font-medium mb-1">Church Contact Number</label>
              <div className="relative">
          <span className="absolute inset-y-0 left-3 flex items-center text-sm">🇿🇦 +27</span>
          <input
            type="tel"
            placeholder="Enter 9-digit number"
            maxLength={9}
            value={form.churchContact}
            onChange={(e) => handleChange("churchContact", e.target.value.replace(/\D/g, ""))}
            onBlur={() => handleBlur("churchContact")}
            className={`w-full pl-16 border px-3 py-2 rounded ${
              errors.churchContact ? "border-red-500" : "border-gray-300"
            }`}
          />
        </div>
        {errors.churchContact && <p className="text-red-500 text-sm mt-1">{errors.churchContact}</p>}
   <label className="block font-medium mb-1"> Salvation testimony: How did you get saved?</label>
            <Textarea placeholder="Salvation testimony" name="salvationTestimony" className={errors.salvationTestimony ? "border-red-500" : ""} value={form.salvationTestimony} onChange={(e) => handleChange("salvationTestimony", e.target.value)} onBlur={() => handleBlur("salvationTestimony")}  />
                {errors.salvationTestimony && <p className="text-red-500 text-sm mt-1">{errors.salvationTestimony}</p>}

            <div className="flex justify-between">
              <Button className="bg-rose-700 hover:bg-rose-800 text-white" type="button" onClick={prev}>Back</Button>
              <Button className="bg-rose-700 hover:bg-rose-800 text-white" type="button" onClick={handleNext}>Next</Button>
            </div>
          </>
  )
}

export default ChurchInfomation