// app/profile/page.tsx  OR  pages/profile.tsx

import { useSession } from "next-auth/react";
import { SessionProvider, signIn, signOut } from "next-auth/react"

export default function Profile() {
  const { data: session } = useSession();

  if (!session) return <div>Please login</div>;

  return (
    <div>
      <p>User email: {session.user.email}</p>
      <p>User id: {session.user.id}</p> {/* This will now be defined */}
    </div>
  );
}
