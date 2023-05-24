"use client"
import { signIn, useSession } from "next-auth/react"
import { redirect, useSearchParams } from "next/navigation"

export default function SignIn() {
  const { data: session } = useSession()
  const searchParams = useSearchParams()
  const callbackUrl = searchParams.get("callbackurl")

  if (session) {
    redirect("/")
  }

  return (
    <div>
      <button
        onClick={() =>
          signIn("google", {
            callbackUrl: callbackUrl ? callbackUrl : "/",
          })
        }
      >
        Signin
      </button>
    </div>
  )
}
