"use client"
import { signIn } from "next-auth/react";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FcGoogle } from "react-icons/fc";
import Image from 'next/image';

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});


const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: typeof errors = {};

    if (!email.includes("@")) newErrors.email = "Please enter a valid email.";
    if (password.length < 6) newErrors.password = "Password must be at least 6 characters.";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Placeholder for password login. Replace with real auth if needed.
      console.log("Logging in with", { email, password });
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
        
        <h2 className="text-2xl font-bold text-center mb-6 text-rose-700">Welcome Back</h2>

        {/* Google Login */}
        <Button
          onClick={() => signIn("google", { callbackUrl: "/" })}
          className="w-full flex items-center justify-center gap-2 border mb-6"
          variant="outline"
        >
          <FcGoogle size={22} /> Sign in with Google
        </Button>

        {/* Divider */}
        <div className="flex items-center my-4">
          <div className="flex-grow h-px bg-gray-300"></div>
          <span className="px-4 text-sm text-gray-500">or</span>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>

        {/* Email & Password Login */}
        <form onSubmit={handleLogin} className="space-y-4">
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
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={errors.password ? "border-red-500" : ""}
              required
            />
            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
          </div>

          <Button type="submit" className="w-full bg-rose-700 text-white hover:bg-rose-800">
            Login
          </Button>
        </form>


        <p className="text-sm text-center mt-6">
          Dont have an account? <Link href="/signup" className="text-rose-700 underline">Sign up here</Link>
        </p>
      </div>
    </div>
  );
}
