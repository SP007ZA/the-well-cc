'use client'
/* eslint-disable */
import { useRef, useState } from "react"
import SignatureCanvas from "react-signature-canvas"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import {  ImageIcon, Eraser } from "lucide-react"
import { AgreementSection } from "./AgreementSection"
import { useMutation } from "@apollo/client"
import { UpdateUserDocument, UpdateUserMutation, UpdateUserMutationVariables } from "@/data/gql/graphql"
import LoadingSpinner from "@/app/_components/LoadingSpinner"
import { base64ToFile, useUser } from "@/lib/utils"

export function SignatureSection({form, isOpen, setIsOpen, setSection}:any) {
     const [agreed, setAgreed] = useState(false)
  
  const [photo, setPhoto] = useState<File | null>(null)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)
  const sigCanvasRef = useRef<SignatureCanvas>(null)
  const [signature, setSignature] = useState<any>(null)
    
  
  const [createMember, {loading}]= useMutation<UpdateUserMutation,UpdateUserMutationVariables>(UpdateUserDocument)

  const user = useUser()


 const handleClear = () => {
  sigCanvasRef.current?.clear();
  setSignature(null);
};

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setPhoto(file)
      setPreviewUrl(URL.createObjectURL(file))
      
    }
  }
 


  const handleDrawEnd = () => {
  const isEmpty = sigCanvasRef.current?.isEmpty();
  if (!isEmpty) {
    const dataUrl = sigCanvasRef.current?.getTrimmedCanvas().toDataURL("image/png");
    setSignature(dataUrl);
  } else {
    setSignature(null); // force null if no valid drawing
  }
};

        
 const  handleGenerate= async () =>{
     
const file =   base64ToFile(signature, "signature") 
    
     

         //Add complete-profile/[id]
         /* if(form?.membershipType == 'Basic') {
            console.log("Basic Membership")
        } else{
            // Go To Membership Subscription Page
            console.log("Other Membership")
        } */

     await  createMember({variables: {where:{id:user?.id}, data:{profile:{create:{firstName:form.fullName, lastName:form.surname, address:{create:{streetName:form?.street, town:form.suburb, city:form.city, province:form.province, postalCode:Number(form.postalCode)}}, profilePicture:photo}}, membership:{create:{idNumber:Number(form.idNumber), cellNumber:Number(form.cell), wouldYouDateOutSideOfYourRace:true, maritalStatus:form.maritialStatus, kids:form.kids, memberShipType:form.membershipType,race:form.race, church:{create:{churchContactNumber:Number(form.churchContact), churchNameAndAddress: form.churchNameAddress, dateOfSalvation:form.dateOfSalvation, pastorsName:form.pastorsName}}, user:{connect:{id:user?.id}},constitutionAgreement:true, correspondencePreference:form.correspondencePreference, nextOfKin:{create:{cellNumber:Number(form.kinCell),email:form.kinEmail, name:form.kinName, relationship:form.kinRelation}}, signature:{create:{image:file}}}}}}}).then(({data}) => {
    

       // console.log(data.updateUser.profile.id)
      //  console.log(data.updateUser.membership.memberShipType)
      //console.log(form?.memberShipType)

        if(form?.membershipType == 'Basic') {
            window.location.href = `/complete-profile/${data?.updateUser.profile.id}`
        } else{
            // Go To Membership Subscription Page
             window.location.href = `/membershipform/checkout/${data?.updateUser.profile.id}?membershipType=${data.updateUser.membership.memberShipType}`
        } 

      
       }).catch(error => console.log(error)) 
   
      
    }

    
  

//  const next = () => setSection((prev:any) => prev + 1); 
const prev:any = () => setSection((prev:any) => prev - 1);

 const canSubmit = agreed && photo !== null && signature !== null

if(loading) return <><LoadingSpinner message="Please wait to be redirected..."/> </>

  return (
    <div className="space-y-6 bg-white dark:bg-zinc-900 p-6 rounded-2xl shadow-md border">
      <h2 className="text-xl font-semibold text-rose-700">Final Details</h2>

      <AgreementSection agreed={agreed} onChange={(val) => setAgreed(!!val)}  isOpen={isOpen} setIsOpen={setIsOpen}/>
    
        {/* Photo Upload */}
      <div className="space-y-2">
        <Label htmlFor="photo">Upload a Picture of Yourself</Label>
        <div className="flex items-center space-x-4">
          <Input id="photo" type="file" accept="image/*" onChange={handlePhotoChange} />
        </div>
        {previewUrl ? (
          <div className="mt-4">
            <img
              src={previewUrl}
              alt="Preview"
              className="rounded-lg border w-40 h-40 object-cover"
            />
          </div>
        ) : (
          <div className="mt-2 text-sm text-muted-foreground flex items-center gap-2">
            <ImageIcon className="w-4 h-4" />
            No image selected
          </div>
        )}
      </div>
     <span className=" italic text-md  text-rose-700">By signing this form I declare with my mouth that Jesus Christ is the Son of the living God, who died on the cross for my sins and the sins of the world, and that GOD raised Him from the dead on the third day. Romans 10:9-10</span>
 
      {/* Signature Canvas */}
      <div className="space-y-2">
        <Label>Signature</Label>
        <div className="border rounded-lg overflow-hidden shadow-inner bg-white">
          <SignatureCanvas
            ref={sigCanvasRef}
             onEnd={handleDrawEnd}
            penColor="black"
            canvasProps={{
              width: 400,
              height: 150,
              className: "bg-gray-50 w-full h-36 cursor-crosshair",
            }}
          />
        </div>

        
        <Button type="button" variant="ghost" size="sm" onClick={handleClear}>
          <Eraser className="w-4 h-4 mr-2" />
          Clear Signature
        </Button>
      </div>

   
        <div className="flex justify-between">
                    <Button className="bg-rose-700 hover:bg-rose-800 text-white" type="button" onClick={prev}>Back</Button>
                     <Button
          className="bg-rose-700 hover:bg-rose-800 text-white disabled:bg-gray-300 disabled:opacity-70"
          type="button"
          onClick={handleGenerate}
          disabled={!canSubmit}
        >
          Submit
        </Button>
                    
                
                  </div>
    </div>
  )
}
