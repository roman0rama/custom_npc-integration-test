'use client'
import React from "react"
import head from '@/public/download.jpeg'
import Image from "next/image";
import {Button} from "@/components/ui/Button";
import DifferentLength from "@/components/Chart";
import {PaymentButton} from "@/components/ui/paymentButton";

const InfoBlock = ({text, count, link, linkText} : any) => {
    return(
        <div className='grid grid-cols-2 mt-[20px] text-[20px] items-center w-[100%] gap-[30px]'>
            <p>{text}: {count}</p>
            <Button link={link} linkText={linkText}/>
        </div>
    )
}


export default function Home() {
  const [page, setPage] = React.useState('home')
  return (
    <div className='p-[20px]'>
      <div
          className='mx-[auto] rounded-lg h-[500px] overflow-hidden'>
          <Image
              style={{objectFit: "contain"}}
              placeholder="blur"
              src={head}/>
      </div>
        <p className='mt-[20px] text-[20px] text-center w-[80%] border-b mx-[auto] pb-[20px]'>Общая аналитика:</p>

        <div className='flex'>
            <div>
                <div className='flex mt-[20px] text-[20px] items-center gap-3'>
                    Подключение к базе данных стабильно
                    <div className='w-[10px] h-[10px] rounded-full bg-[#00FF00] pulse'></div>
                </div>
                <InfoBlock text='Общее количество квестов' link='quests' linkText='Перейти к квестам' count={0}/>
                <InfoBlock text='Общее количество NPC' link='npc' linkText='Перейти к NPC' count={0}/>
                <InfoBlock text='Общее количество локаций' link='locations' linkText='Перейти к локациям' count={0}/>
                <InfoBlock text='Общее количество ролей' link='roles' linkText='Перейти к ролям' count={0}/>
                <InfoBlock text='Общее количество категорий' link='categories' linkText='Перейти к категориям' count={0}/>
            </div>

            <div className='w-[50%] mx-[auto] mt-[20px] mb-[40px] flex flex-col '>
                <p className='pb-[20px]'>Записей добавлено за последний месяц:</p>
                <DifferentLength className='w-[300px]'/>
                <PaymentButton text='Экспорт настроек' action={() => {
                    alert(new Date().getDate())
                }}/>
            </div>
        </div>
    </div>
  )
}
