"use client";

import { useSession, signOut } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Profile() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    // Redirect if there is no session and the status is not loading
    if (!session && status !== "loading") {
      router.push("/");
    }
  }, [session, status, router]);

  if (!session) {
    return null; // Return null while redirecting to avoid rendering the content
  }

  return (
    <div className="flex flex-col gap-4 mt-40 h-full  items-center justify-between">
      <div>
        <h1 className="text-md">Welcome, {session.user?.name}</h1>
      </div>
      <div>
        <Image
          height={300}
          width={300}
          src={session.user?.image || ""}
          alt={`${session.user?.name}'s profile picture`}
          style={{ borderRadius: "50%", width: "100px", height: "100px" }}
        />
      </div>
      <div>
        <p>Email: {session.user?.email}</p>
      </div>
      <div>
        <button
          onClick={() => signOut()}
          style={{ padding: "10px 20px", marginTop: "20px" }}
        >
          Logout
        </button>
      </div>
    </div>
  );
}
