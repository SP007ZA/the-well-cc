"use client";

import { Button } from "@/components/ui/button";
import { COUNTRIES } from "@/constants/countries";
import { UpdateProfileAddressDocument, UpdateProfileAddressMutation } from "@/data/gql/graphql";
import { useMutation } from "@apollo/client";
import { useRef, useState } from "react";

type AddressValue = {
  fullAddress: string;
  country?: string;
  postalCode?: string;
};

type MapboxFeature = {
  id: string;
  place_name: string;
};



export default function AddressInput({
  form, setForm, errors, profileID, validateField, setErrors, setSection, input, setInput
}: any) {
 
  const [country, setCountry] = useState( "");
  const [results, setResults] = useState<MapboxFeature[]>([]);
  const [open, setOpen] = useState(false);
  const abortRef = useRef<AbortController | null>(null);
  const [updateAddress, {loading: updateAddressLoading}] = useMutation<UpdateProfileAddressMutation,UpdateProfileAddressMutation>(UpdateProfileAddressDocument)
  const next:any = () => setSection((prev:any) => prev + 1);
const prev:any = () => {setSection((prev:any) => prev - 1);};

const isFormValid =
 input?.trim() &&
  //form.postalCode?.trim() &&
  //form.country?.trim() &&
  !errors.fullAdress &&
  !errors.postalCode &&
  !errors.country 

  
   const handleChange = (field: string, value: string) => {
    //setForm({ ...form, [field]: value });
    setErrors((prev:any) => ({ ...prev, [field]: "" }));

  };

     const handleBlur = (field: string) => {
    const error = validateField(field, form[field as keyof typeof form]);
    setErrors((prev:any) => ({ ...prev, [field]: error }));

   // console.log("Error:", errors);

  };



const handleNext = () => {
  updateAddress({
    //@ts-ignore
    variables:{ where:{profile:{id: profileID}},
     data:{fullAddress: input, country: country, }}}).then((response) => {
    console.log("Address Updated:", response.data);
  }).catch((error) => {
    console.error("Error updating address:", error); 
  } );

   setSection((prev: any) => prev + 1);
}

//console.log("Postal Code", form.postalCode?.trim());
//console.log("Country", form.country?.trim());


  /* ---------------- HELPERS ---------------- */

  function formatAddress(val: string) {
    return val
      .replace(/\s*,\s*/g, ", ")
      .replace(/\s{2,}/g, " ");
  }

  function extractParts(address: string) {
    const parts = address.split(",").map(p => p.trim());
    const country = parts.length >= 2 ? parts[parts.length - 1] : undefined;

    const postalMatch = address.match(/\b[A-Za-z0-9\- ]{3,10}\b(?=,)/g);
    const postalCode = postalMatch?.pop();

    return { country, postalCode };
  }

  /* ---------------- MAPBOX SEARCH ---------------- */

  async function searchMapbox(query: string) {
    if (!query || query.length < 3) {
      setResults([]);
      return;
    }

    abortRef.current?.abort();
    abortRef.current = new AbortController();

    try {
      const res = await fetch(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
          query
        )}.json?autocomplete=true&limit=5&access_token=${process.env.NEXT_PUBLIC_MAPBOX_TOKEN}`,
        { signal: abortRef.current.signal }
      );

      const data = await res.json();
      setResults(data.features || []);
      setOpen(true);
    } catch {
      // silently ignore
    }
  }

  /* ---------------- INPUT HANDLING ---------------- */

  function handleInputChange(val: string) {
    const formatted = formatAddress(val);
    setInput(formatted);
    //setForm({ ...form, fullAddress: input });
    
    searchMapbox(formatted);

    const extracted = extractParts(formatted)
    setForm({ ...form, country:extracted.country || "" });
    setForm({ ...form, postalCode: extracted.postalCode || "" });
   
    //handleChange("country", country || extracted.country || "");
    //handleChange("postalCode", extracted.postalCode || "");
   //  handleChange("fullAddress", input);

    // console.log("Input Change - Country:", country || extracted.country || "");
   //  console.log("Input Change - Postal Code:", extracted.postalCode || "");      
    // console.log("Input Change - Full Address:", input);
    
  }

  function handleSelect(feature: MapboxFeature) {
    const formatted = formatAddress(feature.place_name);
    const extracted = extractParts(formatted);
    setInput(formatted);
    //setForm({ ...form, fullAddress: input });

    setForm({ ...form, country: country || extracted.country || "" });
    setForm({ ...form, postalCode: extracted.postalCode || "" });
    setResults([]);
    setOpen(false);


   //handleChange("fullAddress", formatted);
  // handleChange("country", extracted.country || "");
  //  handleChange("postalCode", extracted.postalCode || ""); 

    // console.log("Input Change - Country:", country || extracted.country || "");
    // console.log("Input Change - Postal Code:", extracted.postalCode || "");      
    // console.log("Input Change - Full Address:", input);
  }

  /* ---------------- UI ---------------- */

  return (
    <div className="relative space-y-2">
       <label className="block font-semibold text-center mb-2">Address</label>
      {/* ADDRESS INPUT */}
      <input
        type="text"
        value={input || ""}
        onChange={(e) => handleInputChange(e.target.value)}
        onFocus={() => input.length >= 3 && setOpen(true)}
        onBlur={() => handleBlur("fullAddress")}
        placeholder="Street, City, Region PostalCode, Country"
        className="
          w-full rounded-xl border border-gray-300 px-4 py-2
          focus:border-rose-500 focus:ring-rose-500 focus:outline-none
        "
      />

      {/* MAPBOX RESULTS */}
      {open && results.length > 0 && (
        <div className="absolute z-20 w-full rounded-xl border bg-white shadow-md">
          {results.map((r) => (
            <button
              key={r.id}
              type="button"
              onClick={() => handleSelect(r)}
              className="
                w-full text-left px-4 py-2 text-sm
                hover:bg-rose-50
              "
            >
              {r.place_name}
            </button>
          ))}
        </div>
      )}

      {/* HELP TEXT */}
      <p className="text-xs text-gray-500">
        Example:  (Street Number),  (Street Name),  (Township/Surburb/City),  (Province)  (Postal Code),  (Country)
      </p>

      {/* COUNTRY FALLBACK */}
      <div>
        <label className="block text-xs font-medium text-gray-600 mb-1">
          Country (if not detected)
        </label>
        <select
          value={country}
          onChange={(e) => {
            setCountry(e.target.value);
            handleChange("country", e.target.value);
          }}
          className="
            w-full rounded-xl border border-gray-300 px-3 py-2 text-sm
            focus:border-rose-500 focus:ring-rose-500 focus:outline-none
          "
        >
          <option value="">Select country</option>
          {COUNTRIES.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>
        <div className="flex justify-between">
              <Button className="bg-rose-700 hover:bg-rose-800 text-white" type="button" onClick={prev}>Back</Button>
            <Button
            className="bg-rose-700 hover:bg-rose-800 text-white disabled:bg-gray-300 disabled:cursor-not-allowed disabled:opacity-70"
            type="button"
           disabled={!isFormValid || updateAddressLoading}
           onClick={handleNext}
                >
                  Next
                </Button>
            </div>
    </div>
    
  );
}
