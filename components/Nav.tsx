import Link from "next/link";


export default function NavItems() {
  return (
    <div className="  text-small border-b   p-2 shadow-sm border-slate-400">
      <div className="  flex justify-center gap-10 mt-10  ">
        <Link href="/assest">Assest</Link>
        <Link href="/assest">Software </Link>
        <Link href="/assest"> About </Link>
      </div>
    </div>
  );
}
