import React from 'react'
import { FaBars } from "react-icons/fa";
import Image from 'next/image';
type ButtonProps = {
    type: 'button' | 'submit';
    title: string;
    icon?: string;
    variant: string;
    hover?: string;
    full?:boolean;
}
export const Buttons = ({type, title, icon, variant, hover, full}: ButtonProps) => {
  const hoverClass=hover || ''
  return (
    <button type={type} className={`flexCenter gap-3 rounded-full border  ${variant} ${hoverClass} ${full && 'w-full'}`}>
        {icon && <Image src={icon} alt={title} width={24} height={24}/>}
        <label className="bold-16 whitespace-nowrap cursor-pointer">{title}</label>
    </button>
  )
}
