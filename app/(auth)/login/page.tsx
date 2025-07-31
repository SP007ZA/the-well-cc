/* eslint-disable */
"use client"
import { signIn } from "next-auth/react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FcGoogle } from "react-icons/fc";
import { Eye, EyeOff } from "lucide-react";
import Image from 'next/image';
import { useMutation } from "@apollo/client";
import { Signin_MutationDocument, Signin_MutationMutation, Signin_MutationMutationVariables, SignOutDocument, SignOutMutation, SignOutMutationVariables } from "@/data/gql/graphql";
import LoadingSpinner from "@/app/_components/LoadingSpinner";
import { useUser } from "@/lib/utils";



export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{ email?: string; password?: string, loginError?: string }>({});
    // Add state for toggling
const [showPassword, setShowPassword] = useState(false);
const [showConfirmPassword, setShowConfirmPassword] = useState(false);
 const [loading, setLoading] = useState(false)
 const user = useUser()
  const [logIn] = useMutation<Signin_MutationMutation, Signin_MutationMutationVariables>(Signin_MutationDocument)

const [signOut] = useMutation<SignOutMutation, SignOutMutationVariables>(SignOutDocument)


  useEffect(()=>{

      if(!user?.isEmailVerified)    {
          window.location.href = '/activate/invalidlogin'
      } else if(user?.isMemberForm === false) {
          window.location.href = '/membershipform'
      }  else if(user?.isProfile === false) {
          window.location.href = `/complete-profile/${user?.id}`
      
      } else if(true) {
          window.location.href = '/dashboard'
      }
      
  },[user?.id])
      
const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: typeof errors = {};

    if (!email.includes("@")) newErrors.email = "Please enter a valid email.";
    if (password.length < 6) newErrors.password = "Password must be at least 6 characters.";

    setErrors(newErrors);

    if (Object.keys(newErrors)?.length === 0) {
      // Placeholder for password login. Replace with real auth if needed.


           await logIn({variables: {email, password}}).then(({data}) => {

           
            //@ts-ignore
        if(data?.authenticateUserWithPassword.item?.__typename === "User") {
               //@ts-ignore
             if(data?.authenticateUserWithPassword.item.isEmailVerified !== true) {
                setLoading(true)
                 
                 setTimeout(() =>{   
                   return signOut().then(() => {return  window.location.href = '/activate/invalidlogin'}).catch(() => {return  window.location.href = '/activate/invalidlogin'})
                 },5000)
             }
               //@ts-ignore
           else  if(data?.authenticateUserWithPassword.item.isProfile === true )   {
                  setLoading(true)
                 setTimeout(() =>{   
                   return  window.location.href = '/dashboard'
                 },5000)
                  
                  //@ts-ignore
             }  else if(data?.authenticateUserWithPassword.item.isMemberForm === false) {
           
                 setLoading(true)
                 setTimeout(() =>{
                    return  window.location.href = '/membershipform'
                 },5000)
             }
              //@ts-ignore
             else if(data?.authenticateUserWithPassword?.item?.isProfile === false) { 
                  
              
               setLoading(true)
                 setTimeout(() =>{
                    //@ts-ignore
                    return  window.location.href =`/complete-profile/${data?.authenticateUserWithPassword.item.id }`
                 },5000)  
               
          
          } 
        } 
     
          if(data?.authenticateUserWithPassword?.__typename === "UserAuthenticationWithPasswordFailure") {
                
               
                 const errMesage =  data?.authenticateUserWithPassword?.message
                 newErrors.loginError = `${errMesage} Please enter correct email and password, Click forgot-password to reset your password or go-to Sign-UP` 
          }
      }).catch(err =>  console.log(err)) 












    }
  };
if(loading) return <LoadingSpinner message={"Please wait while we redirect you..."}/>
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
           <span className="text-md  text-rose-700">CHRISTIAN CLUB | GENESIS 2:18</span>
        </div>
        
      </Link>
        
        <h2 className="text-2xl font-bold text-center mb-6 text-rose-700">Welcome Back</h2>
        {/* Google Login */}
       {false &&  
        <Button
          onClick={() => signIn("google", { callbackUrl: "/" })}
          className="w-full flex items-center justify-center gap-2 border mb-6"
          variant="outline"
        >
          <FcGoogle size={22} /> Sign in with Google
        </Button>}

        {/* Divider */}
     {false &&    <div className="flex items-center my-4">
          <div className="flex-grow h-px bg-gray-300"></div>
          <span className="px-4 text-sm text-gray-500">or</span>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>}

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

         <div className="relative">
  <Input
    type={showPassword ? "text" : "password"}
    placeholder="Enter your password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    className={errors.password ? "border-red-500 pr-10" : "pr-10"}
    required
  />
  <button
    type="button"
    onClick={() => setShowPassword(!showPassword)}
    className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center text-gray-500"
    tabIndex={-1}
  >
    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
  </button>
</div>

{errors.password && (
  <p className="text-red-500 text-xs mt-1">{errors.password}</p>
)}

{errors.loginError && (
  <p className="text-red-500 text-xs mt-1">{errors.loginError}</p>
)}


          <Button  type="submit" className="w-full bg-rose-700 text-white hover:bg-rose-800">
           {loading ? "Please Wait..." : "Login"}
          </Button>
        </form>


        <p className="text-sm text-center mt-6">
          Dont have an account? <Link href="/signup" className="text-rose-700 underline">Sign up here</Link>
        </p>
        <p className="text-sm text-center mt-6">
          Forgot your password? <Link href="/forgot-password" className="text-rose-700 underline">Click here</Link>
        </p>
      </div>
    </div>
  );
}
