/* eslint-disable */
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import React, { useState } from "react";

export function AgreementSection({
  agreed,
  onChange,
  isOpen,
  setIsOpen,
}: any) {
  const [modalContentType, setModalContentType] = useState<
    "constitution" | "terms" | null
  >(null);

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

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg max-w-5xl w-full relative overflow-y-auto max-h-[90vh]">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-xl"
            >
              &times;
            </button>

            <h2 className="text-xl font-bold mb-4">
              {modalContentType === "constitution"
                ? "The Well Christian Club Constitution"
                : "Terms and Conditions"}
            </h2>

            {modalContentType === "constitution" && (
              <div className="text-sm text-gray-800 space-y-6 leading-relaxed">
                <p className="text-xs text-gray-500 italic">
                  © Copyright – The Well Christian Club 2026
                </p>

                <h3 className="font-semibold text-rose-700">
                  CONSTITUTION OF THE WELL CHRISTIAN CLUB
                </h3>

                 <section>
          <h2 className="font-semibold text-rose-700">1. Name of the Club</h2>
          <p>1.1 The name of the Club is The Well Christian Club.</p>
        </section>

        <section>
          <h2 className="font-semibold text-rose-700">2. Legal Status</h2>
          <p>
            2.1 The Club is and shall continue to be a distinct and separate legal
            entity with the power to acquire, to hold and to alienate property of
            every description whatsoever and with the capacity to acquire rights
            and obligations and having perpetual succession.
          </p>
          <p>
            2.2 The Club is and shall be a juristic person and can act and be acted
            against in its own name.
          </p>
          <p>
            2.3 The property and funds of the Club vest in the Club as a juristic
            person and no member or office bearers of the Club shall be liable for
            the debts of the Club.
          </p>
          <p>
            2.4 The Club is registered with the CIPC as a private company and, in
            the event of any conflict between this Constitution and the MOI, this
            Constitution shall prevail.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-rose-700">3. Interpretation</h2>
          <p>
            3.1 In this Constitution, unless the context indicates otherwise:
          </p>
          <ul className="list-disc list-inside">
            <li>
              3.1.1 “Club” means The Well Christian Club.
            </li>
            <li>
              3.1.2 “Christian” means a person who believes in GOD, The Father; and who believes in his/her heart and confesses with his/her mouth that Jesus Christ is the Son of God, who dies on the cross for the sins of the world and that God rose Jesus from the death on the third day; and who believes in GOD The Father, GOD The Son, GOD The Holy Spirit as one;
            </li>
            <li>
              3.1.3 expressions in the singular also denote the plural, and vice versa;
            </li>
          </ul>
          <p>
            3.2 Words and phrases denoting natural persons refer also to juristic persons, and vice versa;
          </p>
          <p> 
            3.3 Pronouns of any gender include corresponding pronouns of the other gender; and
          </p>
          <p>
            3.4 The headings shall not be treated as forming part of the Constitution, as such headings are for convenience of reference only.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-rose-700">4. Policy</h2>
              <p>
            4.1 Club shall, in carrying out its objects and in all its activities and functions at all levels observe the principles that:
          </p>
          <ul className="list-disc list-inside">
         
            <li>
              4.1.1 All Club activities and functions and events, etcetera shall be guide by the principles of The Holy Bible and principles for Christian living as set out in The Holy Bible
            </li>
            <li>
              4.1.2 Membership shall conform to The Holy Bible’s doctrine and/or principles pertaining gender and sexuality.
            </li>
            <li>
              4.1.3 The Well is a Christian Club, therefore any person may join as a member, provided he/she is Christian and comply with the requirements of membership as set out herein below.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-semibold text-rose-700">5. Objects</h2>
              <p>
            5.1 The main objects and powers of the Club are and shall be:
          </p>
          <ul className="list-disc list-inside">
          
            <li>5.1.1 To arrange dating, matchmaking, social events for members of the Club;</li>
            <li>5.1.2 To administer, promote, foster, encourage and provide facilities for events;</li>
            <li>5.1.3 To promote, facilitate, administer marriage among single Christians of marital age of maturity;</li>
            <li>5.1.4 To provide spiritual, emotional, and physical support to members who are single parents;</li>
            <li>5.1.5 To hold and arrange single camps;</li>
            <li>5.1.6 To film, photograph, create and produce broadcast television or digital satellite television, podcast, radio programs with content from dating events</li>
          </ul>
        </section>

        <section>
          <h2 className="font-semibold text-rose-700">6. Powers of the Club</h2>
          <p>
            The Club shall have all powers necessary to achieve its objectives,
            including property ownership, investments, banking, borrowing,
            insurance, legal action, and event management.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-rose-700">7. Limitations</h2>
          <p>
            No income or property shall be distributed to members except for
            reasonable remuneration for services rendered.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-rose-700">8. Affiliation</h2>
          <p>
            The Club is not affiliated with any unions but may affiliate with
            Christian bodies as deemed appropriate.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-rose-700">9. Membership</h2>
          <p>
            Membership is open to Christians aged 21 and above and includes:
          </p>
          <ul className="list-disc list-inside">
            <li>Basic Membership</li>
            <li>Premium Membership</li>
            <li>Platinum Membership</li>
            <li>Honorary Membership</li>
          </ul>
        </section>

        <section>
          <h2 className="font-semibold text-rose-700">
            10. Liabilities, Duties and Rights
          </h2>
          <p>
            Members are bound by this Constitution and their liability is limited
            to unpaid subscriptions.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-rose-700">
            11. Termination or Suspension
          </h2>
          <p>
            Membership may be terminated or suspended for non-payment or
            misconduct in accordance with this Constitution.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-rose-700">12. Board of Directors</h2>
          <p>
            The Club is governed by a Board consisting of a Chairperson, Financial
            Director, Chief Information Director, and additional members.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-rose-700">13. Meetings</h2>
          <p>
            General and Board meetings shall be conducted in accordance with
            the MOI and applicable law.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-rose-700">14. Books of Account</h2>
          <p>
            Proper financial records shall be maintained and audited as required.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-rose-700">
            15. Exclusion of Liability and Indemnity
          </h2>
          <p>
            Members and visitors attend events at their own risk and indemnify
            the Club and its officials against any loss or injury.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-rose-700">16. Misconduct</h2>
          <p>
            Misconduct may result in disciplinary action including suspension or
            expulsion.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-rose-700">17. Right of Appeal</h2>
          <p>
            Members have the right to appeal disciplinary decisions to the Board.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-rose-700">18. General</h2>
          <p>
            Copies of this Constitution shall be available to members upon request.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-rose-700">
            19. Amendments
          </h2>
          <p>
            Amendments require a two-thirds majority vote at a duly convened
            meeting.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-rose-700">20. Interpretation</h2>
          <p>
            Final interpretation of this Constitution rests with the Board.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-rose-700">21. Disclaimer</h2>
          <p>
            All events are attended at own risk. The Club accepts no liability
            for loss, damage or injury.
          </p>
        </section>

                <Button
                  onClick={closeModal}
                  className="w-full bg-rose-700 text-white hover:bg-rose-800"
                >
                  ⬅ Go Back
                </Button>
              </div>
            )}

            {modalContentType === "terms" && (
              <div className="text-sm text-gray-800 space-y-4 leading-relaxed">
                {/* YOUR EXISTING TERMS CONTENT REMAINS UNCHANGED */}
                <p>
                  By using The Well Christian Club platform, you agree to the
                  Terms and Conditions, Privacy Policy, and POPIA compliance.
                </p>

                <Button
                  onClick={closeModal}
                  className="w-full bg-rose-700 text-white hover:bg-rose-800"
                >
                  ⬅ Go Back
                </Button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
