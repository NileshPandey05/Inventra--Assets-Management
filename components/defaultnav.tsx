"use client";
import React from "react";
import { ModeToggle } from "./ModeToggle";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const { status } = useSession();
  const router = useRouter();

  // Redirect to home if signed in
  React.useEffect(() => {
    if (status === "authenticated") {
      router.push("/");
    }
  }, [status, router]);

  return (
    <nav className="w-full border-t border-b border-neutral-200 dark:border-neutral-800 px-4 py-3 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Logo and Title */}
        <div className="flex items-center gap-3">
          <img
            src="/assest/inventralogo.jpg"
            alt="Inventra Logo"
            className="h-10 w-10 object-cover rounded-full"
          />
          <div className="flex flex-col">
            <h1 className="text-lg md:text-2xl font-bold">Inventra</h1>
            <h2 className="text-xs md:text-sm text-neutral-600 dark:text-neutral-300">
              The Asset Manager!!
            </h2>
          </div>
        </div>

        {/* Right Side: Mode Toggle & Auth Button */}
        <div className="flex items-center gap-4">
          <ModeToggle />
          {status === "authenticated" ? (
            <button
              className="w-20 md:w-28 rounded-lg bg-black px-4 py-2 font-medium text-white transition hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
              onClick={() => signOut({ callbackUrl: "/" })}
            >
              Logout
            </button>
          ) : (
            <button
              className="w-20 md:w-28 rounded-lg bg-black px-4 py-2 font-medium text-white transition hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
              onClick={() => signIn()}
            >
              Signin
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}


