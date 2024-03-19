import React from "react";
import Link from "next/link";

export const PaymentButton = ({action, text, className} : any) => {
    return(
        <button
            className={`text-center my-[20px] w-max mr-[40px] py-[10px] px-[20px] border rounded-lg border-[#B801D8] transition duration-400 hover:bg-[#B801D8] hover:text-white ${className}`}
            onClick={action}>
            {text}
        </button>
    )
}