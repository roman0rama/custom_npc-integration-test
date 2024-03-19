import Link from "next/link";

export const QuestCard = () => {
    return (
        <Link href='/quests/1'>
            <div className='bg-[#F5F5F7] rounded-lg p-[20px] hover:bg-[#ff634733] relative cursor-pointer transition duration-400'>
                <p className='py-[5px] px-[15px] bg-[#00FF00] w-max text-[#171D1D] rounded-tl-lg rounded-br-lg text-sm pointer absolute top-[5px] left-[5px]'>Лоран</p>
                <p className='py-[5px] px-[15px] w-max text-[#171D1D] rounded-bl-lg rounded-tr-lg text-sm pointer absolute right-[5px] top-[5px] border'>Старейшина</p>
                <p className='pt-[30px] pb-[20px] text-center'>Название квеста</p>
                <p className='w-[100%] overflow-hidden break-all'>ОписаниеОписаниеОписаниеОписаниеОписаниеОписаниеОписаниеОписаниеОписаниеОписаниеОписаниеОписаниеОписание</p>
                <p className='mt-[5px] w-[100%] overflow-hidden break-all'>Блок земли х1</p>
            </div>
        </Link>
    )
}
