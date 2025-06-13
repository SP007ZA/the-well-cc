/* eslint-disable */
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import React, { useState } from "react"

export function AgreementSection({
  agreed,
  onChange,
  isOpen,
  setIsOpen,
}: any) {
  const [modalContentType, setModalContentType] = useState<"constitution" | "terms" | null>(null);

  const openModal = (type: "constitution" | "terms") => {
    setModalContentType(type);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setModalContentType(null);
  };

  return (
    <div className="space-y-4 border border-muted rounded-xl p-4 bg-muted/50">
      <h3 className="text-md font-semibold text-rose-700">Agreement</h3>

      <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
        <li>
          <button
            onClick={() => openModal("constitution")}
            className="underline text-blue-600 hover:text-blue-800"
            type="button"
          >
            Read The Well CC Constitution
          </button>
        </li>
        <li>
          <button
            onClick={() => openModal("terms")}
            className="underline text-blue-600 hover:text-blue-800"
            type="button"
          >
            Read Terms and Conditions
          </button>
        </li>
      </ul>

      <div className="flex items-center space-x-2">
        <Checkbox id="agreement" checked={agreed} onCheckedChange={onChange} />
        <Label htmlFor="agreement" className="text-sm">
          I have read and understood the Constitution and Terms and Conditions
        </Label>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg max-w-3xl w-full relative overflow-y-auto max-h-[90vh]">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-xl"
            >
              &times;
            </button>
            <h2 className="text-xl font-bold mb-4">
              {modalContentType === "constitution"
                ? "The Well CC Constitution"
                : "Terms and Conditions"}
            </h2>
            <div className="text-sm space-y-3">
              {modalContentType === "constitution" ? (
                <>
                  <p><strong>1. Name:</strong> The name of the organization shall be The Well Christian Community.</p>
                  <p><strong>2. Purpose:</strong> To foster spiritual growth, community development, and outreach based on Christian values.</p>
                  <p><strong>3. Membership:</strong> Membership is open to all who subscribe to the values and mission of the organization.</p>
                  <p><strong>4. Governance:</strong> The organization shall be governed by an elected board of elders and deacons.</p>
                  <p><strong>5. Meetings:</strong> Regular meetings shall be held monthly with an annual general meeting for all members.</p>
                </>
              ) : (
                <>
                  <p><strong>1. Acceptance:</strong> By using our services, you agree to the following terms and conditions.</p>
                  <p><strong>2. Liability:</strong> The Well CC is not responsible for damages resulting from misuse of services.</p>
                  <p><strong>3. Conduct:</strong> Members must uphold a standard of respectful, Christian conduct in all interactions.</p>
                  <p><strong>4. Termination:</strong> Breach of these terms may result in removal from services or events.</p>
                  <p><strong>5. Updates:</strong> Terms may be updated from time to time with notice provided on the website.</p>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
