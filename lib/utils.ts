/* eslint-disable */
import { GetUserAuthDocument, GetUserAuthQuery, GetUserAuthQueryVariables } from "@/data/gql/graphql";
import { useQuery } from "@apollo/client";
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

const crypto = require("crypto");

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}



export const generateSignature = (data, passPhrase = null) => {
  // Create parameter string
  let pfOutput = "";
  for (let key in data) {
    if(data.hasOwnProperty(key)){
      if (data[key] !== "") {
        pfOutput +=`${key}=${encodeURIComponent(data[key]?.trim()).replace(/%20/g, "+")}&`
      }
    }
  }

  // Remove last ampersand
  let getString = pfOutput.slice(0, -1);
  if (passPhrase !== null) {
    getString +=`&passphrase=${encodeURIComponent(passPhrase.trim()).replace(/%20/g, "+")}`;
  }

  return crypto.createHash("md5").update(getString).digest("hex");
};

/*export function base64ToFile(base64String, filename) {
  const [meta, base64Data] = base64String?.split(',');
  const mimeMatch = meta.match(/data:(.*);base64/);
  const mime = mimeMatch ? mimeMatch[1] : 'application/octet-stream';

  const binary = atob(base64Data);
  const byteArray = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) {
    byteArray[i] = binary.charCodeAt(i);
  }

  const file = new File([byteArray], filename, {
    type: mime,
    lastModified: Date.now(), // sets the timestamp
  });

  return file;
} */

export function base64ToFile(base64String, filename) {
  const arr = base64String.split(',');
  const mime = arr[0].match(/:(.*?);/)[1];
  const bstr = atob(arr[1]);
  let n = bstr.length;
  const u8arr = new Uint8Array(n);

  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }

  return new File([u8arr], filename, { type: mime });
}

export function useUser() {
    const { data } = useQuery<GetUserAuthQuery, GetUserAuthQueryVariables>(GetUserAuthDocument)
    return data?.authenticatedItem
}