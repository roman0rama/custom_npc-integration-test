'use client'
import { MenuBtn } from "./ui/menuBtn"
import { usePathname } from "next/navigation";

export const navigation = () => {
    const path = usePathname()
    return (
        <div
            style={{
                boxShadow: "2px 2px 8.9px 0px rgba(0, 0, 0, 0.08)"
            }}
            className="py-[40px] h-[110vh] bg-[#F5F5F7] w-[350px]">
            <div className="text-[18px]flex flex-col gap-10 pr-[20px] justify-between my-[auto]">
                <p className='text-[24px] text-center ml-[20px] px-[10px] py-[20px] mb-[50px] border-b w-max'>
                    <span className='text-green'>Elician</span> | Quest Holder
                </p>
                <MenuBtn text='Главная' link='/' className={path == '/' ? 'bg-[#fff]' : ''}/>
                <MenuBtn text='NPC' link='npc' className={path == '/npc' ? 'bg-[#fff]' : ''}/>
                <MenuBtn text='Квесты' link='quests' className={path == '/quests' ? 'bg-[#fff]' : ''}/>
                <MenuBtn text='Локации' link='locations' className={path == '/locations' ? 'bg-[#fff]' : ''}/>
                <MenuBtn text='Роли NPC' link='roles' className={path == '/roles' ? 'bg-[#fff]' : ''}/>
                <MenuBtn text='Категории' link='categories' className={path == '/categories' ? 'bg-[#fff]' : ''}/>
            </div>
        </div>
    )
}