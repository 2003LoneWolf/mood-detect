import { auth } from "@clerk/nextjs";
import Link from "next/link";

export default async function Home() {
  const {userId} = await auth()

  let href =(await auth()).userId ? '/journal':'/new-user'

  return (
    <div className="w-screen h-screen flex justify-center items-center text-white bg-black">
      
      <div className="w-full max-w-[600px] mx-auto">
        <h1 className="text-6xl mb-4">The best journal app</h1>
        <p className="text-2xl mb-4 text-white/60">This is the best app for 
        tracking your mood through out your life.
          All your have to do is be honest.
        </p>
        <div>
          <Link href={href}>
          <button className="bg-blue-600 px-4 py-2 text-xl rounded-lg">get started</button>
          </Link>
        </div>
      </div>
    </div>
  )
}
