import Link from "next/link";
import { ModeToggle } from "./ModeToggle";

export default function Navbar() {
  return (
    <nav className="flex w-full items-center justify-between border-t border-b border-neutral-200 px-4 py-4 dark:border-neutral-800">
      <div className=" absolute flex items-center gap-2 ml-5">
        
        <img
          src="/assest/inventralogo.jpg"
          alt="Inventra Logo"
          className=" h-10 object-cover rounded-full   w-10"
        />

        <div className=" flex flex-col ">
          <h1 className="text-base font-bold md:text-2xl">Inventra</h1>
          <h2 className=" text-sm ">The Assest Manager!!</h2>
        </div>
      </div>

      <div className="ml-[900px] mt-1 ">
        {" "}
        <ModeToggle />
      </div>

      <div className=" flex justify-end gap-3">
        <Link href="/signup">
          <button className="w-24 transform rounded-lg bg-black px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 md:w-32 dark:bg-white dark:text-black dark:hover:bg-gray-200">
            Signup
          </button>
        </Link>

        <Link href="/signin">
          <button className="w-24 transform rounded-lg bg-black px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 md:w-32 dark:bg-white dark:text-black dark:hover:bg-gray-200">
            Login
          </button>
        </Link>
      </div>
    </nav>
  );
}


