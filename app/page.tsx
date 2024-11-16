"use client";

import { useSession, signOut } from "next-auth/react";
import Image from "next/image";
import { redirect, useRouter } from "next/navigation";
import { useEffect } from "react";

import SignIn from "../components/sign";
import Home from "./home/page";
import Profile from "./profile/page";

export default function Mainpage() {
  const { data: session, status } = useSession();
  if (!session && status !== "loading") {
  }

  if (session) redirect("profile");

  return <SignIn />;
}
