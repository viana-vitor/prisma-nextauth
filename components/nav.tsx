import Link from "next/link"

export default function Nav() {
  return (
    <nav>
      <ul className='flex gap-4'>
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/protected/server"}>Protected (server)</Link>
        </li>
        <li>
          <Link href={"/protected/client"}>Protected (client)</Link>
        </li>
      </ul>
    </nav>
  )
}
