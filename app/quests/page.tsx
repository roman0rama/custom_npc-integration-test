'use client'
import {QuestCard} from "@/components/ui/QuestCard";
import React from "react";

export default function Page () {
    const [page, setPage] = React.useState('1')
    return(
        <div className='w-[100%] p-[20px]'>
            <p className='py-[40px] text-[24px] w-max mx-[auto]'>Квесты</p>
            <div className='grid grid-cols-5 gap-[20px]'>
                {
                    [...Array(12)].map((index ) => (
                        <QuestCard/>
                    ))
                }
            </div>
            <ul className="list-none mt-[40px]">
                {
                    [...Array(5)].map((_, index) => (
                        <li
                            className={`inline-block py-[10px] px-[17px] ${page == index ? 'bg-[#FF6600] text-[#fff]' : 'border-[#FF6600] bg-[#fff]'} text-[18px] rounded-lg mr-[15px] border transition duration-400 hover:bg-[#FF6600] hover:text-[#fff] cursor-pointer`}
                            onClick={() => {setPage(index)}}>
                            {index+1}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}