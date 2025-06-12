/* eslint-disable */
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"


export function AgreementSection({
  agreed,
  onChange,
  isOpen, 
  setIsOpen
}:any) {

  


  return (
    <div className="space-y-4 border border-muted rounded-xl p-4 bg-muted/50">
      <h3 className="text-md font-semibold text-rose-700">Agreement</h3>

      <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
         <li>
        <button
          onClick={() => setIsOpen(true)}
          className="underline text-blue-600 hover:text-blue-800"
        >
          Read The Well CC Constitution
        </button>
      </li>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg max-w-3xl w-full relative">
            <button
              onClick={() => setIsOpen(true)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-xl"
            >
              &times;
            </button>
            <h2 className="text-xl font-bold mb-4">The Well CC Constitution</h2>
           
          </div>
        </div>
      )}
        <li>
          <a
            href="/documents/terms-and-conditions.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-blue-600 hover:text-blue-800"
          >
            Read Terms and Conditions
          </a>
        </li>
      </ul>

      <div className="flex items-center space-x-2">
        <Checkbox id="agreement" checked={agreed} onCheckedChange={onChange} />
        <Label htmlFor="agreement" className="text-sm">
          I have read and understood the Constitution and Terms and Conditions
        </Label>
      </div>
    </div>
  )
}
