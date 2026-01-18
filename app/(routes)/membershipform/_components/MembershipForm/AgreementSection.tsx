/* eslint-disable */
import { Button } from "@/components/ui/button";
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
                <div className="min-h-screen bg-rose-50 px-4 py-10">
      <div className="max-w-5xl mx-auto bg-white p-8 rounded-2xl shadow border border-rose-200">
        <h1 className="text-3xl font-bold text-rose-700 mb-6">The Constitution of The Well Christian Club</h1>

        <div className="text-sm text-gray-800 space-y-8 leading-relaxed">

          <section>
            <h2 className="text-lg font-semibold text-rose-700">1. Name and Legal Status</h2>
            <p>The name of the organization is <strong>The Well Christian Club</strong>. It is a juristic person with legal capacity to acquire rights and obligations, hold property, and be subject to legal proceedings.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-rose-700">2. Vision</h2>
            <p>To bring Christian singles together through safe, structured, and spiritually aligned matchmaking and community-building events.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-rose-700">3. Mission</h2>
            <ul className="list-disc list-inside">
              <li>To connect Christian men and women with the purpose of marriage and fellowship.</li>
              <li>To host monthly dating events, panel discussions, and workshops.</li>
              <li>To produce media that encourages Christian values in dating.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-rose-700">4. Membership</h2>
            <p>Membership is open to Christian men and women aged 21 and above. Membership tiers include:</p>
            <ul className="list-disc list-inside">
              <li>Basic Membership</li>
              <li>Premium Membership</li>
              <li>Platinum Membership</li>
              <li>Honorary Membership</li>
            </ul>
            <p>Members must uphold Christian values and abide by the constitution of the club.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-rose-700">5. Governance</h2>
            <p>The club is governed by a Board of Directors consisting of the Chairperson (lifetime appointment) and elected members, including a Financial Director and Chief Information Director. The Board oversees operations, finances, and member discipline.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-rose-700">6. Disciplinary Procedure</h2>
            <p>Members violating the code of conduct or Christian principles may be suspended or expelled after a fair hearing conducted by the Board.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-rose-700">7. Finances</h2>
            <p>All funds are to be used solely for the activities of the Club. The Board shall appoint a Financial Director to manage the finances and ensure transparent reporting. The Club is a non-profit and does not distribute profits to members.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-rose-700">8. Amendment of the Constitution</h2>
            <p>The constitution may only be amended by a two-thirds majority vote of members present at a general meeting. Members must be given 30 days’ notice of proposed amendments.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-rose-700">9. Dissolution</h2>
            <p>Upon dissolution, any remaining assets shall be transferred to a Christian charitable organization approved by the Board and members.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-rose-700">10. Indemnity</h2>
            <p>The Club, its leadership, and its Board shall not be held liable for any injury, loss, or damage arising from participation in Club events or activities. Participation is at one's own risk.</p>
          </section>

          <section className="text-gray-600 italic">
            <p>Signed in Braamfontein, Johannesburg — 2025</p>
            <p>Chairperson: Lindie Lankalebalelo</p>
          </section>

           <Button   onClick={closeModal} type="submit" className="w-full bg-rose-700 text-white hover:bg-rose-800">
          ⬅ Go Back
          </Button>

        </div>
      </div>
    </div>
              ) : (
               <div className="min-h-screen bg-rose-50 px-4 py-10">
      <div className="max-w-5xl mx-auto bg-white p-8 rounded-2xl shadow border border-rose-200">
        <h1 className="text-3xl font-bold text-rose-700 mb-6">Terms of Service</h1>

        <div className="text-sm text-gray-800 space-y-8 leading-relaxed">

          <section>
            <h2 className="text-lg font-semibold text-rose-700">1. Acceptance of Terms</h2>
            <p>By accessing or using The Well Christian Club platform, you agree to be bound by these Terms of Service, our Privacy Policy, and any additional rules and guidelines we post. If you do not agree, please do not use our services.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-rose-700">2. Eligibility</h2>
            <p>Our platform is intended for Christian individuals who are 21 years or older. By using the service, you represent that you meet this age requirement and are legally capable of forming a binding agreement.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-rose-700">3. User Responsibilities</h2>
            <ul className="list-disc list-inside">
              <li>You agree to provide accurate and truthful information in your profile.</li>
              <li>You are solely responsible for your interactions with other users.</li>
              <li>You will not use the platform for any unlawful, harassing, or offensive behavior.</li>
              <li>You agree to uphold Christian values and conduct in your interactions.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-rose-700">4. Membership and Payments</h2>
            <p>Some services may require a paid membership. Fees are non-refundable unless otherwise stated. Memberships are subject to change and may include access to events, matchmaking features, or other services.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-rose-700">5. Privacy and Consent</h2>
            <p>By using our service, you consent to the collection, use, and sharing of your personal data in accordance with our <a href="/privacy" className="text-rose-600 underline">Privacy Policy</a> and the South African POPIA regulations.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-rose-700">6. Termination</h2>
            <p>We reserve the right to suspend or terminate your account at any time, for any reason, including violation of these terms or inappropriate conduct. You may also deactivate your account at any time through your profile settings.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-rose-700">7. Disclaimers</h2>
            <p>The Well Christian Club does not guarantee relationship outcomes or the conduct of other users. Use of the platform is at your own risk. We provide the service “as is” and disclaim all warranties to the fullest extent permitted by law.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-rose-700">8. Limitation of Liability</h2>
            <p>We are not liable for any damages arising from your use of the platform, including emotional distress, financial loss, or personal injury resulting from interactions with other users.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-rose-700">9. Changes to Terms</h2>
            <p>We may update these Terms of Service from time to time. Continued use of the service after changes are posted constitutes your acceptance of the revised terms.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-rose-700">10. Contact Us</h2>
            <p>If you have any questions about these Terms, please contact us at:</p>
            <p className="text-gray-600">
              The Well Christian Club<br />
             4th Floor TBE, 96 Rivonia Road,<br />
              Sandton, 2196<br />
              Email: admin@thewellcc.co.za
            </p>
          </section>
          <Button   onClick={closeModal} type="submit" className="w-full bg-rose-700 text-white hover:bg-rose-800">
          ⬅ Go Back
          </Button>

        </div>
      </div>
    </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
