import React from "react";
import Link from "next/link";

export const Button = ({link, linkText, className} : any) => {
    return(
        <Link
            className={`flex items-center justify-center py-[10px] px-[20px] border rounded-lg border-[#FF6600] transition duration-400 hover:bg-[#FF6600] hover:text-white ${className}`}
            href={`/${link}`}>
            {linkText}
        </Link>
    )
}