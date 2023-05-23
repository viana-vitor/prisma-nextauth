"use client"
import { signOut, useSession } from "next-auth/react"
import Image from "next/image"

export default function Home() {
  const { data: session } = useSession()
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      Home page
      {session ? <button onClick={() => signOut()}>Sign out</button> : null}
    </main>
  )
}
