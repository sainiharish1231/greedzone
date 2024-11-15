"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";
import React, { useState } from "react";

const SignIn = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleGoogleSignIn = async () => {
    setIsSubmitting(true);
    try {
      const response = await signIn("google", { redirect: false });

      if (response?.error) {
        console.error("Error with Google Sign-In:", response.error);
        alert("Google Sign-In failed.");
      } else {
        // Save user data to your backend
        const userData = {
          name: "User Name", // Replace with actual data from session or API
          email: "user@example.com", // Replace with actual data
          password: "auto-generated-password", // Generate or handle appropriately
        };

        await saveUserData(userData);
        alert("Login and data save successful!");
      }
    } catch (error) {
      console.error("Error during sign-in:", error);
      alert("An error occurred during Google Sign-In.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const saveUserData = async (userData: {
    name: string;
    email: string;
    password: string;
  }) => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_HOST_URL}/user/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        }
      );

      if (!res.ok) {
        throw new Error("User data saving failed.");
      }
    } catch (error) {
      console.error("Error saving user data:", error);
      alert("An error occurred while saving user data.");
    }
  };

  return (
    <div className="flex flex-col h-full w-full justify-between">
      <div className="relative h-full aspect-[1]">
        <Image
          className="rounded-md"
          src={"images/login.svg"}
          alt="Login"
          fill
        />
      </div>
      <div className="px-6 h-full">
        <h1 className="text-3xl xs:text-4xl text-white font-medium">
          Log In to Your Account
        </h1>
        <p className="text-sm mt-2 text-gray-400 font-medium">
          Hi, kindly login to continue the battle
        </p>

        <button
          onClick={handleGoogleSignIn}
          className={`rounded-2xl mt-10 w-full text-white p-3 font-medium ${
            isSubmitting ? "bg-[#8e1afc]" : "bg-[#911cff77]"
          }`}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Logging in..." : "Sign in with Google"}
        </button>
      </div>
    </div>
  );
};

export default SignIn;
