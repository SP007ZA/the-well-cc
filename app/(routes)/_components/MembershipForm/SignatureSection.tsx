import { useRef, useState } from "react"
import SignatureCanvas from "react-signature-canvas"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { UploadCloud, Trash, ImageIcon, Eraser } from "lucide-react"
import { AgreementSection } from "./AgreementSection"

export function SignatureSection({form, setForm,errors, validateField, setErrors, setSection}:any) {
     const [agreed, setAgreed] = useState(false)
  const [area, setArea] = useState("")
  const [photo, setPhoto] = useState<File | null>(null)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)
  const sigCanvasRef = useRef<SignatureCanvas>(null)

  const handleClear = () => {
    sigCanvasRef.current?.clear()
  }

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setPhoto(file)
      setPreviewUrl(URL.createObjectURL(file))
    }
  }

  // const signatureDataUrl = sigCanvasRef.current?.getTrimmedCanvas().toDataURL("image/png")

  const handleGenerate= () =>{
       const signatureDataUrl = sigCanvasRef.current?.getTrimmedCanvas().toDataURL("image/png")
   
    }


  const next = () => setSection((prev:any) => prev + 1);
const prev = () => setSection((prev:any) => prev - 1);

  return (
    <div className="space-y-6 bg-white dark:bg-zinc-900 p-6 rounded-2xl shadow-md border">
      <h2 className="text-xl font-semibold text-rose-700">Final Details</h2>

      <AgreementSection agreed={agreed} onChange={(val) => setAgreed(!!val)}/>
<span className=" italic text-md  text-rose-700">By signing this form I declare with my mouth that Jesus Christ is the Son of the living God, who died on the cross for my sins and the sins of the world, and that GOD raised Him from the dead on the third day. Romans 10:9-10</span>
      {/* Signature Canvas */}
      <div className="space-y-2">
        <Label>Signature</Label>
        <div className="border rounded-lg overflow-hidden shadow-inner bg-white">
          <SignatureCanvas
            ref={sigCanvasRef}
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

      {/* Place / Area */}
      <div className="space-y-2">
        <Label htmlFor="area">Place / Area</Label>
        <Input
          id="area"
          placeholder="e.g. Johannesburg, Cape Town"
          value={area}
          onChange={(e) => setArea(e.target.value)}
        />
      </div>

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
        <div className="flex justify-between">
                    <Button className="bg-rose-700 hover:bg-rose-800 text-white" type="button" onClick={prev}>Back</Button>
                    
                    <Button className="bg-rose-700 hover:bg-rose-800 text-white" type="submit">Submit</Button>
                  </div>
    </div>
  )
}
