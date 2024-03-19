'use client'
import React from "react";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/Button";

const CategoryRow = ({id, title}) => {
    return (
        <div className='flex border text-[20px] hover:bg-[#F5F5F7] items-center'>
            <p className='text-center border-r w-[50px]'>{id}</p>
            <p className='w-max py-[5px] px-[20px]'>{title}</p>
        </div>
    )
}

export default function Page () {
    const [role, setRole] = React.useState('')
    return(
        <div>
            <div className='w-max p-[20px]'>
                <p className='py-[40px] text-[24px]'>Роли NPC</p>
                <CategoryRow id={1} title='Торговец'/>
                <CategoryRow id={2} title='Без роли'/>

                <div className='flex gap-[20px] py-[20px]'>
                    <Input type='text' name='category' placeholder='Название роли'/>
                    <Button linkText='Добавить' className='w-[200px]'></Button>
                </div>

                <div className='flex gap-[20px] py-[20px]'>
                    <Input type='number' name='id' placeholder='ID'/>
                    <Button linkText='Удалить' className='w-[200px]'></Button>
                </div>
            </div>
        </div>
    )
}