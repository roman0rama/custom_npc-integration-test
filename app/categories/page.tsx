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
    const [category, setCategory] = React.useState('')
    return(
        <div>
            <div className='w-max p-[20px]'>
                <p className='py-[40px] text-[24px]'>Категории</p>
                <CategoryRow id={1} title='Сюжетный квест'/>
                <CategoryRow id={2} title='Квест гильдии'/>
                <CategoryRow id={3} title='Доп. квест'/>

                <div className='flex gap-[20px] py-[20px]'>
                    <Input type='text' name='category' placeholder='Название категории'/>
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