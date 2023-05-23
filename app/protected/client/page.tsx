"use client"

import { useSession } from "next-auth/react"
import { redirect } from "next/navigation"

export default function ClientProtectedPage() {
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/signin?callbackurl=/protected/client")
    },
  })

  if (status === "loading") {
    return null
  }

  return (
    <div>
      <h1>This is a protected page</h1>
      <p>Logged in as: {session?.user?.name}</p>
    </div>
  )
}
