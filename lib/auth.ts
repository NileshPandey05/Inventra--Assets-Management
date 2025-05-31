import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "@/utils";
import  bcrypt from "bcryptjs"
// import Signup from "@/app/signup/page";

export const authOption = {
    providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID!,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      }),

      
      CredentialsProvider({
        name: "Credentials",
        credentials: {
          email: { label: "Email", type: "text" },
          password: { label: "Password", type: "password" },
        },
        async authorize(credentials: any) {
          const existingUser = await prisma.user.findFirst({
            where: { email: credentials.email },
          });
  
          if (existingUser && typeof existingUser.password === "string") {
            const isPasswordValid = await bcrypt.compare(
              credentials.password,
              existingUser.password
            );
            if (isPasswordValid) {
              return { id: existingUser.id, email: existingUser.email };
            }
            return null;
          }
  
          // Create user if not exists
          const hashedPassword = await bcrypt.hash(credentials.password, 10);
          try {
            const newUser = await prisma.user.create({
              data: {
                email: credentials.email,
                password: hashedPassword,
              },
            });
            return { id: newUser.id, email: newUser.email };
          } catch (err) {
            console.error("User creation failed:", err);
            return null;
          }
        },
      }),
    ],
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
      signIn: "/signin", 
      signUp:"/signup"
      
    },
    callbacks: {
      async session({ session, token }: any) {
        session.user.id = token.sub;
        return session;
      },
    },
  };
  