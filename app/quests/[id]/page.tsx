import Link from "next/link";
import {Button} from "@/components/ui/Button";
import React from "react";

export default function Page () {
    return (
        <div className='rounded-lg p-[20px] w-[70%] mx-[auto]'>
            <Link href='/quests' className='hover:opacity-80 transition duration-400'> Вернуться к квестам</Link>
            <div className='border rounded-lg p-[20px] mt-[20px]'>
                <p className='pt-[30px] pb-[20px] text-center text-2xl'>Название квеста</p>

                <div className='flex gap-[20px] py-[20px]'>
                    <p className='py-[5px] px-[15px] bg-[#00FF00] w-max text-[#171D1D] rounded-tl-lg rounded-br-lg text-sm pointer'>Локация: Лоран</p>
                    <p className='py-[5px] px-[15px] w-max text-[#171D1D] rounded-bl-lg rounded-tr-lg text-sm pointer border'>NPC: Старейшина</p>
                </div>
                <p className='w-[80%] overflow-hidden break-all'>Полное описание квеста Полное описание квеста Полное описание квеста Полное описание квеста Полное описание квеста Полное описание квеста Полное описание квеста Полное описание квеста </p>
                <p className='pt-[20px]'>Предыдущий квест:
                    <Link href='/quests/1' className='hover:opacity-80 transition duration-400'> бибибобо</Link>
                </p>
                <p className='py-[20px]'>Диалоги: </p>
                <p className='w-[100%] overflow-hidden break-all'>Награды:</p>
                <li>Блок земли х1</li>
                <li>Блок земли х1</li>
                <li>Блок земли х1</li>
                <li>Блок земли х1</li>
                <div className='flex pt-[50px] gap-[20px]'>
                    <Button linkText='Удалить' className='w-[200px]'></Button>
                    <Button linkText='Обновить' className='w-[200px]'></Button>
                </div>
            </div>
        </div>
    )
}
