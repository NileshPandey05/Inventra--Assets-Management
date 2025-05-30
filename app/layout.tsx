// import Link from "next/link";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
// import NavItems from "@/components/Nav";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <html lang="en">
      <body>
        
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}

        </ThemeProvider>

        {/* <NavItems/> */}
      </body>
    </html>
  );
}
