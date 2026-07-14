"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; // সফল লগইনের পর পেজ ঘোরানোর জন্য (ঐচ্ছিক)
import { Card, Button, Link, TextField, Label, InputGroup, Input } from "@heroui/react";
import { Eye, EyeSlash, At, ShieldKeyhole } from "@gravity-ui/icons";
import { logInWithEmail } from "@/lib/auth-service";

// 🔥 পরিবর্তন: আমরা '../lib/auth-service' থেকে আমাদের তৈরি করা ফায়ারবেস ফাংশনটি ইম্পোর্ট করছি
// import { logInWithEmail } from "../lib/auth-service";


export default function SigninPage() {
    const router = useRouter(); // ঐচ্ছিক: রিডাইরেক্টের জন্য

    // Form fields
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // UI States
    const [isVisible, setIsVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const toggleVisibility = () => setIsVisible(!isVisible);

    const handleSignin = async (
  e: React.FormEvent<HTMLFormElement>
) => {
  e.preventDefault();

  setError("");
  setSuccess("");

  // ✅ Email validation
  if (!email.trim()) {
    setError("Email is required");
    return;
  }

  if (!/\S+@\S+\.\S+/.test(email)) {
    setError("Please enter a valid email address");
    return;
  }

  // ✅ Password validation
  if (!password.trim()) {
    setError("Password is required");
    return;
  }

  if (password.length < 8) {
    setError("Password must be at least 8 characters");
    return;
  }

  // Validation pass হলে loading শুরু হবে
  setIsLoading(true);

  try {
    await logInWithEmail(email, password);

    setSuccess("Signed in successfully! Redirecting...");
    setEmail("");
    setPassword("");

    setTimeout(() => {
      router.push("/");
    }, 1000);

  } catch (err) {
    const errorInstance = err as Error;
    setError(errorInstance.message || "Something went wrong during login.");
  } finally {
    setIsLoading(false);
  }
};

    return (
        <div className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-zinc-950 px-4">
            <Card className="w-full max-w-md p-6 shadow-sm border border-zinc-200 dark:border-zinc-800">

                {/* Header Container */}
                <div className="flex flex-col items-center justify-center gap-1 pb-6 border-b border-zinc-100 dark:border-zinc-800 mb-6 text-center">
                    <h1 className="text-2xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">Welcome back</h1>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">Enter your credentials to access your ShopCart account</p>
                </div>

                {/* Form Body */}
                <form onSubmit={handleSignin} className="flex flex-col gap-5">

                    {/* Email Field */}
                    <TextField isRequired name="email" type="email" className="flex flex-col gap-1.5">
                        <Label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Email Address</Label>
                        <InputGroup className="flex items-center gap-2 border border-zinc-200 dark:border-zinc-800 rounded-xl px-3 bg-zinc-50 dark:bg-zinc-900 focus-within:border-primary transition-colors">
                            <At className="text-zinc-400 pointer-events-none"  />
                            <Input
                                placeholder="you@example.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full bg-transparent py-2 text-sm outline-none border-none text-zinc-900 dark:text-zinc-100"
                            />
                        </InputGroup>
                    </TextField>

                    {/* Password Field */}
                    <TextField isRequired name="password" className="flex flex-col gap-1.5">
                        <Label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Password</Label>
                        <InputGroup className="flex items-center gap-2 border border-zinc-200 dark:border-zinc-800 rounded-xl px-3 bg-zinc-50 dark:bg-zinc-900 focus-within:border-primary transition-colors">
                            <ShieldKeyhole className="text-zinc-400 pointer-events-none"  />
                            <Input
                                type={isVisible ? "text" : "password"}
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full bg-transparent py-2 text-sm outline-none border-none text-zinc-900 dark:text-zinc-100"
                            />
                            <button
                                className="focus:outline-none text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 transition"
                                type="button"
                                onClick={toggleVisibility}
                                aria-label="toggle password visibility"
                            >
                                {isVisible ? <EyeSlash className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                            </button>
                        </InputGroup>
                    </TextField>

                    {/* Dynamic Status Badges */}
                    {error && (
                        <div className="p-3.5 text-xs font-medium rounded-xl bg-red-100/60 dark:bg-red-950/50 text-red-700 dark:text-red-400 border border-red-200 dark:border-red-900">
                            <span className="font-semibold">Error:</span> {error}
                        </div>
                    )}

                    {success && (
                        <div className="p-3.5 text-xs font-medium rounded-xl bg-emerald-100/60 dark:bg-emerald-950/50 text-emerald-800 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-900">
                            <span className="font-semibold">Success:</span> {success}
                        </div>
                    )}

                    {/* Action Button */}
                    <Button
                        type="submit"
                        className="w-full bg-blue-600 text-white mt-2 rounded-xl transition hover:bg-blue-700"
                        isDisabled={isLoading}
                    >
                        {isLoading ? "Logging in..." : "Log In"}
                    </Button>

                    {/* Navigation Option */}
                    <div className="text-center pt-4 border-t border-zinc-100 dark:border-zinc-800 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                        New to ShopCart?{" "} {/* 🔥 পরিবর্তন: HireLoop থেকে ShopCart করা হয়েছে */}
                        <Link href="/register" className="font-medium cursor-pointer text-sm text-blue-600 dark:text-blue-400 hover:underline">
                            Create an account
                        </Link>
                    </div>

                </form>
            </Card>
        </div>
    );
}