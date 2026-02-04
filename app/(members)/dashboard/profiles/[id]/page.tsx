/* eslint-disable */
"use client"
import { use, useEffect, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import Lightbox from "yet-another-react-lightbox"
import "yet-another-react-lightbox/styles.css"
import { useState } from "react"
import { useLazyQuery, useMutation, useQuery } from "@apollo/client"
import { CreateChatRequestDocument, CreateChatRequestMutation, CreateChatRequestMutationVariables, GetMemberProfileDocument, GetMemberProfileQuery, GetMemberProfileQueryVariables, MyChatRequestsDocument, MyChatRequestsQuery, MyChatRequestsQueryVariables } from "@/data/gql/graphql"
import { extractLocation, useUser } from "@/lib/utils"
/* Add these imports (shadcn/ui) */
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import WhatsAppButton from "@/app/_components/WhatsAppButton"

export default function ProfilePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params) // unwrap the async params
const currentUserId = useUser()?.id
 // const member = mockMembers[id]
   const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)
    const [requestSent, setRequestSent] = useState(false)
    const [requestReceived, setRequestReceived] = useState(false)
     const [openRequestModal, setOpenRequestModal] = useState(false);
  const [waNumber, setWaNumber] = useState("");
  const [waError, setWaError] = useState("");
  const [sending, setSending] = useState(false);

  
  const {data, loading} = useQuery<GetMemberProfileQuery, GetMemberProfileQueryVariables>(GetMemberProfileDocument, {variables: {where:{id}}})
  const [fetchOutgoing] = useLazyQuery<
      MyChatRequestsQuery,
      MyChatRequestsQueryVariables
    >(MyChatRequestsDocument, {
      fetchPolicy: 'cache-and-network',
    })
  const [fetchIncoming] = useLazyQuery<
      MyChatRequestsQuery,
      MyChatRequestsQueryVariables
    >(MyChatRequestsDocument, {
      fetchPolicy: 'cache-and-network',
    })

    
  
  const [memberProfile, setMemberProfile] = useState<any>()
  
 const [createChatRequest, { loading: creating }] = useMutation<
    CreateChatRequestMutation,
    CreateChatRequestMutationVariables
  >(CreateChatRequestDocument) 

    // Simple ZA number validation:
  // Accepts "+27XXXXXXXXX" (11–12 chars) or "0XXXXXXXXX" (10–11 chars).
  const validSANumber = (value: string) => {
    const v = value.trim();
    return (
      /^\+27\d{9}$/.test(v) || /^0\d{9}$/.test(v) // +27######### or 0#########
    );
  };

  const handleOpenModal = () => {
    setWaNumber("");
    setWaError("");
    setRequestSent(false);
    setOpenRequestModal(true);
  };

  const handleSendRequest = async () => {
    setWaError("");
    if (!validSANumber(waNumber)) {
      setWaError("Enter a valid South African number (e.g. 0XXXXXXXXX or +27XXXXXXXXX).");
      return;
    }
    setSending(true);
    try {
      // Call your mutation here. Example:
     try {
      await createChatRequest({
        variables: {
          data: {
            sender: { connect: { id: currentUserId } },
            receiver: { connect: { id: memberProfile.userId } },
            requesterWhatsApp: Number(waNumber),
            message: `I would like to request a private WhatsApp chat with ${memberProfile.name}.`
          }
        }
      })
      setRequestSent(true)
    } catch (error) {
      console.error("Error sending request:", error)
    }  

      // Simulate success:
      await new Promise((r) => setTimeout(r, 800));
      setRequestSent(true);
      // Optionally auto-close after a moment:
      // setTimeout(() => setOpenRequestModal(false), 1200);
    } catch (e) {
      setWaError("Sorry, we couldn't send your request. Please try again.");
    } finally {
      setSending(false);
    }
  };
  useEffect(()=> {

     if (data?.profile !== null) {
      const profile = {
        userId: data?.profile?.user.id,
        id: data?.profile.id,
         name: `${data?.profile.firstName} ${data?.profile.lastName}`,
            photo: data?.profile.profilePicture.publicUrlTransformed,
            gallery: data?.profile.photos.map((item) => (item.image.publicUrlTransformed)),
            interests: data?.profile.interests.split(' '),
            location: extractLocation(data?.profile.address ?? null).city  ?? "Unknown",
            bio: data?.profile.bio

      }
      setMemberProfile(profile)

         fetchOutgoing({ variables: {where:{AND:[{sender:{id:{equals:currentUserId}}, receiver:{id:{equals: profile.userId}}}]}} }).then((res) => {
           //console.log("Chat requests:", res.data.chatRequests)
           const request = res.data.chatRequests[0]
           //console.log("Request:", request)
           if (request && !request.read)  setRequestSent(true)
            if (request && request.receiver.id === currentUserId) {
             // console.log("You have a chat request from this member")
            }
          
         })
         fetchIncoming({ variables: {where:{AND:[{sender:{id:{equals: profile.userId}}, receiver:{id:{equals: currentUserId }}}]}} }).then((res) => {
           //console.log("Chat requests:", res.data.chatRequests)
           const request = res.data.chatRequests[0]
           //console.log("Request:", request)
            if (request && request.receiver.id === currentUserId) {
              //console.log("You have a chat request from this member")
              setRequestReceived(true)
              setWaNumber(request.requesterWhatsApp.toString())
            }
          
         })
     }

  }, [data, loading])



  if (data?.profile === null) {
    return <div className="p-6 text-center text-gray-500">Member not found.</div>
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <Card className="overflow-hidden shadow-md">
        <div className="relative cursor-pointer" onClick={() => { setOpen(true); setIndex(0) }}>
        {memberProfile?.gallery?.length  &&   <Image
            src={memberProfile?.photo}
            alt={memberProfile?.name}
            width={800}
            height={500}
            className="w-full h-72 object-cover"
          />}
        </div>

        <div className="p-6 space-y-4">
          <h2 className="text-2xl font-bold text-rose-800">{memberProfile?.name}</h2>
          <p className="text-gray-600 text-sm">📍 {memberProfile?.location}</p>
          <p className="text-gray-700 text-base">{memberProfile?.bio}</p>

          <div>
            <h4 className="text-sm font-semibold text-gray-500 uppercase mb-2">Interests</h4>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              {memberProfile?.interests?.map((item:any, idx:any) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>

          {memberProfile?.gallery?.length !== 0 &&  <div>
            <h4 className="text-sm font-semibold text-gray-500 uppercase mb-2">Gallery</h4>
            <div className="grid grid-cols-3 gap-2">
              {memberProfile?.gallery?.map((src:any, i:any) => (
                <Image
                  key={i}
                  src={src}
                  alt={`Photo ${i + 1}`}
                  width={150}
                  height={100}
                  className="object-cover rounded cursor-pointer hover:opacity-80"
                  onClick={() => { setOpen(true); setIndex(i) }}
                />
              ))}
            </div>
          </div> }

         

         {false && <Link href={`/dashboard/chat/${memberProfile?.id}`}>
            <Button className="mt-4 bg-rose-700 hover:bg-rose-800 text-white">
              Start Chat with {memberProfile?.name}
            </Button>
          </Link> }
        </div>
     {/* Request button (not full-width) */}
      <div className="mt-4 flex justify-center">

        {requestReceived ? (<WhatsAppButton phone={waNumber}/>) 
        : ( <Button
  onClick={handleOpenModal}
  disabled={requestSent}
  className={`bg-rose-600 hover:bg-rose-700 text-white px-4 py-2 rounded-full flex items-center justify-center gap-2 shadow-md text-sm sm:text-base whitespace-normal break-words max-w-full sm:max-w-xs ${
    requestSent ? "opacity-60 cursor-not-allowed" : ""
  }`}
>
  {requestSent
    ? "Chat Request Sent"
    : (
      <span className="text-center">
        Request private WhatsApp chat<br className="sm:hidden"/> 
        with {memberProfile?.name ?? "member"}
      </span>
    )
  }
</Button>
)}
       
      </div>

      {/* Modal */}
      <Dialog open={openRequestModal} onOpenChange={setOpenRequestModal}>
        <DialogContent className="sm:max-w-md bg-white">
          <DialogHeader>
            <DialogTitle className="text-rose-700">
              Request a private WhatsApp chat
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-3">
            <p className="text-sm text-gray-600">
              Enter the WhatsApp number where <b>{memberProfile?.name ?? "the member"}</b> can contact you.
            </p>

            <div className="space-y-1">
              <Label htmlFor="wa">WhatsApp number</Label>
              <Input
                id="wa"
                placeholder="082 123 4567"
                value={waNumber}
                onChange={(e) => setWaNumber(e.target.value.replace(/\D/g, ""))}
                className="focus-visible:ring-rose-600"
              />
              {waError && <p className="text-red-600 text-xs">{waError}</p>}
            </div>

            {requestSent && (
              <div className="text-green-700 text-sm bg-green-50 border border-green-200 rounded-md px-3 py-2">
                ✅ Request sent! We’ll let them know you want to chat on WhatsApp.
              </div>
            )}
          </div>

          <DialogFooter className="mt-4">
            <Button
              variant="outline"
              onClick={() => setOpenRequestModal(false)}
              className="border-rose-200 text-rose-700 hover:bg-rose-50"
            >
              Close
            </Button>
            <Button
               onClick={handleSendRequest}
              disabled={sending || requestSent}
              className="bg-rose-700 hover:bg-rose-800 text-white"
            >
              {creating ? "Sending..." : requestSent ? "Sent" : "Send Request"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
        
      </Card>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={memberProfile?.gallery?.map((src:any) => ({ src }))}
        index={index}
        on={{ view: ({ index }) => setIndex(index) }}
      />
    </div>
  )
}
