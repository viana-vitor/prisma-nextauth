import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { redirect } from "next/navigation"

export default async function ServerProtectedPage() {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect("/signin?callbackurl=/protected/server")
  }

  return (
    <div>
      <h1>This is a server side protected page</h1>
      <p>Logged in as: {session.user?.name}</p>
    </div>
  )
}
