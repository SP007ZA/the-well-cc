/* eslint-disable */
"use client"
import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from 'next/image';
import { useMutation } from "@apollo/client";
import { CreateUserDocument, CreateUserMutation, CreateUserMutationVariables } from "@/data/gql/graphql";
import { Eye, EyeOff, CheckCircle } from "lucide-react";
import LoadingSpinner from "@/app/_components/LoadingSpinner";
import { useUser } from "@/lib/utils";

export default function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  // Add state for toggling
const [showPassword, setShowPassword] = useState(false);
const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const user = useUser();
  const [showPasswordRules, setShowPasswordRules] = useState(false);

  const [errors, setErrors] = useState<{ email?: string; password?: string; confirm?: string; userName?: string }>({});
  const [signUp] = useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument);
  const [loading, setLoading] = useState(false);
  const [wait, setWait] = useState(false)
  const [emailSent, setEmailSent] = useState(false);



  const validatePassword = (pwd: string) => {
    return {
      length: pwd.length >= 12,
      upper: /[A-Z]/.test(pwd),
      lower: /[a-z]/.test(pwd),
      number: /[0-9]/.test(pwd),
    };
  };

  const handleEmailSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: typeof errors = {};

    const pwdValid = validatePassword(password);

    if (!email.includes("@")) newErrors.email = "Please enter a valid email.";
    if (userName.length < 2) newErrors.userName = "User name must be more than two characters";
    if (!pwdValid.length || !pwdValid.upper || !pwdValid.lower || !pwdValid.number) {
      newErrors.password = "Password must meet all the requirements.";
    }
    if (password !== confirmPassword) newErrors.confirm = "Passwords do not match.";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setWait(true);
      await signUp({
        variables: {
          data: { userName: userName, email: email, password: password }
        }
      }).then(() => {
        setLoading(true);
        setTimeout(() => {
          setEmailSent(true);
          setLoading(false);
        }, 5000);
      }).catch(err => {
        setWait(false);
        console.log(err.message);
        if (err.message.includes("email")) newErrors.email = 'Email already registered';
        if (err.message.includes("userName")) newErrors.userName = 'User name already exists';
        setErrors({ ...newErrors });
      });
    }
  };

  const pwdRules = validatePassword(password);

  if (loading) return <LoadingSpinner message={"You have successfully signed up!"} />;

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

        {!emailSent ? (
          <>
            <h2 className="text-2xl font-bold text-center mb-6 text-rose-700">Create Your Account</h2>

            <form onSubmit={handleEmailSignup} className="space-y-4">
              <div>
                <Input
                  type="text"
                  placeholder="Enter your user name"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  className={errors.userName ? "border-red-500" : ""}
                  required
                />
                {errors.userName && <p className="text-red-500 text-xs mt-1">{errors.userName}</p>}
              </div>

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
    placeholder="Password"
    value={password}
    onFocus={() => setShowPasswordRules(true)}
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

{/* ✅ Put these OUTSIDE of the relative container */}
{errors.password && (
  <p className="text-red-500 text-xs mt-1">{errors.password}</p>
)}

{showPasswordRules && (
  <ul className="text-xs mt-2 text-gray-600 list-disc pl-5">
    <li className={pwdRules.length ? "text-green-600" : "text-red-500"}>
      At least 12 characters
    </li>
    <li className={pwdRules.upper ? "text-green-600" : "text-red-500"}>
      At least one uppercase letter
    </li>
    <li className={pwdRules.lower ? "text-green-600" : "text-red-500"}>
      At least one lowercase letter
    </li>
    <li className={pwdRules.number ? "text-green-600" : "text-red-500"}>
      At least one number
    </li>
  </ul>
)}



<div className="relative">
  <Input
    type={showConfirmPassword ? "text" : "password"}
    placeholder="Confirm Password"
    value={confirmPassword}
    onChange={(e) => setConfirmPassword(e.target.value)}
    className={errors.confirm ? "border-red-500 pr-10" : "pr-10"}
    required
  />
  <button
    type="button"
    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
    className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center text-gray-500"
    tabIndex={-1}
  >
    {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
  </button>
</div>

{/* ✅ OUTSIDE of the relative div! */}
{password && confirmPassword && password === confirmPassword && (
  <div className="flex items-center gap-1 text-green-600 text-sm mt-1">
    <CheckCircle size={16} /> Passwords match
  </div>
)}




              <Button type="submit" disabled={wait} className="w-full bg-rose-700 text-white hover:bg-rose-800">
                {wait ? "Please Wait..." : "Sign Up"}
              </Button>
            </form>

            <p className="text-xs text-center text-gray-500 mt-6">
              By signing up, you agree to our <a href="/terms" className="underline">Terms</a>.
            </p>

            <p className="text-sm text-center mt-4">
              Already have an account? <Link href="/login" className="text-rose-700 underline">Log in here</Link>
            </p>
          </>
        ) : (
          <div className="mt-6 bg-green-100 border border-green-300 text-green-700 px-4 py-3 rounded-lg">
            ✅ An email has been sent to <strong>{email}</strong>. Please click the activation link to verify your account.
          </div>
        )}
      </div>
    </div>
  );
}
