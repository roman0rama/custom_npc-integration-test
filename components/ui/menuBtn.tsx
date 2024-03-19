import Link from "next/link";

export const MenuBtn = ({text, link, className} : {text: string, link: string, className : any}) => {
  return (
    <Link
        className={`block text-left pl-[40px] text-[20px] hover:text-[#1D1717] transition duration-500 py-[15px] px-[40px] mt-[5px] hover:bg-[#fff] rounded-r-[15px] ${className}`}
        href={`/${link}`}>
      {text}
    </Link>
  )
}