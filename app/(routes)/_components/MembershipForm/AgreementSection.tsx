import { useState } from "react"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

export function AgreementSection({
  agreed,
  onChange,
}: {
  agreed: boolean
  onChange: (value: boolean) => void
}) {
  return (
    <div className="space-y-4 border border-muted rounded-xl p-4 bg-muted/50">
      <h3 className="text-md font-semibold text-rose-700">Agreement</h3>

      <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
        <li>
          <a
            href="/documents/the-well-cc-constitution.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-blue-600 hover:text-blue-800"
          >
            Read The Well CC Constitution
          </a>
        </li>
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
