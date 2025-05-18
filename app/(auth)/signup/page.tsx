"use client"
import { getProviders, signIn } from "next-auth/react";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FcGoogle } from "react-icons/fc";
import Image from 'next/image';
import { StringDecoder } from "string_decoder";

export default function SignUpPage() {
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState<{ email?: string; password?: string; confirm?: string }>({});

   const handleEmailSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: typeof errors = {};

    if (!email.includes("@")) newErrors.email = "Please enter a valid email.";
    if (password.length < 6) newErrors.password = "Password must be at least 6 characters.";
    if (password !== confirmPassword) newErrors.confirm = "Passwords do not match.";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Proceed with signup or call backend API
      await signIn("email", { email, callbackUrl: "/" });
    }
  };


  return (
    <div className="min-h-screen flex items-center justify-center bg-rose-50 p-6">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">

         <Link href="/" className="flex items-center space-x-2">
        <Image
          src="/logo_well_cc.PNG"
          alt="The Well CC Logo"
          width={80}
          height={80}
          priority
        />
        <div className='flex flex-col items-center'>
          <span className="text-xl font-bold text-gray-700">The Well CC</span>
           <span className="text-md  text-rose-700">CHRISTIAN CLUB | GEN 2:18</span>
        </div>
        
      </Link>
        

        <h2 className="text-2xl font-bold text-center mb-6 text-rose-700">Create Your Account</h2>

        {/* Google Sign In */}
        <Button
          onClick={() => signIn("google", { callbackUrl: "/" })}
          className="w-full flex items-center justify-center gap-2 border mb-6"
          variant="outline"
        >
          <FcGoogle size={22} /> Sign up with Google
        </Button>

        {/* Divider */}
        <div className="flex items-center my-4">
          <div className="flex-grow h-px bg-gray-300"></div>
          <span className="px-4 text-sm text-gray-500">or</span>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>

        {/* Email Sign Up */}
        <form onSubmit={handleEmailSignup} className="space-y-4">
          <div>
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={errors.email ? "border-red-500" : ""}
              required
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>

          <div>
            <Input
              type="password"
              placeholder="Password (min. 6 characters)"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={errors.password ? "border-red-500" : ""}
              required
            />
            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
          </div>

          <div>
            <Input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className={errors.confirm ? "border-red-500" : ""}
              required
            />
            {errors.confirm && <p className="text-red-500 text-xs mt-1">{errors.confirm}</p>}
          </div>

          <Button type="submit" className="w-full bg-rose-700 text-white hover:bg-rose-800">
            Continue with Email
          </Button>
        </form>


        <p className="text-xs text-center text-gray-500 mt-6">
          By signing up, you agree to our <a href="/terms" className="underline">Terms</a> and <a href="/privacy" className="underline">Privacy Policy</a>.
        </p>

        <p className="text-sm text-center mt-4">
          Already have an account? <Link href="/login" className="text-rose-700 underline">Log in here</Link>
        </p>
      </div>
    </div>
  );
}

// Optional: If using getProviders server-side in getServerSideProps
// export async function getServerSideProps() {
//   const providers = await getProviders();
//   return { props: { providers } };
// }
