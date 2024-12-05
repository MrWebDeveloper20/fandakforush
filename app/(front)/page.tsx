
import Link from "next/link"
import data from "@/lib/data"
import { Metadata } from "next"
import { convertDocToObj } from "@/lib/utils"

export const metadata: Metadata = {
  title: process.env.NEXT_PUBLIC_APP_NAME || 'Next Amazona',
  description:
    process.env.NEXT_PUBLIC_APP_DESC ||
    'Nextjs, Server components, Next auth, daisyui, zustand',
}

export default async function Home() {
 
  
  return <>
      <div className="w-full carousel rounded-box mt-4">
     
      </div>
    </>
}
