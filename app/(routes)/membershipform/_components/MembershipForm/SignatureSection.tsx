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
import { CreateSignatureDocument, CreateSignatureMutation, CreateSignatureMutationVariables, UpdateUserDocument, UpdateUserMutation, UpdateUserMutationVariables } from "@/data/gql/graphql"
import LoadingSpinner from "@/app/_components/LoadingSpinner"
import { base64ToFile, useUser } from "@/lib/utils"
import { create } from "domain"

export function SignatureSection({form, isOpen, setIsOpen, setSection}:any) {
     const [agreed, setAgreed] = useState(false)
     const [popiAgreed, setPopiAgreed] = useState(false)
  
 
  const sigCanvasRef = useRef<SignatureCanvas>(null)
  const [signature, setSignature] = useState<any>(null)
    
  const [isMember, setIsMember] = useState(true)
  const [createMember, {loading}]= useMutation<UpdateUserMutation,UpdateUserMutationVariables>(UpdateUserDocument)
  const [createSignature, {loading: signatureLoading}] = useMutation<CreateSignatureMutation, CreateSignatureMutationVariables>(CreateSignatureDocument)  
  const user = useUser()

 


 const handleClear = () => {
  sigCanvasRef.current?.clear();
  setSignature(null);
};

 
 


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

    await  createMember({variables: {where:{id:user?.id}, data:{isMemberForm:isMember }}}).then(({data}) => {
    
const profileId = data?.updateUser.profile.id
const membershipType = data?.updateUser.membership.memberShipType
const membershipID = data?.updateUser.membership.id


createSignature({variables:{data:{image:signature, member:{connect:{id:membershipID}}}}}).then(({data}) => {

      
    }).catch(error => console.log(error))

   
            // Go To Membership Subscription Page After creeating and linking signature
          return   window.location.href = `/membershipform/checkout/${profileId}?membershipType=${membershipType}`
      

      
       }).catch(error => console.log(error)) 
   

      }

    
  

//  const next = () => setSection((prev:any) => prev + 1); 
const prev:any = () => setSection((prev:any) => prev - 1);

 const canSubmit = agreed && popiAgreed  && signature !== null

if(loading || signatureLoading) return <><LoadingSpinner message="Please wait to be redirected..."/> </>

  return (
    <div className="space-y-6 bg-white dark:bg-zinc-900 p-6 rounded-2xl shadow-md border">
      <h2 className="text-xl font-semibold text-rose-700">Final Details</h2>

      <AgreementSection agreed={agreed} onChangeAgreed={(val) => setAgreed(!!val)} onChangePopiAgreed={(val) => setPopiAgreed(!!val)}  isOpen={isOpen} setIsOpen={setIsOpen}/>
    
       
     <span className=" italic text-md  text-rose-700">By signing this form I declare with my mouth and believe in my heart that Jesus Christ is the Son of the living God, who died on the cross for my sins and the sins of the world, and that GOD raised Him from the dead on the third day. Romans 10:9-10</span>
 
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
          {loading ||  signatureLoading ? "Please Wait..." : "Submit"}
        </Button>
                    
                
                  </div>
    </div>
  )
}
