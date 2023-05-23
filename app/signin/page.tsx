"use client"
import { signIn } from "next-auth/react"
import { useSearchParams } from "next/navigation"

export default function SignIn() {
  const searchParams = useSearchParams()
  const callbackUrl = searchParams.get("callbackurl")

  return (
    <div>
      <button onClick={() => signIn("google", { callbackUrl: callbackUrl })}>
        Signin
      </button>
    </div>
  )
}
