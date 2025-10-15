"use client"
import Image from "next/image"
import Link from "next/link"
import { NAV_LINKS } from "@/constants"
import { Buttons } from "@/components/Buttons"
import { useState } from "react"
export const Navbar = () => {
  const [show, setShow]=useState(false)
  return (
    <nav className="flexBetween relative padding-container max-container py-5">
      <Link href="/">
      <Image src="/hilink-logo.svg" alt="logo" width={74} height={29}/>
      </Link>
      <ul className="hidden lg:flex h-full gap-12">
        {NAV_LINKS.map((link) => (
          <li>
          <Link href={link.href} key={link.key} className="regular-16 pb-1.5 transition-all hover:text-green-50 hover:font-bold cursor-pointer flexCenter text-gray-50">
            {link.label}
          </Link></li>
        ))}
      </ul>
        <div className="lg:flexCenter hidden">
          <Buttons type="button" title="Login" icon="/user.svg" variant="btn_dark_green"/>
        </div>
        <Image src="menu.svg"  alt="menu" width={32} height={32} className="lg:hidden inline-block cursor-pointer" onClick={() => setShow(!show)}/>
          {show &&
          <ul className="flex flex-col items-start absolute top-20 left-0 bg-white shadow-md z-20 w-full">
        {NAV_LINKS.map((link) => (
          <li className=" px-8 p-3  w-full flex justify-start">
          <Link href={link.href} key={link.key} className="regular-16 pb-1.5 transition-all hover:text-green-50 hover:font-bold cursor-pointer flexCenter text-gray-50">
            {link.label}
          </Link></li>
        ))}
      </ul>
    }
    </nav>
  ) 
}
