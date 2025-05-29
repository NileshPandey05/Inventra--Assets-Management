// import Link from "next/link";
import "./globals.css";
// import NavItems from "@/components/Nav";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>

        {/* <NavItems/> */}

        {children}
      </body>
    </html>
  );
}

