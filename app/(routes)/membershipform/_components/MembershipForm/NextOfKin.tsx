/* eslint-disable */
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { UpdateNextOfKinDocument, UpdateNextOfKinMutation, UpdateNextOfKinMutationVariables } from '@/data/gql/graphql';
import { useUser } from '@/lib/utils';
import { useMutation } from '@apollo/client';


const NextOfKin = ({form, setForm,errors, validateField, setErrors, setSection}:any) => {

   const user = useUser();

  const [updateNextOfKin] = useMutation<UpdateNextOfKinMutation, UpdateNextOfKinMutationVariables>(UpdateNextOfKinDocument);

         const handleChange = (field: string, value: string) => {
    setForm({ ...form, [field]: value });
    setErrors((prev:any) => ({ ...prev, [field]: "" }));

  };

    const handleBlur = (field: string) => {
    const error:any = validateField(field, form[field as keyof typeof form]);
    setErrors((prev:any) => ({ ...prev, [field]: error }));

  };

       const handleNext = () => {
    //Update NextOfKin Information
    updateNextOfKin({variables: {where:{member:{user:{id: user?.id}}}, data:{name: form.kinName, relationship: form.kinRelation, email: form.kinEmail, cellNumber: parseInt(form.kinCell || "0")}}}).then((response) => {
      //console.log("Membership Information Updated:", response.data);

      setForm({ ...form,
        name: response.data?.updateNextOfKin?.name || "",
        relationship: response.data?.updateNextOfKin?.relationship || "",      
        email : response.data?.updateNextOfKin?.email || "",
        cellNumber: response.data?.updateNextOfKin?.cellNumber || ""
      });

    }).catch((error) => {
      //console.error("Error updating Membership Information:", error);
    } );   
    
     setSection((prev:any) => prev + 1)

  }

 
const prev:any = () => {setSection((prev:any) => prev - 1); setErrors({})};

  return (
     <>
            <h3 className="font-semibold">Next of Kin (for emergencies)</h3>
            <label className="block font-medium mb-1">Name</label>
            <Input placeholder="Name" className={errors.kinEmail ? "border-red-500" : ""} value={form.kinName || ''} onChange={(e) => handleChange("kinName", e.target.value)} onBlur={() => handleBlur("kinName")} name="kinName" type='text'/>
          {errors.kinName && <p className="text-red-500 text-xs mt-1">{errors.kinName}</p>}
            <label className="block font-medium mb-1">Relationship</label>
            <Input placeholder="Relationship" className={errors.kinEmail ? "border-red-500" : ""} value={form.kinRelation || ''}  onChange={(e) => handleChange("kinRelation", e.target.value)}  onBlur={() => handleBlur("kinRelation")}  name="kinRelation" type='text' />
           {errors.kinRelation && <p className="text-red-500 text-xs mt-1">{errors.kinRelation}</p>}
             <label className="block font-medium mb-1">Email Address</label>
             <Input placeholder="Email Address" className={errors.kinEmail ? "border-red-500" : ""} value={form.kinEmail || ''} onChange={(e) => handleChange("kinEmail", e.target.value)} onBlur={() => handleBlur("kinEmail")} name="kinEmail" type="email" />
             {errors.kinEmail && <p className="text-red-500 text-xs mt-1">{errors.kinEmail}</p>}
             <div>
        <label className="block font-medium mb-1">Cellphone Number</label>
        <div className="relative">
          <span className="absolute inset-y-0 left-3 flex items-center text-sm">🇿🇦 +27</span>
          <input
            type="tel"
            placeholder="Enter 9-digit number"
            maxLength={9}
            value={form.kinCell || ''}
            onChange={(e) => handleChange("kinCell", e.target.value.replace(/\D/g, ""))}
            onBlur={() => handleBlur("kinCell")}
            className={`w-full pl-16 border px-3 py-2 rounded ${
              errors.kinCell ? "border-red-500" : "border-gray-300"
            }`}
          />
        </div>
        {errors.kinCell && <p className="text-red-500 text-sm mt-1">{errors.kinCell}</p>}
      </div>
           
            <div className="flex justify-between">
              <Button className="bg-rose-700 hover:bg-rose-800 text-white" type="button" onClick={prev}>Back</Button>
               <Button  className="bg-rose-700 hover:bg-rose-800 text-white" type="button" onClick={handleNext}>Next</Button>
            
            </div>
          </>
  )
}

export default NextOfKin